import { motion } from 'framer-motion'
import { Search, Calendar, Video, ClipboardCheck, ArrowDown } from 'lucide-react'

const steps = [
  { icon: Search, title: 'Search', description: 'Find the right doctor by specialty, location, or rating.', gradient: 'from-primary/20 to-blue-200/30' },
  { icon: Calendar, title: 'Book', description: 'Choose a convenient date and time for your appointment.', gradient: 'from-purple-100 to-purple-200/30' },
  { icon: Video, title: 'Consult', description: 'Visit in person or have a video consultation from home.', gradient: 'from-emerald-100 to-teal-200/30' },
  { icon: ClipboardCheck, title: 'Follow Up', description: 'Get prescriptions, lab orders, and follow-up care.', gradient: 'from-amber-100 to-orange-200/30' },
]

export function HowItWorks() {
  return (
    <section className="relative py-20 lg:py-24 bg-gray-50/80 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">How It Works</h2>
          <p className="text-gray-500 mt-2">Getting started is simple — just 4 easy steps</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 group-hover:border-primary/20 transition-all duration-300 text-center h-full">
                <div className="relative mb-5">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-gray-700" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shadow-lg shadow-primary/20">
                    {i + 1}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
              </div>

              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-4 z-10">
                  <ArrowDown className="w-5 h-5 text-gray-300 -rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
