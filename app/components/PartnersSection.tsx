import { Button } from '@/components/ui/button'

const partners = [
  {
    name: "Brooklyn Math Tutors",
    description: "Expert math tutoring for all grade levels.",
    cta: "Learn More"
  },
  {
    name: "Creative Arts Workshop",
    description: "Nurture your child's artistic talents with our after-school programs.",
    cta: "Explore Classes"
  },
  {
    name: "Science Explorers Camp",
    description: "Summer camp focused on hands-on science experiments and learning.",
    cta: "Register Now"
  }
]

export function PartnersSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-center text-yellow-950 sm:text-4xl mb-12">
          Featured Partners
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-yellow-400/20 flex flex-col h-full"
            >
              <div className="flex-1">
                <h3 className="text-xl font-bold text-yellow-800 mb-4">
                  {partner.name}
                </h3>
                <p className="text-[hsl(var(--light-gray))] mb-6 font-thin">
                  {partner.description}
                </p>
              </div>
              <Button 
                className="bg-yellow-800 hover:bg-yellow-950 text-white w-full"
              >
                {partner.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

