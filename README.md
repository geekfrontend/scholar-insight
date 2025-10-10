# Scholar Insight

**Intelligent Document Analysis & AI-Powered Chat Platform**

[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.18-38B2AC)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-6.17.0-2D3748)](https://www.prisma.io/)

## Project Description

**Scholar Insight** is an intelligent document analysis platform powered by AI to help users understand, analyze, and interact with document content more effectively.  
It is designed specifically for academic, research, and professional document analysis needs.

**Problems Solved:**

- Difficulty analyzing long and complex documents
- Limited ability to find specific information within documents
- Lack of interactivity during reading and analysis
- Time-consuming process to understand context and relationships within documents

## Workflow Overview

### Core Technologies

- **Frontend:** Next.js 15, React 19, TypeScript, Tailwind CSS
- **AI & Machine Learning:** AI SDK, LangChain, Cohere, Google AI, Groq
- **Database & Vector Search:** Prisma ORM, Pinecone
- **Authentication:** Kinde Auth
- **File Processing:** PDF parsing, UploadThing
- **UI Components:** Radix UI, Framer Motion

### Data Flow

1. **Document Upload** → Users upload PDF files via drag-and-drop interface
2. **Document Processing** → The system processes and splits documents into text chunks
3. **Vector Embedding** → The content is converted into vector embeddings using AI
4. **Storage** → Data is stored in both the database and Pinecone vector store
5. **Interactive Chat** → Users can chat and ask questions about the document
6. **Semantic Search** → The system retrieves relevant context using vector similarity
7. **Response Generation** → AI generates responses based on document context

### Core Logic

- **Document Processing Pipeline:** PDF → Text Extraction → Chunking → Embedding → Storage
- **Chat Engine:** Message History → Context Retrieval → AI Model → Streaming Response
- **Authentication Flow:** Secure login → User session → Document access control

## Running and Using the Project

### Prerequisites

Ensure your system has:

- Node.js 18+
- npm or yarn
- Database (PostgreSQL/MySQL)

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd scholar-insight
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Setup environment variables:**

   ```bash
   cp .env.example .env.local
   ```

   Then edit `.env.local` with your configuration:

   ```env
   # Database
   DATABASE_URL="your-database-url"

   # AI Providers
   COHERE_API_KEY="your-cohere-api-key"
   GOOGLE_GENERATIVE_AI_API_KEY="your-google-ai-api-key"
   GROQ_API_KEY="your-groq-api-key"

   # Vector Database
   PINECONE_API_KEY="your-pinecone-api-key"
   PINECONE_INDEX_NAME="your-index-name"

   # Authentication
   KINDE_CLIENT_ID="your-kinde-client-id"
   KINDE_CLIENT_SECRET="your-kinde-client-secret"
   KINDE_ISSUER_URL="your-kinde-issuer-url"

   # File Upload
   UPLOADTHING_SECRET="your-uploadthing-secret"
   UPLOADTHING_APP_ID="your-uploadthing-app-id"
   ```

4. **Setup database:**

   ```bash
   npx prisma generate
   npx prisma db push
   ```

### Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

### Build for Production

```bash
npm run build
npm start
```

### Usage

1. **Register/Login** via Kinde Auth
2. **Upload a PDF Document** using the provided interface
3. **Wait for Processing** – the system will analyze the document
4. **Start Chatting** – ask questions about the document’s content
5. **Interact** – continue the conversation with follow-up questions

### Useful Commands

```bash
# Development
npm run dev              # Start development server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint

# Database
npx prisma generate      # Generate Prisma client
npx prisma db push       # Push schema to database
npx prisma migrate deploy  # Deploy migrations

# Type checking
npx tsc --noEmit         # Check TypeScript types
```

## Key Features

- 🎯 **Intelligent Document Analysis** – AI-powered document understanding
- 💬 **Interactive Chat** – Conversational interface for document exploration
- 🔍 **Semantic Search** – Vector-based contextual document search
- 📁 **Multiple File Upload** – Supports various document formats
- 🔐 **Authentication** – Secure user management
- 📱 **Responsive Design** – Optimized for desktop and mobile
- 🌙 **Dark Mode** – Light and dark theme support
- 🚀 **Streaming Responses** – Real-time AI answers

## Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Next.js       │    │   tRPC API       │    │   AI Models     │
│   Frontend      │◄──►│   Layer          │◄──►│   (Cohere,      │
└─────────────────┘    └──────────────────┘    │    Google, Groq)│
                                               └─────────────────┘
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Prisma ORM    │    │   Vector DB      │    │   File Storage  │
│   Database      │◄──►│   (Pinecone)     │    │   (UploadThing) │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

## Contribution

Contributions are highly appreciated!  
Feel free to open an issue or submit a pull request for improvements.

## License

This project is licensed under the **MIT License**.

## Support

If you encounter any issues or have questions, please open an issue in this repository.
