import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Star } from "lucide-react"
import { Link } from "react-router-dom"

const similarProducts = [
  {
    id: 2,
    name: "Traditional Red Banarasi",
    price: 12999,
    originalPrice: 16999,
    image: "/src/assets/saree-2.jpg",
    rating: 4.6,
    reviews: 189
  },
  {
    id: 3,
    name: "Golden Embroidered Saree",
    price: 18999,
    originalPrice: 24999,
    image: "/src/assets/saree-3.jpg",
    rating: 4.9,
    reviews: 156
  },
  {
    id: 4,
    name: "Elegant Blue Silk",
    price: 14999,
    originalPrice: 19999,
    image: "/src/assets/saree-4.jpg",
    rating: 4.7,
    reviews: 203
  },
  {
    id: 5,
    name: "Classic Green Kanjivaram",
    price: 22999,
    originalPrice: 28999,
    image: "/src/assets/saree-1.jpg",
    rating: 4.8,
    reviews: 142
  },
  {
    id: 6,
    name: "Maroon Wedding Saree",
    price: 19999,
    originalPrice: 25999,
    image: "/src/assets/saree-2.jpg",
    rating: 4.5,
    reviews: 167
  },
  {
    id: 7,
    name: "Pink Floral Printed",
    price: 8999,
    originalPrice: 12999,
    image: "/src/assets/saree-3.jpg",
    rating: 4.3,
    reviews: 134
  },
  {
    id: 8,
    name: "Royal Navy Silk",
    price: 16999,
    originalPrice: 21999,
    image: "/src/assets/saree-4.jpg",
    rating: 4.6,
    reviews: 178
  },
  {
    id: 9,
    name: "Orange Festive Saree",
    price: 13999,
    originalPrice: 17999,
    image: "/src/assets/saree-1.jpg",
    rating: 4.4,
    reviews: 145
  }
]

export function SimilarProducts() {
  const [showAll, setShowAll] = useState(false)
  const displayedProducts = showAll ? similarProducts : similarProducts.slice(0, 6)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Similar Collections</h2>
        {!showAll && similarProducts.length > 6 && (
          <Button 
            variant="outline" 
            onClick={() => setShowAll(true)}
          >
            Show More
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="relative">
              <div className="aspect-square overflow-hidden bg-gradient-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="absolute top-3 left-3">
                <Badge className="bg-accent-glow text-white border-0">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </Badge>
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm hover:bg-white"
              >
                <Heart className="h-4 w-4" />
              </Button>
            </div>
            
            <CardContent className="p-4 space-y-3">
              <div>
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-semibold text-lg hover:text-primary transition-colors cursor-pointer">
                    {product.name}
                  </h3>
                </Link>
                
                <div className="flex items-center space-x-1 mt-1">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < Math.floor(product.rating) 
                            ? 'fill-yellow-400 text-yellow-400' 
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {product.rating} ({product.reviews})
                  </span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold">₹{product.price.toLocaleString()}</span>
                  <span className="text-sm text-muted-foreground line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                </div>
                
                <Button className="w-full" size="sm">
                  Add to Cart
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {showAll && (
        <div className="text-center">
          <Button 
            variant="outline" 
            onClick={() => setShowAll(false)}
          >
            Show Less
          </Button>
        </div>
      )}
    </div>
  )
}