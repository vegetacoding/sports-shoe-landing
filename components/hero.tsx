"use client"

import { useState, useEffect, Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF, Environment, ContactShadows, Html } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { ArrowRight, Loader2 } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import React from "react"

// Shoe model component
function ShoeModel({ url = "shoe.glb", ...props }) {
  const { scene } = useGLTF(url)
  return <primitive object={scene} {...props} />
}

// Error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error loading 3D model:", error)
  }

  render() {
    if (this.state.hasError) {
      return null
    }
    return this.props.children
  }
}

// Preload the model
useGLTF.preload("shoe.glb")

// Loading component
function LoadingShoe() {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <Loader2 className="h-10 w-10 text-primary animate-spin mb-2" />
        <p className="text-sm text-muted-foreground">Đang tải mô hình 3D...</p>
      </div>
    </Html>
  )
}

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false)
  const [modelError, setModelError] = useState(false)
  const [modelLoaded, setModelLoaded] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Increase timeout for large file loading
    const timeout = setTimeout(() => {
      if (!modelLoaded) {
  
      }
    }, 15000) // Increased from 5000 to 15000 ms

    return () => clearTimeout(timeout)
  }, [modelLoaded])

  // Function to handle successful model loading
  const handleModelLoad = () => {
    setModelLoaded(true)
    setModelError(false)
  }

  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden bg-white to-muted">
      <div className="container grid lg:grid-cols-2 gap-8 py-12 md:py-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6 pt-8 md:pt-0"
        >
          <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
            Bộ sưu tập mới 2025
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Nâng tầm phong cách <br />
            <span className="text-primary">Vượt mọi giới hạn</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-md">
            Khám phá bộ sưu tập giày thể thao mới nhất với công nghệ tiên tiến, thiết kế hiện đại và sự thoải mái vượt
            trội.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button size="lg" className="gap-2">
              Mua ngay <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Khám phá bộ sưu tập
            </Button>
          </div>
          <div className="flex items-center gap-6 mt-8">
            <div className="flex flex-col">
              <span className="text-3xl font-bold">500+</span>
              <span className="text-muted-foreground">Mẫu giày</span>
            </div>
            <div className="h-12 w-px bg-border"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold">100+</span>
              <span className="text-muted-foreground">Thương hiệu</span>
            </div>
            <div className="h-12 w-px bg-border"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold">50k+</span>
              <span className="text-muted-foreground">Khách hàng</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative h-[500px] w-full"
        >
          {isMounted && (
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-white from-primary/5 to-primary/10">
              {/* Animated background circles for visual interest while loading */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-[250px] h-[250px] rounded-full bg-primary/5 animate-pulse"></div>
                <div
                  className="absolute w-[200px] h-[200px] rounded-full bg-primary/10 animate-pulse"
                  style={{ animationDelay: "300ms" }}
                ></div>
                <div
                  className="absolute w-[150px] h-[150px] rounded-full bg-primary/15 animate-pulse"
                  style={{ animationDelay: "600ms" }}
                ></div>
              </div>

              {/* 3D Canvas with proper error handling */}
              <Canvas
                camera={{ position: [0, 0, 2.5], fov: 35 }}
                onCreated={() => console.log("Canvas created successfully")}
                onError={(error) => {
                  console.error("Canvas error:", error)
                  setModelError(true)
                }}
                className="w-full h-full"
              >
                <ambientLight intensity={0.7} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                <Environment preset="city" />
                <ContactShadows position={[0, -0.8, 0]} opacity={0.25} scale={10} blur={1.5} far={0.8} />

                <ErrorBoundary>
                  <Suspense fallback={<LoadingShoe />}>
                    {!modelError && (
                      <ShoeModel
                        url="shoe.glb"
                        position={[0.3, 0, 0]}
                        rotation={[0, Math.PI / 4, 0]}
                        scale={0.15}
                        onLoad={handleModelLoad}
                      />
                    )}
                  </Suspense>
                </ErrorBoundary>

                <OrbitControls
                  enablePan={false}
                  enableZoom={false}
                  minPolarAngle={Math.PI / 3}
                  maxPolarAngle={Math.PI / 2}
                  autoRotate
                  autoRotateSpeed={0.5}
                />
              </Canvas>

              {/* Instructions for uploading GLB file */}
              {modelError && (
                <div className="absolute bottom-4 left-0 right-0 text-center px-4 py-2 bg-background/80 backdrop-blur-sm">
                  <p className="text-sm text-muted-foreground">
                    Vui lòng tải lên file uploads_files_4278121_Nike_Air_Shoes.glb vào thư mục public của dự án
                  </p>
                </div>
              )}
            </div>
          )}
          <div className="absolute -bottom-10 -left-10 -right-10 h-20 bg-gradient-to-t from-background to-transparent z-10" />
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
