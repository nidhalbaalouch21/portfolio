import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const Landing = lazy(() => import('@/pages/Landing'))
const Login = lazy(() => import('@/pages/auth/Login'))
const Register = lazy(() => import('@/pages/auth/Register'))
const ForgotPassword = lazy(() => import('@/pages/auth/ForgotPassword'))
const Doctors = lazy(() => import('@/pages/Doctors'))
const DoctorProfile = lazy(() => import('@/pages/DoctorProfile'))
const PatientDashboard = lazy(() => import('@/pages/patient/Dashboard'))
const PatientAppointments = lazy(() => import('@/pages/patient/Appointments'))
const PatientMessages = lazy(() => import('@/pages/patient/Messages'))
const PatientMedicalRecords = lazy(() => import('@/pages/patient/MedicalRecords'))
const PatientPayments = lazy(() => import('@/pages/patient/Payments'))
const PatientVideoCall = lazy(() => import('@/pages/patient/VideoCall'))
const DoctorDashboard = lazy(() => import('@/pages/doctor/Dashboard'))
const AdminDashboard = lazy(() => import('@/pages/admin/Dashboard'))

function Loader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
        <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">Loading...</span>
      </div>
    </div>
  )
}

function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<PublicLayout><Landing /></PublicLayout>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/doctors" element={<PublicLayout><Doctors /></PublicLayout>} />
          <Route path="/doctors/:id" element={<PublicLayout><DoctorProfile /></PublicLayout>} />
          <Route path="/dashboard" element={<PatientDashboard />} />
          <Route path="/dashboard/appointments" element={<PatientAppointments />} />
          <Route path="/dashboard/messages" element={<PatientMessages />} />
          <Route path="/dashboard/medical-records" element={<PatientMedicalRecords />} />
          <Route path="/dashboard/payments" element={<PatientPayments />} />
          <Route path="/dashboard/video-call" element={<PatientVideoCall />} />
          <Route path="/doctor" element={<DoctorDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
