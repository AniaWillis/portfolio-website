import { Send } from "lucide-react";
import { cn } from "../lib/utils";

function ContactForm() {
  return (
    <div className="bg-card-2 p-8 rounded-lg shadow-xs border border-border">
      <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
      <form action="https://submit-form.com/TZ0DPIIy5" className="space-y-6">
        <input
          type="hidden"
          name="_redirect"
          value={`${window.location.origin}/thankyou`}
        />
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium mb-2 text-left"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-2 text-left"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
            placeholder="email@email.com"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium mb-2 text-left"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
            placeholder="Hello, I'd like to talk about..."
          />
        </div>
        <button
          type="submit"
          className={cn(
            "main-button w-full flex items-center justify-center gap-2"
          )}
        >
          Send Message
          <Send size={16} />
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
