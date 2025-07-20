import { Button } from "@/components/ui/button"
import { ShoppingBag, ArrowRight, Star, LogIn, UserPlus, Crown, Sparkles } from "lucide-react"
import heroSaree from "@/assets/hero-saree.jpg"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [circleColor, setCircleColor] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCircleColor((prev) => (prev + 1) % 3)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const circleColors = [
    'bg-gradient-to-br from-purple-400 to-pink-400',
    'bg-gradient-to-br from-blue-400 to-purple-400', 
    'bg-gradient-to-br from-pink-400 to-red-400'
  ]

  return (
    <section className="relative min-h-[700px] lg:min-h-[800px] bg-gradient-hero overflow-hidden">
      {/* Cloud Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-16 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-24 bg-primary/5 rounded-full blur-2xl animate-pulse delay-700"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-20 bg-accent/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-12 bg-white/5 rounded-full blur-lg animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Mobile: Order 2, Desktop: Order 1 */}
          <div className="space-y-8 animate-fade-in order-2 lg:order-1">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary">
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

            {/* Auth Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="shop" size="xl" className="group">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <div className="flex gap-2">
                <Button variant="outline" size="lg" className="flex-1 sm:flex-none">
                  <LogIn className="mr-2 h-4 w-4" />
                  Sign In
                </Button>
                <Button variant="premium" size="lg" className="flex-1 sm:flex-none">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Sign Up
                </Button>
              </div>
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

          {/* Right Image - Mobile: Order 1, Desktop: Order 2 */}
          <div className="relative order-1 lg:order-2">
            {/* Dynamic Circle Background */}
            <div className={`absolute inset-0 w-96 h-96 mx-auto rounded-full ${circleColors[circleColor]} opacity-20 blur-3xl transition-all duration-1000 animate-pulse`}></div>
            
            <div className="relative z-10 max-w-lg mx-auto">
              <img
                src={heroSaree}
                alt="Beautiful woman in purple saree"
                className="w-full h-auto rounded-3xl shadow-elegant hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Product Cards */}
              <div className="absolute top-8 -left-4 bg-white/90 dark:bg-card/90 backdrop-blur-sm rounded-xl p-3 shadow-lg animate-fade-in">
                <div className="flex items-center space-x-2">
                  <Crown className="h-4 w-4 text-primary" />
                  <div>
                    <div className="text-sm font-semibold">Premium Silk</div>
                    <div className="text-xs text-muted-foreground">₹15,999</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-8 -right-4 bg-white/90 dark:bg-card/90 backdrop-blur-sm rounded-xl p-3 shadow-lg animate-fade-in delay-300">
                <div className="flex items-center space-x-2">
                  <Sparkles className="h-4 w-4 text-accent" />
                  <div>
                    <div className="text-sm font-semibold">Designer Collection</div>
                    <div className="text-xs text-muted-foreground">4.9 ⭐ (2.1k reviews)</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-1/2 -right-8 bg-white/90 dark:bg-card/90 backdrop-blur-sm rounded-xl p-3 shadow-lg animate-fade-in delay-500">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">50%</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Festival Sale</div>
                    <div className="text-xs text-muted-foreground">Limited Time</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Additional Decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-accent/15 rounded-full blur-3xl animate-pulse delay-700"></div>
          </div>
        </div>
      </div>
    </section>
  )
}