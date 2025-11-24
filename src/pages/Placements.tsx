import { useEffect, useState, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Building2, MapPin, DollarSign } from "lucide-react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Placements = () => {
  const [placements, setPlacements] = useState<any[]>([]);
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    const fetchPlacements = async () => {
      const { data } = await supabase
        .from("placements")
        .select("*")
        .order("year", { ascending: false });
      
      if (data) {
        setPlacements(data);
        initializeMap(data);
      }
    };

    fetchPlacements();
  }, []);

  const initializeMap = (placementsData: any[]) => {
    if (!mapContainer.current || map.current) return;

    mapboxgl.accessToken = "pk.eyJ1IjoibG92YWJsZSIsImEiOiJjbTF2bXJuNzcwZWF2MmpweGQ0NXl3aXN0In0.clX4DqE3aUqPvzxGO3d3aQ";
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [76.9366, 15.8497],
      zoom: 5,
    });

    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    placementsData.forEach((placement) => {
      if (placement.latitude && placement.longitude) {
        new mapboxgl.Marker({ color: "#FF6B35" })
          .setLngLat([placement.longitude, placement.latitude])
          .setPopup(
            new mapboxgl.Popup().setHTML(
              `<h3 class="font-semibold">${placement.company_name}</h3>
               <p>${placement.student_name}</p>
               <p class="text-sm">${placement.location}</p>`
            )
          )
          .addTo(map.current!);
      }
    });
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Placement Records
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our students excel in top companies nationwide
            </p>
          </motion.div>

          <div className="mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Placement Locations Map</CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  ref={mapContainer}
                  className="w-full h-[500px] rounded-lg"
                />
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {placements.map((placement, index) => (
              <motion.div
                key={placement.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">
                          {placement.company_name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Year {placement.year}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="font-semibold">{placement.student_name}</p>
                      <p className="text-sm text-muted-foreground">
                        {placement.department}
                      </p>
                      <div className="flex items-center gap-2 text-primary">
                        <DollarSign className="w-4 h-4" />
                        <span className="font-semibold">{placement.package}</span>
                      </div>
                      {placement.location && (
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{placement.location}</span>
                        </div>
                      )}
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

export default Placements;
