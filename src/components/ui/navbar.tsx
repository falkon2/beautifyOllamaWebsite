"use client";

import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { ChevronRight, Star } from "lucide-react";

export function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-black/20 backdrop-blur-xl border-b border-neutral-800/30 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-white">Beautify Ollama</span>
        </div>

        {/* Center - GitHub Star Component */}
        <div className="flex-1 flex justify-center">
          <a 
            href="https://github.com/falkon2/beautifyOllama" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]"
          >
            <span
              className={cn(
                "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]",
              )}
              style={{
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "destination-out",
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "subtract",
                WebkitClipPath: "padding-box",
              }}
            />
            <Star className="size-4 fill-yellow-500 text-yellow-500 mr-2" />
            <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
            <AnimatedGradientText className="text-sm font-medium">
              Star on GitHub
            </AnimatedGradientText>
            <ChevronRight
              className="ml-1 size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
            />
          </a>
        </div>

        {/* Right side - Navigation Links */}
        <div className="flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection('features')} 
            className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer"
          >
            Features
          </button>
          <a href="https://github.com/falkon2/BeautifyOllama/blob/main/README.md" className="text-gray-300 hover:text-white transition-colors duration-200">
            Docs
          </a>
          <a href="https://github.com/falkon2/beautifyOllama" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-200">
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
