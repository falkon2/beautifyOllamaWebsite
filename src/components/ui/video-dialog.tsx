"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoDialogProps {
  videoSrc: string;
  thumbnailSrc?: string;
  thumbnailAlt?: string;
  className?: string;
  animationStyle?: "from-center" | "from-bottom" | "from-top";
}

export default function VideoDialog({
  videoSrc,
  thumbnailSrc,
  thumbnailAlt = "Video thumbnail",
  className,
  animationStyle = "from-center",
}: VideoDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const getAnimationProps = () => {
    switch (animationStyle) {
      case "from-bottom":
        return {
          initial: { opacity: 0, y: 100, scale: 0.8 },
          animate: { opacity: 1, y: 0, scale: 1 },
          exit: { opacity: 0, y: 100, scale: 0.8 },
        };
      case "from-top":
        return {
          initial: { opacity: 0, y: -100, scale: 0.8 },
          animate: { opacity: 1, y: 0, scale: 1 },
          exit: { opacity: 0, y: -100, scale: 0.8 },
        };
      default:
        return {
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.8 },
        };
    }
  };

  return (
    <>
      <div
        className={cn(
          "relative cursor-pointer group rounded-xl overflow-hidden",
          className
        )}
        onClick={openModal}
      >
        {thumbnailSrc ? (
          <img
            src={thumbnailSrc}
            alt={thumbnailAlt}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
            <Play className="w-16 h-16 text-white opacity-80" />
          </div>
        )}
        
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:bg-white/30 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-8 h-8 text-white fill-white" />
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden"
              {...getAnimationProps()}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors duration-200"
                onClick={closeModal}
              >
                <X className="w-6 h-6 text-white" />
              </button>
              
              <div className="aspect-video">
                <iframe
                  src={videoSrc}
                  title="Video player"
                  className="w-full h-full"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
