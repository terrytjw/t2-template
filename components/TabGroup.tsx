import React from "react";
import { Tab } from "@headlessui/react";
import { motion } from "framer-motion";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const animatedVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

type TabGroupProps = {
  tabs: string[];
  activeTab: number;
  setActiveTab: (index: number) => void;
  children?: React.ReactNode;
};
const TabGroup = ({
  tabs,
  activeTab,
  setActiveTab,
  children,
}: TabGroupProps) => {
  return (
    <div className="w-full max-w-5xl px-2 py-16 sm:px-0">
      <Tab.Group selectedIndex={activeTab} onChange={setActiveTab}>
        <Tab.List className="flex space-x-1 rounded-xl bg-gray-200 p-1">
          {tabs.map((tab) => (
            <Tab
              key={tab}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                  "focus:outline-none",
                  selected
                    ? "bg-gray-600 text-white shadow"
                    : "text-gray-400 hover:text-gray-500",
                  "transition-all"
                )
              }
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {tabs.map((tab, index) => (
            <Tab.Panel
              key={index}
              className={classNames(
                "rounded-xl bg-gray-200 p-8",
                "focus:outline-none"
              )}
            >
              <motion.div
                variants={animatedVariant}
                initial="hidden"
                animate="visible"
                className="dark:text-black"
              >
                {children}
              </motion.div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default TabGroup;
