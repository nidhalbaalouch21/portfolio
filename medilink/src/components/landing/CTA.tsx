import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Heart, Sparkles, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'

export function CTA() {
  return (
    <section className="relative py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-950 to-primary/90 p-10 lg:p-16 text-center text-white"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMS41Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />

          <div className="relative max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 tracking-tight">Ready to Take Control of Your Health?</h2>
            <p className="text-lg text-white/70 max-w-xl mx-auto mb-10 leading-relaxed">
              Join thousands of patients who trust MediLink for their healthcare needs. Start your journey today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 gap-2 shadow-xl shadow-black/10">
                  Get Started Free <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/doctors">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10 hover:border-white/30 gap-2"
                >
                  <Search className="w-4 h-4" /> Find a Doctor
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center gap-6 mt-8 text-xs text-white/50">
              <div className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5" /> No commitment
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Free to start
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5" /> Cancel anytime
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

import { Search } from 'lucide-react'
