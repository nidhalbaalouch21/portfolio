import { Calendar, Clock, MessageSquare, Video, Upload, CreditCard, Pill, FileText, ClipboardList, Heart, Bell, Sparkles } from 'lucide-react'
import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar } from '@/components/ui/avatar'
import { appointments, prescriptions, medicalRecords, labTests, notifications, doctors } from '@/data'
import { formatDate, formatTime, formatCurrency } from '@/lib/utils'
import { Link } from 'react-router-dom'

const quickActions = [
  { icon: Calendar, label: 'Book Appointment', gradient: 'from-blue-500 to-cyan-500', path: '/doctors' },
  { icon: MessageSquare, label: 'Chat', gradient: 'from-emerald-500 to-teal-500', path: '/dashboard/messages' },
  { icon: Video, label: 'Video Call', gradient: 'from-purple-500 to-pink-500', path: '/dashboard/video-call' },
  { icon: Upload, label: 'Upload Document', gradient: 'from-orange-500 to-amber-500', path: '/dashboard/medical-records' },
  { icon: CreditCard, label: 'Pay Invoice', gradient: 'from-rose-500 to-red-500', path: '/dashboard/payments' },
]

const statusColors: Record<string, 'success' | 'warning' | 'info' | 'danger'> = {
  confirmed: 'success', pending: 'warning', completed: 'info', cancelled: 'danger',
}

export default function PatientDashboard() {
  const upcomingAppointments = appointments.filter(a => a.status === 'confirmed' || a.status === 'pending')
  const recentRecords = medicalRecords.slice(0, 3)
  const unreadNotifs = notifications.filter(n => !n.isRead)

  const getDoctor = (id: string) => doctors.find(d => d.id === id)

  return (
    <DashboardLayout role="patient">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">Welcome back, John</h1>
            <p className="text-gray-500 mt-1">Here's your health overview.</p>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <Badge variant="warning" className="gap-1"><Sparkles className="w-3 h-3" />2 pending</Badge>
            <span className="text-sm text-gray-400">{formatDate(new Date().toISOString())}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {quickActions.map((action) => (
            <Link key={action.label} to={action.path}>
              <Card className="card-hover cursor-pointer overflow-hidden">
                <div className="p-4 text-center relative">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${action.gradient} flex items-center justify-center mx-auto mb-2.5 shadow-lg`}>
                    <action.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{action.label}</span>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <h2 className="text-lg font-semibold">Upcoming Appointments</h2>
                <Link to="/dashboard/appointments" className="text-sm text-primary font-medium hover:underline">View All</Link>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingAppointments.length === 0 ? (
                  <p className="text-sm text-gray-400 text-center py-6">No upcoming appointments</p>
                ) : (
                  upcomingAppointments.slice(0, 3).map((apt) => {
                    const doc = getDoctor(apt.doctorId)
                    return (
                      <div key={apt.id} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50/80 transition-colors border border-transparent hover:border-gray-100">
                        <Avatar fallback={doc ? `${doc.firstName[0]}${doc.lastName[0]}` : 'Dr'} size="md" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-gray-900">Dr. {doc?.firstName} {doc?.lastName}</p>
                          <p className="text-xs text-gray-500">{apt.specialty}</p>
                          <div className="flex items-center gap-3 mt-1.5">
                            <span className="flex items-center gap-1.5 text-xs text-gray-400">
                              <Calendar className="w-3.5 h-3.5" /> {formatDate(apt.date)}
                            </span>
                            <span className="flex items-center gap-1.5 text-xs text-gray-400">
                              <Clock className="w-3.5 h-3.5" /> {formatTime(apt.time)}
                            </span>
                          </div>
                        </div>
                        <div className="text-right space-y-1">
                          <Badge variant={statusColors[apt.status]}>{apt.status}</Badge>
                          <p className="text-xs text-gray-400">{formatCurrency(apt.amount)}</p>
                        </div>
                      </div>
                    )
                  })
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <h2 className="text-lg font-semibold">Recent Medical Records</h2>
                <Link to="/dashboard/medical-records" className="text-sm text-primary font-medium hover:underline">View All</Link>
              </CardHeader>
              <CardContent className="space-y-2">
                {recentRecords.map((record) => (
                  <div key={record.id} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50/80 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center border border-gray-100">
                      <FileText className="w-5 h-5 text-gray-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{record.title}</p>
                      <p className="text-xs text-gray-400">{formatDate(record.date)}</p>
                    </div>
                    <Badge variant={record.type === 'diagnosis' ? 'info' : record.type === 'lab_result' ? 'warning' : 'default'}>
                      {record.type.replace('_', ' ')}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-lg font-semibold">Active Prescriptions</h2>
              </CardHeader>
              <CardContent className="space-y-3">
                {prescriptions.slice(0, 2).map((rx) => (
                  <div key={rx.id} className="p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Pill className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-sm font-semibold text-gray-900">Prescription</span>
                      </div>
                      <span className="text-xs text-gray-400">{formatDate(rx.createdAt)}</span>
                    </div>
                    <div className="space-y-1 mb-3">
                      {rx.medicines.slice(0, 2).map((med, i) => (
                        <p key={i} className="text-xs text-gray-600 pl-10">{med.name} — <span className="text-gray-400">{med.dosage}, {med.frequency}</span></p>
                      ))}
                    </div>
                    <div className="flex gap-2 pl-10">
                      <Button size="sm" variant="outline" className="text-xs">Download PDF</Button>
                      <Button size="sm" variant="ghost" className="text-xs">Print</Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <h2 className="text-lg font-semibold">Notifications</h2>
                {unreadNotifs.length > 0 && (
                  <Badge variant="danger" className="px-2">{unreadNotifs.length}</Badge>
                )}
              </CardHeader>
              <CardContent className="space-y-1">
                {notifications.slice(0, 4).map((n) => (
                  <div
                    key={n.id}
                    className={`flex items-start gap-3 p-2.5 rounded-xl transition-colors ${
                      !n.isRead ? 'bg-primary/[0.03] border border-primary/5' : ''
                    }`}
                  >
                    <div className={`p-1.5 rounded-lg ${!n.isRead ? 'bg-primary/10' : 'bg-gray-100'}`}>
                      <Bell className={`w-3.5 h-3.5 ${!n.isRead ? 'text-primary' : 'text-gray-400'}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-xs ${!n.isRead ? 'font-semibold text-gray-900' : 'text-gray-600'}`}>{n.title}</p>
                      <p className="text-[11px] text-gray-400 mt-0.5 line-clamp-1">{n.message}</p>
                    </div>
                    {!n.isRead && <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1" />}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-lg font-semibold">Health Summary</h2>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center py-1">
                  <span className="text-sm text-gray-500">Blood Type</span>
                  <span className="text-sm font-semibold text-gray-900">O+</span>
                </div>
                <div className="h-px bg-gray-50" />
                <div className="flex justify-between items-center py-1">
                  <span className="text-sm text-gray-500">Allergies</span>
                  <Badge variant="danger" className="text-[10px]">Penicillin</Badge>
                </div>
                <div className="h-px bg-gray-50" />
                <div className="flex justify-between items-center py-1">
                  <span className="text-sm text-gray-500">Chronic Diseases</span>
                  <span className="text-sm text-gray-400">None</span>
                </div>
                <div className="h-px bg-gray-50" />
                <button className="flex items-center gap-2 py-1 text-sm text-danger font-medium hover:text-danger/80 transition-colors cursor-pointer w-full">
                  <Heart className="w-4 h-4" /> Add Emergency Contact
                </button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <h2 className="text-lg font-semibold">Lab Tests</h2>
                <Link to="/dashboard/lab-tests" className="text-xs text-primary font-medium hover:underline">View All</Link>
              </CardHeader>
              <CardContent className="space-y-2">
                {labTests.slice(0, 3).map((lab) => (
                  <div key={lab.id} className="flex items-center justify-between py-1.5">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <ClipboardList className="w-4 h-4 text-gray-400 shrink-0" />
                      <span className="text-sm text-gray-700 truncate">{lab.testType}</span>
                    </div>
                    <Badge
                      variant={lab.status === 'completed' ? 'success' : lab.status === 'in_progress' ? 'warning' : 'default'}
                      className="shrink-0 text-[10px]"
                    >
                      {lab.status.replace('_', ' ')}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-lg font-semibold">Favorite Doctors</h2>
              </CardHeader>
              <CardContent className="space-y-1">
                {doctors.slice(0, 3).map((doc) => (
                  <Link
                    key={doc.id}
                    to={`/doctors/${doc.id}`}
                    className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50/80 transition-colors"
                  >
                    <Avatar fallback={`${doc.firstName[0]}${doc.lastName[0]}`} size="sm" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">Dr. {doc.lastName}</p>
                      <p className="text-xs text-gray-400">{doc.specialty}</p>
                    </div>
                    <div className="flex items-center gap-0.5 text-amber-500 text-xs font-medium">
                      <span className="text-yellow-500">★</span> {doc.rating}
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
