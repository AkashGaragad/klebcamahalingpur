import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { FileText, CheckCircle, Calendar, Users, GraduationCap, Download } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Admissions = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    date_of_birth: "",
    gender: "",
    address: "",
    department: "",
    previous_school: "",
    percentage: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const { error } = await supabase.from("admissions").insert({
      ...formData,
      percentage: parseFloat(formData.percentage),
    });

    if (error) {
      toast({
        title: "Submission Failed",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Application Submitted!",
        description: "We'll review your application and contact you soon.",
      });
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        date_of_birth: "",
        gender: "",
        address: "",
        department: "",
        previous_school: "",
        percentage: "",
      });
    }
    setSubmitting(false);
  };

  const eligibility = [
    "Passed 10th standard (SSLC) with minimum 35% marks",
    "Age between 14-40 years",
    "Proficiency in Mathematics and Science subjects"
  ];

  const process = [
    {
      icon: FileText,
      title: "Submit Application",
      description: "Fill out the online application form with required documents"
    },
    {
      icon: Users,
      title: "Entrance Test",
      description: "Appear for the polytechnic entrance examination"
    },
    {
      icon: CheckCircle,
      title: "Merit List",
      description: "Check merit list published based on entrance test scores"
    },
    {
      icon: GraduationCap,
      title: "Admission",
      description: "Complete admission formalities and join the program"
    }
  ];

  const documents = [
    "10th Standard Marksheet",
    "Transfer Certificate",
    "Caste Certificate (if applicable)",
    "Income Certificate (if applicable)",
    "Passport Size Photographs (4 copies)",
    "Aadhar Card Copy"
  ];

  const importantDates = [
    { event: "Application Start", date: "May 1, 2024" },
    { event: "Application Deadline", date: "June 30, 2024" },
    { event: "Entrance Exam", date: "July 15, 2024" },
    { event: "Merit List", date: "July 25, 2024" },
    { event: "Admission Start", date: "August 1, 2024" }
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start your journey towards a successful engineering career
            </p>
          </motion.div>

          <Tabs defaultValue="info" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="info">Information</TabsTrigger>
              <TabsTrigger value="apply">Apply Now</TabsTrigger>
            </TabsList>

            <TabsContent value="info" className="space-y-12">
              <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="bg-primary text-primary-foreground">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl">Admissions Open for 2024-25</CardTitle>
                  <CardDescription className="text-primary-foreground/80 text-lg">
                    Apply now for diploma programs in Engineering & Technology
                  </CardDescription>
                  <div className="flex justify-center gap-4 pt-4">
                    <Button variant="secondary" size="lg">Apply Online</Button>
                    <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                      <Download className="w-4 h-4 mr-2" />
                      Prospectus
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Eligibility Criteria</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {eligibility.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Important Dates</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {importantDates.map((item, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b last:border-0">
                          <span className="font-medium">{item.event}</span>
                          <span className="text-muted-foreground flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {item.date}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Admission Process</CardTitle>
                  <CardDescription>Follow these steps to secure your admission</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-6">
                    {process.map((step, index) => (
                      <div key={index} className="text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <step.icon className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="font-semibold mb-2">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Required Documents</CardTitle>
                  <CardDescription>Keep these documents ready for the admission process</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {documents.map((doc, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                        <FileText className="w-5 h-5 text-primary" />
                        <span>{doc}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            </TabsContent>

            <TabsContent value="apply">
              <Card>
                <CardHeader>
                  <CardTitle>Online Admission Form</CardTitle>
                  <CardDescription>
                    Fill in your details to apply for admission
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="full_name">Full Name *</Label>
                        <Input
                          id="full_name"
                          value={formData.full_name}
                          onChange={(e) =>
                            setFormData({ ...formData, full_name: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="date_of_birth">Date of Birth *</Label>
                        <Input
                          id="date_of_birth"
                          type="date"
                          value={formData.date_of_birth}
                          onChange={(e) =>
                            setFormData({ ...formData, date_of_birth: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="gender">Gender *</Label>
                        <Select
                          value={formData.gender}
                          onValueChange={(value) =>
                            setFormData({ ...formData, gender: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="department">Department *</Label>
                        <Select
                          value={formData.department}
                          onValueChange={(value) =>
                            setFormData({ ...formData, department: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select department" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Civil Engineering">
                              Civil Engineering
                            </SelectItem>
                            <SelectItem value="Mechanical Engineering">
                              Mechanical Engineering
                            </SelectItem>
                            <SelectItem value="Electrical Engineering">
                              Electrical Engineering
                            </SelectItem>
                            <SelectItem value="Electronics & Communication">
                              Electronics & Communication
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="previous_school">Previous School *</Label>
                        <Input
                          id="previous_school"
                          value={formData.previous_school}
                          onChange={(e) =>
                            setFormData({ ...formData, previous_school: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="percentage">10th Percentage *</Label>
                        <Input
                          id="percentage"
                          type="number"
                          step="0.01"
                          value={formData.percentage}
                          onChange={(e) =>
                            setFormData({ ...formData, percentage: e.target.value })
                          }
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address *</Label>
                      <Textarea
                        id="address"
                        value={formData.address}
                        onChange={(e) =>
                          setFormData({ ...formData, address: e.target.value })
                        }
                        required
                      />
                    </div>
                    <Button type="submit" size="lg" disabled={submitting}>
                      {submitting ? "Submitting..." : "Submit Application"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admissions;
