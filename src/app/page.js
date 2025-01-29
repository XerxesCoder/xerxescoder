// app/page.js
"use client";
import PortfolioHero from "@/components/About";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center w-full ">
      <PortfolioHero />
    </main>
  );
}
