'use client'
// TeamPage.js
import React from 'react';
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { motion } from "framer-motion"
import Navbar from '@/components/ui/navbar';

const teamMembers = [
  {
    name: 'Amrit Vignesh',
    description: 'Amrit Vignesh is the President of NextGen Research Institute and a rising student at Princeton University, majoring in Data Science. He has done research with UFlorida, UCF, Syracuse, GA Tech, presented at Carnegie Mellon, and collaborated with Princeton. He is an AIME Qualifier and USNCO Competitor. ',
    image: '/amrit.png',
    github: 'https://github.com/member1',
  },
  {
    name: 'Nishant Gadde',
    description: 'Nishant Gadde is the CEO of NextGen Research Institute and a student at Jordan High School. With early explorations in AP Seminar and AP Research, he became passionate and did research for the University of Houston and Rice University in Machine Learning and Applied Math. With NextGen, he hopes to allow easy access to publishing well qualified high school students. He is an AIME Qualifier and USACO Competitior. ',
    image: 'nishant.png',
    github: 'https://github.com/member2',
  },
  {
    name: 'Daksh Parikh',
    description: 'Daksh Parikh is the President of NextGen Research Institute and a student at Adrian Wilcox High School. He has done research with San Jose State University, Cornell University, UC Berkeley, and Harvard with focuses in Artificial Intelligence. He is a USACO Competitor.',
    image: 'daksh.png',
    github: 'https://github.com/member3',
  },
  {
    name: 'Prab Jayachandran',
    description: 'Prab Jayachandran is the Chief Operation Officer of NextGen Research Institute and a student at Zionsville Community High School. He has done research for IU and Purdue in Chemistry and Drug Discovery.',
    image: 'prab.png',
    github: 'https://github.com/member4',
  },
  {
    name: 'Pranay Ravella',
    description: 'Pranay Ravella is a student at Wilcox High School and Chief Marketing Officer for NextGen Research Institute. He has done local research at universities, specifically in Economics. He is an avid competitior in DECA, qualifying for ICDC twice, placing in 2024. In his free time he has created many small businesses that produced thousands of dollars.',
    image: 'pranay.png',
    github: 'https://github.com/member5',
  },
  {
    name: 'Avnish Sekharan',
    description: 'Avnish Sekharan is a rising student majoring in Biomedical Engineering and the Chief Financial Officer. He has done research for Texas A&M University and University of Michigan in the biology field and currently has a patent pending on a resuable needle. ',
    image: 'avnish.png',
    github: 'https://github.com/member6',
  }
];

export default function Team() {
  return (
    <main className="bg-slate-500 justify-center items-center relative min-h-screen w-screen overflow-x-hidden flex"> {/* Set relative positioning on outer div and use flexbox */}
    <Navbar />
      <div className="pt-20">
        <div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold justify-center items-center text-center p-4  text-black"
          >
            OUR TEAM
          </motion.div>
        </div>

        <div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-4xl font-bold justify-center items-center text-center p-4  text-black"
            transition={{ duration: 1.5 }}
          >

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-12">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 flex flex-col items-center"
                  onClick={() => window.location.href = member.github}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mb-2 object-cover"
                  />
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </main >
  );
}


