import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Image} from "@nextui-org/react";


export const NavBarComponent = () => {
  return (
    <Navbar className="bg-transparent">
      <NavbarBrand >
        <Image src="/logo.png"  />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-7 my-11" justify="center">
        <NavbarItem data-cursor="block" className="px-4 py-2">
          <Link href="#home" aria-current="page">
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem data-cursor="block"  className="p-4 py-2">
          <Link href="#about" color="foreground">
            Nosotros
          </Link>
        </NavbarItem>
        <NavbarItem data-cursor="block"  className="p-4 py-2">
          <Link color="foreground" href="#testimonials">
            Testimonios
          </Link>
        </NavbarItem>
         <NavbarItem data-cursor="block"  className="p-4 py-2">
          <Link color="foreground" href="#integration">
            Integración
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex p-4 py-2" data-cursor="block">
          <Link href="#price">Precios</Link>
        </NavbarItem>
        <NavbarItem data-cursor="block">
          <Button as={Link} color="primary" href="#" variant="flat">
            Contactar
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
