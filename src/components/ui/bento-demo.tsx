"use client";

import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from "lucide-react";

import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import AnimatedBeamMultipleOutputDemo from "@/components/example/animated-beam-multiple-outputs";
import AnimatedListDemo from "@/components/example/animated-list-demo";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Marquee } from "@/components/magicui/marquee";

const files = [
  {
    name: "ollama-config.json",
    body: "Configuration file for Ollama models, settings, and API endpoints for seamless AI integration.",
  },
  {
    name: "chat-interface.tsx",
    body: "React component for beautiful chat interfaces with real-time streaming and markdown support.",
  },
  {
    name: "model-selector.js",
    body: "Dynamic model selection component with search, filtering, and performance indicators.",
  },
  {
    name: "themes.css",
    body: "Custom CSS themes and styling options for personalizing your Ollama interface experience.",
  },
  {
    name: "api-keys.env",
    body: "Environment variables and API keys for secure authentication and service integrations.",
  },
];

const features = [
  {
    Icon: FileTextIcon,
    name: "Beautiful Interfaces",
    description: "Create stunning chat interfaces with customizable themes and layouts.",
    href: "#",
    cta: "Explore",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: BellIcon,
    name: "Real-time Updates",
    description: "Get instant notifications for model responses and system events.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90" />
    ),
  },
  {
    Icon: Share2Icon,
    name: "AI Model Hub",
    description: "Connect with 100+ AI models and services seamlessly.",
    href: "#",
    cta: "Browse models",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Chat History",
    description: "Track and organize your conversations by date and topic.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "View history",
    background: (
      <Calendar
        mode="single"
        selected={new Date(2025, 4, 31, 0, 0, 0)}
        className="absolute right-0 top-10 origin-top scale-75 rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-90"
      />
    ),
  },
];

export function BentoDemo() {
  return (
    <div className="relative w-full">
      <BentoGrid className="lg:grid-rows-3">
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}
