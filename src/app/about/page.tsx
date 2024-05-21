import React from 'react';
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Navbar from '@/components/ui/navbar';

export default function About() {
  return (
    <div className="relative min-h-screen h-full w-screen overflow-x-hidden">  {/* Set relative positioning on outer div */}
            <BackgroundGradientAnimation className="h-full" />  {/* No need for z-index here */}
            <Navbar />
            <div className="z-10 absolute flex h-screen min-screen flex-col items-center justify-center top-0 left-0 right-0 bottom-0 text-4xl">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-l my-4 md:text-2xl h-fit overflow-hidden flex w-.75vw px-8 justify-center border-b border-gray-300 bg-black via-sky-200 py-2 backdrop-blur-2xl static w-min-screen rounded-xl border text-white text-xs"> NextGen Research Institute is a startup dedicated to helping high schoolers get published and recognized for their independent research, AP Seminar, and AP Research. With a team that has done research independently and for colleges, NextGen has all the resources for you and your peers to get recognized. With our journal, NextGen will select 15-20% of the applicants each application cycle. With these publishings to our journal, these will be constantly emailed to the professors we have worked with and whom are interested in working with high schoolers. If a professor is interested in your research, NextGen will get you and a professor in contact and you both can conduct research together." 
         </p>
      </div>
    </div>
  );
}


