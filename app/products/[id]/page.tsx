import { products } from "@/data/products"
import ProductDetails from "./ProductDetails"

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === parseInt(params.id))

  if (!product) {
    return <div>Product not found</div>
  }

  return <ProductDetails product={product} />
} 