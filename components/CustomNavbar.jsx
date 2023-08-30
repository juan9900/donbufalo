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

const CustomNavbarWrapper = styled.div`
  background-color: red;
`;

const CustomNavbarItem = styled(NavbarItem)`
  a {
    color: ${(props) =>
      props.isActive
        ? "red" /* Set the color for active items */
        : props.theme.colors.foreground}; /* Use the theme's foreground color */
  }
`;

export default function CustomNavbar() {
  const theme = useTheme();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Inicio", "Catálogo", "Nosotros", "Contacto"];
  return (
    <CustomNavbarWrapper>
      <Navbar className="bg-navbarBackground" onMenuOpenChange={setIsMenuOpen}>
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
            <Link color="foreground" href="#">
              Inicio
            </Link>
          </CustomNavbarItem>
          <CustomNavbarItem>
            <Link color="foreground" href="#us-container">
              Nosotros
            </Link>
          </CustomNavbarItem>
          <CustomNavbarItem>
            <Link href="#" aria-current="page">
              Plan Sanitario
            </Link>
          </CustomNavbarItem>
          <CustomNavbarItem>
            <Link color="foreground" href="#">
              Catálogo
            </Link>
          </CustomNavbarItem>
          <CustomNavbarItem>
            <Link color="foreground" href="#">
              Contacto
            </Link>
          </CustomNavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <CustomNavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </CustomNavbarItem>
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
    </CustomNavbarWrapper>
  );
}
