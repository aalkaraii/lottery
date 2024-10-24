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
  return (
    <div>
      <Navbar>
        <NavbarBrand>
          <div className="">
            <p className="font-bold text-inherit">ALAKA RAI</p>
            <p> Student at KEC</p>
          </div>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              skills
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" color="foreground" aria-current="page">
              Projects
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Resume
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem color="foreground">
            <Link href="#">GitHub</Link>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              color="pink"
              href="#"
              variant="flat"
              className="text-pink-600"
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
