import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar } from '@/components/ui/avatar'
import { appointments, doctors } from '@/data'
import { formatDate, formatTime, formatCurrency } from '@/lib/utils'
import { Calendar, Clock, Video, MapPin } from 'lucide-react'

const statusColors: Record<string, 'success' | 'warning' | 'info' | 'danger'> = {
  confirmed: 'success', pending: 'warning', completed: 'info', cancelled: 'danger', checked_in: 'info', missed: 'danger',
}

export default function PatientAppointments() {
  const getDoctor = (id: string) => doctors.find(d => d.id === id)

  return (
    <DashboardLayout role="patient">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">My Appointments</h1>
          <Badge variant="info">{appointments.filter(a => a.patientId === 'p1').length} total</Badge>
        </div>

        <div className="space-y-4">
          {appointments.filter(a => a.patientId === 'p1').map((apt) => {
            const doc = getDoctor(apt.doctorId)
            return (
              <Card key={apt.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <Avatar fallback={doc ? `${doc.firstName[0]}${doc.lastName[0]}` : 'Dr'} size="md" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">Dr. {doc?.firstName} {doc?.lastName}</h3>
                        <Badge variant={statusColors[apt.status]}>{apt.status}</Badge>
                      </div>
                      <p className="text-sm text-primary font-medium mb-2">{apt.specialty}</p>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                        <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{formatDate(apt.date)}</span>
                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{formatTime(apt.time)}</span>
                        <span className="flex items-center gap-1">{apt.type === 'video' ? <Video className="w-4 h-4" /> : <MapPin className="w-4 h-4" />}{apt.type === 'video' ? 'Video' : 'In-person'}</span>
                      </div>
                      <div className="flex items-center justify-between mt-3 pt-3 border-t">
                        <span className="font-semibold">{formatCurrency(apt.amount)} <span className="text-xs font-normal text-gray-500">({apt.paymentStatus})</span></span>
                        <div className="flex gap-2">
                          {apt.status === 'confirmed' && <Button size="sm" variant="outline">Reschedule</Button>}
                          {(apt.status === 'confirmed' || apt.status === 'pending') && <Button size="sm" variant="danger">Cancel</Button>}
                          {apt.status === 'completed' && <Button size="sm" variant="outline">Book Again</Button>}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </DashboardLayout>
  )
}
