import { motion } from 'framer-motion'
import { specialties } from '@/data'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'

export function Specialties() {
  return (
    <section className="relative py-20 lg:py-24 bg-gray-50/80 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-medium mb-4 border border-primary/10">
              <Sparkles className="w-3 h-3" /> 16 Specialties
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">Medical Specialties</h2>
            <p className="text-gray-500 mt-2">Choose from a wide range of specialties</p>
          </div>
          <Link to="/specialties" className="hidden sm:flex items-center gap-1.5 text-primary font-medium text-sm group">
            View All <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {specialties.slice(0, 12).map((spec, i) => (
            <motion.div
              key={spec.id}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-pointer"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{spec.icon}</div>
              <h3 className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors">{spec.name}</h3>
              <p className="text-xs text-gray-400 mt-1.5">{spec.doctorCount} doctors</p>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>

        <Link to="/specialties" className="sm:hidden flex items-center justify-center gap-1 text-primary font-medium text-sm mt-8 group">
          View All Specialties <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </section>
  )
}
