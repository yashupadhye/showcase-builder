import { motion } from "framer-motion";

const projects = [
  {
    image:
      "https://images.pexels.com/photos/5926380/pexels-photo-5926380.jpeg?auto=compress&cs=tinysrgb&h=350",
    title: "Modern Web Development",
    subtitle: "Professional coding workspace",
  },
  {
    image:
      "https://images.pexels.com/photos/4078342/pexels-photo-4078342.jpeg?auto=compress&cs=tinysrgb&h=350",
    title: "Modern Web Development",
    subtitle: "Professional coding workspace",
  },
  {
    image:
      "https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?auto=compress&cs=tinysrgb&h=350",
    title: "Modern Web Development",
    subtitle: "Professional coding workspace",
  },
  {
    image:
      "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&h=350",
    title: "Modern Web Development",
    subtitle: "Professional coding workspace",
  },
  {
    image:
      "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&h=350",
    title: "Modern Web Development",
    subtitle: "Professional coding workspace",
  },
  {
    image:
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&h=350",
    title: "Modern Web Development",
    subtitle: "Professional coding workspace",
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Work Showcase
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Examples of modern web development projects and technologies
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hero-overlay via-hero-overlay/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                <p className="text-white/70 text-sm">{project.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
