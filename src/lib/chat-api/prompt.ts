import { UIMessage } from "ai";
import { searchDocumentContext } from "./document-search";
import { getLastUserMessage } from "./messages";

/**
 * System prompt providing the assistant’s behavioral guidelines.
 */
const SYSTEM_PROMPT = `
You are an intelligent document analysis assistant skilled at making informed inferences and analytical assessments based on document content.

When answering questions:
1. **Primary Source:** Rely on the provided document context for accurate and relevant responses.
2. **Secondary Inference:** If information is not explicitly stated, make reasonable inferences based on context (education level, experience, location, industry standards, etc.).
3. **Analytical Thinking:** Connect insights across different document sections to form a cohesive, thoughtful analysis.
4. **Acknowledge Uncertainty:** When inferring or estimating, clearly indicate that these are educated guesses based on available information.
5. **Provide Context:** Explain your reasoning when making inferences (e.g., “Based on their education level and experience with…”).

Examples:
- If asked about salary expectations not listed, estimate using education, experience, location, and industry standards.
- If asked about unlisted skills, infer from projects and experience.
- If asked about career goals, deduce from trajectory and accomplishments.

Always reference specific document sections that support your analysis, and clearly distinguish between explicit facts and inferred insights.
`;

/**
 * Builds the message sequence for the AI chat model, combining:
 * - System prompt (instructions for assistant behavior)
 * - Document context (retrieved via semantic search)
 * - Conversation history
 * - Latest user input
 */
export async function createChatMessages(
  uiMessages: UIMessage[],
  fileId: string
): Promise<UIMessage[]> {
  const messages: UIMessage[] = [];

  // Add system prompt
  messages.push({
    id: "system-message",
    role: "system",
    parts: [{ type: "text", text: SYSTEM_PROMPT }],
  });

  // Retrieve and attach document context related to the user's latest message
  const lastUserMessage = getLastUserMessage(uiMessages);
  if (lastUserMessage) {
    const documentContext = await searchDocumentContext(
      lastUserMessage,
      fileId
    );
    messages.push(documentContext);
  }

  // Include conversation history (excluding the latest message)
  const history = uiMessages.slice(0, -1);
  messages.push(...history);

  // Append the latest user message at the end
  const lastMessage = uiMessages[uiMessages.length - 1];
  if (lastMessage) {
    messages.push(lastMessage);
  }

  return messages;
}

export default createChatMessages;
