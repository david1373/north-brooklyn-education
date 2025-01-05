import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-serif font-bold tracking-tight text-yellow-950 sm:text-5xl md:text-6xl">
              NYC School Admissions Made Stress Free
            </h1>
            <p className="mt-4 text-xl text-[hsl(var(--light-gray))] font-thin">
              North Brooklyn Education is a boutique admissions consultancy founded by local parents with decades of experience in early childhood development. We partner with families to navigate the intricate landscape of NYC schools – from 3-K to middle school, public to private. Our approach combines deep educational expertise, ensuring your child's journey to the perfect school feels less like a maze and more like a guided adventure.
            </p>
            <div className="mt-8">
              <Button 
                className="bg-yellow-800 hover:bg-yellow-950 text-white px-8 py-3 rounded-md text-lg"
                asChild
              >
                <a href="#consultation">Schedule a Consultation</a>
              </Button>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="aspect-square overflow-hidden rounded-lg shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1555009393-f20bdb245c4d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="A cozy reading corner with books arranged on wooden shelves, creating a warm and inviting learning environment"
                width={3087}
                height={3087}
                className="object-cover object-top w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

