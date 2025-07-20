import { Button } from "@/components/ui/button"
import { ShoppingBag, ArrowRight, Star } from "lucide-react"
import heroSaree from "@/assets/hero-saree.jpg"

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary-glow">
                <Star className="h-5 w-5 fill-current" />
                <span className="text-sm font-medium">Premium Collection</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Discover Your
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  Perfect Saree
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-md">
                Explore our exquisite collection of traditional and contemporary sarees. 
                From elegant silk to vibrant cotton, find the perfect saree for every occasion.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="shop" size="xl" className="group">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button variant="premium" size="xl">
                View Collection
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Designs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50k+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4.9</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:order-last order-first">
            <div className="relative z-10">
              <img
                src={heroSaree}
                alt="Beautiful woman in purple saree"
                className="w-full h-auto rounded-2xl shadow-elegant hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/30 rounded-full blur-2xl animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </section>
  )
}