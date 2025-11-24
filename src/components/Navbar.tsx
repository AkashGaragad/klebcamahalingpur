import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import jvmLogo from "@/assets/jvm-logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Departments", path: "/departments" },
  { name: "Admissions", path: "/admissions" },
  { name: "Faculty", path: "/faculty" },
  { name: "Events & Gallery", path: "/events-gallery" },
  { name: "Vision & Mission", path: "/vision-mission" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const desktopNavVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const desktopNavItem = {
    hidden: { opacity: 0, y: -8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.img
              src={jvmLogo}
              alt="KLE BCA COLLEGE"
              className="h-14 w-14 rounded object-contain"
              whileHover={{ scale: 1.05, rotate: 1.5 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary leading-tight">
                KLE SOCIETY'S COLLEGE OF BCA MAHALINGPUR
              </span>
              <span className="text-xs text-muted-foreground">
                Excellence in Technical Education
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center gap-1"
            variants={desktopNavVariants}
            initial="hidden"
            animate="visible"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <motion.div key={link.path} >
                  <Link to={link.path}>
                    <Button
                      variant={isActive ? "default" : "ghost"}
                      className="relative transition-all px-4"
                    >
                      <span>{link.name}</span>
                      {/* underline animation */}
                      <span
                        className={`pointer-events-none absolute inset-x-3 -bottom-1 h-0.5 rounded-full origin-left scale-x-0 bg-primary/80 transition-transform duration-200 ${
                          isActive ? "scale-x-100" : "group-hover:scale-x-100"
                        }`}
                      />
                    </Button>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center rounded-full p-2 border border-border/60 bg-background/80 shadow-sm"
          >
            <motion.div
              key={isOpen ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="md:hidden pb-4"
            >
              <div className="flex flex-col gap-2 rounded-2xl border border-border/60 bg-background/95 shadow-md p-3">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;

                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.18 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className="block"
                      >
                        <Button
                          variant={isActive ? "default" : "ghost"}
                          className="w-full justify-start text-sm"
                        >
                          {link.name}
                        </Button>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
