import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import jvmLogo from "@/assets/jvm-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Departments", path: "/departments" },
    { name: "Admissions", path: "/admissions" },
    { name: "Faculty", path: "/faculty" },
    { name: "Events & Gallery", path: "/events-gallery" },
    { name: "Placements", path: "/placements" },
    { name: "Vision & Mission", path: "/vision-mission" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={jvmLogo} 
              alt="JVM Polytechnic Logo" 
              className="h-14 w-14 object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary">JVM Polytechnic Terdal</span>
              <span className="text-xs text-muted-foreground">Excellence in Technical Education</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <Link key={index} to={link.path}>
                <Button 
                  variant={link.name === "Home" ? "default" : "ghost"}
                  className="transition-all"
                >
                  {link.name}
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-slide-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <Link key={index} to={link.path} onClick={() => setIsOpen(false)}>
                  <Button 
                    variant={link.name === "Home" ? "default" : "ghost"}
                    className="w-full justify-start"
                  >
                    {link.name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
