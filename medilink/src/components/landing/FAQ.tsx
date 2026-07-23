import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  { q: 'How do I book an appointment?', a: 'Simply search for a doctor by specialty or name, choose a convenient time slot, and confirm your booking. You can pay online or in person.' },
  { q: 'Can I have a video consultation?', a: 'Yes! Many doctors offer online video consultations. Just filter by "Online Consultation" when searching for a doctor.' },
  { q: 'How do I access my prescriptions?', a: 'After your consultation, prescriptions are available in your dashboard. You can download them as PDF or print them directly.' },
  { q: 'Is my medical data secure?', a: 'Absolutely. We use end-to-end encryption for all medical records and comply with healthcare data protection regulations.' },
  { q: 'Can I manage appointments for my family?', a: 'Yes, you can add family members to your account and book appointments on their behalf.' },
  { q: 'What if I need to cancel?', a: 'You can cancel or reschedule appointments from your dashboard. Cancellations made 24h in advance are fully refundable.' },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="relative py-20 lg:py-24 bg-gray-50/80 overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-medium mb-4 border border-primary/10">
            <HelpCircle className="w-3 h-3" /> FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">Frequently Asked Questions</h2>
          <p className="text-gray-500 mt-2">Everything you need to know about MediLink</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl border transition-all duration-300 ${
                open === i ? 'border-primary/20 shadow-md shadow-primary/5' : 'border-gray-100 hover:border-gray-200'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left cursor-pointer group"
              >
                <span className="font-medium text-gray-900 text-sm group-hover:text-primary transition-colors">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-all duration-300 shrink-0 ml-4 ${
                    open === i ? 'rotate-180 text-primary' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-4">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
