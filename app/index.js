"use client"
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { Button } from "../components/ui/button";
import Link from "next/link"
import Head from 'next/head'
import Projects from "../components/ui/Projects";


const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function Home() {

    return (

        <>
            <Head>
                <title>Onose Victor</title>
            </Head>
            <h1>My Projects</h1>
            <div class="container">

            </div>
            <Projects />

            <div><Button variant="outline" size="icon">
                <Link href='https://www.linkedin.com/in/victor-onose-051b0a2a9/'><Image src="/images/linkedin.png" alt="github" width={225} height={50} /></Link>
            </Button>
                <Button variant="outline" size="icon">
                    <Link href='https://github.com/VictorOnose'><Image src="/images/github.png" alt="github" width={225} height={50} /></Link>
                </Button></div>

        </>



    );
}
