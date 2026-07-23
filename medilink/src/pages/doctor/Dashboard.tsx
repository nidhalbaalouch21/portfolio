import { Calendar, Clock, Video, Users, BarChart3, FileText, Pill, DollarSign, CheckCircle, XCircle, TrendingUp, Sparkles } from 'lucide-react'
import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar } from '@/components/ui/avatar'
import { appointments, patients } from '@/data'
import { formatDate, formatTime, formatCurrency } from '@/lib/utils'
import { Link } from 'react-router-dom'

const quickActions = [
  { icon: Pill, label: 'Add Prescription', gradient: 'from-blue-500 to-cyan-500', path: '/doctor/prescriptions' },
  { icon: FileText, label: 'Upload Report', gradient: 'from-orange-500 to-amber-500', path: '/doctor/patients' },
  { icon: Video, label: 'Start Video Call', gradient: 'from-purple-500 to-pink-500', path: '/doctor/video-call' },
  { icon: Calendar, label: 'Open Calendar', gradient: 'from-emerald-500 to-teal-500', path: '/doctor/schedule' },
]

export default function DoctorDashboard() {
  const todayAppointments = appointments.filter(a => a.status === 'confirmed' || a.status === 'pending')
  const pendingCount = appointments.filter(a => a.status === 'pending').length
  const completedCount = appointments.filter(a => a.status === 'completed').length
  const totalRevenue = appointments.filter(a => a.paymentStatus === 'paid').reduce((sum, a) => sum + a.amount, 0)

  const getPatient = (id: string) => patients.find(p => p.id === id)

  return (
    <DashboardLayout role="doctor">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">Good morning, Dr. Johnson</h1>
            <p className="text-gray-500 mt-1">Here's your practice overview.</p>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <Badge variant="warning" className="gap-1"><Sparkles className="w-3 h-3" />{pendingCount} pending</Badge>
            <span className="text-sm text-gray-400">{formatDate(new Date().toISOString())}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Today's Appointments", value: todayAppointments.length, icon: Calendar, gradient: 'from-blue-500 to-cyan-500', change: '+2 from yesterday', changeColor: 'text-success' },
            { label: 'Total Revenue', value: formatCurrency(totalRevenue), icon: DollarSign, gradient: 'from-emerald-500 to-teal-500', change: '+12% this month', changeColor: 'text-success' },
            { label: 'Total Patients', value: patients.length, icon: Users, gradient: 'from-purple-500 to-pink-500', change: '+5 new this week', changeColor: 'text-success' },
            { label: 'Completed Visits', value: completedCount, icon: CheckCircle, gradient: 'from-amber-500 to-orange-500', change: '85% rate', changeColor: 'text-amber-600' },
          ].map((stat) => (
            <Card key={stat.label}>
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500 font-medium">{stat.label}</span>
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg shadow-black/5`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <div className="flex items-center gap-1 mt-1.5">
                  <TrendingUp className={`w-3.5 h-3.5 ${stat.changeColor}`} />
                  <span className={`text-xs ${stat.changeColor}`}>{stat.change}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {quickActions.map((action) => (
            <Link key={action.label} to={action.path}>
              <Card className="card-hover cursor-pointer overflow-hidden">
                <div className="p-4 text-center">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${action.gradient} flex items-center justify-center mx-auto mb-2.5 shadow-lg`}>
                    <action.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{action.label}</span>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <h2 className="text-lg font-semibold">Today's Appointments</h2>
              <Link to="/doctor/appointments" className="text-sm text-primary font-medium hover:underline">View All</Link>
            </CardHeader>
            <CardContent className="space-y-2">
              {todayAppointments.slice(0, 5).map((apt) => {
                const patient = getPatient(apt.patientId)
                return (
                  <div key={apt.id} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50/80 transition-colors border border-transparent hover:border-gray-100">
                    <Avatar fallback={patient ? `${patient.firstName[0]}${patient.lastName[0]}` : '?'} size="md" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-900">{patient?.firstName} {patient?.lastName}</p>
                      <p className="text-xs text-gray-400">{apt.type === 'video' ? '📹 Video' : '🏥 In-person'} · {formatTime(apt.time)}</p>
                    </div>
                    {apt.status === 'confirmed' ? (
                      <Badge variant="success">Confirmed</Badge>
                    ) : apt.status === 'pending' ? (
                      <div className="flex gap-1">
                        <button className="p-1.5 rounded-lg bg-success/10 text-success hover:bg-success/20 transition-colors cursor-pointer">
                          <CheckCircle className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 rounded-lg bg-danger/10 text-danger hover:bg-danger/20 transition-colors cursor-pointer">
                          <XCircle className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <Badge variant={apt.status === 'completed' ? 'info' : 'danger'}>{apt.status}</Badge>
                    )}
                  </div>
                )
              })}
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <h2 className="text-lg font-semibold">Recent Patients</h2>
                <Link to="/doctor/patients" className="text-sm text-primary font-medium hover:underline">View All</Link>
              </CardHeader>
              <CardContent className="space-y-1">
                {patients.slice(0, 4).map((p) => (
                  <div key={p.id} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50/80 transition-colors">
                    <Avatar fallback={`${p.firstName[0]}${p.lastName[0]}`} size="sm" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{p.firstName} {p.lastName}</p>
                      <p className="text-xs text-gray-400">{p.bloodType ? `Blood: ${p.bloodType}` : 'No records'}</p>
                    </div>
                    <Button size="sm" variant="ghost" className="text-xs">View</Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-lg font-semibold">Weekly Schedule</h2>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { day: 'Mon', hours: '9AM-5PM', progress: 80 },
                  { day: 'Tue', hours: '9AM-5PM', progress: 75 },
                  { day: 'Wed', hours: 'Off', progress: 0, off: true },
                  { day: 'Thu', hours: '9AM-5PM', progress: 70 },
                  { day: 'Fri', hours: '9AM-3PM', progress: 60 },
                ].map((d) => (
                  <div key={d.day} className="flex items-center gap-3">
                    <span className="text-sm font-semibold w-8 text-gray-900">{d.day}</span>
                    <div className="flex-1 h-2 rounded-full bg-gray-100 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${d.off ? 'bg-gray-200' : 'bg-gradient-to-r from-primary to-primary-dark'}`}
                        style={{ width: `${d.progress}%` }}
                      />
                    </div>
                    <span className={`text-xs w-16 text-right ${d.off ? 'text-danger' : 'text-gray-500'}`}>{d.hours}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
