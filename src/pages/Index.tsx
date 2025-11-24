import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Departments from "@/components/Departments";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Departments />
        <About />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
