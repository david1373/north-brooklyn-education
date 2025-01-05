import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function PhilosophySection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
          <div>
            <h2 className="text-3xl font-serif font-bold text-yellow-950 sm:text-4xl">
              Our Philosophy
            </h2>
            <div className="mt-6 space-y-6 text-lg text-[hsl(var(--light-gray))] font-thin">
              <p>
                As Brooklyn parents ourselves, we know firsthand how overwhelming the NYC school admissions process can be. That's why we've created the kind of boutique consulting service we wished we had - one that treats your family like our own.
              </p>
              <p>
                We work with a limited number of families each season, from nursery through high school applications, giving you our complete, undivided attention. No cookie-cutter approaches here - just personalized guidance tailored to your child's unique needs and your family's goals.
              </p>
              <p>
                From that first "which schools should we consider?" conversation to the exciting enrollment day, we're right there with you every step of the way.
              </p>
            </div>
            <div className="mt-8">
              <Button 
                variant="outline"
                className="text-yellow-800 border-yellow-800 hover:bg-yellow-800 hover:text-white"
              >
                Learn More About Our Approach
              </Button>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <Image
              src="https://images.unsplash.com/photo-1444840535719-195841cb6e2b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Silhouette of a child reaching towards the sky, symbolizing growth and unlimited potential in education"
              width={2940}
              height={1960}
              className="rounded-lg shadow-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

