import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star, MapPin, Video, Calendar, Clock, Award, GraduationCap, Briefcase, ChevronLeft, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { doctors, reviews } from '@/data'
import { formatCurrency } from '@/lib/utils'

export default function DoctorProfile() {
  const { id } = useParams()
  const doc = doctors.find(d => d.id === id)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')

  if (!doc) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Doctor Not Found</h1>
          <Link to="/doctors"><Button variant="outline">Back to Doctors</Button></Link>
        </div>
      </div>
    )
  }

  const timeSlots = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '14:00', '14:30', '15:00', '15:30', '16:00']
  const dates = ['2026-07-20', '2026-07-21', '2026-07-22', '2026-07-23', '2026-07-24']
  const docReviews = reviews.filter(r => r.doctorId === doc.id)

  return (
    <div className="min-h-screen pt-20 lg:pt-24 bg-gray-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <Link to="/doctors" className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 mb-6 transition-colors group">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" /> Back to Doctors
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <Card>
                <CardContent className="p-6 lg:p-8">
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    <Avatar fallback={`${doc.firstName[0]}${doc.lastName[0]}`} size="xl" className="ring-4 ring-gray-50 shadow-xl" />
                    <div className="flex-1">
                      <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Dr. {doc.firstName} {doc.lastName}</h1>
                      <p className="text-primary font-medium mt-0.5">{doc.specialty}</p>
                      <div className="flex items-center gap-3 mt-2 flex-wrap">
                        <div className="flex items-center gap-1.5">
                          <div className="flex">
                            {[1,2,3,4,5].map((s) => (
                              <Star key={s} className={`w-4 h-4 ${s <= Math.round(doc.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-200'}`} />
                            ))}
                          </div>
                          <span className="font-semibold text-gray-900">{doc.rating}</span>
                          <span className="text-sm text-gray-400">({doc.reviewCount} reviews)</span>
                        </div>
                        <span className="text-gray-200">|</span>
                        <div className="flex items-center gap-1 text-sm text-gray-400">
                          <MapPin className="w-4 h-4" /> {doc.city}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {doc.isOnlineConsultation && <Badge variant="info" className="gap-1"><Video className="w-3 h-3" />Online Consultation</Badge>}
                        {doc.languages.map((l) => <Badge key={l}>{l}</Badge>)}
                      </div>
                      <div className="mt-6 flex items-center gap-4">
                        <div>
                          <p className="text-2xl font-bold text-gray-900">{formatCurrency(doc.consultationFee)}</p>
                          <p className="text-xs text-gray-400">Per visit</p>
                        </div>
                        <Button variant="gradient" size="lg" className="gap-2 shadow-lg shadow-primary/20">
                          <Calendar className="w-4 h-4" /> Book Appointment
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <Card>
              <CardContent className="p-6 lg:p-8">
                <h2 className="text-lg font-semibold mb-4">About</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{doc.biography}</p>

                <div className="h-px bg-gray-100 my-6" />

                <h2 className="text-lg font-semibold mb-4">Education</h2>
                <div className="space-y-3">
                  {doc.education?.map((edu, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50/50">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <GraduationCap className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{edu.degree}</p>
                        <p className="text-xs text-gray-400">{edu.institution} · {edu.year}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="h-px bg-gray-100 my-6" />

                <h2 className="text-lg font-semibold mb-4">Experience</h2>
                <div className="space-y-3">
                  {doc.experience?.map((exp, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50/50">
                      <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
                        <Briefcase className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{exp.position}</p>
                        <p className="text-xs text-gray-400">{exp.hospital} · {exp.from} - {exp.to}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 lg:p-8">
                <h2 className="text-lg font-semibold mb-4">Reviews ({docReviews.length})</h2>
                <div className="space-y-3">
                  {docReviews.map((r) => (
                    <div key={r.id} className="p-4 rounded-xl bg-gray-50/80 border border-gray-100">
                      <div className="flex gap-0.5 mb-2">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <Star key={j} className={`w-4 h-4 ${j < r.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-200'}`} />
                        ))}
                      </div>
                      <p className="text-sm text-gray-600 mb-2">"{r.comment}"</p>
                      {r.doctorResponse && (
                        <div className="ml-4 pl-4 border-l-2 border-primary/20 mt-3">
                          <p className="text-xs text-gray-500"><span className="font-semibold text-primary">Dr. Response:</span> {r.doctorResponse}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <Card>
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="w-5 h-5 text-primary" />
                    <h2 className="text-lg font-semibold">Book Appointment</h2>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Select Date</label>
                      <div className="grid grid-cols-3 gap-2">
                        {dates.map((date) => (
                          <button
                            key={date}
                            onClick={() => setSelectedDate(date)}
                            className={`p-2.5 text-xs rounded-xl border text-center transition-all cursor-pointer ${
                              selectedDate === date
                                ? 'border-primary bg-primary/10 text-primary shadow-sm'
                                : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50'
                            }`}
                          >
                            <div className="font-semibold">{new Date(date).toLocaleDateString('en', { weekday: 'short' })}</div>
                            <div className="text-gray-400 mt-0.5">{new Date(date).getDate()}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {selectedDate && (
                      <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Select Time</label>
                        <div className="grid grid-cols-3 gap-2">
                          {timeSlots.map((time) => (
                            <button
                              key={time}
                              onClick={() => setSelectedTime(time)}
                              className={`p-2.5 text-xs rounded-xl border text-center transition-all cursor-pointer ${
                                selectedTime === time
                                  ? 'border-primary bg-primary/10 text-primary shadow-sm'
                                  : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50'
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {selectedDate && selectedTime && (
                      <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="space-y-3 pt-2">
                        <div className="p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Consultation Fee</span>
                            <span className="font-semibold text-gray-900">{formatCurrency(doc.consultationFee)}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Type</span>
                            <span>{doc.isOnlineConsultation ? 'In-person / Video' : 'In-person'}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Duration</span>
                            <span>30 min</span>
                          </div>
                        </div>
                        <Button variant="gradient" className="w-full shadow-lg shadow-primary/20">Confirm Booking</Button>
                      </motion.div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <Card>
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-primary" />
                  <h2 className="text-lg font-semibold">Working Hours</h2>
                </div>
                <div className="space-y-2.5">
                  {doc.workingHours.map((wh) => (
                    <div key={wh.day} className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{wh.day}</span>
                      {wh.isAvailable ? (
                        <span className="text-gray-900 font-semibold">{wh.start} - {wh.end}</span>
                      ) : (
                        <span className="text-xs text-danger bg-danger/5 px-2 py-0.5 rounded-full">Closed</span>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-5 h-5 text-amber-500" />
                  <h2 className="text-lg font-semibold">Awards</h2>
                </div>
                {doc.awards && doc.awards.length > 0 ? (
                  <div className="space-y-2">
                    {doc.awards.map((a, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm p-2 rounded-lg bg-amber-50/50">
                        <Award className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                        <span className="text-gray-600">{a}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-400">No awards listed</p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
