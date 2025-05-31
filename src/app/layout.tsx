"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Basic Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Beautify Your Ollama - Transform Your AI Experience</title>
        <meta 
          name="description" 
          content="Discover the power of beautiful AI interfaces with Ollama. Experience stunning visualizations, real-time updates, and seamless model management in a gorgeous, modern design." 
        />
        <meta 
          name="keywords" 
          content="Ollama, AI, Machine Learning, Beautiful UI, AI Models, Chat Interface, Local AI, Open Source, AI Assistant, Model Management" 
        />
        <meta name="author" content="Zahin Tapadar" />
        <meta name="creator" content="Beautify Ollama Team" />
        <meta name="publisher" content="Beautify Ollama" />
        <meta name="robots" content="index, follow" />
        <meta name="category" content="technology" />
        <meta name="classification" content="AI Tools and Interfaces" />
        
        {/* Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
        
        {/* OpenGraph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Beautify Your Ollama" />
        <meta property="og:title" content="Beautify Your Ollama - Transform Your AI Experience" />
        <meta 
          property="og:description" 
          content="Discover the power of beautiful AI interfaces with Ollama. Experience stunning visualizations, real-time updates, and seamless model management." 
        />
        <meta property="og:url" content="https://beautify-ollama.vercel.app" />
        <meta property="og:image" content="/embed.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Beautify Your Ollama - Transform Your AI Experience" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@falkon2" />
        <meta name="twitter:title" content="Beautify Your Ollama - Transform Your AI Experience" />
        <meta 
          name="twitter:description" 
          content="Discover the power of beautiful AI interfaces with Ollama. Experience stunning visualizations, real-time updates, and seamless model management." 
        />
        <meta name="twitter:image" content="/embed.png" />
        <meta name="twitter:image:alt" content="Beautify Your Ollama - Transform Your AI Experience" />
        
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://beautify-ollama.vercel.app" />
        
        {/* Verification (if needed) */}
        <meta name="google-site-verification" content="your-google-verification-code" />
        <meta name="yandex-verification" content="your-yandex-verification-code" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}