import Image from 'next/image'
export function ServicesVision() {
    return (
      <section className="bg-[#0B1120] text-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-normal leading-tight mb-6">Our Vision</h2>
            <p className="text-gray-300">
              As employee owners, we approach your business with the same passion, care, and commitment to doing things properly that we do our own. Our Vision is to help job searchers find new opportunities while also supporting employers in selecting the ideal candidate for open positions.
            </p>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/images/about.jpg"
              alt="Professional team members"
              fill
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
    )
  }
  
  