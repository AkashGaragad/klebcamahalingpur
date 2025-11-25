import { motion } from "framer-motion";
import heroImage from "@/assets/hero-college.jpg";

const Hero = () => {
  const stats = [
    { number: "8+", label: "Staff" },
    { number: "250+", label: "Students" },
    { number: "40+", label: "Trust Members" },
    { number: "5", label: "Years" },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
              Welcome to <br /> KLE SOCIETY'S COLLEGE OF BCA 
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
              Empowering students with quality technical education and shaping future engineers
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-background/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20 hover:bg-background/20 transition-all"
              >
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-primary-foreground/80 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
