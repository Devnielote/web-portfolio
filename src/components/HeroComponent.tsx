import { motion } from "framer-motion";
import type { CSSProperties } from "react";

const mainMessage: string =
  "Hello, I am Daniel.";
const secondaryMessage: string =
  "A frontend developer with passion for crafting responsive interfaces.";
const heroIcons: string[] = ["↓"];
const terminalParagraphStyle: boolean = true;
const terminalStyles: CSSProperties = {
  color: terminalParagraphStyle ? "var(--dark-green)" : "var(--white)",
};

export default function HeroComponent() {
  return (
    <div className="px-8 text-5xl leading-12 tracking-tighter lg:flex lg:items-end lg:justify-evenly lg:m-auto lg:w-[calc(70vw)] lg:text-[calc(5vw)]">
      <span className="hidden text-8xl lg:block lg:mr-50">{heroIcons[0]}</span>
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-left"
        >
          <p style={terminalStyles}>{mainMessage}</p>
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mt-5 text-[var(white)] text-left"
        >
          {secondaryMessage}
        </motion.h1>
      </div>
    </div>
  );
}
