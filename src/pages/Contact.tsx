import { motion } from "framer-motion";

export default function Contact(){

  return (
    <section className="min-h-[100vh] md:min-h-0">
      <motion.div 
        initial={{opacity:0, translateX:50}}
        animate={{opacity:100, translateX:0}}
        transition={{duration:0.5, ease:'easeOut'}}
      >
        <div className="mt-10 md:pb-30 md:mt-30">
          <form 
            action="https://formsubmit.co/cdd0d75b000887a1543009ea7bbc7761" 
            method="POST" 
            className="flex flex-col gap-4 bg-black text-white m-auto p-6 w-full max-w-2xl"
          >
            <input 
              type="text" 
              name="name" 
              autoComplete="none"
              placeholder="YOUR NAME" 
              required 
              className="p-2 bg-transparent border border-[var(--green-phosphor)] focus:outline-none focus:ring-2 focus:ring-[var(--green-phosphor)]" 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="YOUR EMAIL" 
              required 
              className="p-2 bg-transparent border border-[var(--green-phosphor)] focus:outline-none focus:ring-2 focus:ring-[var(--gree-phosphor)]" 
            />
            <textarea 
              name="message" 
              placeholder="TELL ME ABOUT YOUR PROJECT..." 
              autoComplete="false"
              required 
              rows={5} 
              className="p-2 bg-transparent border border-[var(--green-phosphor)] focus:outline-none focus:ring-2 focus:ring-[var(--green-phosphor)]" 
            />
              <button 
                type="submit"
                className="w-full bg-[var(--green-phosphor)] hover:bg-[var(--dark-green)] text-black font-[IBM] font-bold tracking-tighter py-2 px-4 transition-all duration-300"
              >
                SEND MESSAGE 
              </button>
            <input type="hidden" name="_next" value="/about" />
            <input type="hidden" name="_captcha" value="false" />
          </form>
        </div>
      </motion.div>
    </section>
  )
}
