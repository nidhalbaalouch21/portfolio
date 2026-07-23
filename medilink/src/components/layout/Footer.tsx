import { Link } from 'react-router-dom'
import { Heart, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative bg-gray-950 text-gray-400 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-950 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="space-y-5">
            <Link to="/" className="flex items-center gap-2.5 group">
              <Heart className="w-6 h-6 text-primary fill-primary transition-transform group-hover:scale-110" />
              <span className="text-lg font-bold text-white">Medi<span className="text-primary">Link</span></span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-500">
              Connecting patients with trusted healthcare providers. Your health, our priority.
            </p>
            <div className="flex gap-2">
              {['F', 'T', 'L', 'I'].map((letter, i) => (
                <span
                  key={i}
                  className="w-9 h-9 rounded-xl bg-gray-800/50 text-gray-400 flex items-center justify-center text-xs font-semibold hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer"
                >
                  {letter}
                </span>
              ))}
            </div>
          </div>

          {[
            {
              title: 'For Patients',
              links: ['Find a Doctor', 'Book Appointment', 'Specialties', 'Health Articles', 'FAQ'],
            },
            {
              title: 'For Doctors',
              links: ['Join MediLink', 'Doctor Dashboard', 'Telemedicine', 'Resources', 'Support'],
            },
          ].map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-widest mb-5">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((item) => (
                  <li key={item}>
                    <Link
                      to="#"
                      className="text-sm text-gray-500 hover:text-white transition-colors duration-200 inline-flex items-center gap-1 group"
                    >
                      {item}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-widest mb-5">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span className="text-gray-500">123 Healthcare Ave, Medical City, NY 10001</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span className="text-gray-500">+1 (555) 000-0000</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span className="text-gray-500">hello@medilink.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800/50 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">&copy; 2026 MediLink. All rights reserved.</p>
          <div className="flex gap-8 text-sm">
            {['Privacy', 'Terms', 'Cookies'].map((item) => (
              <Link key={item} to="#" className="text-gray-600 hover:text-gray-400 transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="absolute bottom-6 right-6 w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
      >
        <ArrowUpRight className="w-4 h-4 rotate-45" />
      </button>
    </footer>
  )
}
