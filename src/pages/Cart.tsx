import { useState } from "react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Heart, Bookmark } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// Mock cart data
const initialCartItems = [
  {
    id: 1,
    name: "Royal Purple Silk Saree",
    price: 15999,
    originalPrice: 19999,
    image: "/src/assets/saree-1.jpg",
    quantity: 1,
    size: "Free Size",
    color: "Purple",
    selected: true
  },
  {
    id: 2,
    name: "Traditional Red Banarasi",
    price: 12999,
    originalPrice: 16999,
    image: "/src/assets/saree-2.jpg",
    quantity: 2,
    size: "Free Size",
    color: "Red",
    selected: true
  }
]

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems)
  const { toast } = useToast()

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const toggleItemSelection = (id: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    )
  }

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id))
    toast({
      title: "Item removed",
      description: "Item has been removed from your cart",
    })
  }

  const saveForLater = (id: number) => {
    const item = cartItems.find(item => item.id === id)
    removeItem(id)
    toast({
      title: "Saved for later",
      description: `${item?.name} has been saved for later`,
    })
  }

  const addToWishlist = (id: number) => {
    const item = cartItems.find(item => item.id === id)
    toast({
      title: "Added to wishlist",
      description: `${item?.name} has been added to your wishlist`,
    })
  }

  const selectedItems = cartItems.filter(item => item.selected)
  const subtotal = selectedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = subtotal > 50000 ? 0 : 499
  const total = subtotal + shipping

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
          <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Shopping Cart</h1>
          <p className="text-muted-foreground">
            {cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in your cart
            {selectedItems.length < cartItems.length && (
              <span className="ml-2 text-primary">
                ({selectedItems.length} selected)
              </span>
            )}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        checked={item.selected}
                        onCheckedChange={() => toggleItemSelection(item.id)}
                        className="mt-2"
                      />
                      <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <div className="flex justify-between">
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="flex gap-2">
                        <Badge variant="secondary">Size: {item.size}</Badge>
                        <Badge variant="secondary">Color: {item.color}</Badge>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          <span className="text-xl font-bold">₹{item.price.toLocaleString()}</span>
                          {item.originalPrice > item.price && (
                            <span className="text-sm text-muted-foreground line-through">
                              ₹{item.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          
                          <span className="w-8 text-center font-medium">
                            {item.quantity}
                          </span>
                          
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex gap-2 pt-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => saveForLater(item.id)}
                        >
                          <Bookmark className="h-3 w-3 mr-1" />
                          Save for Later
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => addToWishlist(item.id)}
                        >
                          <Heart className="h-3 w-3 mr-1" />
                          Add to Wishlist
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {cartItems.length === 0 && (
              <Card className="text-center py-12">
                <CardContent>
                  <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-xl font-semibold mb-2">Your cart is empty</h3>
                  <p className="text-muted-foreground mb-6">
                    Discover our beautiful collection of sarees
                  </p>
                  <Button>
                    Continue Shopping
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Order Summary */}
          {selectedItems.length > 0 && (
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>₹{subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
                    </div>
                    {shipping === 0 && (
                      <p className="text-xs text-green-600">
                        Free shipping on orders over ₹50,000
                      </p>
                    )}
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>₹{total.toLocaleString()}</span>
                  </div>
                  
                  <div className="space-y-2">
                    <Button className="w-full" size="lg">
                      Proceed to Checkout
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    
                    <Button variant="outline" className="w-full" size="lg">
                      <Heart className="mr-2 h-4 w-4" />
                      Save for Later
                    </Button>
                  </div>
                  
                  <div className="text-xs text-muted-foreground space-y-1">
                    <p>• Free returns within 30 days</p>
                    <p>• Secure payment processing</p>
                    <p>• Express delivery available</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default Cart