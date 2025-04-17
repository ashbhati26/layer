"use client";

import designExample1Image from "../assets/images/design-example-1.png";
import designExample2Image from "../assets/images/design-example-2.png";
import Image from "next/image";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import cursorYouImage from "@/assets/images/cursor-you.svg";

export default function Hero() {
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [rightDesignScope, rightDesignAnimate] = useAnimate();

  useEffect(() => {
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);

    rightDesignAnimate([
      [rightDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);
  }, []);

  return (
      <section
        className="py-20 overflow-x-clip flex justify-center"
        style={{
          cursor: `url(${cursorYouImage.src}), auto`,
        }}
      >
        <div className="container relative">
          <motion.div
            ref={leftDesignScope}
            initial={{ opacity: 0, y: 100, x: -100 }}
            drag
            className="absolute -left-24 -top-16 h-[22vw] w-[22vw] hidden lg:block"
          >
            <Image
              src={designExample1Image}
              alt="Design Example 1"
              draggable="false"
            />
          </motion.div>

          <motion.div
            ref={rightDesignScope}
            initial={{ opacity: 0, y: 100, x: 100 }}
            drag
            className="absolute -right-40 -top-16 h-[24vw] w-[24vw] hidden lg:block"
          >
            <Image
              src={designExample2Image}
              alt="Design Example 2"
              draggable="false"
            />
          </motion.div>

          <div className="flex justify-center">
            <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-purple-400 rounded-full text-neutral-950 font-semibold">
              🌟 $7.5M seed round raised
            </div>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6 mx-auto">
            Impactful design, created effortlessly
          </h1>
          <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
            Design tools shouldn&apos;t slow you down. Layers combines powerful
            features with an intuitive interface that keeps you in your creative
            flow.
          </p>
        </div>
      </section>
  );
}
