'use client'
// TeamPage.js
import React from 'react';
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Navbar from '@/components/ui/navbar';

export default function Explore() {
    return (
        <div className="relative min-h-screen w-screen overflow-hidden">  {/* Set relative positioning on outer div */}
            <BackgroundGradientAnimation className="h-full" />  {/* No need for z-index here */}
            <Navbar />
            <div className="z-10 absolute flex h-screen min-screen flex-col items-center justify-center top-0 left-0 right-0 bottom-0 text-4xl text-center px-4">
                <p>COME BACK SOON TO SEE OUR PUBLICATIONS</p>
                <p>ETA: FIRST WEEK OF JUNE</p>
            </div>
        </div>
    );
}


