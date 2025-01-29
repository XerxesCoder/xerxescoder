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

export const metadata = {
  title: {
    default: 'XerxesCoder | Fullstack Web2 & Web3 Developer',
    template: '%s | XerxesCoder'
  },
  description: '4+ years experienced Fullstack Developer specializing in Next.js, React, and Solidity. Building secure Web3 DApps and high-performance Web2 applications. Blockchain developer for DeFi, DEX, and NFT projects.',
  keywords: [
    'Fullstack Developer',
    'Web3 Developer',
    'Next.js Expert',
    'Solidity Developer',
    'Blockchain Developer',
    'DeFi Development',
    'DEX Development',
    'NFT Development',
    'React Developer',
    'TypeScript Developer',
    'Smart Contract Audit',
    'Web3 Integration',
    'Vercel Deployment',
    'Decentralized Applications',
    'Ethereum Developer'
  ],
  openGraph: {
    title: 'XerxesCoder: Web2 & Web3 Development Expert',
    description: 'Fullstack developer building next-gen web experiences with Next.js and Solidity. Specializing in DeFi, DEX, and NFT development since 2020.',
    //url: 'https://xerxescoder.com',
    siteName: 'XerxesCoder Portfolio',
/*     images: [
      {
        url: 'https://xerxescoder.com/og-image.png',
        width: 1200,
        height: 630,
      },
    ], */
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XerxesCoder | Web3 & Fullstack Developer',
    description: 'Building the decentralized future with Next.js and Solidity. Expert in DEX development, smart contracts, and Web3 integration.',
    creator: '@Xerxescoder',
    //images: ['https://xerxescoder.com/twitter-og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
