import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart, Eye, Star } from "lucide-react"
import { Link } from "react-router-dom"
import saree1 from "@/assets/saree-1.jpg"
import saree2 from "@/assets/saree-2.jpg"
import saree3 from "@/assets/saree-3.jpg"
import saree4 from "@/assets/saree-4.jpg"

const products = [
  {
    id: 1,
    name: "Royal Purple Silk Saree",
    price: "₹8,999",
    originalPrice: "₹12,999",
    rating: 4.8,
    reviews: 156,
    image: saree1,
    discount: "30% OFF",
    tag: "Bestseller"
  },
  {
    id: 2,
    name: "Blue Banarasi Saree",
    price: "₹15,999",
    originalPrice: "₹19,999",
    rating: 4.9,
    reviews: 203,
    image: saree2,
    discount: "20% OFF",
    tag: "Premium"
  },
  {
    id: 3,
    name: "Red Wedding Saree",
    price: "₹11,999",
    originalPrice: "₹16,999",
    rating: 4.7,
    reviews: 89,
    image: saree3,
    discount: "25% OFF",
    tag: "Trending"
  },
  {
    id: 4,
    name: "Emerald Designer Saree",
    price: "₹9,999",
    originalPrice: "₹13,999",
    rating: 4.6,
    reviews: 124,
    image: saree4,
    discount: "28% OFF",
    tag: "New"
  }
]

export function ProductGrid() {
  return (
    <section className="py-6 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4">
            Featured Collection
          </h2>
          <p className="text-md text-muted-foreground max-w-2xl mx-auto">
            Handpicked sarees from our premium collection, loved by thousands of customers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card 
              key={product.id}
              className="group relative overflow-hidden border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                
                {/* Overlay actions */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-2 right-4 space-x-2">
                    <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full bg-purple-400 hover:bg-white">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Link to={`/product/${product.id}`}>
                      <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full bg-purple-400 hover:bg-white">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button variant="shop" size="sm" className="w-full">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                  </div>
                </div>

                {/* Badges */}
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  {product.discount}
                </Badge>
                <Badge 
                  variant="secondary" 
                  className="absolute ml-3 top-4 left-20 bg-purple-800 text-foreground"
                >
                  {product.tag}
                </Badge>
                </div>
              </Link>

              <CardContent className="p-4">
                <Link to={`/product/${product.id}`} className="block">
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                </Link>
                
                <div className="flex items-center space-x-1 mb-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-sm text-muted-foreground">({product.reviews})</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-primary">{product.price}</span>
                  <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}