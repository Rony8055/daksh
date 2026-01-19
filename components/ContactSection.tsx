"use client";
import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";
import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-12 sm:py-24 bg-cream relative overflow-hidden sm:px-18"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-2 sm:mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black mb-2 sm:mb-4">
            Contact <span className="text-warning">Us</span>
          </h2>
          <p className="text-gray-500 sm:text-lg">
            For assessments, partnerships, or demos, reach out to us
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl shadow-black/5 h-fit">
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-6">
              Send us a message
            </h3>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <Input
                type="text"
                label="Name"
                labelPlacement="outside"
                variant="bordered"
                placeholder="Your name"
                classNames={{
                  label: "font-medium !text-black",
                  inputWrapper: "border-gray-200",
                }}
                isRequired
              />
              <Input
                type="number"
                label="Phone"
                labelPlacement="outside"
                variant="bordered"
                placeholder="+91 98765 43210"
                onKeyPress={(e: any) => {
                  if (!/^[0-9]$/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
                classNames={{
                  label: "font-medium !text-black",
                  inputWrapper: "border-gray-200",
                }}
                isRequired
              />
              <Input
                type="email"
                label="Email"
                labelPlacement="outside"
                variant="bordered"
                placeholder="your@email.com"
                className="sm:col-span-2"
                classNames={{
                  label: "font-medium !text-black",
                  inputWrapper: "border-gray-200",
                }}
                isRequired
              />
              <Input
                type="text"
                label="Subject"
                labelPlacement="outside"
                variant="bordered"
                placeholder="How can we help?"
                className="sm:col-span-2"
                classNames={{
                  label: "font-medium !text-black",
                  inputWrapper: "border-gray-200",
                }}
                isRequired
              />
              <Textarea
                label="Message"
                labelPlacement="outside"
                variant="bordered"
                placeholder="Your message..."
                rows={4}
                className="sm:col-span-2"
                classNames={{
                  label: "font-medium !text-black",
                  inputWrapper: "border-gray-200",
                }}
                isRequired
              />

              <Button
                type="submit"
                className="sm:col-span-2 w-full bg-gradient-to-r from-[#2C7F6F] to-[#3A9C8B] text-white font-semibold py-6 hover:shadow-elevated transition-all duration-300"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-8">
            {/* Info Cards */}
            <div className="bg-gradient-to-r from-[#2C7F6F] to-[#3A9C8B] rounded-2xl p-6 sm:p-8 text-primary-foreground">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                Contact Information
              </h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-primary-foreground/80">
                      info@daksh.co.in
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-primary-foreground/80">
                      +91 98765 43210
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-primary-foreground/80">
                      New Delhi, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl shadow-black/5">
              <h3 className="text-xl font-bold text-black mb-4">Follow Us</h3>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, label: "LinkedIn" },
                  { icon: Twitter, label: "Twitter" },
                  { icon: Facebook, label: "Facebook" },
                  { icon: Instagram, label: "Instagram" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-12 h-12 rounded-lg bg-gray-200 flex items-center justify-center hover:bg-teal-700 hover:text-primary-foreground transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Download App CTA */}
            <div className="bg-gradient-to-r from-[#F6C04A] to-[#F2B233] rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-black mb-2">
                Download the DAKSH App
              </h3>
              <p className="mb-4 text-sm sm:text-md">
                Start your journey to self-discovery today
              </p>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  as={Link}
                  href="https://play.google.com/store/apps/details?id=com.daksh.daksh"
                  target="_blank"
                  className="bg-black text-white px-6 py-3 font-semibold hover:bg-foreground/90 transition-colors"
                >
                  Play Store
                </Button>
                {/* <button className="bg-foreground text-background px-6 py-3 rounded-lg font-semibold hover:bg-foreground/90 transition-colors">
                  App Store
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
