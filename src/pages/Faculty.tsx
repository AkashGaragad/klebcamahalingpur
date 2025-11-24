import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Mail, Phone, Award } from "lucide-react";

const Faculty = () => {
  const facultyMembers = [
    {
      name: "Dr. Rajesh Kumar",
      designation: "Principal",
      department: "Administration",
      qualification: "Ph.D. in Mechanical Engineering",
      experience: "25 years",
      email: "principal@jvmpolytechnic.edu",
      phone: "+91 12345 67890",
      specialization: "Leadership & Academic Administration"
    },
    {
      name: "Prof. Anita Sharma",
      designation: "Head of Department",
      department: "Electronics & Communication",
      qualification: "M.Tech in VLSI Design",
      experience: "18 years",
      email: "anita.sharma@jvmpolytechnic.edu",
      phone: "+91 12345 67891",
      specialization: "Digital Systems & VLSI"
    },
    {
      name: "Mr. Suresh Patil",
      designation: "Senior Lecturer",
      department: "Mechanical Engineering",
      qualification: "M.Tech in Production Engineering",
      experience: "15 years",
      email: "suresh.patil@jvmpolytechnic.edu",
      phone: "+91 12345 67892",
      specialization: "Manufacturing & CAD/CAM"
    },
    {
      name: "Mrs. Priya Desai",
      designation: "Lecturer",
      department: "Electrical Engineering",
      qualification: "M.Tech in Power Systems",
      experience: "12 years",
      email: "priya.desai@jvmpolytechnic.edu",
      phone: "+91 12345 67893",
      specialization: "Power Electronics & Renewable Energy"
    },
    {
      name: "Mr. Kiran Jadhav",
      designation: "Lecturer",
      department: "Civil Engineering",
      qualification: "M.Tech in Structural Engineering",
      experience: "10 years",
      email: "kiran.jadhav@jvmpolytechnic.edu",
      phone: "+91 12345 67894",
      specialization: "Structural Design & Analysis"
    },
    {
      name: "Dr. Meena Rao",
      designation: "Associate Professor",
      department: "Electronics & Communication",
      qualification: "Ph.D. in Communication Systems",
      experience: "20 years",
      email: "meena.rao@jvmpolytechnic.edu",
      phone: "+91 12345 67895",
      specialization: "Wireless Communication & Signal Processing"
    }
  ];

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Faculty</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet our experienced and dedicated team of educators
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facultyMembers.map((faculty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                      <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                        {getInitials(faculty.name)}
                      </AvatarFallback>
                    </Avatar>
                    <CardTitle>{faculty.name}</CardTitle>
                    <CardDescription className="space-y-1">
                      <div className="font-semibold text-primary">{faculty.designation}</div>
                      <div>{faculty.department}</div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <div className="text-sm">
                        <div className="font-medium">{faculty.qualification}</div>
                        <div className="text-muted-foreground">{faculty.experience} of experience</div>
                      </div>
                    </div>
                    <div className="pt-2 border-t">
                      <div className="text-sm font-medium mb-2">Specialization:</div>
                      <div className="text-sm text-muted-foreground">{faculty.specialization}</div>
                    </div>
                    <div className="flex flex-col gap-2 pt-2 border-t">
                      <a href={`mailto:${faculty.email}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <Mail className="w-4 h-4" />
                        {faculty.email}
                      </a>
                      <a href={`tel:${faculty.phone}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <Phone className="w-4 h-4" />
                        {faculty.phone}
                      </a>
                    </div>
                  </CardContent>
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

export default Faculty;
