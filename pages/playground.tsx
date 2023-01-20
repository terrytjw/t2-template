import React, { useState } from "react";
import Accordion from "../components/Accordion";
import Modal from "../components/Modal";
import TabGroup from "../components/TabGroup";
import Toggle from "../components/Toggle";

const PlaygroundPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showWord, setShowWord] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50">
      <h1 className="mb-4 p-6 bg-gray-900 text-center text-3xl text-teal-300 font-bold">
        Playground
      </h1>
      <section className="p-8">
        <div className="flex justify-center">
          <h1 className="inline-block mb-4 py-1 text-xl font-bold border-b-2 border-gray-300">
            Accordion component
          </h1>
        </div>
        <Accordion label="What's the refund policy?">
          If you're unhappy with your purchase for any reason, email us within
          90 days and we'll refund you in full, no questions asked.
        </Accordion>
        <Accordion label="Mary had a little lamb. What's next?">
          Its fleece was white as snow, and everywhere that Mary went, the lamb
          was sure to go.
        </Accordion>
      </section>
      <div className="divider" />
      <section className="p-8">
        <div className="flex justify-center">
          <h1 className="inline-block mb-4 py-1 text-xl font-bold border-b-2 border-gray-300">
            Modal component
          </h1>
        </div>
        <div className="flex justify-center p-6">
          <button
            className="btn btn-outline"
            onClick={() => setIsModalOpen(true)}
          >
            Open modal
          </button>
        </div>
        <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
          <h1 className="text-lg font-medium leading-6 text-gray-900">
            Payment successful
          </h1>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              Your payment has been successfully submitted. We’ve sent you an
              email with all of the details of your order.
            </p>
          </div>

          <div className="mt-4">
            <button
              className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              onClick={() => setIsModalOpen(false)}
            >
              Got it, thanks!
            </button>
          </div>
        </Modal>
      </section>
      <div className="divider" />
      <section className="p-8">
        <div className="flex justify-center">
          <h1 className="inline-block py-1 text-xl font-bold border-b-2 border-gray-300">
            Tab group component
          </h1>
        </div>
        <div className="flex justify-center">
          <TabGroup />
        </div>
      </section>
      <div className="divider" />
      <section className="p-8">
        <div className="flex justify-center">
          <h1 className="inline-block py-1 text-xl font-bold border-b-2 border-gray-300">
            Toggle component
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 p-8">
          <Toggle isChecked={showWord} setIsChecked={setShowWord} />

          <div className="inline-block h-10">
            <p className="">
              Word of the day:{" "}
              <span className="inline-block p-2 w-32 bg-orange-200 text-center font-bold text-black/80 text- rounded">
                {showWord ? "Hello World" : "?????"}
              </span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PlaygroundPage;
