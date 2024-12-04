import Link from 'next/link'
import Image from 'next/image'

export function Hero() {
  return (
    <div className="container mx-auto px-4 pt-20 pb-16">
      <div className="max-w-3xl">
        <div className="w-12 h-1 bg-primary mb-8" />
        <h1 className="text-5xl font-normal leading-tight mb-6">
          Pan Canada Group provides a wide range of services
        </h1>
        <p className="text-gray-600 text-xl mb-8">
          Our expertise has been founded on our talents, values, ability to innovate, and passion.
        </p>
        <Link
          href="/about-us"
          className="inline-flex px-8 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
        >
          Let&apos;s Get Started
        </Link>
      </div>
      <div className="mt-16">
        <Image
          src="/images/hero-bg.jpg"
          alt="Business meeting"
          width={1200}
          height={600}
          className="w-full rounded-lg"
          priority
        />
      </div>
    </div>
  )
}

