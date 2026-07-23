import { motion } from 'framer-motion'
import { Search, Calendar, Shield, ArrowRight, Play, Star, Users, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const floatingCards = [
  { icon: Calendar, title: 'Next Appointment', subtitle: 'Tomorrow, 10:00 AM', progress: 75, color: 'from-primary/20 to-blue-200/30' },
  { icon: Star, title: 'Dr. Sarah Johnson', subtitle: 'Cardiologist · 4.8 ★', color: 'from-amber-100 to-orange-100' },
  { icon: Users, title: '+500 new patients', subtitle: 'Joined this week', color: 'from-emerald-100 to-teal-100' },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 lg:pt-24 overflow-hidden">
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute top-40 -right-20 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-3xl" />
      <div className="absolute top-1/3 left-1/2 w-[300px] h-[300px] bg-cyan-100/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/10 shadow-sm">
                <Shield className="w-4 h-4" />
                Trusted by 10,000+ patients worldwide
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                Your Health,{' '}
                <span className="gradient-text">Simplified</span>
                <br />
                <span className="text-gray-400">Connected.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-500 max-w-lg leading-relaxed"
            >
              Book appointments with top doctors, access your medical records, chat with healthcare providers — all in one secure platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link to="/register">
                <Button variant="gradient" size="lg" className="gap-2 shadow-lg shadow-primary/25">
                  Get Started Free <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="gap-2">
                <Play className="w-4 h-4" /> Watch Demo
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6"
            >
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <CheckCircle className="w-4 h-4 text-success" /> Easy Booking
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <CheckCircle className="w-4 h-4 text-success" /> Secure Data
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <CheckCircle className="w-4 h-4 text-success" /> Top Doctors
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:flex justify-center relative"
          >
            <div className="relative">
              <div className="w-[420px] h-[520px] rounded-3xl bg-gradient-to-br from-primary/10 via-purple-50/30 to-blue-50/50 border border-primary/10 shadow-xl" />

              <motion.div
                animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-6 w-64 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl p-5 border border-white/50"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-lg shadow-primary/20">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Next Appointment</p>
                    <p className="text-xs text-gray-500">Tomorrow, 10:00 AM</p>
                  </div>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: '0%' }} animate={{ width: '75%' }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                    className="h-full rounded-full bg-gradient-to-r from-primary to-primary-dark"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-2">Profile 75% complete</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-2 -left-8 w-60 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl p-5 border border-white/50"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    SJ
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Dr. Sarah Johnson</p>
                    <p className="text-xs text-gray-500">Cardiologist</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs text-gray-500 ml-1">4.8</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -4, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-1/3 -right-12 w-48 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl p-4 border border-white/50"
              >
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-xs text-gray-500">New patients</span>
                </div>
                <p className="text-lg font-bold text-gray-900">+500</p>
                <p className="text-xs text-success">Joined this week</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
