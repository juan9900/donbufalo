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
import logo from "/public/img/ISO-LOGO.png";
import styled from "@emotion/styled";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const CustomNav = styled(Navbar)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  @media screen and (min-width: 1024px) {
    li {
      margin: 0 0.5rem;
    }
  }

  @media screen and (min-width: 2000px) {
    Link {
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

  // Get the current url path using nextjs useRouter hook
  const pathname = usePathname();

  const router = useRouter();

  // useEffect(() => {
  //   const closeMenuOnOutsideClick = (e) => {
  //     if (isMenuOpen && e.target.closest(".navbar-menu") === null) {
  //       setIsMenuOpen(false);
  //     }
  //   };

  //   // Add event listeners when the component mounts
  //   document.addEventListener("click", closeMenuOnOutsideClick);

  //   // Clean up event listeners when the component unmounts
  //   return () => {
  //     document.removeEventListener("click", closeMenuOnOutsideClick);
  //   };
  // }, [isMenuOpen]);

  const menuItems = [
    { title: "Inicio", goto: "header-container" },
    { title: "Nosotros", goto: "us-container" },
    { title: "Plan Sanitario", goto: "plan-container" },
    { title: "Catálogo", goto: "catalogo-container" },
    { title: "Libro", goto: "book-container" },
    { title: "Testimonios", goto: "testimonials-container" },

    { title: "Contacto", goto: "contacto-container" },
  ];

  const scrollToSection = (sectionId, extraOffset = 60) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - extraOffset,
        behavior: "smooth",
      });
    }
  };

  const onBtnClick = (e) => {
    e.preventDefault();
    const goto = e.target.getAttribute("goto");

    if (pathname !== "/") return router.push(`/#${goto}`);

    // Check if you're on the index page or a different page
    setTimeout(() => {
      scrollToSection(goto, goto.includes("catalogo") ? 0 : 60);
    }, 100);
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
          <Link
            href={pathname !== "/" ? "/" : "#header-container"}
            className="font-bold text-foreground cursor-pointer"
            goto="header-container"
            onClick={onBtnClick}
          >
            DON BUFALO
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {pathname === "/" ? (
        <>
          {" "}
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem isActive>
              {/* <Link  color="foreground" smooth spy to="#">
            Inicio
          </Link> */}
            </NavbarItem>

            <NavbarItem>
              <Link
                href={pathname !== "/" ? "/" : "#us-container"}
                className="text-foreground cursor-pointer"
                goto="us-container"
                onClick={onBtnClick}
              >
                Nosotros
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                href={pathname !== "/" ? "/" : "#plan-container"}
                className="text-foreground cursor-pointer"
                goto="plan-container"
                onClick={onBtnClick}
              >
                Plan Sanitario
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                href={pathname !== "/" ? "/" : "#catalogo-container"}
                className="text-foreground cursor-pointer"
                goto="catalogo-container"
                onClick={onBtnClick}
              >
                Catálogo
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                href={pathname !== "/" ? "/" : "#book-container"}
                className="text-foreground cursor-pointer"
                goto="book-container"
                onClick={onBtnClick}
              >
                Libro
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                href={pathname !== "/" ? "/" : "#testimonials-container"}
                className="text-foreground cursor-pointer"
                goto="testimonials-container"
                onClick={onBtnClick}
              >
                Testimonios
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                href={pathname !== "/" ? "/" : "#contacto-container"}
                className="text-foreground cursor-pointer"
                goto="contacto-container"
                onClick={onBtnClick}
              >
                Contacto
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex"></NavbarItem>
          </NavbarContent>
          <NavbarMenu>
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  goto={item.goto}
                  color={"foreground"}
                  className="w-full"
                  href="#"
                  size="lg"
                  // onClick={onBtnClick}
                >
                  {item.title}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </>
      ) : null}
    </CustomNav>
  );
}
