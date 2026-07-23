import { motion } from 'framer-motion'
import { Users, Calendar, Star, Building, TrendingUp } from 'lucide-react'

const stats = [
  { icon: Users, value: '50K+', label: 'Active Patients', change: '+12%' },
  { icon: Calendar, value: '100K+', label: 'Appointments Booked', change: '+18%' },
  { icon: Star, value: '4.8', label: 'Average Rating', change: 'Top rated' },
  { icon: Building, value: '500+', label: 'Partner Clinics', change: '+24 this month' },
]

export function Stats() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-blue-900" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      <div className="absolute top-0 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors backdrop-blur-sm">
                <s.icon className="w-7 h-7 text-white" />
              </div>
              <p className="text-3xl lg:text-5xl font-bold text-white mb-1 tracking-tight">{s.value}</p>
              <p className="text-sm text-white/70">{s.label}</p>
              <div className="flex items-center justify-center gap-1 mt-2 text-xs text-emerald-300">
                <TrendingUp className="w-3 h-3" />
                {s.change}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
