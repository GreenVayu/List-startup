import { useRef, useState } from "react";
import { Button, Box, Container } from "@mui/material";
import { Outlet, Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Newsletter from "./newsletter.tsx";
import Footer from "./Footer.tsx";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "#", dropdown: "about" },
  { name: "Resources", link: "/Resource", dropdown: "resources" },
  { name: "Contact Us", link: "/contact" },
];

const aboutDropdownItems = [
  { name: "Our Coaches", link: "ourCoaches" },
  { name: "Our Story", link: "Ourstory" },
  { name: "Our Team", link: "Team" },
];

const resourcesDropdownItems = [
  { name: "Blog", link: "Blog" },
  { name: "FAQ", link: "FAQ" },
];

const Layout = () => {
  const mobileMenu = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const location = useLocation();

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setOpenDropdown(null);
    }, 300);
  };

  const handleClick = (event: React.MouseEvent, menu: string) => {
    event.preventDefault();
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const isActive = (path: string) => {
    return location.pathname === path || 
      (openDropdown && navItems.find(item => item.dropdown === openDropdown)?.link.includes(location.pathname));
  };

  const isDropdownActive = (dropdownName: string) => {
    const dropdownItems = dropdownName === "about" ? aboutDropdownItems : resourcesDropdownItems;
    return dropdownItems.some(item => location.pathname.includes(item.link));
  };

  const getNavItemClass = (item: typeof navItems[0]) => {
    return `py-2 px-3 block hover:text-white hover:bg-gray-800 hover:rounded-md text-lg ${
      isActive(item.link) || (item.dropdown && isDropdownActive(item.dropdown)) ? "text-emerald-700 underline underline-offset-4 decoration-amber-500" : ""
    }`;
  };

  return (
    <Container className="bg-white">
      <nav className="text-gray-500 font-bold">
        <Box className="mx-auto px-4 md:flex items-center justify-between gap-6">
          <Box className="flex items-center justify-between md:w-auto w-full">
            <Box
              component="img"
              className="w-34 h-14"
              alt="Low Investment Startup"
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
            } md:flex md:flex-row flex-col items-center justify-start md:space-x-1 pb-3 md:pb-0 navigation-menu bg-gray-100 md:bg-white`}
          >
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative flex items-center"
                onMouseEnter={item.dropdown ? () => handleMouseEnter(item.dropdown) : undefined}
                onMouseLeave={item.dropdown ? handleMouseLeave : undefined}
              >
                <Link
                  to={item.link}
                  className={getNavItemClass(item)}
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <>
                    <ArrowDropDownIcon
                      className="cursor-pointer -ml-[0.7rem]"
                      onClick={(e) => handleClick(e, item.dropdown)}
                      onMouseEnter={() => handleMouseEnter(item.dropdown!)}
                    />
                    {openDropdown === item.dropdown && (
                      <div
                        className="absolute left-0 top-full mt-2 w-48 bg-white border border-gray-200 shadow-lg z-50"
                        onMouseEnter={() => handleMouseEnter(item.dropdown!)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {(item.dropdown === "about" ? aboutDropdownItems : resourcesDropdownItems).map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.link}
                            className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
                              isActive(dropdownItem.link) ? "text-emerald-700 underline underline-offset-4 decoration-amber-500" : ""
                            }`}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}

            <div className="flex flex-col md:flex-row md:space-y-0 md:px-6 md:mt-0 md:space-x-4 mx-4 mt-4 space-y-3 ">
              <Button variant="outlined" color="secondary">
                Log in
              </Button>
              <Button variant="contained" color="success">
                Sign up
              </Button>
            </div>

          </Box>
        </Box>
      </nav>
      <Box className="m-1 md:m-5 p-1 md:p-2">
        <Outlet />
        <Newsletter />
        <Footer />
      </Box>
    </Container>
  );
};

export default Layout;
