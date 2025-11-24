import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Target, Lightbulb, TrendingUp, Users, Award, BookOpen } from "lucide-react";

const VisionMission = () => {
  const coreValues = [
    {
      icon: Award,
      title: "Excellence",
      description: "Commitment to academic excellence and continuous improvement in technical education"
    },
    {
      icon: Users,
      title: "Integrity",
      description: "Maintaining highest standards of ethics and professionalism in all endeavors"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Fostering creativity and innovative thinking among students and faculty"
    },
    {
      icon: BookOpen,
      title: "Learning",
      description: "Promoting lifelong learning and knowledge creation through research"
    }
  ];

  const objectives = [
    "Provide quality technical education aligned with industry requirements",
    "Develop skilled workforce ready for employment in engineering sectors",
    "Foster innovation and entrepreneurship among students",
    "Establish strong industry-academia partnerships",
    "Promote research and development activities",
    "Create socially responsible and ethical engineers"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Vision & Mission</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Guiding principles that drive our commitment to excellence
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto space-y-12">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="h-full bg-gradient-to-br from-primary/10 to-primary/5">
                  <CardHeader>
                    <Target className="w-12 h-12 text-primary mb-4" />
                    <CardTitle className="text-3xl">Our Vision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg leading-relaxed">
                      To be a leading polytechnic institution recognized for excellence in technical education,
                      innovation, and industry collaboration, producing skilled professionals who contribute to
                      societal development and technological advancement.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card className="h-full bg-gradient-to-br from-secondary/20 to-secondary/10">
                  <CardHeader>
                    <TrendingUp className="w-12 h-12 text-primary mb-4" />
                    <CardTitle className="text-3xl">Our Mission</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg leading-relaxed">
                      To provide quality technical education through innovative teaching methodologies,
                      industry-aligned curriculum, and state-of-the-art facilities, while nurturing ethical
                      values and entrepreneurial spirit to develop competent professionals for the global workforce.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Core Values</CardTitle>
                  <CardDescription>
                    The fundamental principles that guide our institution
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {coreValues.map((value, index) => (
                      <div key={index} className="text-center p-4">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <value.icon className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="font-semibold mb-2">{value.title}</h3>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Key Objectives</CardTitle>
                  <CardDescription>
                    Strategic goals to achieve our vision and mission
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {objectives.map((objective, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-muted rounded-lg">
                        <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                          {index + 1}
                        </div>
                        <p className="pt-1">{objective}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VisionMission;
