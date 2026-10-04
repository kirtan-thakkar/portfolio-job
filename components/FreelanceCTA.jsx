"use client";
import Container from "./Container";

export default function FreelanceCTA() {
  return (
    <div className="py-12 md:py-20">
      <Container className="border-y border-neutral-100 dark:border-neutral-800 py-16 shadow-section-inset">
        
        <div className="max-w-2xl flex flex-col py-2">
            <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-neutral-100 tracking-tight mb-4">
              Get in touch
            </h2>
            
            <p className="text-secondary dark:text-neutral-400 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
              I&apos;m currently looking for new opportunities. Whether you have a question or want to say hi, hit that button.
            </p>

            <form 
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center w-full max-w-md bg-neutral-100 dark:bg-[#1c1c1c] p-1.5 rounded-xl border border-neutral-200 dark:border-neutral-800/50 shadow-sm"
            >
              <input 
                type="email" 
                placeholder="Your email" 
                required
                className="flex-1 bg-transparent border-none outline-none px-4 text-sm md:text-base text-primary dark:text-neutral-200 placeholder-neutral-400 dark:placeholder-neutral-500"
              />
              <button 
                type="submit"
                className="shrink-0 px-4 py-2 bg-white dark:bg-[#2a2a2a] hover:bg-neutral-50 dark:hover:bg-[#333333] border border-neutral-200 dark:border-neutral-700/50 text-primary dark:text-neutral-200 text-sm md:text-base font-medium rounded-lg transition-colors shadow-sm dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]"
              >
                Send Enquiry
              </button>
            </form>
          </div>
      </Container>
    </div>
  );
}
