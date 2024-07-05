import { useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Resources", link: "/resources" },
  { name: "Contact", link: "/contact" },
];

function Navbar() {
  const mobileMenu = useRef(null);
  //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function useClickOutside(
    ref: React.RefObject<HTMLElement | null>,
    onClickOutside: () => void
  ) {
    useEffect(() => {
      /**
       * Invoke Function onClick outside of element
       */
      function handleClickOutside(event: MouseEvent) {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          onClickOutside();
        }
      }

      // Bind
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // dispose
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, onClickOutside]);
  }
  useClickOutside(mobileMenu, () => {
    // setIsMobileMenuOpen(false);
    // setIsDropdownOpen(false);
  });

  return (
    <nav className="text-gray-600">
      <div className="container mx-auto px-4 md:flex items-center justify-between gap-6">
        <div className="flex items-center justify-between md:w-auto w-full">
          <a href="#" className="py-5 px-2  flex-1 font-bold">
            <img src="img/logoLISTv4.png" alt="LIST" className="w-34 h-14" />
          </a>
          <div
            className="md:hidden flex items-center cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <MenuIcon className="w-6 h-6" />
          </div>
        </div>
        <div
          ref={mobileMenu}
          className={`${
            isMobileMenuOpen ? "" : "hidden"
          } md:flex md:flex-row flex-col items-center justify-start md:space-x-1 pb-3 md:pb-0 navigation-menu`}
        >
          {navItems.map((item) => (
            <a key={item.name} href="#" className="py-2 px-3 block  font-bold">
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
