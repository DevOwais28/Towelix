import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground">
                <span className="text-lg font-bold text-primary">T</span>
              </div>
              <span className="font-serif text-2xl font-bold">Towelix</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Premium textile manufacturing for hotels, spas, and discerning customers worldwide.
              Quality craftsmanship since 1985.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="/" className="transition-colors hover:text-primary-foreground" data-testid="footer-link-home">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="transition-colors hover:text-primary-foreground" data-testid="footer-link-products">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-primary-foreground" data-testid="footer-link-about">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Categories</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <Link href="/products?category=bath-towels" className="transition-colors hover:text-primary-foreground" data-testid="footer-link-bath-towels">
                  Bath Towels
                </Link>
              </li>
              <li>
                <Link href="/products?category=hand-towels" className="transition-colors hover:text-primary-foreground" data-testid="footer-link-hand-towels">
                  Hand Towels
                </Link>
              </li>
              <li>
                <Link href="/products?category=beach-towels" className="transition-colors hover:text-primary-foreground" data-testid="footer-link-beach-towels">
                  Beach Towels
                </Link>
              </li>
              <li>
                <Link href="/products?category=bathrobes" className="transition-colors hover:text-primary-foreground" data-testid="footer-link-bathrobes">
                  Bathrobes
                </Link>
              </li>
              <li>
                <Link href="/products?category=hotel-towels" className="transition-colors hover:text-primary-foreground" data-testid="footer-link-hotel-towels">
                  Hotel Towels
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>123 Textile Avenue, Manufacturing District, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@towelix.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-primary-foreground/60 md:flex-row">
            <p>&copy; {new Date().getFullYear()} Towelix. All rights reserved.</p>
            <div className="flex gap-6">
              <span className="transition-colors hover:text-primary-foreground cursor-pointer">Privacy Policy</span>
              <span className="transition-colors hover:text-primary-foreground cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
