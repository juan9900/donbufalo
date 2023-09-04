"use client";
import { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import { useTheme } from "@emotion/react";
import logo from "/public/img/ISO-LOGO.png";
import styled from "@emotion/styled";
import Image from "next/image";

const CustomNavbarItem = styled(NavbarItem)``;

// A scroller function that takes element id and smooth scrolls to it.
const scroll2El = (elID, extraOffset = 60) => {
  window.scrollTo({
    top: document.getElementById(elID).offsetTop - 60,
    behavior: "smooth",
  });
};

const BrandLogo = styled(Image)`
  max-width: 40px;
  math-style: 40px;
  margin-right: 0.5rem;
`;

export default function CustomNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenuOnOutsideClick = (e) => {
      if (isMenuOpen && e.target.closest(".navbar-menu") === null) {
        setIsMenuOpen(false);
      }
    };

    // Add event listeners when the component mounts
    document.addEventListener("click", closeMenuOnOutsideClick);

    // Clean up event listeners when the component unmounts
    return () => {
      document.removeEventListener("click", closeMenuOnOutsideClick);
    };
  }, [isMenuOpen]);

  const menuItems = [
    { title: "Inicio", goto: "header-container" },
    { title: "Nosotros", goto: "us-container" },
    { title: "Plan Sanitario", goto: "plan-container" },
    { title: "Catálogo", goto: "catalogo-container" },
    { title: "Libro", goto: "book-container" },
    { title: "Testimonios", goto: "testimonials-container" },

    { title: "Contacto", goto: "contacto-container" },
  ];

  const onBtnClick = (e) => {
    e.preventDefault();
    const goto = e.target.getAttribute("goto");
    setTimeout(() => {
      scroll2El(goto, goto.includes("catalogo") ? 0 : 60);
    }, 100);
    setIsMenuOpen(false);
  };
  return (
    <Navbar
      className="bg-darkBackground"
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      // position="sticky"
      shouldHideOnScroll
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="relative flex flex-row justify-start">
          <BrandLogo width={60} height={60} src={logo} alt="Logo Don Bufalo" />
          <button
            className="font-bold"
            goto="header-container"
            onClick={onBtnClick}
          >
            DON BUFALO
          </button>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <CustomNavbarItem isActive>
          {/* <Link color="foreground" smooth spy to="#">
            Inicio
          </Link> */}
        </CustomNavbarItem>

        <CustomNavbarItem>
          <button goto="us-container" onClick={onBtnClick}>
            Nosotros
          </button>
        </CustomNavbarItem>
        <CustomNavbarItem>
          <button goto="plan-container" onClick={onBtnClick}>
            Plan Sanitario
          </button>
        </CustomNavbarItem>
        <CustomNavbarItem>
          <button goto="catalogo-container" onClick={onBtnClick}>
            Catálogo
          </button>
        </CustomNavbarItem>
        <CustomNavbarItem>
          <button goto="book-container" onClick={onBtnClick}>
            Libro
          </button>
        </CustomNavbarItem>
        <CustomNavbarItem>
          <button goto="testimonials-container" onClick={onBtnClick}>
            Testimonios
          </button>
        </CustomNavbarItem>
        <CustomNavbarItem>
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
            <button
              goto={item.goto}
              color={"foreground"}
              className="w-full"
              href="#"
              size="lg"
              onClick={onBtnClick}
            >
              {item.title}
            </button>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
