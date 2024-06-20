### Xaiver Hopkins

### 5/9/24

### Portfolio

### Summary: I Used Next.js too create the first draft of my portfolio. I was lacking inspiration when I first began building the site, but after looking over some of peers work I believe im going to re-design the entire site for my 2nd draft!



f


##### Reference


"use client";
import Link from "next/link";
import { Navbar, Footer } from "flowbite-react";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
} from "react-icons/bs";
export default function Home() {
  return (
    <>
      <div className="bg-gray-900 ">
        <div className="grid grid-cols-6 mx-7 py-8">
          <div className=" col-span-6 md:col-span-3 lg:col-span-2  md:w-full w-48 ml-20 md:ml-0">
            <div className="flex justify-center">
              <img
                src="/assets/HeadshotX.jpg"
                className="border-4 shadow border-green-300 rounded-xl w-[300px] rotateIn"
                alt="Portfolio Picture "
              />
            </div>
          </div>
          <div className=" col-span-6 md:col-span-3 lg:col-span-4 lg:px-16 flex flex-col justify-between">
            <div className="">
              <div className="flex flex-col items-center text-3xl pt-14">
                <p className="text-3xl font-bold mb-5 text-green-300">Software Developer</p>
                <p className="text-2xl">
                  {" "}
                  Xavier Hopkins, as a Software Developer, is responsible for
                  designing, coding, testing, and maintaining software
                  applications. His duties include collaborating with team
                  members to analyze user needs and design software solutions,
                  writing clean, efficient, and maintainable code, debugging and
                  troubleshooting software issues, and ensuring software quality
                  through testing and code reviews
                </p>
              </div>
              <br />
              <div>
                <h1></h1>
              </div>
              <div className=" grid grid-cols-2 pt-8 ">
                <div className="text-2xl text-green-300">
                  <p className="text-green-300">Languages:</p>
                  <div>
                    <ul className="grid grid-cols-2">
                      <li><img className="w-[50px] h-[50px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" /></li>
                      <li><img className="w-[50px] h-[50px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg" /></li>
                      <li><img className="w-[50px] h-[50px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg" /></li>
                      <li><img  className="w-[50px] h-[50px]"src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" /></li>
                      <li><img className="w-[50px] h-[50px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" /></li>
                    </ul>
                  </div>
                </div>
                <div className="text-2xl  ">
                  <p className="text-green-300"> Frameworks:</p>
                  <ul className="grid grid-cols-2">
                    <li><img className="w-[50px] h-[50px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-plain-wordmark.svg" /></li>
                    <li><img className="w-[50px] h-[50px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" /></li>
                    <li><img className="w-[50px] h-[50px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" /></li>
                    <li><img className="w-[50px] h-[50px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg" /></li>
                    <li><img className="w-[50px] h-[50px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg" /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-2 shadow border-white ">
          <div className="flex flex-col items-center text-4xl font-bold pt-10">
            <p className="pb-5 text-green-300">Projects</p>
          </div>

          <div className="grid grid-cols-6 mx-7 py-8 px-2 gap-5">
            <div className=" col-span-6 md:col-span-3 lg:col-span-2  md:w-full w-48 ml-20 md:ml-0">
              <h1 className="text-3xl font-bold text-center">ShorTalk</h1>
              <a href="https://shortalk-front-end.vercel.app/">
                <img src="/assets/ShortTalkPng.png" alt="ShorTalkPicture" />
              </a>
              <h3 className="text-2xl text-center">
                Worked Primarily on the front-end while providing assistance to
                the back-end devs whenever needed. ShorTalk was inspired by the
                board game {"'"}Poetry for Neanderthals{"'"}, but adds the
                accessability of being readily availible online too play with
                friends!
              </h3>
            </div>
            <div className=" col-span-6 md:col-span-3 lg:col-span-2  md:w-full w-48 ml-20 md:ml-0">
              <h1 className="text-3xl font-bold text-center ">Tip Calculator</h1>
              <a href="https://tipcalc-six.vercel.app/">
                <img src="/assets/TipCalcPic.png" alt="TipCalcPIcture" />
              </a>
              <h3 className="text-2xl text-center">
                A small application used for calculating the total at the end of
                a meal!
              </h3>
            </div>
            <div className=" col-span-6 md:col-span-3 lg:col-span-2  md:w-full w-48 ml-20 md:ml-0">
              <h1 className="text-3xl font-bold text-center">
                Social Media Deashboard
              </h1>
              <a href="https://final-dash-gray.vercel.app/">
                <img src="/assets/SMDpicture.png" alt="Social" />
              </a>
              <h3 className="text-2xl text-center">
                This website was based off a prototype for an upcoming social
                media app!
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Footer/ Social Media Links */}
      <Footer container>
        <div className="w-full bg-green-300 ">
          <div className="w-full">
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitter} />
              <Footer.Icon
                href="https://github.com/TerryKrabs"
                icon={BsGithub}
              />
              <Footer.Icon
                href="https://www.linkedin.com/in/xavier-hopkins-4573a22ba/"
                icon={BsLinkedin}
              />
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
}