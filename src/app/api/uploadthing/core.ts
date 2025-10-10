import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { PineconeStore } from "@langchain/pinecone";
import { CohereEmbeddings } from "@langchain/cohere";
import { PineconeClient } from "@/lib/pinecone";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";

const f = createUploadthing();

export const ourFileRouter = {
  PDFUploader: f({ pdf: { maxFileSize: "4MB" } })
    .middleware(async ({ req }) => {
      const { getUser } = getKindeServerSession();
      const user = await getUser();

      if (!user || !user.id) {
        throw new Error("Unauthorized");
      }
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      const createdFile = await db.file.create({
        data: {
          key: file.key,
          name: file.name,
          userId: metadata.userId,
          url: `https://utfs.io/f/${file.key}`,
          uploadStatus: "PROCESSING",
        },
      });

      try {
        const response = await fetch(`https://utfs.io/f/${file.key}`);
        if (!response.ok)
          throw new Error(`Fetch failed: ${response.statusText}`);

        const blob = await response.blob();

        const loader = new PDFLoader(blob);
        const pageLevelDocs = await loader.load();

        const pinecone = PineconeClient();
        const pineconeIndex = pinecone.Index("scholar-insight");

        const embeddings = new CohereEmbeddings({
          apiKey: process.env.COHERE_API_KEY,
          model: "embed-multilingual-v3.0",
        });

        const pineconeStore = await PineconeStore.fromDocuments(
          pageLevelDocs,
          embeddings,
          {
            pineconeIndex,
            namespace: createdFile.id,
          }
        );

        await db.file.update({
          data: { uploadStatus: "SUCCESS" },
          where: { id: createdFile.id },
        });
      } catch (err: any) {
        console.error(err);

        await db.file.update({
          data: { uploadStatus: "FAILED" },
          where: { id: createdFile.id },
        });
      }
      return { status: "done" };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
