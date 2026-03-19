import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useServices } from "../context/ServiceContext.jsx";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const closeTimer = useRef(null);

  const { services } = useServices();

  /* ── scroll listener ── */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── close mobile menu on resize to desktop ── */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenu(false);
        setMobileServicesOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ── lock body scroll when mobile menu is open ── */
  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenu]);

  /* ── close dropdown on outside click (keyboard/touch) ── */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const featuredService = services.find((s) => s.featured);
  const otherServices = services.filter((s) => !s.featured);

  /* ── hover helpers with delay so cursor can travel into panel ── */
  const handleMouseEnter = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  const closeMobile = () => {
    setMobileMenu(false);
    setMobileServicesOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 shadow-md backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl sm:text-3xl font-bold text-green-900 shrink-0"
          >
            GreenX
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            <Link
              to="/"
              className="hover:text-green-700 transition-colors duration-200"
            >
              Home
            </Link>

            {/* Services mega-menu */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                aria-haspopup="true"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="flex items-center gap-1 hover:text-green-700 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 rounded"
              >
                Services
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Dropdown panel */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 transition-all duration-200 origin-top ${
                  open
                    ? "opacity-100 scale-y-100 pointer-events-auto"
                    : "opacity-0 scale-y-95 pointer-events-none"
                }`}
                style={{ width: "min(720px, calc(100vw - 2rem))" }}
              >
                <div className="bg-white shadow-2xl rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-6 border border-gray-100">
                  {/* Service list */}
                  <div className="space-y-1">
                    <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-3">
                      Our Services
                    </p>
                    {otherServices?.map((service) => (
                      <Link
                        key={service._id}
                        to={`/services/${service.slug}`}
                        onClick={() => setOpen(false)}
                        className="flex flex-col p-3 rounded-xl hover:bg-green-50 transition-colors duration-150 group"
                      >
                        <span className="font-semibold text-gray-900 group-hover:text-green-700 text-sm transition-colors">
                          {service.title}
                        </span>
                        <span className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                          {service.shortDescription?.split(". ")[0]}
                        </span>
                      </Link>
                    ))}
                  </div>

                  {/* Featured card */}
                  {featuredService && (
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-5 flex flex-col justify-between border border-green-200">
                      <div>
                        <span className="text-[10px] text-green-700 font-semibold uppercase tracking-widest">
                          Featured
                        </span>
                        <h3 className="text-base font-bold text-gray-900 mt-2">
                          {featuredService.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1 line-clamp-3">
                          {featuredService.shortDescription}
                        </p>
                      </div>
                      <Link
                        to={`/services/${featuredService.slug}`}
                        onClick={() => setOpen(false)}
                        className="mt-4 inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 text-center"
                      >
                        Learn More
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <Link
              to="/gallery"
              className="hover:text-green-700 transition-colors duration-200"
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="hover:text-green-700 transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <Link
            to="/request-service"
            className="hidden md:inline-block bg-green-600 hover:bg-green-700 active:bg-green-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 shrink-0"
          >
            Request Service
          </Link>

          {/* Hamburger */}
          <button
            aria-label={mobileMenu ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenu}
            onClick={() => setMobileMenu((v) => !v)}
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-lg hover:bg-green-50 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
          >
            <span
              className={`block h-0.5 w-5 bg-gray-800 rounded transition-all duration-300 ${
                mobileMenu ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-gray-800 rounded my-1 transition-all duration-300 ${
                mobileMenu ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-gray-800 rounded transition-all duration-300 ${
                mobileMenu ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        aria-hidden={!mobileMenu}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
          mobileMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobile}
      />

      {/* Mobile drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 max-w-[85vw] z-50 bg-white shadow-2xl flex flex-col md:hidden transform transition-transform duration-300 ease-in-out ${
          mobileMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-5 border-b border-gray-100">
          <Link
            to="/"
            onClick={closeMobile}
            className="text-xl font-bold text-green-900"
          >
            GreenX
          </Link>
          <button
            aria-label="Close menu"
            onClick={closeMobile}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg className="w-5 h-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
        </div>

        {/* Drawer links */}
        <nav className="flex-1 overflow-y-auto px-5 py-6 space-y-1 text-sm font-medium text-gray-700">
          <Link
            to="/"
            onClick={closeMobile}
            className="block px-3 py-2.5 rounded-lg hover:bg-green-50 hover:text-green-700 transition-colors"
          >
            Home
          </Link>

          {/* Mobile services accordion */}
          <div>
            <button
              onClick={() => setMobileServicesOpen((v) => !v)}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-green-50 hover:text-green-700 transition-colors"
            >
              <span>Services</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileServicesOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="mt-1 ml-3 pl-3 border-l-2 border-green-100 space-y-0.5">
                {services?.map((service) => (
                  <Link
                    key={service._id}
                    to={`/services/${service.slug}`}
                    onClick={closeMobile}
                    className="block px-2 py-2 rounded-lg text-gray-600 hover:text-green-700 hover:bg-green-50 transition-colors text-sm"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/gallery"
            onClick={closeMobile}
            className="block px-3 py-2.5 rounded-lg hover:bg-green-50 hover:text-green-700 transition-colors"
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            onClick={closeMobile}
            className="block px-3 py-2.5 rounded-lg hover:bg-green-50 hover:text-green-700 transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Drawer CTA */}
        <div className="px-5 py-5 border-t border-gray-100">
          <Link
            to="/request-service"
            onClick={closeMobile}
            className="block w-full bg-green-600 hover:bg-green-700 active:bg-green-800 text-white px-4 py-3 rounded-xl text-sm font-semibold text-center transition-colors duration-200"
          >
            Request Service
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Navbar;