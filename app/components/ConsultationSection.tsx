import { Button } from '@/components/ui/button'

export function ConsultationSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-t border-b border-yellow-200" id="consultation">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-serif font-bold text-yellow-950 sm:text-4xl mb-6">
          Schedule a Consultation
        </h2>
        <p className="text-[hsl(var(--light-gray))] mb-8 font-thin">
          Take the first step towards securing the best educational opportunities for your child. Our professional consultation service provides dedicated, expert guidance tailored to your needs.
        </p>
        <Button 
          className="bg-yellow-800 hover:bg-yellow-950 text-white px-8 py-3 rounded-md text-lg"
        >
          Book a Consultation
        </Button>
      </div>
    </section>
  )
}

