import { Button } from "@/components/ui/button";
import {
  ShoppingBag,
  ArrowRight,
  Star,
  LogIn,
  UserPlus,
  Crown,
  Sparkles,
  Heart,
  Gem,
} from "lucide-react";
import heroSaree from "@/assets/hero-saree.jpg";
import saree1 from "@/assets/saree-1.jpg";
import saree2 from "@/assets/saree-2.jpg";
import saree3 from "@/assets/saree-3.jpg";
import saree4 from "@/assets/saree-4.jpg";
import { useEffect, useState } from "react";

const heroImages = [
  {
    src: heroSaree,
    alt: "Beautiful woman in purple saree",
    material: "Premium Silk",
    collection: "Designer Collection",
    materialIcon: Crown,
    collectionIcon: Sparkles,
  },
  {
    src: saree1,
    alt: "Elegant cotton saree",
    material: "Pure Cotton",
    collection: "Traditional Collection",
    materialIcon: Heart,
    collectionIcon: Star,
  },
  {
    src: saree2,
    alt: "Luxury silk saree",
    material: "Banarasi Silk",
    collection: "Royal Collection",
    materialIcon: Gem,
    collectionIcon: Crown,
  },
  {
    src: saree3,
    alt: "Contemporary saree design",
    material: "Georgette",
    collection: "Modern Collection",
    materialIcon: Sparkles,
    collectionIcon: Heart,
  },
  {
    src: saree4,
    alt: "Traditional handwoven saree",
    material: "Handloom",
    collection: "Heritage Collection",
    materialIcon: Star,
    collectionIcon: Gem,
  },
];

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        setIsTransitioning(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentImage = heroImages[currentImageIndex];

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
                className="p-[0.2rem] rounded-full overflow-hidden shadow-lg w-[19rem] h-[19rem] md:w-[22rem] md:h-[22rem] mx-auto relative"
                style={{
                  border: `5px dotted ${localStorage.getItem('theme') === 'light' ? 'black' : 'rgba(255,255,255,0.5)'}`,
                }}
              >
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <img
                    src={currentImage.src}
                    alt={currentImage.alt}
                    className={`w-full h-full object-cover rounded-full transition-all duration-500 ${
                      isTransitioning 
                        ? 'opacity-0 scale-110 blur-sm' 
                        : 'opacity-100 scale-100 blur-0'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full"></div>
                </div>
              </div>

              {/* Floating Product Cards */}
              <div 
                className={`absolute top-8 -left-1 bg-white/90 dark:bg-card/90 backdrop-blur-sm rounded-xl p-3 shadow-lg transition-all duration-500 ${
                  isTransitioning ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <currentImage.materialIcon className="h-4 w-4 text-primary" />
                  <div>
                    <div className="text-sm font-semibold">{currentImage.material}</div>
                  </div>
                </div>
              </div>

              <div 
                className={`absolute bottom-8 -right-3 bg-white/90 dark:bg-card/90 backdrop-blur-sm rounded-xl p-3 shadow-lg transition-all duration-500 ${
                  isTransitioning ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <currentImage.collectionIcon className="h-4 w-4 text-accent" />
                  <div>
                    <div className="text-sm font-semibold">
                      {currentImage.collection}
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Indicators */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsTransitioning(true);
                      setTimeout(() => {
                        setCurrentImageIndex(index);
                        setIsTransitioning(false);
                      }, 300);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? 'bg-primary w-4'
                        : 'bg-muted-foreground/40 hover:bg-muted-foreground/60'
                    }`}
                  />
                ))}
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
