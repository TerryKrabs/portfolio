"use client";
import Link from "next/link";
import { Navbar, Footer } from "flowbite-react";
import { BsGithub,BsLinkedin} from "react-icons/bs";
import { NavbarComponent } from "@/components/NavbarComponent";
import DescriptionIcon from '@mui/icons-material/Description';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Home() {
  return (
    <>
      <div className="bg-gray-900 ">
        <div>
        <NavbarComponent/>
        </div>

        <div className="grid grid-cols-6 mx-7 py-8">

        <div className=" col-span-6 md:col-span-3 lg:col-span-4 lg:px-16 flex flex-col justify-between">
            <div className="">
              <div className="flex flex-col items-center text-3xl pt-14">
                <p className="text-3xl font-bold mb-5 text-green-300 ">Software Developer</p>
                <p className="text-2xl ">
                  {" "}
                  As a Software Developer, i'm responsible for
                  designing, coding, testing, and maintaining software
                  applications. My duties include collaborating with team
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
                <div className="text-2xl text-green-300 ">
                  <p className="text-green-300">Languages:</p>
                  <div>
                    <ul className="grid grid-cols-6 mt-5">
                      <li><img className="w-[50px] h-[50px] slideRight" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" /></li>
                      <li><img className="w-[50px] h-[50px] slideRight" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg" /></li>
                      <li><img className="w-[50px] h-[50px] slideRight" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg" /></li>
                      <li><img  className="w-[50px] h-[50px] slideRight"src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" /></li>
                      <li><img className="w-[50px] h-[50px] slideRight" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" /></li>
                      <li><img className="w-[50px] h-[50px] slideRight" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" /></li>
                    </ul>
                  </div> 
                </div>
                <div className="text-2xl ml-16  ">
                  <p className="text-green-300"> Frameworks:</p>
                  <ul className="grid grid-cols-5 mt-5">
                    <li><img className="w-[50px] h-[50px] slideLeft" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-plain-wordmark.svg" /></li>
                    <li><img className="w-[50px] h-[50px] slideLeft" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" /></li>
                    <li><img className="w-[50px] h-[50px] slideLeft" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" /></li>
                    <li><img className="w-[50px] h-[50px] slideLeft" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" /></li>
                    <li><img className="w-[50px] h-[50px] slideLeft" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg" /></li>
                  </ul>
                  
                </div>

                <div className="text-2xl text-green-300 mt-5">
                  <p className="text-green-300">Productivity:</p>
                  <div> 
                    <ul className="grid grid-cols-7 mt-5">
                      <li><img className="w-[50px] h-[50px] slideRight" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg" /></li>
                      <li><img className="w-[50px] h-[50px] slideRight" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original-wordmark.svg" /></li>
                      <li><img className="w-[50px] h-[50px] slideRight" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg" /></li>
                      <li><img  className="w-[50px] h-[50px] slideRight"src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original-wordmark.svg" /></li>
                      <li><img className="w-[50px] h-[50px] slideRight" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg" /></li>
                      <li><img className="w-[50px] h-[50px] slideRight" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" /></li>
                      {/* <li> <BsGithub className="w-[50px] h-[50px] slideRight"/> </li> */}
                      <li><img className="w-[50px] h-[50px] slideRight" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" /></li>
                      {/* <li><img className="w-[50px] h-[50px] slideRight" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original-wordmark.svg" /></li> */}


                    </ul>
                  </div> 
                </div>


          

              </div>
            </div>
          </div>


                  {/* VScode, Github, Slack, Azure, Jira, Figma Notion */}



          <div className=" col-span-6 md:col-span-3 lg:col-span-2  md:w-full w-48 ml-20 md:ml-0">
            <div className="flex justify-center">
              <img  src="/assets/HeadshotX.jpg" className=" rounded-full w-[300px] " alt="Portfolio Picture "
              />
            </div>
          </div>

        </div>

        <div className="">
          <div className="flex flex-col items-center text-4xl font-bold pt-10">
            <p className="pb-5 text-green-300">Projects</p>
          </div>

          <div className="grid grid-cols-6 mx-7 py-8 px-2 gap-5">
            <div className=" col-span-6 md:col-span-3 lg:col-span-2  md:w-full w-48 ml-20 md:ml-0">
              <h1 className="text-3xl font-bold text-center">ShorTalk</h1>
              <a target="blank" href="https://shortalk-front-end.vercel.app/">
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
              <a target="blank" href="https://tipcalc-six.vercel.app/">
                <img src="/assets/TipCalcPic.png" alt="TipCalcPIcture" />
              </a>

              {/* <img className="w-[50px] h-[50px] slideRight" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" /> */}

              <h3 className="text-2xl text-center">
                A small application used for calculating the total at the end of
                a meal!
              </h3>
            </div>
            <div className=" col-span-6 md:col-span-3 lg:col-span-2  md:w-full w-48 ml-20 md:ml-0">
              <h1 className="text-3xl font-bold text-center">
                Social Media Deashboard
              </h1>
              <a target="blank" href="https://final-dash-gray.vercel.app/">
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
        <div className="w-full bg-gray-900 ">
          <div className="w-full">
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">





              {/* <Footer.Icon
                href="https://github.com/TerryKrabs"
                icon={BsGithub}
              />
              <Footer.Icon
                href="https://www.linkedin.com/in/xavier-hopkins-4573a22ba/"
                icon={BsLinkedin}
              /> */}
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
}





/* <div className=" text-2xl text-green-300 mt-5 pl-60">
<p className="text-green-300 flex justify-center">Productivity:</p> */
/* VScode, Github, Slack, Azure, Jira, Figma Notion */
/* <div className=" justify-center ml-9">
  <ul className="grid grid-cols-5 mt-5">
    <li><img className="w-[50px] h-[50px] slideRight" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" /></li>
    <li><img className="w-[50px] h-[50px] slideRight" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg" /></li>
    <li><img className="w-[50px] h-[50px] slideRight" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg" /></li>
    <li><img  className="w-[50px] h-[50px] slideRight"src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" /></li>
    <li><img className="w-[50px] h-[50px] slideRight" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" /></li>
  </ul>
</div> 
</div> */