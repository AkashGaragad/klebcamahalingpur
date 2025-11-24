import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import electronicsImg from "@/assets/dept-electronics.jpg";


const Departments = () => {
  const departments = [
    {
      name: "Bachuler of Computer Application",
      image: electronicsImg,
      description: "Advanced Computer application systems",
    },
    
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            OUR DEPARTMENTS
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our world-class BCA departments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={dept.image}
                      alt={dept.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                      {dept.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {dept.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;
