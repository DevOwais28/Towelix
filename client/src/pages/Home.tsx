import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProductCard } from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Award, Globe, Leaf, Shield, Factory, CheckCircle2 } from "lucide-react";
import heroImage from "@assets/generated_images/premium_white_bath_towels_stack.png";
import fabricTexture from "@assets/generated_images/cotton_towel_fabric_texture.png";
import manufacturingImage from "@assets/generated_images/textile_manufacturing_facility.png";

export default function Home() {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 4);

  const qualityFeatures = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Only the finest Egyptian and Turkish cotton sourced from trusted suppliers.",
    },
    {
      icon: Globe,
      title: "Global Export",
      description: "Serving luxury hotels and resorts across 50+ countries worldwide.",
    },
    {
      icon: Leaf,
      title: "Sustainable",
      description: "Eco-friendly manufacturing processes with minimal environmental impact.",
    },
    {
      icon: Shield,
      title: "Certified",
      description: "ISO certified facilities ensuring consistent quality standards.",
    },
  ];

  const stats = [
    { value: "50+", label: "Countries Served" },
    { value: "1000+", label: "Hotel Partners" },
    { value: "35+", label: "Years Experience" },
    { value: "5M+", label: "Products Delivered" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <section className="relative min-h-[90vh] flex items-center" data-testid="section-hero">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Premium towels"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="font-serif text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl" data-testid="text-hero-title">
              Premium Textile
              <span className="block text-white/90">Excellence</span>
            </h1>
            <p className="mt-6 text-xl text-white/80 leading-relaxed" data-testid="text-hero-description">
              Crafting luxury towels and textiles for the world's finest hotels, spas, and homes. 
              Experience unparalleled quality and comfort.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/products">
                <Button size="lg" className="gap-2 bg-white/90 text-primary backdrop-blur-sm hover:bg-white border border-white" data-testid="button-shop-collection">
                  Shop Collection
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="gap-2 border-white/50 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20" data-testid="button-learn-more">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background" data-testid="section-categories">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground" data-testid="text-categories-title">
              Our Collections
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our diverse range of premium textile products crafted for every need
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/products?category=${category.id}`}
                data-testid={`link-category-${category.id}`}
              >
                <Card className="group overflow-visible border-card-border transition-all duration-300 hover:shadow-lg hover-elevate">
                  <div className="aspect-square overflow-hidden rounded-t-lg bg-muted">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-4 text-center">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/50" data-testid="section-featured">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
            <div>
              <h2 className="font-serif text-4xl font-bold text-foreground" data-testid="text-featured-title">
                Featured Products
              </h2>
              <p className="mt-2 text-lg text-muted-foreground">
                Our most popular items loved by customers worldwide
              </p>
            </div>
            <Link href="/products">
              <Button variant="outline" className="gap-2" data-testid="button-view-all">
                View All Products
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground" data-testid="section-stats">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-serif text-5xl font-bold" data-testid={`stat-value-${index}`}>
                  {stat.value}
                </p>
                <p className="mt-2 text-primary-foreground/80" data-testid={`stat-label-${index}`}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background" data-testid="section-quality">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-serif text-4xl font-bold text-foreground" data-testid="text-quality-title">
                Committed to Excellence
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                For over 35 years, Towelix has been at the forefront of textile manufacturing, 
                combining traditional craftsmanship with modern technology to create products 
                that exceed expectations.
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {qualityFeatures.map((feature, index) => (
                  <div key={index} className="flex gap-4" data-testid={`quality-feature-${index}`}>
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/20">
                      <feature.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{feature.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src={fabricTexture}
                  alt="Premium fabric texture"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 rounded-lg bg-card p-6 shadow-lg border border-card-border">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                      <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">ISO 9001 Certified</p>
                      <p className="text-sm text-muted-foreground">Quality Management</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/50" data-testid="section-manufacturing">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="relative">
              <img
                src={manufacturingImage}
                alt="Manufacturing facility"
                className="rounded-lg shadow-xl"
              />
            </div>

            <div>
              <div className="flex items-center gap-2 text-accent mb-4">
                <Factory className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">Our Process</span>
              </div>
              <h2 className="font-serif text-4xl font-bold text-foreground" data-testid="text-manufacturing-title">
                State-of-the-Art Manufacturing
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Our manufacturing facilities combine cutting-edge technology with time-honored 
                techniques to produce textiles of unparalleled quality.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Advanced weaving technology for consistent quality",
                  "Rigorous quality control at every stage",
                  "Environmentally responsible dyeing processes",
                  "Custom manufacturing capabilities for bulk orders",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3" data-testid={`manufacturing-feature-${index}`}>
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Link href="/about">
                  <Button className="gap-2" data-testid="button-learn-about-process">
                    Learn About Our Process
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary" data-testid="section-cta">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-primary-foreground" data-testid="text-cta-title">
            Ready to Experience Premium Quality?
          </h2>
          <p className="mt-4 text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Contact us today to discuss your textile needs or explore our collection.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/products">
              <Button size="lg" variant="secondary" className="gap-2" data-testid="button-browse-products">
                Browse Products
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="gap-2 border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20" data-testid="button-contact-us">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
