'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function NewsletterSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-serif font-bold text-yellow-950 sm:text-4xl mb-6">
          Stay Updated
        </h2>
        <p className="text-[hsl(var(--light-gray))] mb-8 font-thin">
          Subscribe to our newsletter for expert insights on NYC school admissions, upcoming deadlines, and educational trends.
        </p>
        <form className="flex gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1"
          />
          <Button 
            className="bg-yellow-800 hover:bg-yellow-950 text-white"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  )
}

