"use client";
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { css, useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const CustomNavbarItem = styled(NavbarItem)`
  a {
    color: ${(props) =>
      props.isActive
        ? "#7ef07e" /* Set the color for active items */
        : props.theme.colors.foreground}; /* Use the theme's foreground color */
  }
`;

// A scroller function that takes element id and smooth scrolls to it.
const scroll2El = (elID, extraOffset = 60) => {
  window.scrollTo({
    top: document.getElementById(elID).offsetTop - extraOffset,
    behavior: "smooth",
  });
};

const onBtnClick = (e) => {
  e.preventDefault();
  const goto = e.target.getAttribute("goto");
  setTimeout(() => {
    scroll2El(goto, goto.includes("catalogo") ? 0 : 60);
  }, 100);
};

export default function CustomNavbar() {
  const theme = useTheme();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Inicio",
    "Nosotros",
    "Plan Sanitario",
    "Catálogo",
    "Contacto",
  ];
  return (
    <Navbar
      className="bg-navbarBackground"
      onMenuOpenChange={setIsMenuOpen}
      position="sticky"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">DONBUFALO</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <CustomNavbarItem isActive>
          {/* <Link color="foreground" smooth spy to="#">
            Inicio
          </Link> */}
          <button goto="header-container" onClick={onBtnClick}>
            Inicio
          </button>
        </CustomNavbarItem>

        <CustomNavbarItem>
          {/* <Link color="foreground" smooth spy to="#us-container">

            Nosotros
          </Link> */}
          <button goto="us-container" onClick={onBtnClick}>
            Nosotros
          </button>
        </CustomNavbarItem>
        <CustomNavbarItem>
          {/* <Link href="#plan-container" smooth spy to="page">
            Plan Sanitario
          </Link> */}
          <button goto="plan-container" onClick={onBtnClick}>
            Plan Sanitario
          </button>
        </CustomNavbarItem>
        <CustomNavbarItem>
          {/* <Link color="foreground" smooth spy to="#catalogo-container">
            Catálogo
          </Link> */}
          <button goto="catalogo-container" onClick={onBtnClick}>
            Catálogo
          </button>
        </CustomNavbarItem>
        <CustomNavbarItem>
          {/* <Link color="foreground" smooth spy to="#contacto-container">

            Contacto
          </Link> */}
          <button goto="contacto-container" onClick={onBtnClick}>
            Contacto
          </button>
        </CustomNavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <CustomNavbarItem className="hidden lg:flex"></CustomNavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link color={"foreground"} className="w-full" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
