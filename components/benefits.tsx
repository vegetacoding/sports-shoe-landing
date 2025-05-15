import { Shield, Truck, RotateCcw, Clock } from "lucide-react"

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
    description: "Đổi tr�� sản phẩm trong vòng 30 ngày nếu không vừa ý.",
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Hỗ trợ 24/7",
    description: "Đội ngũ tư vấn viên luôn sẵn sàng hỗ trợ bạn mọi lúc mọi nơi.",
  },
]

export default function Benefits() {
  return (
    <section className="w-full py-12 md:py-24 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Tại sao chọn chúng tôi?</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Chúng tôi cam kết mang đến trải nghiệm mua sắm tốt nhất cho bạn
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm">
              <div className="p-3 rounded-full bg-primary/10 mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
