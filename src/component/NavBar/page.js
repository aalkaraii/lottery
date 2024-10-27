"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

const CustonNavBar = () => {
  const handleGitHubClick = () => {
    window.open("https://github.com/aalkaraii", "_blank");
  };
  return (
    <div>
      <Navbar>
        <NavbarBrand>
          <NavbarItem>
            <Link color="foreground" href="/#">
              <p className="font-bold text-inherit text-pink-500">ALAKA RAI</p>
              <br></br>
              <p> Student at KEC</p>
            </Link>
          </NavbarItem>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="/skills">
              skills
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/projects" color="foreground" aria-current="page">
              Projects
            </Link>
          </NavbarItem>
          <NavbarItem>
            <a
              href="/resume.pdf" // This links to the resume in the public folder
              target="_blank"
              rel="noopener noreferrer"
              className=" text-black font-bold py-2 px-4 rounded"
            >
              View Resume
            </a>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem color="foreground">
            <Link href="#" onClick={handleGitHubClick}>
              GitHub
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="pink" href="/contactus" variant="flat">
              Email
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default CustonNavBar;
