import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Nike Air Max 270",
    price: "2.890.000₫",
    originalPrice: "3.290.000₫",
    rating: 4.8,
    reviews: 124,
    image: "/shoes/nike-air-max.jpg",
    discount: true,
    new: false,
  },
  {
    id: 2,
    name: "Adidas Ultraboost 22",
    price: "3.590.000₫",
    originalPrice: "",
    rating: 4.9,
    reviews: 89,
    image: "/shoes/adidas-ultraboost.jpg",
    discount: false,
    new: true,
  },
  {
    id: 3,
    name: "Puma RS-X³ Puzzle",
    price: "2.490.000₫",
    originalPrice: "2.990.000₫",
    rating: 4.7,
    reviews: 56,
    image: "/shoes/puma-rsx.jpg",
    discount: true,
    new: false,
  },
  {
    id: 4,
    name: "New Balance 574",
    price: "1.990.000₫",
    originalPrice: "",
    rating: 4.6,
    reviews: 78,
    image: "/shoes/new-balance.jpg",
    discount: false,
    new: true,
  },
]

export default function FeaturedProducts() {
  return (
    <section className="w-full py-12 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Sản phẩm nổi bật</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Khám phá những mẫu giày thể thao được yêu thích nhất hiện nay
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden group">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute top-2 right-2 flex flex-col gap-2">
                  {product.discount && (
                    <Badge variant="destructive" className="text-xs">
                      Giảm giá
                    </Badge>
                  )}
                  {product.new && <Badge className="text-xs bg-primary">Mới</Badge>}
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="text-sm font-medium ml-1">{product.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">({product.reviews} đánh giá)</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="font-bold">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                  )}
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  Thêm vào giỏ
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Button variant="outline" size="lg">
            Xem tất cả sản phẩm
          </Button>
        </div>
      </div>
    </section>
  )
}
