import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  Heart, Home, Calendar, Clock, MessageSquare, Video, FileText, Pill,
  ClipboardList, Settings, LogOut, Bell, Menu, Users, BarChart3, UserCheck, Shield, Search,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

interface DashboardLayoutProps {
  children: React.ReactNode
  role: 'patient' | 'doctor' | 'admin'
}

const roleConfig = {
  patient: {
    name: 'John Doe',
    role: 'Patient',
    nav: [
      { label: 'Dashboard', path: '/dashboard', icon: Home },
      { label: 'Appointments', path: '/dashboard/appointments', icon: Calendar },
      { label: 'Medical Records', path: '/dashboard/medical-records', icon: FileText },
      { label: 'Prescriptions', path: '/dashboard/prescriptions', icon: Pill },
      { label: 'Lab Tests', path: '/dashboard/lab-tests', icon: ClipboardList },
      { label: 'Messages', path: '/dashboard/messages', icon: MessageSquare },
      { label: 'Video Call', path: '/dashboard/video-call', icon: Video },
      { label: 'Payments', path: '/dashboard/payments', icon: Settings },
    ],
  },
  doctor: {
    name: 'Dr. Sarah Johnson',
    role: 'Cardiologist',
    nav: [
      { label: 'Dashboard', path: '/doctor', icon: Home },
      { label: 'Appointments', path: '/doctor/appointments', icon: Calendar },
      { label: 'Patients', path: '/doctor/patients', icon: Users },
      { label: 'Schedule', path: '/doctor/schedule', icon: Clock },
      { label: 'Messages', path: '/doctor/messages', icon: MessageSquare },
      { label: 'Video Call', path: '/doctor/video-call', icon: Video },
      { label: 'Revenue', path: '/doctor/revenue', icon: BarChart3 },
      { label: 'Settings', path: '/doctor/settings', icon: Settings },
    ],
  },
  admin: {
    name: 'Admin',
    role: 'Administrator',
    nav: [
      { label: 'Dashboard', path: '/admin', icon: Home },
      { label: 'Users', path: '/admin/users', icon: Users },
      { label: 'Doctors', path: '/admin/doctors', icon: UserCheck },
      { label: 'Specialties', path: '/admin/specialties', icon: Shield },
      { label: 'Analytics', path: '/admin/analytics', icon: BarChart3 },
      { label: 'Payments', path: '/admin/payments', icon: Settings },
      { label: 'Reports', path: '/admin/reports', icon: FileText },
      { label: 'Settings', path: '/admin/settings', icon: Settings },
    ],
  },
}

export function DashboardLayout({ children, role }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const config = roleConfig[role]

  return (
    <div className="min-h-screen bg-gray-50/80">
      <aside className={cn(
        'fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-gray-100 transform transition-transform duration-300 lg:translate-x-0 lg:static lg:inset-auto',
        sidebarOpen ? 'translate-x-0 shadow-xl' : '-translate-x-full'
      )}>
        <div className="h-full flex flex-col">
          <div className="p-5 border-b border-gray-100">
            <Link to="/" className="flex items-center gap-2.5 group">
              <Heart className="w-6 h-6 text-primary fill-primary group-hover:scale-110 transition-transform" />
              <span className="text-lg font-bold">Medi<span className="text-primary">Link</span></span>
            </Link>
          </div>

          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center gap-3 p-2 rounded-xl bg-gray-50/80">
              <Avatar fallback={config.name.split(' ').map(w => w[0]).join('')} size="md" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold truncate text-gray-900">{config.name}</p>
                <p className="text-xs text-gray-400">{config.role}</p>
              </div>
            </div>
          </div>

          <nav className="flex-1 overflow-y-auto p-3 space-y-0.5">
            {config.nav.map((item) => {
              const Icon = item.icon
              const active = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group',
                    active
                      ? 'bg-primary/10 text-primary shadow-sm'
                      : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                  )}
                >
                  <Icon className={cn('w-5 h-5 transition-colors', active ? 'text-primary' : 'text-gray-400 group-hover:text-gray-600')} />
                  {item.label}
                  {active && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />}
                </Link>
              )
            })}
          </nav>

          <div className="p-3 border-t border-gray-100">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 w-full transition-all duration-200 cursor-pointer"
            >
              <LogOut className="w-5 h-5 text-gray-400" />
              Sign Out
            </button>
          </div>
        </div>
      </aside>

      {sidebarOpen && (
        <div className="fixed inset-0 z-20 bg-black/30 backdrop-blur-sm lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      <div className="lg:ml-64">
        <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-lg border-b border-gray-100">
          <div className="flex items-center justify-between px-4 lg:px-6 h-16">
            <div className="flex items-center gap-3">
              <button className="lg:hidden p-2.5 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer" onClick={() => setSidebarOpen(true)}>
                <Menu className="w-5 h-5" />
              </button>
              <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-50 border border-gray-100 text-sm text-gray-400">
                <Search className="w-4 h-4" />
                <span>Search...</span>
                <kbd className="px-1.5 py-0.5 rounded bg-white border text-[10px] font-medium text-gray-400 ml-4">⌘K</kbd>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="relative p-2.5 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer group">
                <Bell className="w-5 h-5 text-gray-500 group-hover:text-gray-900" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-danger rounded-full ring-2 ring-white" />
              </button>
              <Link to={role === 'patient' ? '/dashboard/settings' : role === 'doctor' ? '/doctor/settings' : '/admin/settings'}>
                <button className="p-2.5 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                  <Settings className="w-5 h-5 text-gray-500" />
                </button>
              </Link>
            </div>
          </div>
        </header>
        <main className="p-4 lg:p-6 xl:p-8">{children}</main>
      </div>
    </div>
  )
}
