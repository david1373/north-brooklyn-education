const testimonials = [
  {
    quote: "Working with North Brooklyn Education made the overwhelming process of finding the right school for our daughter manageable and even enjoyable. Their expertise was invaluable.",
    author: "Sarah M., Brooklyn Heights"
  },
  {
    quote: "They helped us navigate both public and private school options, providing insights we never would have known about. Our son is now thriving in his new school.",
    author: "Michael R., Park Slope"
  },
  {
    quote: "Their deep knowledge of NYC schools and personalized approach made all the difference. We couldn't be happier with the outcome.",
    author: "Lisa K., Williamsburg"
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-center text-yellow-950 sm:text-4xl mb-12">
          What Parents Say
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-yellow-400/20"
            >
              <p className="text-[hsl(var(--light-gray))] italic mb-4 font-thin">
                "{testimonial.quote}"
              </p>
              <p className="text-yellow-800 font-medium">
                - {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

