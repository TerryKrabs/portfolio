
"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";
import {
    BsFacebook,
    BsGithub,
    BsInstagram,
    BsTwitter,
    BsLinkedin,
  } from "react-icons/bs";

  import DescriptionIcon from '@mui/icons-material/Description';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';



export function NavbarComponent() {
  return (
    <Navbar fluid className="bg-gray-900">
        <div className="w-[100px] h-[100%]">
        <img src="/assets/xh.png" alt="XH Logo" />
</div>
    <Navbar.Collapse>
    
  <div className="flex justify-end">    
        <a href="https://docs.google.com/document/d/1bcv-jyZteBP246aYso6Yg3M1JM1SdhOcxU6OKo7yTSQ/edit?usp=sharing" target="blank" className="text-white w-[50px] h-[50px] flex justify-end mb-6"><DescriptionIcon /></a> 
        <a href="https://docs.google.com/document/d/1bcv-jyZteBP246aYso6Yg3M1JM1SdhOcxU6OKo7yTSQ/edit?usp=sharing" target="blank" className="text-white w-[50px] h-[50px] flex justify-end mb-6"><GitHubIcon /></a> 
        <a href="https://docs.google.com/document/d/1bcv-jyZteBP246aYso6Yg3M1JM1SdhOcxU6OKo7yTSQ/edit?usp=sharing" target="blank" className="text-white w-[50px] h-[50px] flex justify-end mb-6"><LinkedInIcon /></a> 
  </div>
 

  
    </Navbar.Collapse>




    </Navbar>
  );
}