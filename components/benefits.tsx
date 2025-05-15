"use client"
import { Shield, Truck, RotateCcw, Clock } from "lucide-react"
import { motion } from "framer-motion"

const benefits = [
  {
    icon: <Truck className="h-10 w-10 text-primary" />,
    title: "Giao hàng miễn phí",
    description: "Miễn phí giao hàng cho tất cả đơn hàng trên 1 triệu đồng trên toàn quốc.",
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Bảo hành chính hãng",
    description: "Tất cả sản phẩm đều được bảo hành chính hãng từ 12 đến 24 tháng.",
  },
  {
    icon: <RotateCcw className="h-10 w-10 text-primary" />,
    title: "Đổi trả dễ dàng",
    description: "Đổi trả sản phẩm trong vòng 30 ngày nếu không vừa ý.",
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Hỗ trợ 24/7",
    description: "Đội ngũ tư vấn viên luôn sẵn sàng hỗ trợ bạn mọi lúc mọi nơi.",
  },
]

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

export default function Benefits() {
  return (
    <section className="w-full py-12 md:py-24 bg-muted">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Tại sao chọn chúng tôi?</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Chúng tôi cam kết mang đến trải nghiệm mua sắm tốt nhất cho bạn
            </p>
          </div>
        </motion.div>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="p-3 rounded-full bg-primary/10 mb-4"
              >
                {benefit.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
