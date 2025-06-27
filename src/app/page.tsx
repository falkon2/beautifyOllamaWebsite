"use client";
import { Spotlight } from "@/components/ui/spotlight";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import VideoDialog from "@/components/ui/video-dialog";
import { MorphingText } from "@/components/magicui/morphing-text";
import { WordRotate } from "@/components/magicui/word-rotate";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { Vortex } from "@/components/ui/vortex";
import { BentoDemo } from "@/components/ui/bento-demo";
import { Navbar } from "@/components/ui/navbar";
import { DownloadSection } from "@/components/ui/download-section";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-black min-h-screen relative">
      {/* Navbar - Always render immediately */}
      <Navbar />
      
      {/* Background Effects Layer - Server-rendered for better performance */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <DotPattern 
          className="text-neutral-800/20"
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
        />
        <Vortex
          className="absolute inset-0 w-full h-full"
          backgroundColor="transparent"
          rangeY={800}
          particleCount={300}
          baseHue={220}
        />
      </div>
      
      {/* Spotlight Effect */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />
      </div>

      {/* Hero Section with Container Scroll */}
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center space-y-6 px-4 pt-20">
            <div className="text-6xl md:text-6xl lg:text-7xl font-bold text-white text-center flex flex-wrap justify-center items-center gap-2">
              <SparklesText className="inline">Beautify</SparklesText>
              <PointerHighlight rectangleClassName="bg-black-100 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600" pointerClassName="text-yellow-500">
                <span className="inline">Ollama</span>
              </PointerHighlight>
            </div>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl text-center flex flex-wrap justify-center items-center gap-1">
              Transform your local AI interactions with stunning <WordRotate words={["Interface","UI","Animations"]} />
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-8">
              <a 
                href="https://github.com/falkon2/beautifyOllama" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 md:px-10 md:py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg text-center"
              >
                Get Started
              </a>
              {/* <button className="px-8 py-3 md:px-10 md:py-4 border border-gray-600 text-white font-semibold rounded-full hover:bg-gray-900 hover:border-gray-400 transition-all duration-300 ease-in-out">
                Learn More
              </button> */}
            </div>
          </div>
        }
      >
        <VideoDialog
          videoSrc="https://www.youtube.com/embed/cO2X56MxP9A?autoplay=1"
          thumbnailSrc="https://img.youtube.com/vi/cO2X56MxP9A/maxresdefault.jpg"
          thumbnailAlt="Ollama Web UI Interface Demo"
          className="w-full h-full rounded-2xl overflow-hidden"
          animationStyle="from-center"
        />
      </ContainerScroll>

      {/* Download Section */}
      <DownloadSection />

      {/* Features Section */}
      <section id="features" className="relative bg-black py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 flex justify-center">
              <PointerHighlight
                rectangleClassName="bg-black-100 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600"
                pointerClassName="text-yellow-500"
              >
                <span className="inline">Powerful Features</span>
              </PointerHighlight>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create beautiful, functional AI interfaces
            </p>
          </div>
          <BentoDemo />
        </div>
      </section>

      {/* Other Works Section */}
      <section className="relative bg-black py-20 px-4 overflow-hidden border-t border-neutral-800/30">
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 flex justify-center">
              <PointerHighlight
                rectangleClassName="bg-black-100 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600"
                pointerClassName="text-yellow-500"
              >
                <span className="inline">Check out my other works</span>
              </PointerHighlight>
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Explore more of my projects and creative endeavors across different technologies and domains.
            </p>
            <a 
              href="https://zahintapadar.onrender.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-500/10 to-purple-500/10 border border-yellow-500/20 text-white font-semibold rounded-full hover:from-yellow-500/20 hover:to-purple-500/20 hover:border-yellow-500/40 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            >
              <SparklesText className="inline text-lg">Visit Portfolio</SparklesText>
              <ChevronRight className="size-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
