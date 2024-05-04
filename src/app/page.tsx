"use client"
import Image from "next/image";
import { motion } from "framer-motion"
import React, { createContext } from 'react';
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function Home() {
  return (
    <div className="relative min-h-screen">  {/* Set relative positioning on outer div */}
      <BackgroundGradientAnimation />  {/* No need for z-index here */}

      <div className="z-10 absolute flex min-h-screen min-screen flex-col items-center justify-between top-0 left-0 right-0 bottom-0">
        <div className="w-full z-10 max-w-5xl items-center justify-between font-mono text-sm flex p-10">
          <motion.div initial={{ width: '0%', opacity: 0 }} animate={{ width: "100%", opacity: 1 }} transition={{ ease: "easeInOut", duration: 1 }} className="w-full overflow-hidden text-center font-extrabold leading-normal tracking-normal xl:whitespace-nowrap">
            <div>
              <p className="h-full overflow-hidden flex w-full justify-center border-b border-gray-300 bg-black via-sky-200 pb-8 pt-8 backdrop-blur-2xl static w-min-screen rounded-xl border text-white sm:text-xs">
                Get started with NextGEN RI by signing up today.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="py-10">
          <Image
            className="flex flex-center"
            src="/NEXTGENRI_1.webp"
            alt="NextGEN.js Logo"
            width={400}
            height={100}
            priority
          />
        </div>



        <div className="pb-24 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-indigo-400 hover:dark:border-neutral-700 hover:dark:bg-indigo-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              About Us{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-indigo-700 hover:dark:border-neutral-700 hover:dark:bg-indigo-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Get Started{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-indigo-700 hover:dark:border-neutral-700 hover:dark:bg-indigo-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Explore{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Explore starter templates for Next.js.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-indigo-700 hover:dark:border-neutral-700 hover:dark:bg-indigo-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Team{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
        </div>
      </div>
      
    </div>
  );
}
