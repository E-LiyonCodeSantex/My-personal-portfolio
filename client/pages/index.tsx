import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import landingImage from "@/public/assets/landing-image.jpg";
import backgroundImage from "@/public/assets/ABout-background.png";
import serviceBackground from "@/public/assets/service-bg.png";
import profilePic from "@/public/assets/Chinedu.png";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import AboutUsCard from "@/component/AboutCard";
import { ABOUT_US_CARDS } from "@/constant/index";
import { TABLE_DATA } from "@/constant/table";
import TableCard from "@/component/tableCard";
import TechStackCard from "@/component/techStack";
import { TECH_STACK_DATA } from "@/constant/techStackData";
import ServicesCard from "@/component/services";
import { ServicesCardData } from "@/constant/services";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {

  // For hover state
  const [isHovered, setIsHovered] = useState(false);

  // Animation variants for the background
  const bgVariants = {
    initial: { x: "-100%" },
    hover: {
      x: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 500,
        damping: 30
      }
    }
  };

  const curentYear = new Date().getFullYear();

  return (
    <main
      className={`${geistSans.className} ${geistMono.className} text-white font-sans flex flex-col items-center justify-center`}
    >
      <div className="flex flex-col items-center justify-center w-full h-screen relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#34BD5D] via-[#97D7AA] to-[#34BD5D] animate-swirl"></div>
        <div className="absolute inset-0 z-1 bg-gradient-to-bl from-[#24B3B3] via-[rgba(151,215,170,0.4)] to-[#24B3B3]"></div>
        {/* Header falling in after delay */}
        <nav className="flex justify-around items-center p-4 mt-4  gap-10 w-full z-10
        absolute top-0 left-1/2 -translate-x-1/2 animate-bounce-in delay-[500ms]">
          <ul className="flex gap-10 text-lg font-medium">
            <a href="#about"> <li className="hover:text-xl w-[60px]">About</li></a>
            <a href="#services"><li className="hover:text-xl w-[90px]">Services</li></a>
          </ul>
          <div
            className="relative inline-block rounded-xl overflow-hidden cursor-pointer border-2 border-white"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Animated background */}
            <motion.span
              variants={bgVariants}
              initial="initial"
              animate={isHovered ? "hover" : "initial"}
              className="absolute top-0 left-0 h-full w-full bg-white z-0 "
              style={{ borderRadius: '0.75rem' }}
            />
            {/* Link text */}
            <a
              href="mailto:eelyondesign@gmail.com?subject=Project%20Inquiry&body=Hi%20there,%20I%20would%20like%20to%20discuss%20a%20project..."
              className={`relative z-10 text-lg font-medium px-4 py-2 transition-colors duration-300 ${isHovered ? "text-black" : "text-white"}`}
              style={{ borderRadius: '0.75rem' }}
            >
              Hit Us Up
            </a>
          </div>
        </nav>

        {/* Top texts coming down */}
        <div className="absolute top-45 w-full flex justify-around gap-10 animate-drop-down delay-[1000ms] z-10">
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-transparent bg-clip-text">Design</h1>
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364]  text-transparent bg-clip-text">CODE</h1>
        </div>
        <h1 className="text-4xl font-extrabold w-full flex justify-center items-center z-10 text-white animate-bounce-in delay-[500ms]">Welcome to My Portfolio</h1>
        {/* Bottom texts rising up */}
        <div className="absolute bottom-45 w-full flex justify-around gap-10 animate-rise-up delay-[1000ms] z-10">
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364]  text-transparent bg-clip-text">CREATE</h1>
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364]  text-transparent bg-clip-text">Innovate</h1>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="flex flex-col items-center justify-center w-full relative overflow-hidden animate-drop-in p-4">
        <Image
          src={backgroundImage}
          alt="Landing"
          fill
          className="cover w-full z-0"
        />

        <h1 className="flex justify-center items-center text-sm sm:text-3xl font-extrabold rounded-2xl mb-6 px-4 py-2 bg-[#878484] z-10">Welcome to My Portfolio</h1>
        <div className="w-full flex flex-col sm:flex-row justify-around items-center sm:items-start gap-4 z-10">
          <Image
            src={profilePic}
            alt="Profile Picture"
            width={300}
            height={200}
            className="rounded-lg border-4 border-white/70 shadow-lg animate-fade-in-up delay-[500ms] z-10"
          />
          <p className="flex-1 text-justify leading-relaxed">
            Hi, I’m Chinedu—a passionate UI/UX designer and full-stack web developer.
            The founder and CEO of E-Lyon design based in Lagos, Nigeria.
            I specialize in crafting intuitive  digital experiences that merge clean design with powerful functionality.
            With a strong foundation in React, Node.js, and MongoDB, I build scalable web applications that don’t just work—they engage.
            My design process starts in Figma, where I sketch  out thoughtful interfaces that prioritize clarity, accessibility, and user flow.
            From wireframes to production-ready code, Ibring ideas to life with  precision and creativity.
            I believe in building solutions that grow with people. That’s why I’m currently developing a dynamic portfolio system—one that evolves as I do,
            allowing me to seamlessly showcase new  projects, designs, and innovations.
            Whether I’m designing a sleek landing page or engineering a robust backend API, I approach every challenge with curiosity, intention, and a commitment to excellence.
          </p>
        </div>
      </section>

      {/**About us card */}
      <section className="flex flex-col justifiy-center items-center w-full bg-[#111827] animate-drop-in p-4 gap-6">
        {ABOUT_US_CARDS.map((card) => (
          <AboutUsCard key={card.id} card={card} />
        ))}
      </section>

      {/**Table section */}
      <section className="flex flex-col items-center justify-center w-full relative overflow-hidden animate-drop-in gap-6 p-4">
        <Image
          src={backgroundImage}
          alt="Landing"
          fill
          className="cover w-full z-0"
        />
        <h1 className="z-10 py-4">💡 What I Bring to the Table</h1>

        {TABLE_DATA.map((card) => (
          <TableCard key={card.id} card={card} />
        ))}
      </section>

      {/**Mission statement */}
      <section className="flex flex-col items-center justify-center w-full relative overflow-hidden animate-drop-in gap-6 py-4">
        <Image
          src={backgroundImage}
          alt="Landing"
          fill
          className="cover w-full z-0"
        />
        <h1 className="z-10 py-4"> Mission Statement</h1>

        <p className="z-10 px-4 text-justify">
          I believe that great digital experiences begin with empathy and end with impact. As a UI/UX designer and full-stack developer, I stand for clarity, usability, and innovation—crafting interfaces that feel intuitive and building systems that scale with purpose.
          I solve the disconnect between design and development by bridging creativity with code. Whether it's a sleek landing page or a dynamic web application, I ensure that every pixel and every function serves the user.
          I do what I do because I love turning ideas into reality. I’m driven by the challenge of solving real problems with thoughtful design and clean architecture—and I’m passionate about creating tools and experiences that grow with people.
        </p>
        <div className="w-full">
          <div className=" w-full z-15 relative w-full overflow-hidden group">
            <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-20" />
            <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-20" />
            <div className="flex gap-4 w-max overflow-x-auto animate-scroll">
              <div className="flex gap-4">
                {[...TECH_STACK_DATA.slice(0, 6), ...TECH_STACK_DATA.slice(0, 6)].map((card, index) => (
                  <TechStackCard key={index} card={card} />
                ))}
              </div>
            </div>
          </div>

          <div className=" w-full z-15 relative w-full overflow-hidden group">
            <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-20" />
            <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-20" />
            <div className="flex gap-4 w-max overflow-x-auto animate-scroll-to-right">
              <div className="flex gap-4">
                {[...TECH_STACK_DATA.slice(6, 12), ...TECH_STACK_DATA.slice(6, 12)].map((card, index) => (
                  <TechStackCard key={index} card={card} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      { /**Services Section */}
      <section id="services" className="flex flex-col items-center justify-center w-full relative overflow-hidden animate-drop-in gap-6 py-4">
        <Image
          src={serviceBackground}
          alt="Landing"
          fill
          className="cover w-full z-0"
        />
        <h1 className="z-10 py-2 bg-gray-600 border-black/40 rounded-full px-4">Services</h1>

        <div className="z-10 w-full p-4">
          {ServicesCardData.map((card, index) => (
            <ServicesCard key={index} card={card} />
          ))}
        </div>
      </section>
      {/**Contact Section */}
      <section id="contact" className="flex flex-col items-center justify-center w-full relative overflow-hidden animate-drop-in gap-6 py-4">
        <Image
          src={backgroundImage}
          alt="Landing"
          fill
          className="cover w-full z-0"
        />
        <h1 className="z-10 py-2 bg-gray-600 border-black/40 rounded-full px-4">Contact Me</h1>
        <p className="p-4 z-10">
          Whether you’re looking to collaborate, need help bringing your digital ideas to life, or just want to say hello—I’d love to hear from you.
          I specialize in crafting clean, user-focused designs and building scalable web solutions. If you have a project in mind or want to discuss how we can work together, feel free to {" "}
          <a href="mailto:eelyondesign@gmail.com?subject=Project%20Inquiry&body=Hi%20there,%20I%20would%20like%20to%20discuss%20a%20project..." className="text-blue-400">
            reach out
          </a>.
        </p>

        <div className="mt-4 flex flex-col w-full items-start justify-start px-4 z-10">
          <h1 className="font-bold text-2xl">Let’s Connect</h1>

          <ul className="mt-2 gap-2 pl-4 list-disc list-inside text-white/40">
            <li>Email:{" "} <span className="text-white">chineduezemwho@gmail.com</span></li>
            <li>WhatsApp: {" "} <span className="text-white">+2347031246600</span></li>
            <li>Location: {" "} <span className="text-white">Lagos Nigeria</span></li>
            <li>Availability: {" "} <span className="text-white">Open to freelance, remote work, and creative collaborations</span></li>
          </ul>
        </div>
      </section>

      <footer className="w-full flex flex-wrap gap-4 items-center justify-center p-4 bg-[#111827] pb-6">
        <div className="flex flex-col justify-center items-center gap-4">
          <h2 className="font-bold text-xl">Chinedu Ezemuonye</h2>
          <ul className="text-sm">
            <li>A full stack developer and UI/UX designer</li>
            <li>© 2025 Chinedu Ezemuonye. All rights reserved.</li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <h2 className="font-bold text-xl">Useful Links</h2>
          <ul className="text-sm">
            <a href="#about"><li>About me</li></a>
            <a href="#services"><li>My Services</li></a>
            <a href="#contact"><li>Contact me</li></a>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <h2 className="font-bold text-xl">Follow me</h2>
          <div className="flex gap-4">
            {/**Whatsapp */}
            <a href="https://wa.me/2347031246600" target="_blank" rel="noopener noreferrer">
              <img src="/assets/icons/whatsapp.png" alt="WhatsApp" className="w-[30px] h-[30px]" />
            </a>

            {/**Youtube */}
            <a href="https://www.youtube.com/@SantexEzem" target="_blank" rel="noopener noreferrer">
              <img src="/assets/icons/Vector.png" alt="Youtube" className="w-[30px] h-[30px]" />
            </a>

            {/* Twitter */}
            <a href="https://x.com/chineduezemwho" target="_blank" rel="noopener noreferrer">
              <img src="/assets/icons/xmark-solid-full 1.png" alt="Twitter" className="w-[30px] h-[30px]" />
            </a>

            {/* TikTok */}
            <a href="https://www.tiktok.com/chineduezemwho" target="_blank" rel="noopener noreferrer">
              <img src="/assets/icons/tiktok-brands-solid-full 1.png" alt="TikTok" className="w-[30px] h-[30px]" />
            </a>

            {/* Facebook */}
            <a href="https://www.facebook.com/share/1GVLZFq85e/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/icons/facebook-brands-solid-full 1.png" alt="Facebook" className="w-[30px] h-[30px]" />
            </a>

            {/* GitHub */}
            <a href="https://github.com/E-LiyonCodeSantex" target="_blank" rel="noopener noreferrer">
              <img src="/assets/icons/github-brands-solid-full 1.png" alt="GitHub" className="w-[30px] h-[30px]" />
            </a>
          </div>

        </div>

        <p className="mt-4 flex w-full justify-center items-center">@  Chinedu Ezemuonye {curentYear}</p>
      </footer>
    </main >
  );
}
