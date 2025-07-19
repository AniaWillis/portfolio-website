import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "./ContactForm";

function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 relative bg-background">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-primary ">
          Get In Touch
        </h2>
        <p className="text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
          Looking for a frontend developer? Feel free to reach out. I'm open to
          discussing new opportunities.
        </p>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8 flex flex-col items-center mt-0 md:mt-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 ">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-row md:flex-col items-center md:items-start gap-2 md:gap-1">
                  <h4 className="font-medium">Location</h4>
                  <a className="text-foreground/50 hover:text-primary transition-colors">
                    Chicago, IL, USA
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>

                <div className="flex flex-row md:flex-col items-center md:items-start gap-2 md:gap-1">
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:ania.willis.dev@gmail.com"
                    className="text-foreground/50 hover:text-primary transition-colors"
                  >
                    ania.willis.dev@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
