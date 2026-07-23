import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search, MapPin, Star, SlidersHorizontal, Video, Stethoscope, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { doctors, specialties } from '@/data'
import { formatCurrency } from '@/lib/utils'

export default function Doctors() {
  const [search, setSearch] = useState('')
  const [specFilter, setSpecFilter] = useState('')

  const filtered = doctors.filter(d => {
    const matchesSearch = d.firstName.toLowerCase().includes(search.toLowerCase()) ||
      d.lastName.toLowerCase().includes(search.toLowerCase()) ||
      d.specialty.toLowerCase().includes(search.toLowerCase())
    const matchesSpec = !specFilter || d.specialty === specFilter
    return matchesSearch && matchesSpec
  })

  return (
    <div className="min-h-screen pt-20 lg:pt-24 bg-gray-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-medium mb-4 border border-primary/10">
            <Sparkles className="w-3 h-3" /> {filtered.length} doctors available
          </span>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">Find a Doctor</h1>
          <p className="text-gray-500 mt-2">Browse our network of trusted healthcare professionals</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or specialty..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all text-sm"
            />
          </div>
          <div className="relative sm:w-48">
            <Stethoscope className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            <select
              value={specFilter}
              onChange={(e) => setSpecFilter(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 appearance-none transition-all text-sm cursor-pointer"
            >
              <option value="">All Specialties</option>
              {specialties.map((s) => (<option key={s.id} value={s.name}>{s.name}</option>))}
            </select>
          </div>
          <Button variant="outline" className="gap-2 px-5">
            <SlidersHorizontal className="w-4 h-4" /> Filters
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((doc, i) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
            >
              <Link to={`/doctors/${doc.id}`} className="block group">
                <Card className="card-hover h-full overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/[0.03] to-transparent rounded-bl-[100px] pointer-events-none" />
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4 mb-4">
                      <Avatar
                        fallback={`${doc.firstName[0]}${doc.lastName[0]}`}
                        size="lg"
                        className="ring-2 ring-gray-50 group-hover:ring-primary/20 transition-all"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">Dr. {doc.firstName} {doc.lastName}</h3>
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

                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {doc.isOnlineConsultation && <Badge variant="info" className="gap-1"><Video className="w-3 h-3" />Online</Badge>}
                      <Badge>{doc.languages.slice(0, 2).join(', ')}</Badge>
                      <Badge variant="default">{doc.experience?.[0]?.position || 'Specialist'}</Badge>
                    </div>

                    <div className="flex items-center text-sm text-gray-400 mb-4">
                      <MapPin className="w-4 h-4 mr-1.5" /> {doc.city || 'City TBD'}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <span className="text-xl font-bold text-gray-900">{formatCurrency(doc.consultationFee)}</span>
                        <span className="text-sm text-gray-400"> / visit</span>
                      </div>
                      <Button size="sm" variant="gradient">Book Now</Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-4">
              <Search className="w-6 h-6 text-gray-400" />
            </div>
            <p className="text-gray-500 text-lg font-medium">No doctors found</p>
            <p className="text-gray-400 text-sm mt-1">Try adjusting your search or filters</p>
            <Button variant="outline" className="mt-4" onClick={() => { setSearch(''); setSpecFilter('') }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
