"use client";
import Link from "next/link";
import { Navbar, Footer} from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter, BsLinkedin} from "react-icons/bs";
export default function Home() {
  return (
 <>
      <div className="bg-indigo-900 ">
        <div className="grid grid-cols-6 mx-7 py-8 ">
          <div className=" col-span-6 md:col-span-3 lg:col-span-2  md:w-full w-48 ml-20 md:ml-0">
            <div className="flex justify-center">
                  <img src="/assets/HeadshotX.jpg" className="border-4 shadow border-black rounded-full w-[300px] rotateIn" alt="Portfolio Picture " />
            </div>
          </div>
          <div className=" col-span-6 md:col-span-3 lg:col-span-4 lg:px-16 flex flex-col justify-between">
            <div className="">
            <div className="flex flex-col items-center text-3xl pt-14">
        <p className="text-3xl font-bold mb-5">Software Developer</p>
        <p className="text-2xl"> Xavier Hopkins, as a Software Developer, is responsible for designing, coding, testing, and maintaining software applications. His duties include collaborating with team members to analyze user needs and design software solutions, writing clean, efficient, and maintainable code, debugging and troubleshooting software issues, and ensuring software quality through testing and code reviews</p>
      </div>
      <br />
              <div className=" grid grid-cols-2 pt-8">
                <div className="text-2xl">
                  <p>Languages:</p>
                  <div>
                    <ul className="grid grid-cols-2">
                      <li>Js</li>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>TS</li>
                      <li>SQL</li>
                      <li>TSX</li>
                    </ul>
                  </div>
                </div>
                <div className="text-2xl">
                   <p> Frameworks:</p>
                  <ul className="grid grid-cols-2">
                    <li>Dotnet 7</li>
                    <li>React</li>
                    <li>Next JS</li>
                    <li>Tailwind</li>
                    <li>Bootstrap</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center text-4xl font-titillium font-bold pt-14">
        <p className="">Projects</p>
      </div>
      <div className="grid grid-cols-6 mx-7 py-8 px-2 gap-5">
        <div className=" col-span-6 md:col-span-3 lg:col-span-2  md:w-full w-48 ml-20 md:ml-0">
          <h1 className="text-3xl font-bold text-center">ShorTalk</h1>
          <br />
          <div className=" w-[100%] h-40 md:h-[45vh] lg:h-[35vh] rounded-3xl"></div>
          <br />
          <h3 className="text-2xl text-center">Worked Primarily on the front-end while providing assistance to the back-end devs whenever needed. ShorTalk was inspired by the board game "Poetry for Neanderthals", but adds the accessability of being readily availible online too play with friends!</h3>
        </div>
        <div className=" col-span-6 md:col-span-3 lg:col-span-2  md:w-full w-48 ml-20 md:ml-0">
          <h1 className="text-3xl font-bold text-center">Pokemon</h1>
          <br />
          <div className=" w-[100%] h-40 md:h-[45vh] lg:h-[35vh] rounded-3xl"></div>
          <br />
          <h3 className="text-2xl text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati natus aliquam nisi delectus, quae quam, consequatur dolores aut officiis neque deleniti itaque facilis temporibus labore tenetur quis eum. Ducimus, consequuntur?</h3>
        </div>
        <div className=" col-span-6 md:col-span-3 lg:col-span-2  md:w-full w-48 ml-20 md:ml-0">
          <h1 className="text-3xl font-bold text-center">Weather App</h1>
          <br />
          <div className=" w-[100%] h-40 md:h-[45vh] lg:h-[35vh] rounded-3xl"></div>
          <br />
          <h3 className="text-2xl text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati natus aliquam nisi delectus, quae quam, consequatur dolores aut officiis neque deleniti itaque facilis temporibus labore tenetur quis eum. Ducimus, consequuntur?</h3>
        </div>
      </div>
      </div>

      {/* Footer/ Social Media Links */}
      <Footer container>
        <div className="w-full">
          <div className="w-full">
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitter} />
              <Footer.Icon href="https://github.com/TerryKrabs" icon={BsGithub} />
              <Footer.Icon href="https://www.linkedin.com/in/xavier-hopkins-4573a22ba/" icon={BsLinkedin} />
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
}