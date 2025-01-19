// page.tsx
import { LampDemo } from "@/components/ui/lamp";
import { BackgroundBeams } from "@/components/ui/backround-beams";
import { Button } from "@/components/ui/button";
import { Timeline } from "@/components/ui/timeline";
import Navbar from "@/components/ui/navbar"; // Importing Navbar
import Link from "next/link";
import { FeaturesSectionDemo } from "@/components/ui/feature-section";
import { FloatingDockDemo } from "@/components/ui/floating-deck";

const myTimelineData = [
  {
    title: "AI-Powered Financial Literacy Chatbot",
    content: (
      <p className="text-white dark:text-white text-sm md:text-base">
        A 24/7 assistant designed to simplify complex financial concepts.
        Multilingual support to ensure accessibility for everyone, including underprivileged communities.
        Answers to your questions about budgeting, saving, investing, loans, and more.
      </p>
    ),
  },
  {
    title: "Multilingual Support",
    content: (
      <p className="text-white dark:text-white text-sm md:text-base">
        Financial guidance in multiple languages to bridge the language gap.
        Aimed at making financial literacy accessible to non-English-speaking populations.
        Support for regional and minority languages to cater to diverse communities.
      </p>
    ),
  },

  {
    title: "Fraud Awareness and Financial Safety",
    content: (
      <p className="text-white dark:text-white text-sm md:text-base">
        Learn how to identify and avoid financial scams.
        Guidance on protecting your personal information and online transactions.
        Tips on building a secure financial future.
      </p>
    ),
  },
];

export default function Home() {
  return (
    <main className="min-h screen bg-black">
      <Navbar /> {/* Navbar component */}
      <LampDemo />

          <div className="absolute left-1/2 top-3/4 transform -translate-x-1/2 -translate-y-1/2 z-50 ">
          <Link href="/chat">
            <Button className="px-12 py-8 bg-lampColor font-sans hover:bg-lampColor text-white text-xl font-bold rounded-full shadow-lg transition-all
              shadow-[0_0_40px_rgba(59,130,246,0.6)]
              hover:shadow-[0_0_60px_rgba(59,130,246,0.8)]
              border-2 border-black">
              Talk to Your AI Financial Coach
            </Button>
      </Link>
    </div>
      

      {/* Timeline Section */}
      <div className="relative">
        <BackgroundBeams />
        <Timeline data={myTimelineData} />
      </div>
        <FeaturesSectionDemo/>
        <FloatingDockDemo/>
    </main>
  );
}
