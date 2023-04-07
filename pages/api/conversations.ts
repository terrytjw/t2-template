// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Prisma } from "@prisma/client";
import prisma from "../../lib/prisma";
import { serializeJson } from "../../utils/formatJson";

const conversationWithMessage = Prisma.validator<Prisma.ConversationArgs>()({
  include: { messages: true },
});
export type ConversationWithMessage = Prisma.ConversationGetPayload<
  typeof conversationWithMessage
>;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ConversationWithMessage[]>
) {
  const conversations = await getConversations();
  res.status(200).json(conversations);
}

// ********************* Helper functions *********************
export const getConversations = async () => {
  // Fetch data from Prisma
  const conversationsData = await prisma.conversation.findMany({
    include: { messages: true },
  });
  const conversations = serializeJson(conversationsData);

  return conversations;
};
