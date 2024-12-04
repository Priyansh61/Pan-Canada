import Link from 'next/link'

export function Specialization() {
  return (
    <section className="bg-[#0B1120] text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="w-12 h-1 bg-primary" />
            <h2 className="text-4xl font-normal leading-tight">
              Pan Canada Group's Specialisation and Company Characteristics
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Our company matches companies/employers with skilled applicants who fit their standards. We offer staffing solutions for local, national, and global demands. Our mission is to help job searchers find new opportunities while also supporting employers in selecting the ideal candidate for open positions.
            </p>
            <Link
              href="/about-us"
              className="inline-flex px-8 py-3 rounded-full bg-white text-black hover:bg-gray-100 transition-colors"
            >
              Know More About Us
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center">
              <p className="text-5xl font-bold text-white mb-2">
                542<span className="text-primary">+</span>
              </p>
              <p className="text-gray-400">Projects</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-white mb-2">
                99<span className="text-primary">%</span>
              </p>
              <p className="text-gray-400">Success Rate</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-white mb-2">
                25<span className="text-primary">+</span>
              </p>
              <p className="text-gray-400">Experience</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-white mb-2">
                15<span className="text-primary">+</span>
              </p>
              <p className="text-gray-400">Countries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

