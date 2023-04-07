import { GetServerSideProps } from "next";
import React, { useState } from "react";
import {
  Prisma,
  Conversation,
  Message,
  MessageSenderEnum,
} from "@prisma/client";
import prisma from "../lib/prisma";
import { ConversationWithMessage, getConversations } from "./api/conversations";
import useSWR from "swr";
import { swrFetcher } from "../utils/swrfetcher";
import Link from "next/link";
import parseISO from "date-fns/parseISO";
import format from "date-fns/format";
import { AiTwotoneMessage } from "react-icons/ai";
import Modal from "../components/Modal";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

// type BEPlaygroundPageProps = {
//   conversations: Prisma.ConversationsSelect[];
// };
const BEPlaygroundPage = (/* { conversations }: BEPlaygroundPageProps */) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedConversationTitle, setSelectedConversationTitle] =
    useState<string>("");
  const [displayMessages, setDisplayMessages] = useState<Message[]>([]);

  const {
    data: conversations,
    error,
    isLoading,
    isValidating,
  } = useSWR<ConversationWithMessage[]>("/api/conversations", swrFetcher);

  const ConversationItem = ({
    conversation,
  }: {
    conversation: ConversationWithMessage;
  }) => {
    const { id, title, userId, createdAt, messages } = conversation;

    const formattedCreatedAt = format(
      parseISO(createdAt.toString()),
      "dd MMM yyyy, h.mma"
    );

    return (
      <div
        className="flex cursor-pointer items-end justify-between rounded bg-gray-300 p-4 font-medium text-gray-700 shadow shadow-gray-500 transition-all duration-500 hover:scale-105 hover:shadow-md hover:shadow-gray-500 "
        onClick={() => {
          setIsModalOpen(true);
          setSelectedConversationTitle(title);
          setDisplayMessages(messages);
        }}
      >
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-gray-500/80">{formattedCreatedAt}</p>
        </div>
        <div className="flex items-center gap-x-1 text-sm text-gray-500/80">
          {messages.length} <AiTwotoneMessage />
        </div>
      </div>
    );
  };

  return (
    <main className="h-screen">
      <div className="mb-4 p-6 text-center text-3xl font-bold">
        <h1 className="inline-block rounded-lg border border-gray-500 py-2 px-4 dark:text-teal-400">
          BE Playground
        </h1>
      </div>
      <p className="text-center">
        If you are on localhost, run{" "}
        <code className="rounded-lg bg-red-200/40 p-1 text-sm text-yellow-500 dark:bg-red-200/10 dark:text-red-400">
          yarn prisma studio
        </code>{" "}
        and go to{" "}
        <code className="rounded-lg bg-yellow-200/40 p-1 text-sm text-yellow-500 dark:bg-yellow-200/10 dark:text-yellow-400">
          http://localhost:5555
        </code>{" "}
        to view data entries.
      </p>

      <section className="mx-auto mt-20 w-80">
        <h2 className="mb-4 text-center text-xl font-semibold">
          Conversations
        </h2>
        <div className="flex min-h-[30rem] flex-col gap-y-2 rounded-lg border border-gray-400/50 p-4">
          {conversations ? (
            conversations.length > 0 ? (
              conversations.map((conversation) => (
                <ConversationItem
                  key={conversation.id}
                  conversation={conversation}
                />
              ))
            ) : (
              <p className="text-center">You have no conversations.</p>
            )
          ) : (
            <p>Loading...</p>
          )}
          <Modal
            className="max-h-[80vh] max-w-md overflow-y-auto"
            isOpen={isModalOpen}
            setIsOpen={setIsModalOpen}
          >
            <h1 className="mb-4 text-center text-lg font-semibold italic leading-6">
              {selectedConversationTitle}
            </h1>
            <div className="over flex flex-col gap-y-4">
              {displayMessages.length > 0 ? (
                displayMessages.map((message) => {
                  const { id, from, text, createdAt } = message;
                  const formattedCreatedAt = format(
                    parseISO(createdAt.toString()),
                    "dd MMM yyyy, h.mma"
                  );

                  return (
                    <div
                      key={id}
                      className={classNames(
                        "rounded p-2",
                        from === MessageSenderEnum.AI
                          ? "bg-blue-300 text-black"
                          : "bg-blue-700 text-white"
                      )}
                    >
                      <div>
                        <p className="font-bold">
                          {from === MessageSenderEnum.AI ? "AI: " : "User: "}
                        </p>
                        <p>{text}</p>
                      </div>
                      <p className="mt-4 text-end text-xs font-medium">
                        {formattedCreatedAt}
                      </p>
                    </div>
                  );
                })
              ) : (
                <p className="text-center text-sm text-gray-400">No messages</p>
              )}
            </div>
          </Modal>
        </div>
      </section>
    </main>
  );
};

export default BEPlaygroundPage;

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const conversations = await getConversations();

//   return {
//     props: { conversations },
//   };
// };
