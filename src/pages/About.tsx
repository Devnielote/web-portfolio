import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return(
    <section className="mt-10 px-5">
      <div>
        <motion.h1
          initial={{opacity:0, y:50}}
          animate={{opacity:1, y:0}}
          transition={{duration: 0.7, ease:'easeOut'}}
          className="text-5xl text-[var(--dark-green)] text-left leading-12 tracking-tighter"
        >
          Hello, I am Daniel.
        </motion.h1>
      </div>
    </section>
  )
}
