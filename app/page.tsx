"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link"
import Projects from "@/components/Projects";
import './globals.css';
import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Home() {

  return (
    <body className="font-sans align-center">
      <div className="pt-5 text-gray-300 bg-gray-900 min-h-screen ">
        <div className="name">
          <h1 className="text-4xl font-bold text-center">Onose Victor</h1>
          <h2 className="text-lg text-center mt-2">Web Developer | Second-year student</h2>
          <div className="flex justify-center items-center">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-gray-600" />
              <span>+40757648685</span>
              <Mail className="h-5 w-5 text-gray-600" />
              <span>victoronose@gmail.com</span>
            </div>
          </div>
          <main className="grid grid-cols-1 p-4 gap-8">
            Currently a second year student at the Faculty of Electrical Engineering and Computer Science (IESC) with
            intermediate knowledge in C++ and JavaScript. I am taking a course about JavaScript & CSS. I consider myself
            charismatic, disciplined and ambitious. At my job at Logiscool, I taught myself how to be more patient. I am
            interested in software engineering roles or internships.
          </main>


          <div className="bigdiv pt-15">
            <div className="pt-5 socialtech">
              <div className="items-left">
                Socials
              </div>
              <hr className="w-full border-gray-400" />
              <div className="pt-2 flex space-x-4">

                <Button className="transition transform social bg-transparent" variant="outline">
                  <Link href='https://www.linkedin.com/in/victor-onose-051b0a2a9/'>
                    <Image
                      src="/images/linkedin.png"
                      alt="github"
                      width={65}
                      height={65}
                      className="rounded brightness-0 invert" /></Link>
                </Button>
                <Button className="transition transform social bg-transparent" variant="outline">
                  <Link href='https://github.com/VictorOnose'>
                    <Image
                      src="/images/github.png"
                      objectFit="contain"
                      className="bg-transparent brightness-0 invert"
                      width={70} height={70}
                      alt="github" /></Link>
                </Button>
                <div className="w-px ml-1 h-18 bg-gray-400 "></div>
              </div>
            </div>
            <div className="pt-5 socialtech">
              <div className="items-left">
                TechStack
              </div>
              <hr className="w-full border-gray-400" />
              <div className="pt-3 flex space-x-4">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <img
                        src="/images/next.png"
                        alt="next"
                        className="techstack brightness-0 invert" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>NEXT.JS</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <img
                        src="/images/css.png"
                        alt="css"
                        className="techstack brightness-0 invert" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>CSS</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <img
                        src="/images/html.png"
                        alt="html"

                        className="techstack brightness-0 invert" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>HTML</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <img
                        src="/images/react.png"
                        alt="react"
                        className="techstack brightness-0 invert" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>React</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <img
                        src="/images/cplus.png"
                        alt="cplus"
                        className="cplus brightness-0 invert" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>C++</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>


          </div>
          <Projects />

        </div>
      </div>
    </body>



  );

}
