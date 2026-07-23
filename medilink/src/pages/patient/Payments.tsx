import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { payments, appointments } from '@/data'
import { formatCurrency, formatDate } from '@/lib/utils'
import { CreditCard, Download, FileText } from 'lucide-react'

export default function PatientPayments() {
  const getAppointment = (id: string) => appointments.find(a => a.id === id)

  return (
    <DashboardLayout role="patient">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Payment History</h1>

        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { label: 'Total Paid', value: formatCurrency(payments.filter(p => p.status === 'completed').reduce((s, p) => s + p.amount, 0)), color: 'text-green-600' },
            { label: 'Pending', value: payments.filter(p => p.status === 'pending').length.toString(), color: 'text-yellow-600' },
            { label: 'Refunded', value: formatCurrency(payments.filter(p => p.status === 'refunded').reduce((s, p) => s + p.amount, 0)), color: 'text-red-600' },
          ].map((s) => (
            <Card key={s.label}>
              <CardContent className="p-4">
                <p className="text-sm text-gray-500">{s.label}</p>
                <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardContent className="p-0">
            <div className="divide-y">
              {payments.map((pay) => {
                const apt = getAppointment(pay.appointmentId)
                return (
                  <div key={pay.id} className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                        <CreditCard className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{apt?.specialty || 'Appointment'}</p>
                        <p className="text-xs text-gray-500">{formatDate(pay.createdAt)} via {pay.method.replace('_', ' ')}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <p className="text-sm font-semibold">{formatCurrency(pay.amount)}</p>
                        <Badge variant={pay.status === 'completed' ? 'success' : pay.status === 'refunded' ? 'danger' : 'warning'}>
                          {pay.status}
                        </Badge>
                      </div>
                      <Button size="sm" variant="ghost"><Download className="w-4 h-4" /></Button>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
