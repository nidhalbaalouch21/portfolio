import { Hero } from '@/components/landing/Hero'
import { SearchSection } from '@/components/landing/SearchSection'
import { Specialties } from '@/components/landing/Specialties'
import { FeaturedDoctors } from '@/components/landing/FeaturedDoctors'
import { HowItWorks } from '@/components/landing/HowItWorks'
import { Testimonials } from '@/components/landing/Testimonials'
import { Stats } from '@/components/landing/Stats'
import { FAQ } from '@/components/landing/FAQ'
import { CTA } from '@/components/landing/CTA'
import { motion } from 'framer-motion'

export default function Landing() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Hero />
      <SearchSection />
      <Specialties />
      <Stats />
      <FeaturedDoctors />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTA />
    </motion.div>
  )
}
