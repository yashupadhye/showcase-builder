import { motion } from "framer-motion";
import { MapPin, GraduationCap } from "lucide-react";

const skills = [
  "React.js",
  "JavaScript",
  "HTML/CSS",
  "Java",
  "Spring",
  "Hibernate",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Git",
  "REST APIs",
  "Responsive Design",
];

export const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Yash Upadhye
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card rounded-2xl p-8 shadow-lg border border-border"
          >
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <GraduationCap className="w-5 h-5 text-primary" />
                <span className="text-sm">
                  Bachelor of Science in Computer Science from Savitribai Phule
                  Pune University (CGPA: 7.5/10)
                </span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-sm">Pune, Maharashtra, India</span>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Passionate web developer with expertise in full-stack development,
              specializing in creating responsive, user-friendly websites and
              applications. Committed to delivering quality solutions that help
              businesses establish their online presence.
            </p>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Technical Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
