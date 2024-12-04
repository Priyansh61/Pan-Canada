export function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold mb-2">
              15<span className="text-blue-600">+</span>
            </p>
            <p className="text-gray-600">Countries Covered</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">
              99<span className="text-blue-600">%</span>
            </p>
            <p className="text-gray-600">Success Rate</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">
              542<span className="text-blue-600">+</span>
            </p>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">
              25<span className="text-blue-600">+</span>
            </p>
            <p className="text-gray-600">Years Of Experience</p>
          </div>
        </div>
      </div>
    </section>
  )
}

