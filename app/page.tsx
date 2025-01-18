import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LampDemo } from "@/components/ui/lamp";
import { WavyBackground } from "@/components/ui/wavy-background";
import { SparklesCore } from "@/components/ui/sparkles";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { BackgroundBeams } from "@/components/ui/backround-beams";
export default function Home() {
  return (
    <>
    <WavyBackground>
    <div className="h-[40rem] w-full bg-transperant flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-6xl text-3xl lg:text-7xl font-bold text-center text-white relative z-20">
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
      <div className="w-[80%] md:w-[60%] mt-4">
        <TextGenerateEffect className="text-white" words="Empowering underserved communities with AI-driven financial literacy. Learn, budget, and make informed decisions." />
      </div>
      <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full mt-8 hover:bg-blue-700 transition-all">
        Get Started for Free
      </button>
      <BackgroundBeams />
    </div>
    </WavyBackground>
    <LampDemo />
    </>
  );
}
