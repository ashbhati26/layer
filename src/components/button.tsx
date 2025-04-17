"use client";

import { FC } from "react";
import { stagger, useAnimate } from "framer-motion";
import clsx from "clsx";

interface ButtonProps {
  name: string;
  className?: string;
}

const Button: FC<ButtonProps> = ({ name, className = "" }) => {
  const [scope, animate] = useAnimate();

  const onMouseEnter = () => {
    animate(".letter", { y: -32 }, { duration: 0.2, delay: stagger(0.05) });
    animate(".duplicate", { y: -32 }, { duration: 0.2, delay: stagger(0.05) });
  };

  const onMouseLeave = () => {
    animate(".letter", { y: 0 }, { duration: 0.2, delay: stagger(0.05) });
    animate(".duplicate", { y: 0 }, { duration: 0.2, delay: stagger(0.05) });
  };

  return (
    <div ref={scope} className="flex justify-center items-center">
      <button
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={clsx("h-12 rounded-full px-6 font-medium", className)}
      >
        <span className="sr-only">{name}</span>
        <span
          className="h-8 overflow-hidden flex items-center justify-center"
          aria-hidden="true"
        >
          {name.split("").map((letter, index) => (
            <span
              className="letter-wrapper relative h-8 flex items-center justify-center"
              key={`${letter}-${index}`}
            >
              <span className="letter">
                {letter === " " ? "\u00A0" : letter}
              </span>
              <span className="absolute left-0 top-full w-full h-full flex items-center justify-center duplicate">
                {letter === " " ? "\u00A0" : letter}
              </span>
            </span>
          ))}
        </span>
      </button>
    </div>
  );
};

export default Button;
