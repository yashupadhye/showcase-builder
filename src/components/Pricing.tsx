import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "./ui/button";

const features = [
  "Responsive Design",
  "Cross-browser Compatible",
  "SEO Optimized",
  "Fast Loading Speed",
  "Mobile-First Approach",
  "Clean, Maintainable Code",
  "Secure & Reliable",
  "Fast Performance",
];

export const Pricing = () => {
  return (
    <section id="pricing" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border text-center">
            <div className="mb-8">
              <span className="text-5xl md:text-6xl font-bold text-foreground">
                ₹1000
              </span>
              <span className="text-muted-foreground text-xl ml-2">per page</span>
            </div>

            <p className="text-muted-foreground mb-8">
              Custom projects and maintenance packages available on request
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10 text-left">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-base font-semibold"
            >
              Get Started Today
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
