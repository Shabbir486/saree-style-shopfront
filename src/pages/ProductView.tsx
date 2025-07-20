import { useState } from "react"
import { useParams } from "react-router-dom"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Star, Heart, Share2, ShoppingCart, Plus, Minus, Truck, Shield, RotateCcw } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// Mock product data - in real app this would come from API
const product = {
  id: 1,
  name: "Royal Purple Silk Saree",
  price: 15999,
  originalPrice: 19999,
  discount: 20,
  rating: 4.8,
  reviewCount: 234,
  images: [
    "/src/assets/saree-1.jpg",
    "/src/assets/saree-2.jpg", 
    "/src/assets/saree-3.jpg",
    "/src/assets/saree-4.jpg"
  ],
  description: `<div>
    <h3>Exquisite Royal Purple Silk Saree</h3>
    <p>This stunning royal purple silk saree is a perfect blend of traditional craftsmanship and contemporary elegance. Made from pure silk fabric, it features:</p>
    <ul>
      <li><strong>Premium Quality Silk:</strong> 100% pure silk fabric with a lustrous finish</li>
      <li><strong>Intricate Embroidery:</strong> Hand-embroidered golden patterns along the border</li>
      <li><strong>Rich Color:</strong> Deep royal purple that exudes luxury and sophistication</li>
      <li><strong>Versatile Styling:</strong> Perfect for weddings, festivals, and special occasions</li>
    </ul>
    <p>This saree comes with a matching blouse piece and is ideal for making a statement at any special event.</p>
  </div>`,
  specifications: [
    { label: "Fabric", value: "Pure Silk" },
    { label: "Length", value: "6.3 meters" },
    { label: "Blouse", value: "Included (0.8m)" },
    { label: "Care", value: "Dry Clean Only" },
    { label: "Origin", value: "Handwoven in India" }
  ],
  inStock: true,
  stockCount: 12
}

// Mock reviews data
const reviews = [
  {
    id: 1,
    user: "Priya S.",
    rating: 5,
    date: "2024-01-15",
    title: "Absolutely beautiful!",
    comment: "This saree is even more beautiful than in the pictures. The silk quality is excellent and the color is vibrant. Received many compliments when I wore it to a wedding."
  },
  {
    id: 2,
    user: "Anita M.",
    rating: 4,
    date: "2024-01-10", 
    title: "Great quality",
    comment: "Love the fabric quality and the embroidery work is really nice. The only thing is it's a bit heavy but that's expected with pure silk."
  },
  {
    id: 3,
    user: "Kavya R.",
    rating: 5,
    date: "2024-01-08",
    title: "Perfect for special occasions",
    comment: "Wore this to my sister's engagement and got so many compliments! The drape is beautiful and the color photographs really well."
  }
]

const ProductView = () => {
  const { id } = useParams()
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [newReview, setNewReview] = useState("")
  const [userRating, setUserRating] = useState(0)
  const { toast } = useToast()

  const addToCart = () => {
    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.name} added to your cart`,
    })
  }

  const addToWishlist = () => {
    toast({
      title: "Added to wishlist",
      description: "Product added to your wishlist",
    })
  }

  const submitReview = () => {
    if (!newReview.trim() || userRating === 0) {
      toast({
        title: "Please complete your review",
        description: "Please provide a rating and write a review",
        variant: "destructive"
      })
      return
    }
    
    toast({
      title: "Review submitted",
      description: "Thank you for your feedback!",
    })
    setNewReview("")
    setUserRating(0)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-card">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <img
                    src={image}
                    alt={`View ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-bold">₹{product.price.toLocaleString()}</span>
                {product.originalPrice > product.price && (
                  <>
                    <span className="text-xl text-muted-foreground line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      {product.discount}% OFF
                    </Badge>
                  </>
                )}
              </div>
              <p className="text-sm text-muted-foreground">Inclusive of all taxes</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="w-8 text-center font-medium">{quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                    disabled={quantity >= product.stockCount}
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
                <span className="text-sm text-muted-foreground">
                  ({product.stockCount} available)
                </span>
              </div>

              <div className="flex gap-4">
                <Button 
                  className="flex-1" 
                  size="lg"
                  onClick={addToCart}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={addToWishlist}
                >
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <div className="flex items-center space-x-2 text-sm">
                <Truck className="h-4 w-4 text-green-600" />
                <span>Free delivery on orders over ₹50,000</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <RotateCcw className="h-4 w-4 text-blue-600" />
                <span>30-day return policy</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Shield className="h-4 w-4 text-purple-600" />
                <span>100% authentic products</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="description" className="mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews ({product.reviewCount})</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div 
                  className="prose prose-gray dark:prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="specifications" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between py-2 border-b border-border last:border-0">
                      <span className="font-medium">{spec.label}</span>
                      <span className="text-muted-foreground">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              {/* Write Review */}
              <Card>
                <CardHeader>
                  <CardTitle>Write a Review</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Your Rating</label>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          onClick={() => setUserRating(star)}
                          className="p-1"
                        >
                          <Star
                            className={`h-6 w-6 ${
                              star <= userRating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Your Review</label>
                    <Textarea
                      placeholder="Share your experience with this product..."
                      value={newReview}
                      onChange={(e) => setNewReview(e.target.value)}
                      className="min-h-[100px]"
                    />
                  </div>
                  
                  <Button onClick={submitReview}>Submit Review</Button>
                </CardContent>
              </Card>

              {/* Reviews List */}
              <div className="space-y-4">
                {reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Avatar>
                          <AvatarFallback>{review.user.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">{review.user}</span>
                            <div className="flex space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-3 w-3 ${
                                    i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground">{review.date}</span>
                          </div>
                          <h4 className="font-medium">{review.title}</h4>
                          <p className="text-muted-foreground">{review.comment}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  )
}

export default ProductView