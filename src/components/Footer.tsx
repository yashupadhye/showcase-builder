import { Code2 } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-hero-overlay py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#home" className="flex items-center gap-2 text-white">
            <Code2 className="w-6 h-6 text-primary" />
            <span className="font-bold">Yash Upadhye</span>
          </a>

          <p className="text-white/60 text-sm text-center">
            © {new Date().getFullYear()} Yash Upadhye. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
