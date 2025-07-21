import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const categories = [
  {
    title: "Silk Sarees",
    description: "Premium silk collection for special occasions",
    count: "150+ designs",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Cotton Sarees", 
    description: "Comfortable daily wear collection",
    count: "200+ designs",
    gradient: "from-blue-500 to-teal-500"
  },
  {
    title: "Wedding Collection",
    description: "Exquisite bridal and party wear",
    count: "100+ designs", 
    gradient: "from-red-500 to-orange-500"
  },
  {
    title: "Designer Sarees",
    description: "Contemporary and trendy designs",
    count: "80+ designs",
    gradient: "from-green-500 to-emerald-500"
  }
]

export function CategorySection() {
  return (
    <section className="py-6 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-4xl font-bold mb-4">
            Shop by Category
          </h2>
          <p className="text-md text-muted-foreground max-w-2xl mx-auto">
            Discover our diverse collection of sarees designed for every occasion and style preference
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={category.title}
              className="group relative overflow-hidden border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
              
              <div className="relative p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                    {category.count}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  {category.description}
                </p>
                
                <div className="text-sm font-medium text-primary group-hover:text-primary-glow transition-colors">
                  Explore Collection →
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}