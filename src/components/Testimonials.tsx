import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Yash created an amazing website for our business. The design is modern and the site loads incredibly fast. Highly recommended!",
    name: "Rajesh Kumar",
    company: "Kumar Enterprises, Mumbai",
  },
  {
    quote:
      "Excellent work! Very professional and delivered exactly what we needed. The pricing is also very reasonable. Will definitely work with him again.",
    name: "Priya Sharma",
    company: "Sharma Consultancy, Pune",
  },
  {
    quote:
      "Great experience working with Yash. He understood our requirements perfectly and delivered a beautiful, functional website on time.",
    name: "Amit Patel",
    company: "Patel Trading Co., Ahmedabad",
  },
  {
    quote:
      "Our new website has helped us reach more customers online. Yash's technical skills and attention to detail are impressive!",
    name: "Sneha Desai",
    company: "Desai Fashion Boutique, Surat",
  },
  {
    quote:
      "Professional, reliable, and skilled developer. The website he built for us is exactly what we envisioned. Great value for money!",
    name: "Vikram Singh",
    company: "Singh Real Estate, Delhi",
  },
  {
    quote:
      "Yash transformed our outdated website into a modern, user-friendly platform. Our students love the new design. Thank you!",
    name: "Meera Iyer",
    company: "Iyer Academy, Bangalore",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Client Testimonials
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            What my clients say about working with me
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-lg border border-border"
            >
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
