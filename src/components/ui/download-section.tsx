"use client";

import { motion } from "motion/react";
import { Download, Apple, Monitor, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { cn } from "@/lib/utils";

interface DownloadCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  downloadUrl: string;
  version: string;
  size: string;
  className?: string;
}

const DownloadCard = ({
  title,
  description,
  icon: Icon,
  downloadUrl,
  version,
  size,
  className
}: DownloadCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={cn(
        "group relative overflow-hidden rounded-3xl p-8 backdrop-blur-xl",
        // Modern glass morphism effect
        "bg-white/5 border border-white/10 shadow-2xl",
        "hover:bg-white/10 hover:border-white/20 transition-all duration-500",
        // Remove scale transform and use transform-gpu for better performance
        "transform-gpu hover:shadow-3xl will-change-transform",
        className
      )}
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 flex flex-col space-y-8">
        {/* Header with Icon and Title */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
            <div className="relative p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl border border-white/20 backdrop-blur-sm">
              <Icon className="h-6 w-6 text-white" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">{title}</h3>
            <p className="text-neutral-300 text-sm">{description}</p>
          </div>
        </div>

        {/* File Information */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-black/20 rounded-xl p-4 border border-white/10 backdrop-blur-sm">
            <div className="text-xs text-neutral-400 uppercase tracking-wider mb-1">Version</div>
            <div className="text-white font-semibold">{version}</div>
          </div>
          <div className="bg-black/20 rounded-xl p-4 border border-white/10 backdrop-blur-sm">
            <div className="text-xs text-neutral-400 uppercase tracking-wider mb-1">Size</div>
            <div className="text-white font-semibold">{size}</div>
          </div>
        </div>

        {/* Modern Download Button - Fixed height container */}
        <div className="h-14">
          <Button
            asChild
            className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 rounded-2xl h-full w-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
          >
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 h-full"
            >
              {/* Button background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
              
              <Download className="h-5 w-5 transition-transform duration-300 group-hover/btn:scale-110" />
              <span className="relative z-10">Download for {title}</span>
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export const DownloadSection = () => {
  return (
    <section id="download" className="relative bg-black py-20 px-4 overflow-hidden border-t border-neutral-800/30">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-30 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/background.png')",
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            <span className="inline-block relative">
              Download Now
              <div className="absolute inset-0 bg-yellow-500/10 border border-yellow-500/20 rounded-lg -m-2 pointer-events-none" />
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Get Beautify Ollama for your platform and start creating stunning AI interfaces today
          </p>
          <div className="text-neutral-400 text-sm text-center">
            <SparklesText className="inline">
              Available for macOS, Windows, and Linux
            </SparklesText>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <DownloadCard
            title="macOS"
            description="Universal binary supporting both Intel and Apple Silicon Macs"
            icon={Apple}
            downloadUrl="https://github.com/falkon2/BeautifyOllama/releases/download/v1.6.4/BeautifyOllama_0.1.0_aarch64.dmg"
            version="1.6.4"
            size="21 MB"
          />
          
          <DownloadCard
            title="Windows"
            description="Compatible with Windows 10 and Windows 11 (64-bit)"
            icon={Monitor}
            downloadUrl="https://github.com/falkon2/BeautifyOllama/releases/download/v1.6.4/BeautifyOllama_0.1.0_x64-setup.exe"
            version="1.6.4"
            size="18 MB"
          />

          <DownloadCard
            title="Linux"
            description="AppImage for universal Linux distribution compatibility"
            icon={Smartphone}
            downloadUrl="https://github.com/falkon2/BeautifyOllama/releases/download/v1.6.4/BeautifyOllama_0.1.0_amd64.AppImage"
            version="1.6.4"
            size="22 MB"
          />
        </div>

        {/* Additional Linux Downloads */}
        <div className="text-center mt-8">
          <p className="text-neutral-400 text-sm mb-4">Additional Linux formats:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              variant="outline"
              className="bg-neutral-800/50 border-neutral-600 hover:bg-neutral-700/50 text-white"
            >
              <a
                href="https://github.com/falkon2/BeautifyOllama/releases/download/v1.6.4/BeautifyOllama_0.1.0_amd64.deb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Download .deb (Ubuntu/Debian)
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-neutral-800/50 border-neutral-600 hover:bg-neutral-700/50 text-white"
            >
              <a
                href="https://github.com/falkon2/BeautifyOllama/releases/download/v1.6.4/BeautifyOllama_0.1.0_x64_en-US.msi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Download .msi (Windows)
              </a>
            </Button>
          </div>
        </div>

        {/* Additional info */}
        <div className="text-center mt-12">
          <p className="text-neutral-500 text-sm max-w-2xl mx-auto mb-4">
            By downloading, you agree to our terms of service. Need help or have questions? 
            <a 
              href="https://github.com/falkon2/beautifyOllama" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors ml-1 underline"
            >
              Check our GitHub repository
            </a>
          </p>
          
          {/* macOS Security Notice */}
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 max-w-2xl mx-auto mb-4">
            <h4 className="text-yellow-400 font-semibold text-sm mb-2">📋 macOS Users: If you see "DMG is damaged" error</h4>
            <div className="text-xs text-neutral-400 text-left space-y-2">
              <p><strong>First, navigate to your Downloads folder in Terminal:</strong></p>
              <p>1. Open Terminal and run: <code className="bg-black/30 px-1 rounded text-yellow-300">cd ~/Downloads</code></p>
              <p>2. Then run: <code className="bg-black/30 px-1 rounded text-yellow-300">sudo xattr -rd com.apple.quarantine BeautifyOllama_0.1.0_aarch64.dmg</code></p>
              <p><strong>Alternative methods:</strong></p>
              <p>3. Right-click DMG → "Open With" → "DiskImageMounter"</p>
              <p>4. Go to System Preferences → Security & Privacy → Allow the app</p>
            </div>
          </div>

          {/* Linux Installation Notice */}
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 max-w-2xl mx-auto">
            <h4 className="text-blue-400 font-semibold text-sm mb-2">🐧 Linux Users: Installation Instructions</h4>
            <div className="text-xs text-neutral-400 text-left space-y-2">
              <p><strong>For AppImage:</strong></p>
              <p>1. Make executable: <code className="bg-black/30 px-1 rounded text-blue-300">chmod +x BeautifyOllama_0.1.0_amd64.AppImage</code></p>
              <p>2. Run: <code className="bg-black/30 px-1 rounded text-blue-300">./BeautifyOllama_0.1.0_amd64.AppImage</code></p>
              <p><strong>For .deb package:</strong></p>
              <p>Install with: <code className="bg-black/30 px-1 rounded text-blue-300">sudo dpkg -i BeautifyOllama_0.1.0_amd64.deb</code></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
