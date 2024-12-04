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

export function TeamGrid() {
  return (
    <section className="pb-20">
      <div className="container mx-auto px-4">
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
              <h2 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h2>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

