"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import { NavBarComponent } from "@/components/ui/NavBarComponent";
import { IPadCursorProvider, useIPadCursor } from "ipad-cursor/react";
import type { IpadCursorConfig } from "ipad-cursor";


const Home = () => {
  const config: IpadCursorConfig = {};
  useIPadCursor();
  return (
    <IPadCursorProvider config={config}>
    <main className="bg-black-100">
      <NavBarComponent />
      <div className="relative  flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5"> 
      <div className="max-w-7xl w-full">
         <section id="home">
        <Hero />
        </section>
        <section id="about">
        <Grid />
        </section>
        <section id="testimonials">
        <Clients />
        </section>
        <section id="integration">
        <Experience />
        </section>
        <section id="price">
        <Approach />
        </section>
        <Footer />
      </div>
      </div>
    </main>
    </IPadCursorProvider>
  );
};

export default Home;
