import Image from 'next/image'

interface Service {
  title: string
  description: string
  image: string
  imageAlt: string
  isReversed?: boolean
}

const services: Service[] = [
  {
    title: "Automobile Industry",
    description: "Our engineering and manufacturing teams connect on a regular basis. Ideas are being investigated. It is feasible to forecast performance. Delivery and optimizations of solutions. Our predictive engineering team reacts promptly and precisely to inquiries concerning a product's durability, manufacturing ease, and real-world performance.",
    image: "/images/work-2.jpg",
    imageAlt: "Automobile manufacturing facility with cars on assembly line"
  },
  {
    title: "Construction Industry",
    description: "The Pan Canada Group has worked on a variety of projects for architects, civil engineers, business interests, cities, and other governmental agencies. Concrete installation and scanning for a range of foundation construction projects, including schools, hospitals, office buildings, shopping malls, highways, and bridges, have been performed by the Pan Canada Group.",
    image: "/images/work-1.jpg",
    imageAlt: "Construction workers on site",
    isReversed: true
  },
  {
    title: "Hotel Industry",
    description: "We own, run, and manage four major hotel brands in five Canadian provinces. With us as a partner, you'll discover a dedication to both personal and professional development via genuine, passionate hospitality that gives your employees and visitors a genuine home away from home experience.",
    image: "/images/work-3.jpg",
    imageAlt: "Professional chef preparing food in kitchen"
  },
  {
    title: "Textile Industry",
    description: "The Pan Canada Group is a leading textile wholesaler. Over the last decade, we have proudly produced millions of items of merchandise for our clients. Thanks to our experience and direct relationships with factories, we are a dependable and trustworthy agency for large orders.",
    image: "/images/work-4.jpg",
    imageAlt: "Textile manufacturing facility",
    isReversed: true
  }
]

export function ServicesList() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="space-y-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                service.isReversed ? 'md:[&>div:first-child]:order-2' : ''
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">
                  {service.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

