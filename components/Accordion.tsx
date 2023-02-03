import React from "react";
import { FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type AccordionProps = {
  id: number; // for auto-closing when another accordion is open
  idx: number | null;
  setIdx: (idx: number | null) => void;
  title: string;
  children: React.ReactNode;
};
const Accordion = ({ id, idx, setIdx, title, children }: AccordionProps) => {
  return (
    <div className="p-1">
      <motion.header
        className={classNames(
          "flex items-center justify-between gap-x-4 rounded-lg bg-teal-400 p-4 text-left text-sm font-medium text-black/70 shadow-lg sm:text-base",
          "cursor-pointer transition-all focus:outline-none"
        )}
        initial={false}
        animate={{}}
        onClick={() => setIdx(idx === id ? null : id)}
      >
        <div className="mr-auto flex flex-col justify-center">
          <div className="font-semibold">{title}</div>
        </div>
        <FaChevronUp
          className={classNames(idx === id ? "rotate-180 transform" : "")}
        />
      </motion.header>
      <AnimatePresence initial={false}>
        {idx === id && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: {
                opacity: 0,
                height: 0,
              },
            }}
            transition={{
              duration: 1,
              ease: [0.04, 0.62, 0.23, 0.98],
            }}
          >
            {children}
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
