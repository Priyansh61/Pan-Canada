import Link from 'next/link'

export function ProjectCTA() {
  return (
    <section className="bg-[#0B1120] text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0">
          <div className="w-12 h-1 bg-blue-600 mb-8" />
          <h2 className="text-4xl font-normal leading-tight mb-4">
            Have a project in mind?
          </h2>
          <p className="text-gray-300 max-w-2xl">
            We are actively seeking partnerships with organisations all over the world in order to grow the mentoring movement.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex px-8 py-3 rounded-full bg-white text-black hover:bg-gray-100 transition-colors"
        >
          Let's Get Started
        </Link>
      </div>
    </section>
  )
}

