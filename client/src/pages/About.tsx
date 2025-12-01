import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Globe, Heart, Target, Users, Leaf, Factory, Shield } from "lucide-react";
import manufacturingImage from "@assets/generated_images/textile_manufacturing_facility.png";
import fabricTexture from "@assets/generated_images/cotton_towel_fabric_texture.png";
import spaTowelSet from "@assets/generated_images/grey_white_spa_towel_set.png";

export default function About() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We pursue perfection in every thread and weave, maintaining the highest standards in textile manufacturing.",
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description: "Our customers' success is our success. We build lasting partnerships based on trust and exceptional service.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "We're committed to environmentally responsible practices, from sourcing to manufacturing and packaging.",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We continuously invest in new technologies and techniques to stay at the forefront of textile innovation.",
    },
  ];

  const milestones = [
    { year: "1985", title: "Founded", description: "Started as a small family-owned textile workshop" },
    { year: "1995", title: "First Export", description: "Began exporting to European luxury hotels" },
    { year: "2005", title: "ISO Certified", description: "Achieved ISO 9001 certification for quality management" },
    { year: "2015", title: "Global Reach", description: "Expanded to serve customers in 50+ countries" },
    { year: "2020", title: "Sustainable Initiative", description: "Launched eco-friendly product line with organic materials" },
    { year: "2024", title: "Industry Leader", description: "Recognized as one of the top textile manufacturers globally" },
  ];

  const stats = [
    { icon: Globe, value: "50+", label: "Countries" },
    { icon: Users, value: "1000+", label: "B2B Partners" },
    { icon: Factory, value: "35+", label: "Years Experience" },
    { icon: Shield, value: "100%", label: "Quality Assured" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <section className="relative py-24 lg:py-32 bg-primary" data-testid="section-hero">
          <div className="absolute inset-0 opacity-10">
            <img
              src={fabricTexture}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl" data-testid="text-hero-title">
              About Towelix
            </h1>
            <p className="mt-6 text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
              For over three decades, we've been crafting premium textiles that 
              define luxury and comfort in hotels, spas, and homes worldwide.
            </p>
          </div>
        </section>

        <section className="py-20 bg-background" data-testid="section-who-we-are">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground lg:text-4xl" data-testid="text-who-we-are-title">
                  Who We Are
                </h2>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  Towelix is a premier textile manufacturer specializing in luxury towels, 
                  bathrobes, and linens for the hospitality industry. Founded in 1985, 
                  we've grown from a small family workshop to an internationally recognized 
                  brand serving thousands of hotels, resorts, and spas across the globe.
                </p>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Our commitment to quality, innovation, and customer satisfaction has 
                  made us the trusted partner for world-class establishments seeking 
                  textiles that combine exceptional comfort with lasting durability.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex items-center gap-3" data-testid={`stat-${index}`}>
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20">
                        <stat.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <img
                  src={spaTowelSet}
                  alt="Premium spa towels"
                  className="rounded-xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/50" data-testid="section-manufacturing">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="order-2 lg:order-1">
                <img
                  src={manufacturingImage}
                  alt="Manufacturing facility"
                  className="rounded-xl shadow-xl"
                />
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="font-serif text-3xl font-bold text-foreground lg:text-4xl" data-testid="text-manufacturing-title">
                  Our Manufacturing Quality
                </h2>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  Our state-of-the-art manufacturing facilities combine traditional 
                  craftsmanship with modern technology. Every product undergoes 
                  rigorous quality control to ensure it meets our exacting standards.
                </p>
                <ul className="mt-6 space-y-4">
                  {[
                    "ISO 9001 certified quality management system",
                    "Advanced weaving technology from Europe",
                    "Environmentally responsible dyeing processes",
                    "100% quality inspection before shipping",
                    "Custom manufacturing capabilities for bulk orders",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3" data-testid={`quality-item-${index}`}>
                      <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background" data-testid="section-global">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground lg:text-4xl" data-testid="text-global-title">
              Global Export Experience
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              With over 35 years of export experience, we understand the unique 
              requirements of international hospitality businesses. Our products 
              are trusted by leading hotel chains, luxury resorts, and premium spas 
              across more than 50 countries.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { region: "North America", count: "200+" },
                { region: "Europe", count: "350+" },
                { region: "Asia Pacific", count: "300+" },
                { region: "Middle East", count: "150+" },
              ].map((region, index) => (
                <Card key={index} className="border-card-border" data-testid={`region-card-${index}`}>
                  <CardContent className="p-6 text-center">
                    <p className="text-3xl font-bold text-foreground">{region.count}</p>
                    <p className="mt-1 text-muted-foreground">{region.region} Partners</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/50" data-testid="section-values">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground lg:text-4xl" data-testid="text-values-title">
                Our Values & Mission
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                These core values guide everything we do at Towelix
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <Card key={index} className="border-card-border text-center" data-testid={`value-card-${index}`}>
                  <CardContent className="p-6">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/20">
                      <value.icon className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-foreground">{value.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Card className="inline-block border-card-border bg-primary text-primary-foreground">
                <CardContent className="p-8 max-w-2xl">
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-lg text-primary-foreground/90 leading-relaxed">
                    "To provide the world's finest textiles that enhance comfort and 
                    elevate experiences, while maintaining our commitment to quality, 
                    sustainability, and customer satisfaction."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background" data-testid="section-timeline">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl font-bold text-foreground lg:text-4xl" data-testid="text-timeline-title">
                Our Journey
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Key milestones in our 35+ year history
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden lg:block" />
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`relative flex flex-col lg:flex-row gap-4 lg:gap-8 ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                    data-testid={`milestone-${index}`}
                  >
                    <div className={`lg:w-1/2 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                      <Card className="inline-block border-card-border">
                        <CardContent className="p-6">
                          <span className="text-3xl font-bold text-accent">{milestone.year}</span>
                          <h3 className="mt-2 text-lg font-semibold text-foreground">{milestone.title}</h3>
                          <p className="mt-1 text-muted-foreground">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="hidden lg:flex lg:w-0 items-center justify-center">
                      <div className="h-4 w-4 rounded-full bg-accent border-4 border-background" />
                    </div>
                    <div className="lg:w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
