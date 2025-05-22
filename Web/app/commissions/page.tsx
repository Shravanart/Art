import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { commissionPricing } from "@/lib/data";
import Link from "next/link";

export default function CommissionsPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tighter mb-4">Commission Your Artwork</h1>
          <p className="text-muted-foreground">
            Transform your vision into reality with a custom commissioned artwork. Each piece is crafted with attention to detail and artistic excellence.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {commissionPricing.map((tier) => (
            <Card key={tier.id} className="relative">
              <CardHeader>
                <CardTitle>{tier.title}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">${tier.startingPrice}</span>
                  <span className="text-muted-foreground ml-1">starting price</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Badge variant="secondary" className="mb-2">
                      Timeframe: {tier.timeframe}
                    </Badge>
                  </div>
                  <ul className="space-y-2">
                    {tier.deliverables.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-4 w-4 text-primary mr-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button className="w-full mt-6">
                      Request Commission
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold tracking-tighter mb-6 text-center">Commission Process</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">Initial Consultation</h3>
              <p className="text-muted-foreground">Discuss your vision, requirements, and timeline</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">Concept & Approval</h3>
              <p className="text-muted-foreground">Review sketches and approve the direction</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">Final Artwork</h3>
              <p className="text-muted-foreground">Creation and delivery of your custom piece</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold tracking-tighter mb-4">Have Questions?</h2>
          <p className="text-muted-foreground mb-6">
            Contact me to discuss your project requirements or any questions about the commission process.
          </p>
          <Link href="/contact">
            <Button variant="outline" size="lg">
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}