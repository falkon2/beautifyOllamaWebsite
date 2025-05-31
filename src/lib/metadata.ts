export const siteConfig = {
  name: "Beautify Your Ollama",
  title: "Beautify Your Ollama - Transform Your AI Experience",
  description: "Discover the power of beautiful AI interfaces with Ollama. Experience stunning visualizations, real-time updates, and seamless model management in a gorgeous, modern design.",
  url: "https://beautify-ollama.vercel.app",
  ogImage: "https://beautify-ollama.vercel.app/og-image.png",
  twitterImage: "https://beautify-ollama.vercel.app/twitter-image.png",
  keywords: [
    "Ollama",
    "AI",
    "Machine Learning",
    "Beautiful UI",
    "AI Models",
    "Chat Interface",
    "Local AI",
    "Open Source",
    "AI Assistant",
    "Model Management"
  ],
  author: "Beautify Your Ollama Team",
  creator: "@beautifyollama",
  links: {
    github: "https://github.com/beautify-ollama",
    twitter: "https://twitter.com/beautifyollama",
    docs: "https://docs.beautify-ollama.com"
  }
};

export const defaultMetadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.creator,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Beautiful AI Interfaces`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.twitterImage],
    creator: siteConfig.creator,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
