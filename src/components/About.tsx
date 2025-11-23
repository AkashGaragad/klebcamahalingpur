import { motion } from "framer-motion";
import { Building2, Users, Trophy, BookOpen, Home } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const facilities = [
    {
      icon: Home,
      title: "Hostel Facilities",
      description: "Comfortable accommodation for students",
    },
    {
      icon: Users,
      title: "Student Affairs",
      description: "Comprehensive student support services",
    },
    {
      icon: Trophy,
      title: "Sports Facilities",
      description: "Modern sports infrastructure",
    },
    {
      icon: Building2,
      title: "Eatery Facilities",
      description: "Hygienic canteen with quality food",
    },
    {
      icon: BookOpen,
      title: "Library Facilities",
      description: "Extensive collection of resources",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            The JVM World
          </h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto leading-relaxed">
            JVM Society embodies education, research, and healthcare, enriching lives and 
            empowering individuals to become responsible citizens. Driven by perseverance, 
            we offer diverse programs, making us a preferred study and research destination.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-secondary group">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                    <facility.icon className="w-8 h-8 text-secondary group-hover:text-secondary-foreground transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {facility.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {facility.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
