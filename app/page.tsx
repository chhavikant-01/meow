// page.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LampDemo } from "@/components/ui/lamp";
import { WavyBackground } from "@/components/ui/wavy-background";
import { SparklesCore } from "@/components/ui/sparkles";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BackgroundBeams } from "@/components/ui/backround-beams";
import { Timeline } from "@/components/ui/timeline";
import Navbar from "@/components/ui/navbar"; // Importing Navbar

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
    title: "Systematic Investment Plan (SIP) Service",
    content: (
      <p className="text-white dark:text-white text-sm md:text-base">
        Customized SIP roadmaps to help you achieve your financial goals:
        <br />
        <strong>3-month plan</strong>: Short-term goals like building an emergency fund.
        <br />
        <strong>6-month plan</strong>: Mid-term savings for essentials or small investments.
        <br />
        <strong>12-month+ plan</strong>: Long-term wealth-building strategies.
        <br />
        Personalized guidance based on your income and goals.
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
    title: "Budgeting Tools and Resources",
    content: (
      <p className="text-white dark:text-white text-sm md:text-base">
        Interactive budget calculators to help you plan and track your expenses.
        Step-by-step guides to create sustainable financial plans.
        Tips and tricks for saving on a tight budget.
      </p>
    ),
  },
  {
    title: "Personalized Financial Insights",
    content: (
      <p className="text-white dark:text-white text-sm md:text-base">
        Track your financial habits and get tailored advice to improve them.
        Monthly reports to show your progress toward your goals.
        Insights based on your spending patterns to help you make smarter decisions.
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
    <>
      <Navbar /> {/* Navbar component */}
      <LampDemo />
      
      {/* <WavyBackground>
        <div className="h-[40rem] w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h1 className="md:text-6xl text-3xl lg:text-7xl font-sans font-bold text-center text-white relative z-20">
            Your AI Financial Coach
          </h1>
          <div className="w-[40rem] h-40 relative">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </div>
          <div className="w-[80%] md:w-[60%] mt-4 font-sans z-20">
            <TextGenerateEffect className="text-white" words="Empowering underserved communities with AI-driven financial literacy. Learn, budget, and make informed decisions." />
          </div>
          <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full mt-8 hover:bg-blue-700 transition-all z-20">
            Get Started for Free
          </button>
          <BackgroundBeams />
        </div>
      </WavyBackground> */}

      {/* Timeline Section */}
      <div className="relative">
        <BackgroundBeams />
        <Timeline data={myTimelineData} />
      </div>

    </>
  );
}
