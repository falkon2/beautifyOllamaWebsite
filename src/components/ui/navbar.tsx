"use client";

import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { ChevronRight, Star, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMenuOpen(false); // Close mobile menu after navigation
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-black/20 backdrop-blur-xl border-b border-neutral-800/30 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        {/* Desktop Layout */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-white">Beautify Ollama</span>
          </div>

          {/* Center - GitHub Star Component (Hidden on mobile) */}
          <div className="hidden md:flex flex-1 justify-center">
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

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
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

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200 w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
            isMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          )}
        >
          <div className="bg-black/40 backdrop-blur-lg rounded-lg border border-neutral-800/30 p-4 space-y-4">
            {/* Mobile GitHub Star Component */}
            <a 
              href="https://github.com/falkon2/beautifyOllama" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center rounded-full px-4 py-2 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]"
              onClick={() => setIsMenuOpen(false)}
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

            {/* Mobile Navigation Links */}
            <div className="border-t border-neutral-700 pt-4 space-y-3">
              <button 
                onClick={() => scrollToSection('features')} 
                className="block w-full text-left text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer py-2 px-2 rounded-lg hover:bg-white/5"
              >
                Features
              </button>
              <a 
                href="https://github.com/falkon2/BeautifyOllama/blob/main/README.md" 
                className="block text-gray-300 hover:text-white transition-colors duration-200 py-2 px-2 rounded-lg hover:bg-white/5"
                onClick={() => setIsMenuOpen(false)}
              >
                Docs
              </a>
              <a 
                href="https://github.com/falkon2/beautifyOllama" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-gray-300 hover:text-white transition-colors duration-200 py-2 px-2 rounded-lg hover:bg-white/5"
                onClick={() => setIsMenuOpen(false)}
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
