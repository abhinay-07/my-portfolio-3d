import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logo, menu, close } from "../assets";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { navLinks } from "../constants";
import { styles } from "../styles";

const RESUME_LINK = "YOUR_RESUME_LINK_HERE"; // Replace with your actual link

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderNavLinks = (isMobile = false) =>
    navLinks.map((nav) => {
      if (nav.title === "About") {
        return (
          <React.Fragment key="resume-and-about">
            <li>
              <a
                href={RESUME_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-secondary text-white px-4 py-2 rounded font-medium hover:bg-white hover:text-secondary transition-colors ${
                  isMobile ? "block text-center" : ""
                }`}
              >
                My Resume
              </a>
            </li>
            <li
              key={nav.id}
              className={`${
                isMobile
                  ? "font-poppins font-medium cursor-pointer text-[16px]"
                  : "hover:text-white text-[18px] font-medium cursor-pointer"
              } ${active === nav.title ? "text-white" : "text-secondary"}`}
              onClick={() => {
                if (isMobile) setToggle(false);
                setActive(nav.title);
              }}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          </React.Fragment>
        );
      }
      return (
        <li
          key={nav.id}
          className={`${
            isMobile
              ? "font-poppins font-medium cursor-pointer text-[16px]"
              : "hover:text-white text-[18px] font-medium cursor-pointer"
          } ${active === nav.title ? "text-white" : "text-secondary"}`}
          onClick={() => {
            if (isMobile) setToggle(false);
            setActive(nav.title);
          }}
        >
          <a href={`#${nav.id}`}>{nav.title}</a>
        </li>
      );
    });

  return (
    <nav
      className={`
        ${styles?.paddingX || ""}
        w-full flex items-center py-5 fixed top-0 z-20
        ${scrolled ? "bg-primary" : "bg-transparent"}
      `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Abhinay Manikanti&nbsp;
            <span className="lg:block hidden">| Developer</span>
          </p>
        </Link>

        {/* Desktop Nav (only on large screens and up) */}
        <div className="flex items-center gap-10">
          <ul className="list-none hidden lg:flex flex-row gap-10">
            {renderNavLinks(false)}
          </ul>
          <div className="hidden lg:flex gap-4">
            <a
              href="https://github.com/abhinay-07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-secondary text-2xl transition-colors"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/abhinay-manikanti-9ab152275/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-secondary text-2xl transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Mobile/Tablet Nav (menu button) */}
        <div className="lg:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {renderNavLinks(true)}
              <li>
                <a
                  href="https://github.com/abhinay-07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-secondary text-xl flex items-center gap-2"
                  aria-label="GitHub"
                >
                  <FaGithub /> GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/abhinay-manikanti-9ab152275/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-secondary text-xl flex items-center gap-2"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;