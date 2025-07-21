import { Button } from "@/components/ui/button";
import {
  ShoppingBag,
  ArrowRight,
  Star,
  LogIn,
  UserPlus,
  Crown,
  Sparkles,
} from "lucide-react";
import heroSaree from "@/assets/hero-saree.jpg";
import { useEffect, useState } from "react";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-hero overflow-hidden min-h-[calc(100vh-7rem)]">
      {/* Cloud Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-16 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-24 bg-primary/5 rounded-full blur-2xl animate-pulse delay-700"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-20 bg-accent/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-12 bg-white/5 rounded-full blur-lg animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 py-6 lg:py-20">
        <div className="grid gap-8 items-center md:grid-cols-2 md:gap-2">
          {/* Left Content - Mobile: Order 2, Desktop: Order 1 */}
          <div className="space-y-6 animate-fade-in order-1 lg:order-1">
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-primary">
                <Star className="h-5 w-5 fill-current" />
                <span className="text-sm font-medium">Premium Collection</span>
              </div>

              <h1 className="text-3xl lg:text-6xl font-bold leading-tight">
                Discover Your
                <span className="block text-2xl bg-gradient-primary bg-clip-text text-transparent">
                  Perfect Saree
                </span>
              </h1>

              <p className="text-md text-muted-foreground max-w-md md:text-sm">
                Explore our exquisite collection of traditional and contemporary
                sarees. From elegant silk to vibrant cotton, find the perfect
                saree for every occasion.
              </p>
            </div>

            {/* Auth Buttons */}
            <div className="flex gap-5 items-center">
              <Button variant="shop" size="xl" className="group w-[10rem] h-12">
                <ShoppingBag className="h-3 w-3" />
                <span className="text-sm">Shop Now</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <div className="flex justify-center">
                <div className="underline text-sm">View All Products</div>
              </div>
            </div>
          </div>

          {/* Right Image - Mobile: Order 1, Desktop: Order 2 */}
          <div className="relative order-1 md:order-2">
            <div className="relative z-10 max-w-lg mx-auto">
              <div
                className="p-[0.2rem] rounded-full overflow-hidden shadow-lg w-[19rem] h-[19rem] md:w-[22rem] md:h-[22rem] mx-auto"
                style={{
                  border: `5px dotted ${localStorage.getItem('theme') === 'light' ? 'black' : 'rgba(255,255,255,0.5)'}`,
                }}
              >
                <img
                  src={heroSaree}
                  alt="Beautiful woman in purple saree"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Floating Product Cards */}
              <div className="absolute top-8 -left-1 bg-white/90 dark:bg-card/90 backdrop-blur-sm rounded-xl p-3 shadow-lg animate-fade-in">
                <div className="flex items-center space-x-2">
                  <Crown className="h-4 w-4 text-primary" />
                  <div>
                    <div className="text-sm font-semibold">Premium Silk</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 -right-3 bg-white/90 dark:bg-card/90 backdrop-blur-sm rounded-xl p-3 shadow-lg animate-fade-in delay-300">
                <div className="flex items-center space-x-2">
                  <Sparkles className="h-4 w-4 text-accent" />
                  <div>
                    <div className="text-sm font-semibold">
                      Designer Collection
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Stats */}
        <div className="flex items-center space-x-8 pt-10 justify-center">
          <div className="text-center">
            <div className="text-xl font-bold text-primary">500+</div>
            <div className="text-xs text-muted-foreground">Designs</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-primary">50k+</div>
            <div className="text-xs text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-primary">4.9</div>
            <div className="text-xs text-muted-foreground">Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}
