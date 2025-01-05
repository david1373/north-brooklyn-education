import { Button } from '@/components/ui/button'

const services = [
  {
    title: "3-K & PRE-K",
    description: "Finding your child's first school can be stressful and emotional. We're here to help you find great schools, apply without frustration, and choose the perfect fit.",
    color: "bg-yellow-500",
  },
  {
    title: "ELEMENTARY SCHOOL",
    description: "There are a wide variety of private and public school options in New York, each with unique pros and cons for your child. We'll help you research, choose, and apply to the best schools for your family.",
    color: "bg-yellow-500",
  },
  {
    title: "MIDDLE SCHOOL",
    description: "By middle school, your child can play a role in their own educational decisions. We work with families to select schools together and develop applications that demonstrate their child's unique strengths.",
    color: "bg-yellow-500",
  },
  {
    title: "HIGH SCHOOL",
    description: "High school admissions in New York can be competitive and exhausting. We calm the chaos by partnering with families and applicants to plan, research, write, and apply, teaching students valuable skills along the way.",
    color: "bg-yellow-500",
  },
]

export function ServicesSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-center text-yellow-950 sm:text-4xl mb-12">
          Our Services
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.color} p-8 rounded-lg flex flex-col h-full border border-yellow-600/20`}
            >
              <div className="flex-1">
                <h3 className="text-xl font-bold text-yellow-950 mb-4">
                  {service.title}
                </h3>
                <p className="text-yellow-950 mb-6 font-thin">
                  {service.description}
                </p>
              </div>
              <Button 
                variant="secondary"
                className="bg-white hover:bg-yellow-100 text-yellow-950"
              >
                LEARN MORE
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

