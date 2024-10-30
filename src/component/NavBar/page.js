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
import { Github } from "@icons-pack/react-simple-icons";

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
    <div className="shadow-lg">
      <Navbar isBordered variant="sticky" maxWidth="xl">
        <NavbarBrand>
          <NavbarItem>
            <Link
              color="foreground"
              href="#"
              className="flex flex-col items-center"
            >
              <div className="flex items-center space-x-2">
                {/* Girl Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  width="50"
                  height="70"
                  className="text-pink-500"
                >
                  <path d="M12 12c1.656 0 3-1.343 3-3s-1.344-3-3-3-3 1.343-3 3 1.344 3 3 3zm0 1.5c-2.723 0-8 1.364-8 4.087V20h16v-2.413c0-2.723-5.277-4.087-8-4.087z" />
                </svg>

                {/* Name and Title */}
                <div>
                  <p className="font-extrabold text-pink-500 text-lg">
                    ALAKA RAI
                  </p>
                  <p className="text-xs text-gray-500">Student at KEC</p>
                </div>
              </div>
            </Link>
          </NavbarItem>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-8" justify="center">
          <NavbarItem>
            <Link
              color="primary"
              onClick={scrollToSkills}
              className="hover:text-pink-600 transition-colors duration-300"
            >
              Skills
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="primary"
              onClick={scrollToProjects}
              className="hover:text-pink-600 transition-colors duration-300"
            >
              Projects
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="primary"
              onClick={scrollToConnect}
              className="hover:text-pink-600 transition-colors duration-300"
            >
              Social Media
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-bold py-2 px-4 rounded hover:bg-pink-500 hover:text-white transition-all duration-300"
            >
              View Resume
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end" className="gap-4">
          <NavbarItem>
            <Button
              auto
              flat
              icon={<Github size={20} />}
              onClick={handleGitHubClick}
              className="hover:bg-gray-200 rounded-full"
            >
              Github
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              as="a"
              href="mailto:mrsalka02@gmail.com"
              color="primary"
              variant="shadow"
              className="hover:bg-pink-500 hover:text-white transition-all duration-300"
            >
              Mail
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default CustonNavBar;
