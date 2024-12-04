import Image from 'next/image'

export function WhyChooseUs() {
  const images = [
    {
      src: "/images/work-1.jpg",
      alt: "Industrial workers in safety gear viewing machinery"
    },
    {
      src: "/images/work-2.jpg",
      alt: "Supervisor discussing with team members in industrial setting"
    },
    {
      src: "/images/work-3.jpg",
      alt: "Workers collaborating on digital documentation"
    }
  ]

  return (
    <section className="py-20 bg-slate-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="w-12 h-1 bg-[#0088CC] mx-auto mb-8" />
          <h2 className="text-4xl font-normal leading-tight mb-6">
            Why Choose Us
          </h2>
          <p className="text-gray-600">
            The best professionals who work here are committed to exceeding expectations via excellence.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

