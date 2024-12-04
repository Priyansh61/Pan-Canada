import Image from 'next/image'

interface TeamMember {
  name: string
  role: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    name: "Steve Walton",
    role: "CEO and co-founder",
    image: "/placeholder.svg"
  },
  {
    name: "Charlotte Batson",
    role: "Marketing Manager",
    image: "/placeholder.svg"
  },
  {
    name: "Diana Collier",
    role: "Human Resource",
    image: "/placeholder.svg"
  }
]

export function AboutPartners() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <div className="w-12 h-1 bg-blue-600 mb-8" />
          <h2 className="text-4xl font-normal leading-tight mb-6">
            Your Next-Generation Partners
          </h2>
          <p className="text-gray-600">
            As an employee employer, we approach your business with the same passion, care and commitment to doing things right as we do ourselves. At every step, we are personally invested in your success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={500}
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

