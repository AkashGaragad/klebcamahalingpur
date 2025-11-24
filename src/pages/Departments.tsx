import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { BookOpen, Zap, Cpu, Cog } from "lucide-react";
import deptElectronics from "@/assets/dept-electronics.jpg";
import deptMechanical from "@/assets/dept-mechanical.jpg";
import deptElectrical from "@/assets/dept-electrical.jpg";
import deptCivil from "@/assets/dept-civil.jpg";

const Departments = () => {
  const departments = [
    {
      icon: Cpu,
      name: "Bachuler of Computer Application",
      image: deptElectronics,
      description: "Advanced training in electronic systems, communication networks, and embedded systems.",
      subjects: ["Programming Languages", "Microprocessors", "Signal Processing", "Communication Systems"],
      facilities: ["programming Lab", "Communication Lab", "Microcontroller Lab"]
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Departments</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our diverse range of technical programs designed to shape future engineers
            </p>
          </motion.div>

          <div className="grid gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative h-64 md:h-auto">
                      <img src={dept.image} alt={dept.name} className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                    <CardHeader>
                      <dept.icon className="w-12 h-12 text-primary mb-4" />
                      <CardTitle className="text-2xl">{dept.name}</CardTitle>
                      <CardDescription className="text-base">{dept.description}</CardDescription>
                      
                      <div className="space-y-4 pt-4">
                        <div>
                          <h4 className="font-semibold mb-2">Core Subjects</h4>
                          <div className="flex flex-wrap gap-2">
                            {dept.subjects.map((subject, idx) => (
                              <span key={idx} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                                {subject}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Facilities</h4>
                          <ul className="list-disc list-inside text-muted-foreground">
                            {dept.facilities.map((facility, idx) => (
                              <li key={idx}>{facility}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardHeader>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Departments;
