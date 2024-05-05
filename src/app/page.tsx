"use client"
import Image from "next/image";
import { motion } from "framer-motion"
import Link from "next/link";
import React, { createContext } from 'react';
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function Home() {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">  {/* Set relative positioning on outer div */}
      <BackgroundGradientAnimation className="h-full"/>  {/* No need for z-index here */}

      <div className="z-10 absolute flex h-screen min-screen flex-col items-center justify-between top-0 left-0 right-0 bottom-0">
        <div className="w-full z-10 max-w-5xl items-center justify-center font-mono text-sm flex p-2 md:p-10">
          <div>

            <TextGenerateEffect words="Publishing high school research has never been easier" className="text-l my-2 md:my-4 md:text-2xl h-full overflow-hidden flex w-.75vw px-8 justify-center border-b border-gray-300 bg-black via-sky-200 py-2 backdrop-blur-2xl static w-min-screen rounded-xl border text-white sm:text-xs" />

          </div>
        </div>

        <div className="">
          <Image
            className="flex flex-center object-scale-down max-w-64 object-center"
            src="/ngri_logo.png"
            alt="NextGEN.js Logo"
            width={400}
            height={400}
            priority
          />
        </div>



        <div className="md:pb-12 lg:pb-24 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">

          <Link
            key={'About'}
            href={'/about'}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-slate-400 hover:dark:border-neutral-700 hover:dark:bg-indigo-800/30"
          >

            <h2 className="mb-3 text-xl md:text-3xl font-semibold">
              About Us{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Find in-depth information about what we do at NextGen Research Institute.
            </p>
          </Link>


          <Link
            key={'Explore'}
            href={'/explore'}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-slate-400 hover:dark:border-neutral-700 hover:dark:bg-indigo-800/30"
          >

            <h2 className="mb-3 text-xl md:text-3xl font-semibold">
              Explore{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Visit publications and projects from high school students around the world.
            </p>
          </Link>

          <Link
            key={'About'}
            href={'/About'}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-slate-400 hover:dark:border-neutral-700 hover:dark:bg-indigo-800/30"
          >

            <h2 className="mb-3 text-xl md:text-3xl font-semibold">
              Get Started{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Contact us with any questions or pre-register for getting your project published.
            </p>
          </Link>

          <Link
            key={'Team'}
            href={'/team'}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-slate-400 hover:dark:border-neutral-700 hover:dark:bg-indigo-800/30"
          >

            <h2 className="mb-3 text-xl md:text-3xl font-semibold">
              Our Team{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Find in-depth information about what we do at NextGen Research Institute.
            </p>
          </Link>
        </div>
      </div>

    </div>
  );
}
