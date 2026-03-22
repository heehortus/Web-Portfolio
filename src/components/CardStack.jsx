import { useState, forwardRef, useImperativeHandle } from "react";
import FlipImage from "./FlipImage";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
  {
    id: 1,
    content: (
      <div className="w-full h-full flex flex-col">
        <div className="flex-1">
          <FlipImage />
        </div>
        <div className="p-4 text-center">
          <div className="text-[18px] font-medium">Jeong Hee Won</div>
          <div className="text-[13px] text-muted mt-1">
            UIUX Designer · Seoul
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="grid grid-cols-2 gap-x-0">
        {[
          { name: "Figma", icon: "./icons/figma.svg" },
          { name: "Photoshop", icon: "./icons/photoshop.svg" },
          { name: "Notion", icon: "./icons/notion.svg" },
          { name: "React", icon: "./icons/react.svg" },
          { name: "Illustrator", icon: "./icons/illust.svg" },
        ].map((skill) => (
          <div key={skill.name} className="flex items-center">
            <img
              key={skill.name}
              src={skill.icon}
              alt={skill.name}
              className="w-36 h-36"
            />
          </div>
        ))}
      </div>
      </div>
    ),
  },
];

const variants = {
  enter: (dir) => ({
    x: dir > 0 ? 200 : -200,
    opacity: 0,
    rotate: dir > 0 ? 8 : -8,
    scale: 0.9,
  }),
  center: {
    x: 0,
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 25 },
  },
  exit: (dir) => ({
    x: dir > 0 ? -200 : 200,
    opacity: 0,
    rotate: dir > 0 ? -8 : 8,
    scale: 0.9,
    transition: { type: "spring", stiffness: 300, damping: 25 },
  }),
};

const CardStack = forwardRef((props, ref) => {
  const [[current, direction], setPage] = useState([0, 0]);
  const nextIndex = (current + 1) % cards.length;

  const paginate = (dir) => {
    setPage([(current + dir + cards.length) % cards.length, dir]);
  };

  useImperativeHandle(ref, () => ({ paginate }));

  return (
    <div className="relative md:w-[320px] md:h-[400px] lg:w-[360px] lg:h-[480px]">
      {/* 뒷 카드 */}
      <div
        className="absolute inset-0 border border-border bg-[#ffffff] rounded-[16px] overflow-hidden"
        style={{
          transform: "translateX(48px) translateY(8px) rotate(6deg)",
          zIndex: 0,
        }}
        onClick={() => paginate(1)}
      >
        {cards[nextIndex].content}
      </div>

      {/* 앞 카드 */}
      <AnimatePresence custom={direction} mode="popLayout">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(e, { offset }) => {
            if (offset.x < -60) paginate(1);
            else if (offset.x > 60) paginate(-1);
          }}
          onClick={() => paginate(1)}
          className="absolute inset-0 border border-border bg-card rounded-[16px] overflow-hidden cursor-pointer active:cursor-grabbing"
          style={{ zIndex: 10 }}
        >
          {cards[current].content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
});

export default CardStack;
