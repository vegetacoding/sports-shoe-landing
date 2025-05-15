const fs = require('fs')
const path = require('path')
const https = require('https')

const products = [
  {
    id: 1,
    name: "Nike Air Max 270",
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb",
    gallery: [
      "https://images.unsplash.com/photo-1600185365483-26d90a8f0e1f",
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb",
      "https://images.unsplash.com/photo-1600185365483-26d90a8f0e1f",
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb",
    ],
  },
  {
    id: 2,
    name: "Adidas Ultraboost 22",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    gallery: [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    ],
  },
  {
    id: 3,
    name: "Puma RS-X³ Puzzle",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    gallery: [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    ],
  },
  {
    id: 4,
    name: "New Balance 574",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    gallery: [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    ],
  },
  {
    id: 5,
    name: "Nike Air Jordan 1 Mid",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    gallery: [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    ],
  },
  {
    id: 6,
    name: "Adidas NMD R1",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    gallery: [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    ],
  },
  {
    id: 7,
    name: "Puma Future Rider",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    gallery: [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    ],
  },
  {
    id: 8,
    name: "New Balance 327",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    gallery: [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    ],
  },
]

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const writeStream = fs.createWriteStream(filepath)
        response.pipe(writeStream)
        writeStream.on('finish', () => {
          writeStream.close()
          resolve()
        })
      } else {
        reject(new Error(`Failed to download ${url}`))
      }
    }).on('error', reject)
  })
}

const downloadAllImages = async () => {
  const shoesDir = path.join(__dirname, '../public/shoes')
  
  // Create shoes directory if it doesn't exist
  if (!fs.existsSync(shoesDir)) {
    fs.mkdirSync(shoesDir, { recursive: true })
  }

  // Download main images
  for (const product of products) {
    const mainImagePath = path.join(shoesDir, `${product.name.toLowerCase().replace(/\s+/g, '-')}.jpg`)
    await downloadImage(product.image, mainImagePath)
    console.log(`Downloaded ${product.image}`)

    // Download gallery images
    if (product.gallery) {
      for (let i = 0; i < product.gallery.length; i++) {
        const galleryImagePath = path.join(shoesDir, `${product.name.toLowerCase().replace(/\s+/g, '-')}-${i + 1}.jpg`)
        await downloadImage(product.gallery[i], galleryImagePath)
        console.log(`Downloaded ${product.gallery[i]}`)
      }
    }
  }
}

downloadAllImages().catch(console.error) 