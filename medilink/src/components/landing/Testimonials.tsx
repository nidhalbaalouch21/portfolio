import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { Avatar } from '@/components/ui/avatar'

const testimonials = [
  { name: 'John D.', role: 'Patient', text: 'MediLink made finding a cardiologist incredibly easy. I had an appointment within 24 hours! The whole process was seamless.', rating: 5 },
  { name: 'Sarah M.', role: 'Mother', text: 'Booking appointments for my kids has never been easier. Dr. Williams is amazing and the platform is so user-friendly!', rating: 5 },
  { name: 'Robert K.', role: 'Patient', text: 'The video consultation feature saved me a trip to the clinic. Very convenient and the quality was excellent.', rating: 4 },
  { name: 'Lisa T.', role: 'Patient', text: 'I love being able to access all my medical records in one place. Highly recommend MediLink to everyone.', rating: 5 },
]

export function Testimonials() {
  return (
    <section className="relative py-20 lg:py-24 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-medium mb-4 border border-amber-200/50">
            <Star className="w-3 h-3 fill-amber-500" /> Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">What Patients Say</h2>
          <p className="text-gray-500 mt-2">Trusted by thousands of patients worldwide</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-100 group-hover:border-primary/10 group-hover:bg-white transition-all duration-300 h-full">
                <Quote className="w-8 h-8 text-primary/20 mb-3" />
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className={`w-4 h-4 ${j < t.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-200'}`} />
                  ))}
                </div>
                <p className="text-sm text-gray-600 mb-5 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3 mt-auto">
                  <Avatar
                    fallback={t.name.split(' ').map(w => w[0]).join('')}
                    size="sm"
                    className="ring-2 ring-white"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
