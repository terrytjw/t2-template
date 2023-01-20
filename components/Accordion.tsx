import React, { useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type AccordionProps = {
  label: string;
  children: React.ReactNode;
};
const Accordion = ({ label, children }: AccordionProps) => {
  const [parent, enableAnimations] = useAutoAnimate<any>(/* optional config */);

  return (
    <div className="w-full p-0.5">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-gray-100 p-0.5">
        <Disclosure>
          {({ open }) => (
            <div ref={parent}>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-teal-100 px-4 py-2 text-left text-sm font-medium text-teal-900 hover:bg-teal-200 focus:outline-none focus-visible:ring focus-visible:ring-teal-500 focus-visible:ring-opacity-75">
                <span>{label}</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-teal-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {children}
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default Accordion;
