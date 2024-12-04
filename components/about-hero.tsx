import Image from 'next/image'

export function AboutHero() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero Content */}
        <div className="max-w-3xl mb-16">
          <div className="w-12 h-1 bg-blue-600 mb-8" />
          <h1 className="text-4xl font-normal leading-tight mb-6">
            We Are The World&apos;s Leading International Company.
          </h1>
          <p className="text-gray-600">
            In the fields of building construction, food production, textile manufacture, and transportation, a variety of services are offered by our organization. We work hard to offer the highest quality goods and services and have a staff of seasoned individuals that are experts in these fields.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
          <Image
            src="/images/about.jpg"
            alt="Our professional team in industrial setting"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}

