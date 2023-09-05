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
} from "@nextui-org/react";
import logo from "/public/img/ISO-LOGO.png";
import styled from "@emotion/styled";
import Image from "next/image";

const CustomNav = styled(Navbar)`
  @media screen and (min-width: 1024px) {
    li {
      margin: 0 0.5rem;
    }
  }

  @media screen and (min-width: 2000px) {
    button {
      font-size: 1.5em;
    }
  }
`;

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
    <CustomNav
      className="bg-darkBackground 3xl:py-3"
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
        <NavbarItem isActive>
          {/* <Link color="foreground" smooth spy to="#">
            Inicio
          </Link> */}
        </NavbarItem>

        <NavbarItem>
          <button goto="us-container" onClick={onBtnClick}>
            Nosotros
          </button>
        </NavbarItem>
        <NavbarItem>
          <button goto="plan-container" onClick={onBtnClick}>
            Plan Sanitario
          </button>
        </NavbarItem>
        <NavbarItem>
          <button goto="catalogo-container" onClick={onBtnClick}>
            Catálogo
          </button>
        </NavbarItem>
        <NavbarItem>
          <button goto="book-container" onClick={onBtnClick}>
            Libro
          </button>
        </NavbarItem>
        <NavbarItem>
          <button goto="testimonials-container" onClick={onBtnClick}>
            Testimonios
          </button>
        </NavbarItem>
        <NavbarItem>
          <button goto="contacto-container" onClick={onBtnClick}>
            Contacto
          </button>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex"></NavbarItem>
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
    </CustomNav>
  );
}
