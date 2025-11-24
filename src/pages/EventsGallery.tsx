import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Calendar, Image as ImageIcon } from "lucide-react";

const EventsGallery = () => {
  const events = [
    {
      title: "Annual Tech Fest 2024",
      date: "March 15-17, 2024",
      description: "Three days of innovation, competitions, and technical workshops featuring students from across the region.",
      image: "/placeholder.svg"
    },
    {
      title: "Industrial Visit to Manufacturing Hub",
      date: "February 10, 2024",
      description: "Students visited leading manufacturing facilities to gain practical industry exposure.",
      image: "/placeholder.svg"
    },
    {
      title: "Guest Lecture Series",
      date: "January 20, 2024",
      description: "Industry experts shared insights on emerging technologies and career opportunities.",
      image: "/placeholder.svg"
    },
    {
      title: "Sports Day Championship",
      date: "December 5, 2023",
      description: "Annual sports meet promoting physical fitness and team spirit among students.",
      image: "/placeholder.svg"
    }
  ];

  const gallery = Array(12).fill(null).map((_, i) => ({
    id: i + 1,
    title: `Campus Photo ${i + 1}`,
    image: "/placeholder.svg"
  }));

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Events & Gallery</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our vibrant campus life through events and photographs
            </p>
          </motion.div>

          <Tabs defaultValue="events" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="events">
                <Calendar className="w-4 h-4 mr-2" />
                Events
              </TabsTrigger>
              <TabsTrigger value="gallery">
                <ImageIcon className="w-4 h-4 mr-2" />
                Gallery
              </TabsTrigger>
            </TabsList>

            <TabsContent value="events" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                {events.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-video bg-muted flex items-center justify-center">
                        <ImageIcon className="w-16 h-16 text-muted-foreground" />
                      </div>
                      <CardHeader>
                        <CardTitle>{event.title}</CardTitle>
                        <CardDescription className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {event.date}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{event.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="gallery" className="mt-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {gallery.map((photo, index) => (
                  <motion.div
                    key={photo.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="aspect-square bg-muted rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <ImageIcon className="w-12 h-12 text-muted-foreground" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EventsGallery;
