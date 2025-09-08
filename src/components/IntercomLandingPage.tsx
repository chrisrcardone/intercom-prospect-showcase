import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, TrendingUp, Heart } from "lucide-react";

interface IntercomLandingPageProps {
  companyLogoUrl: string;
  companyName: string;
  personalizedSubtitle: string;
  revenueGrowthStatement: string;
  customerServiceStatement: string;
  whyChooseStatement: string;
}

export default function IntercomLandingPage({
  companyLogoUrl,
  companyName,
  personalizedSubtitle,
  revenueGrowthStatement,
  customerServiceStatement,
  whyChooseStatement,
}: IntercomLandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-primary">
              <path
                d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 29C8.82 29 3 23.18 3 16S8.82 3 16 3s13 5.82 13 13-5.82 13-13 13z"
                fill="currentColor"
              />
              <circle cx="16" cy="16" r="8" fill="currentColor" />
            </svg>
            <span className="text-xl font-bold text-foreground">Intercom</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 flex justify-center">
            <img
              src={companyLogoUrl}
              alt={`${companyName} logo`}
              className="h-16 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='12' fill='%236b7280'%3ELogo%3C/text%3E%3C/svg%3E";
              }}
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Accelerate Growth for{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {companyName}
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            {personalizedSubtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" className="text-lg px-8 py-6">
              Schedule a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Revenue Growth */}
          <Card className="p-8 bg-gradient-card border-0 shadow-large hover:shadow-xl transition-smooth">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                Drive Revenue Growth
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {revenueGrowthStatement}
              </p>
            </div>
          </Card>

          {/* Customer Service */}
          <Card className="p-8 bg-gradient-card border-0 shadow-large hover:shadow-xl transition-smooth">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                Enhance Customer Support
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {customerServiceStatement}
              </p>
            </div>
          </Card>

          {/* Why Choose Intercom */}
          <Card className="p-8 bg-gradient-card border-0 shadow-large hover:shadow-xl transition-smooth">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                Why Choose Intercom
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {whyChooseStatement}
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto bg-card p-12 rounded-2xl shadow-large">
          <h2 className="text-4xl font-bold text-card-foreground mb-6">
            Ready to Transform Your Customer Experience?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of companies using Intercom to grow their business and delight their customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" className="text-lg px-10 py-6">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="ghost" size="lg" className="text-lg px-10 py-6">
              Talk to Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-border">
        <div className="text-center text-muted-foreground">
          <p>&copy; 2024 Intercom. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}