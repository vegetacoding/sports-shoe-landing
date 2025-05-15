import Link from "next/link"
import { ShoppingCart, Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl">
            SPRINT<span className="text-primary">X</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
            Nam
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
            Nữ
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
            Trẻ em
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
            Bộ sưu tập
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
            Khuyến mãi
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
            <span className="sr-only">Tìm kiếm</span>
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Giỏ hàng</span>
          </Button>
          <Button variant="outline" className="hidden md:flex">
            Đăng nhập
          </Button>
          <Button className="hidden md:flex">Đăng ký</Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
