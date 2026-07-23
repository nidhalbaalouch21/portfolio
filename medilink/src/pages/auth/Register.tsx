import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Heart, Mail, Lock, User, Phone, Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [role, setRole] = useState<'patient' | 'doctor'>('patient')
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate(role === 'patient' ? '/dashboard' : '/doctor')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50/30 p-4 py-10">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwZWE1ZTkiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMS41Ii8+PC9nPjwvZz48L3N2Zz4=')]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative"
      >
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2.5 mb-6 group">
            <div className="relative">
              <Heart className="w-8 h-8 text-primary fill-primary group-hover:scale-110 transition-transform" />
              <div className="absolute -inset-1 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-2xl font-bold">Medi<span className="text-primary">Link</span></span>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Create an account</h1>
          <p className="text-gray-500 mt-1">Join MediLink today</p>
        </div>

        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-6 lg:p-8 space-y-6">
          <div className="flex bg-gray-100 rounded-xl p-1">
            {(['patient', 'doctor'] as const).map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all cursor-pointer ${
                  role === r ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {r === 'patient' ? 'Patient' : 'Doctor'}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <Input label="First Name" placeholder="John" icon={<User className="w-4 h-4" />} />
              <Input label="Last Name" placeholder="Doe" icon={<User className="w-4 h-4" />} />
            </div>
            <Input label="Email" type="email" placeholder="john@email.com" icon={<Mail className="w-4 h-4" />} />
            <Input label="Phone" type="tel" placeholder="+1 (555) 000-0000" icon={<Phone className="w-4 h-4" />} />
            <div className="relative">
              <Input
                label="Password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Create a password"
                icon={<Lock className="w-4 h-4" />}
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[38px] cursor-pointer">
                {showPassword ? <EyeOff className="w-4 h-4 text-gray-400" /> : <Eye className="w-4 h-4 text-gray-400" />}
              </button>
            </div>

            <p className="text-xs text-gray-400">
              By signing up, you agree to our{' '}
              <Link to="#" className="text-primary font-medium">Terms of Service</Link> and{' '}
              <Link to="#" className="text-primary font-medium">Privacy Policy</Link>.
            </p>

            <Button type="submit" variant="gradient" className="w-full shadow-lg shadow-primary/20" size="lg">Create Account</Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100" /></div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-3 text-gray-400">Or sign up with</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {['Google', 'Facebook', 'Apple'].map((provider) => (
              <button key={provider}
                className="flex items-center justify-center py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 text-sm font-medium text-gray-700 transition-all cursor-pointer">
                {provider}
              </button>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500">
            Already have an account?{' '}
            <Link to="/login" className="text-primary font-semibold hover:underline">Sign in</Link>
          </p>
        </div>
      </motion.div>
    </div>
  )
}
