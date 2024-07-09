import { useRef, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Container } from "@mui/material";
import Newsletter from "./newsletter.tsx";
import Footer from "./Footer.tsx";


const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
  { name: "Our Coaches", link: "/ourCoaches" },
];

const Layout = () => {
  const mobileMenu = useRef(null);
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Container className="bg-white">
      <nav className="text-gray-500 font-bold">
        <Box className="mx-auto px-4 md:flex items-center justify-between gap-6">
          <Box className="flex items-center justify-between md:w-auto w-full">
            <Box
              component="img"
              className="w-34 h-14"
              alt="Low Investment STartup"
              src="img/logoLISTv4.png"
            />
            <Box
              className="md:hidden flex items-center cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <MenuIcon className="w-6 h-6" />
            </Box>
          </Box>
          <Box
            ref={mobileMenu}
            className={`${
              isMobileMenuOpen ? "" : "hidden"
            } md:flex md:flex-row flex-col items-center justify-start md:space-x-1 pb-3 md:pb-0 navigation-menu`}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className="py-2 px-3 block hover:text-gray-800"
              >
                {item.name}
              </Link>
            ))}
          </Box>
        </Box>
      </nav>
      <Box className="m-1 md:m-5 p-1 md:p-2">
        <Outlet />
        <Newsletter/>
        <Footer/>
      </Box>
    </Container>
  );
};

export default Layout;
