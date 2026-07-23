import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, Stethoscope, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function SearchSection() {
  const [query, setQuery] = useState('')
  const [specialty, setSpecialty] = useState('')
  const navigate = useNavigate()

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (query) params.set('q', query)
    if (specialty) params.set('specialty', specialty)
    navigate(`/doctors?${params.toString()}`)
  }

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-medium mb-4 border border-primary/10">
            <Sparkles className="w-3 h-3" /> AI-Powered Search
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 tracking-tight">Find the Right Doctor for You</h2>
          <p className="text-gray-500">Search by name, specialty, or location to find the best healthcare provider.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/5 to-primary/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-white rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 p-2">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search doctor name or keyword..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border-0 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  />
                </div>
                <div className="relative sm:w-48">
                  <Stethoscope className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  <select
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border-0 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none text-sm cursor-pointer transition-all"
                  >
                    <option value="">All Specialties</option>
                    {['General Medicine', 'Cardiology', 'Dermatology', 'Pediatrics', 'Neurology'].map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <Button size="lg" onClick={handleSearch} className="gap-2 shadow-lg shadow-primary/20">
                  <Search className="w-4 h-4" />
                  Search
                </Button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-5 text-xs text-gray-400">
            <span>Popular:</span>
            {['Cardiology', 'Dentistry', 'Pediatrics', 'Dermatology'].map((item) => (
              <button
                key={item}
                onClick={() => { setQuery(item); handleSearch() }}
                className="px-3 py-1 rounded-full bg-gray-50 hover:bg-primary/5 hover:text-primary border border-gray-100 transition-all cursor-pointer"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
