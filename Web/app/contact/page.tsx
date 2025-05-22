import { ContactForm } from "@/components/sections/contact-form";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tighter mb-4">Contact Me</h1>
          <p className="text-muted-foreground">
            Let's create something amazing together. Drop me a message and I'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:hello@portfolio.com" className="hover:underline">
                        hello@portfolio.com
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+15551234567" className="hover:underline">
                        +1 (555) 123-4567
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-muted-foreground">
                      San Francisco, CA
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h3 className="font-medium">Working Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9am - 5pm PST<br />
                      Weekends: By appointment
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}