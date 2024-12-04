export function AboutStats() {
  return (
    <section className="bg-[#0B1120] text-white py-20">
      <div className="container mx-auto px-4">
        {/* Content Section */}
        <div className="max-w-3xl mb-16">
          <div className="w-12 h-1 bg-blue-600 mb-8" />
          <h2 className="text-4xl font-normal leading-tight mb-6">
            We do the work so you can concentrate on expanding your company
          </h2>
          <p className="text-gray-300">
            As employee owners, we approach your company with the same focus on doing things correctly as we do our own. Every step of the way, we are personally invested in your success.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold mb-2">
              15<span className="text-blue-600">+</span>
            </p>
            <p className="text-gray-400">Countries Covered</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">
              99<span className="text-blue-600">%</span>
            </p>
            <p className="text-gray-400">Success Rate</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">
              542<span className="text-blue-600">+</span>
            </p>
            <p className="text-gray-400">Projects Completed</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">
              25<span className="text-blue-600">+</span>
            </p>
            <p className="text-gray-400">Years Of Experience</p>
          </div>
        </div>
      </div>
    </section>
  )
}

