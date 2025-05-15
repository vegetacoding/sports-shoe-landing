"use client"
import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
}

export default function Footer() {
  return (
    <footer className="w-full bg-muted/50 border-t">
      <div className="container px-4 md:px-6 py-12">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="font-bold text-xl">
              SPRINT<span className="text-primary">X</span>
            </h3>
            <p className="text-muted-foreground">
              Chúng tôi cung cấp những sản phẩm giày thể thao chất lượng cao, mang đến sự thoải mái và phong cách cho
              khách hàng.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Youtube, href: "#", label: "YouTube" },
              ].map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link href={social.href} className="text-muted-foreground hover:text-primary">
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="font-bold">Liên kết nhanh</h3>
            <ul className="space-y-2">
              {["Trang chủ", "Sản phẩm", "Về chúng tôi", "Liên hệ", "Blog"].map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    {link}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="font-bold">Liên hệ</h3>
            <ul className="space-y-2">
              {[
                { icon: MapPin, text: "123 Đường Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh" },
                { icon: Phone, text: "+84 123 456 789" },
                { icon: Mail, text: "info@sprintx.com" },
              ].map((contact, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <contact.icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{contact.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="font-bold">Đăng ký nhận tin</h3>
            <p className="text-muted-foreground">Đăng ký để nhận thông tin về sản phẩm mới và khuyến mãi đặc biệt.</p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-2"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Input type="email" placeholder="Email của bạn" />
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button type="submit">Đăng ký</Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SPRINTX. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex gap-4">
            {["Điều khoản sử dụng", "Chính sách bảo mật"].map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  {link}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
