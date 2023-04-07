import React, { useState } from "react";
import Accordion from "../components/Accordion";
import Modal from "../components/Modal";
import Autocomplete from "../components/Autocomplete";
import TabGroup from "../components/TabGroup";
import Toggle from "../components/Toggle";
import Select from "../components/Select";
import Dropdown from "../components/Dropdown";

const peopleData = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
];

const FEPlaygroundPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showWord, setShowWord] = useState(false);
  const [personSelected, setPersonSelected] = useState(peopleData[0]);
  const [accordionIdx, setAccordionIdx] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main>
      <div className="mb-4 p-6 text-center text-3xl font-bold">
        <h1 className="inline-block rounded-lg border border-gray-500 py-2 px-4 dark:text-red-400">
          FE Playground
        </h1>
      </div>
      <section className="p-8">
        <div className="flex justify-center">
          <h1 className="mb-4 inline-block border-b-2 border-gray-300 py-1 text-xl font-bold">
            Accordion component
          </h1>
        </div>
        <Accordion
          id={0}
          idx={accordionIdx}
          setIdx={setAccordionIdx}
          title="Mary had a little lamb?"
        >
          <h1 className="rounded-sm bg-teal-100 p-8">Hello</h1>
        </Accordion>
        <Accordion
          id={1}
          idx={accordionIdx}
          setIdx={setAccordionIdx}
          title="And it was really cute?"
        >
          <h1 className="rounded-sm bg-teal-100 p-8">World</h1>
        </Accordion>
      </section>
      <div className="divider" />
      <section className="p-8">
        <div className="flex justify-center">
          <h1 className="mb-4 inline-block border-b-2 border-gray-300 py-1 text-xl font-bold">
            Modal component
          </h1>
        </div>
        <div className="flex justify-center p-6">
          <button
            className="btn-outline btn"
            onClick={() => setIsModalOpen(true)}
          >
            Open modal
          </button>
        </div>
        <Modal
          className="max-w-md"
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
        >
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
          <h1 className="inline-block border-b-2 border-gray-300 py-1 text-xl font-bold">
            Tab group component
          </h1>
        </div>
        <div className="flex justify-center">
          <TabGroup
            tabs={["Tab 1", "Tab 2", "Tab 3", "Tab 69"]}
            activeTab={activeTab}
            setActiveTab={(index: number) => {
              setActiveTab(index);
            }}
          >
            {activeTab == 0 && <h1>Hi</h1>}
            {activeTab == 1 && <h1>My</h1>}
            {activeTab == 2 && <h1>Name</h1>}
            {activeTab == 3 && <h1>Jeff</h1>}
          </TabGroup>
        </div>
      </section>
      <div className="divider" />
      <section className="p-8">
        <div className="flex justify-center">
          <h1 className="inline-block border-b-2 border-gray-300 py-1 text-xl font-bold">
            Toggle component
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 p-8">
          <Toggle isChecked={showWord} setIsChecked={setShowWord} />

          <div className="inline-block h-10">
            <p className="">
              Word of the day:{" "}
              <span className="text- inline-block w-32 rounded bg-orange-200 p-2 text-center font-bold text-black/80">
                {showWord ? "Hello World" : "?????"}
              </span>
            </p>
          </div>
        </div>
      </section>
      <div className="divider" />
      <section className="p-8 pb-52">
        <div className="flex justify-center">
          <h1 className="inline-block border-b-2 border-gray-300 py-1 text-xl font-bold">
            Autocomplete component
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 p-8">
          <Autocomplete
            data={peopleData}
            selected={personSelected}
            setSelected={setPersonSelected}
          />
        </div>
      </section>
      <div className="divider" />
      <section className="p-8 pb-52">
        <div className="flex justify-center">
          <h1 className="inline-block border-b-2 border-gray-300 py-1 text-xl font-bold">
            Select component
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 p-8">
          <Select
            data={peopleData}
            selected={personSelected}
            setSelected={setPersonSelected}
          />
        </div>
      </section>
      <div className="divider" />
      <section className="p-8 pb-52">
        <div className="flex justify-center">
          <h1 className="inline-block border-b-2 border-gray-300 py-1 text-xl font-bold">
            Dropdown component
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 p-8">
          <Dropdown />
        </div>
      </section>
    </main>
  );
};

export default FEPlaygroundPage;
