"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link"
import Projects from "@/components/Projects";
import './globals.css';

export default function Home() {

  return (
    <body className="font-sans align-center">
      <div className="pt-5 text-gray-300 bg-gray-900 min-h-screen">
        <div className="name">
          <h1 className="text-4xl font-bold text-center">Onose Victor</h1>
          <h2 className="text-lg text-center mt-2">Web Developer | Second-year student</h2>
          <main className="grid grid-cols-1 p-8 gap-8">
            Currently a second year student at the Faculty of Electrical Engineering and Computer Science (IESC) with
            intermediate knowledge in C++ and JavaScript. I am taking a course about JavaScript & CSS. I consider myself
            charismatic, disciplined and ambitious. At my job at Logiscool, I taught myself how to be more patient. I am
            interested in software engineering roles or internships.
          </main>


          <div className="pt-15">
            <Button className="transition transform hover:scale-105 hover:shadow-2xl social bg-transparent w-35 h-35" variant="outline">
              <Link href='https://www.linkedin.com/in/victor-onose-051b0a2a9/'>
                <Image
                  src="/images/linkedin2.png"
                  alt="github"
                  width={45} height={45}
                  className="rounded" /></Link>
            </Button>
            <Button className="transition transform hover:scale-105 hover:shadow-2xl social bg-transparent w-35 h-35" variant="outline">
              <Link href='https://github.com/VictorOnose'> <Image src="/images/github.png" objectFit="contain" className="bg-transparent" width={45} height={45} alt="github" /></Link>
            </Button>

          </div>
          <Projects />
        </div >
      </div >
      <footer className="bg-gray-800 text-gray-400 text-center py-4 mt-6">
        <p>© 2025 Onose Victor. All rights reserved.</p>
      </footer>
    </body>


  );
}
