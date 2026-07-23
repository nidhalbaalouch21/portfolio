import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { Users, UserCheck, DollarSign, TrendingUp, Calendar, Shield, Activity, Sparkles } from 'lucide-react'
import { doctors, patients, appointments, payments } from '@/data'
import { formatCurrency } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Avatar } from '@/components/ui/avatar'

export default function AdminDashboard() {
  const totalRevenue = payments.filter(p => p.status === 'completed').reduce((s, p) => s + p.amount, 0)

  const stats = [
    { label: 'Total Users', value: patients.length + doctors.length, icon: Users, gradient: 'from-blue-500 to-cyan-500', change: '+12%', changeColor: 'text-success' },
    { label: 'Total Doctors', value: doctors.length, icon: UserCheck, gradient: 'from-emerald-500 to-teal-500', change: '+2 this week', changeColor: 'text-success' },
    { label: 'Total Patients', value: patients.length, icon: Activity, gradient: 'from-purple-500 to-pink-500', change: '+5 this week', changeColor: 'text-success' },
    { label: 'Revenue', value: formatCurrency(totalRevenue), icon: DollarSign, gradient: 'from-amber-500 to-orange-500', change: '+18% vs last month', changeColor: 'text-success' },
    { label: 'Appointments', value: appointments.length, icon: Calendar, gradient: 'from-rose-500 to-red-500', change: `${appointments.filter(a => a.status === 'completed').length} completed`, changeColor: 'text-gray-500' },
    { label: 'Pending Verifications', value: '3', icon: Shield, gradient: 'from-violet-500 to-indigo-500', change: '2 doctors, 1 clinic', changeColor: 'text-warning' },
  ]

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">Admin Dashboard</h1>
            <p className="text-gray-500 mt-1">Platform overview and management</p>
          </div>
          <Badge variant="info" className="gap-1"><Sparkles className="w-3 h-3" />System Online</Badge>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stats.map((stat) => (
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

        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold">Recent Users</h2>
            </CardHeader>
            <CardContent className="space-y-1">
              {[...patients, ...doctors].slice(0, 5).map((user) => (
                <div key={user.id} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50/80 transition-colors">
                  <Avatar fallback={`${user.firstName[0]}${user.lastName[0]}`} size="sm" className="ring-2 ring-gray-50" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{user.firstName} {user.lastName}</p>
                    <p className="text-xs text-gray-400">{user.email}</p>
                  </div>
                  <Badge variant={user.role === 'doctor' ? 'info' : user.role === 'admin' ? 'danger' : 'default'} className="text-[10px]">
                    {user.role.replace('_', ' ')}
                  </Badge>
                  <Badge variant={user.isVerified ? 'success' : 'warning'} className="text-[10px]">
                    {user.isVerified ? 'Verified' : 'Pending'}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold">Recent Appointments</h2>
            </CardHeader>
            <CardContent className="space-y-1">
              {appointments.slice(0, 5).map((apt) => (
                <div key={apt.id} className="flex items-center justify-between p-2.5 rounded-xl hover:bg-gray-50/80 transition-colors">
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-gray-900">{apt.specialty}</p>
                    <p className="text-xs text-gray-400">{apt.date} at {apt.time}</p>
                  </div>
                  <Badge
                    variant={apt.status === 'completed' ? 'success' : apt.status === 'confirmed' ? 'info' : apt.status === 'pending' ? 'warning' : 'danger'}
                    className="text-[10px]"
                  >
                    {apt.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
