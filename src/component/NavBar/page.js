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

const CustonNavBar = ({
  scrollToSkills,
  scrollToProjects,
  scrollToContact,
  scrollToConnect,
}) => {
  const handleGitHubClick = () => {
    window.open("https://github.com/aalkaraii", "_blank");
  };

  return (
    <div>
      <Navbar>
        <NavbarBrand>
          <NavbarItem>
            <Link
              color="foreground"
              href="#"
              className="flex flex-col items-center"
            >
              <p className="font-bold text-inherit text-pink-500">ALAKA RAI</p>
              <p>Student at KEC</p>
            </Link>
          </NavbarItem>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" onClick={scrollToSkills}>
              Skills
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" onClick={scrollToProjects}>
              Projects
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" onClick={scrollToConnect}>
              social media
            </Link>
          </NavbarItem>
          <NavbarItem>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-bold py-2 px-4 rounded"
            >
              View Resume
            </a>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem color="black">
            <Link href="#" onClick={handleGitHubClick}>
              GitHub
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              color="black"
              onClick={scrollToContact}
              variant="flat"
            >
              Email
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default CustonNavBar;
