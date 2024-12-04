import Image from 'next/image'
import Link from 'next/link'

export function Industries() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="w-12 h-1 bg-blue-600 mb-8" />
          <h2 className="text-4xl font-normal leading-tight mb-6">
            We are a community of top professionals who are committed to exceeding expectations via excellence
          </h2>
          <p className="text-gray-600">
            With over 25 years of combined industry experience, our team is ready to assist you in completing your project and receiving the results you desire. We take pride in the quality of our equipment and the level of service we provide.
          </p>
        </div>

        {/* Industries */}
        <div className="space-y-20">
          {/* Construction Industry */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/service-bg-1.jpg"
                alt="Construction workers on site"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Construction Industry</h3>
              <p className="text-gray-600">
                The Pan Canada Group has worked on a variety of projects for architects, civil engineers, business interests, cities, and other governmental agencies. Concrete installation and scanning for a range of foundation construction projects, including schools, hospitals, office buildings, shopping malls, highways, and bridges, have been performed by the Pan CanadaGroup.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center text-blue-600 hover:text-blue-700"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Automobiles Industry */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-4">
              <h3 className="text-2xl font-semibold">Automobiles Industry</h3>
              <p className="text-gray-600">
                Our engineering and manufacturing teams connect on a regular basis. Ideas are being investigated. It is feasible to forecast performance. Delivery and optimization of solutions. Our predictive engineering team reacts promptly and precisely to inquiries concerning a product's durability, manufacturing ease, and real-world performance.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center text-blue-600 hover:text-blue-700"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/images/service-bg-2.jpg"
                alt="Automobile manufacturing facility"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Hotel Industry */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/service-bg-3.jpg"
                alt="Hotel chef in kitchen"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Hotel Industry</h3>
              <p className="text-gray-600">
                We own, run, and manage four major hotel brands in five Canadian provinces. With us as a partner, you'll discover a dedication to both personal and professional development via genuine, passionate hospitality that gives your employees and visitors a genuine home away from home experience.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center text-blue-600 hover:text-blue-700"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

