import { motion } from "framer-motion";
import { Code, Wrench, Palette, Zap } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Website Development",
    description:
      "Build stunning, responsive websites tailored to your business needs using modern technologies like React.js and Spring framework.",
    image:
      "https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&h=350",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    description:
      "Keep your website running smoothly with regular updates, bug fixes, and performance optimization services.",
    image:
      "https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&h=350",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Create beautiful, intuitive user interfaces that provide excellent user experience across all devices.",
    image:
      "https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Enhance your website's speed and efficiency for better user engagement and search engine rankings.",
    image:
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&h=350",
  },
];

export const Services = () => {
  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Services I Offer
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Comprehensive web development solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
