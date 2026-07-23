import { motion } from 'framer-motion'
import { doctors } from '@/data'
import { Star, MapPin, Video, Briefcase } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Link } from 'react-router-dom'
import { formatCurrency } from '@/lib/utils'

export function FeaturedDoctors() {
  const featured = doctors.slice(0, 3)

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-medium mb-4 border border-amber-200/50">
            <Star className="w-3 h-3 fill-amber-500" /> Top Rated
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">Featured Doctors</h2>
          <p className="text-gray-500 mt-2">Highly rated doctors ready to help you</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((doc, i) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-white rounded-2xl border border-gray-100 p-6 hover:border-primary/20 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-[100px] pointer-events-none" />

              <div className="flex items-start gap-4 mb-4">
                <Avatar
                  fallback={`${doc.firstName[0]}${doc.lastName[0]}`}
                  size="lg"
                  className="ring-2 ring-gray-100 group-hover:ring-primary/20 transition-all"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    Dr. {doc.firstName} {doc.lastName}
                  </h3>
                  <p className="text-sm text-primary font-medium">{doc.specialty}</p>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <div className="flex">
                      {[1,2,3,4,5].map((s) => (
                        <Star key={s} className={`w-3.5 h-3.5 ${s <= Math.round(doc.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-200'}`} />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-900">{doc.rating}</span>
                    <span className="text-xs text-gray-400">({doc.reviewCount})</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5 mb-5">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <MapPin className="w-4 h-4 text-gray-400" /> {doc.city}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Briefcase className="w-4 h-4 text-gray-400" /> {doc.experience?.[0]?.position || 'Specialist'}
                </div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {doc.isOnlineConsultation && (
                    <Badge variant="info"><Video className="w-3 h-3 mr-1" />Online</Badge>
                  )}
                  {doc.languages.slice(0, 2).map((l) => (
                    <Badge key={l}>{l}</Badge>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <span className="text-xl font-bold text-gray-900">{formatCurrency(doc.consultationFee)}</span>
                  <span className="text-sm text-gray-400"> / visit</span>
                </div>
                <Link to={`/doctors/${doc.id}`}>
                  <Button size="sm" variant="gradient">Book Now</Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/doctors">
            <Button variant="outline" size="lg" className="gap-2">
              View All Doctors <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

import { ArrowRight } from 'lucide-react'
