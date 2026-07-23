import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { medicalRecords, labTests } from '@/data'
import { formatDate } from '@/lib/utils'
import { FileText, Upload, ClipboardList, Download } from 'lucide-react'

const typeIcons: Record<string, string> = {
  diagnosis: '🩺', lab_result: '🔬', imaging: '🖼️', vaccination: '💉', surgery: '🏥', note: '📝',
}

export default function PatientMedicalRecords() {
  return (
    <DashboardLayout role="patient">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Medical Records</h1>
          <Button className="gap-2"><Upload className="w-4 h-4" /> Upload Document</Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold">Records & Reports</h2>
            </CardHeader>
            <CardContent className="space-y-4">
              {medicalRecords.map((record) => (
                <div key={record.id} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-lg">
                    {typeIcons[record.type] || '📄'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">{record.title}</p>
                      <Badge variant={record.type === 'diagnosis' ? 'info' : record.type === 'lab_result' ? 'warning' : 'default'}>
                        {record.type.replace('_', ' ')}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{record.description}</p>
                    <p className="text-xs text-gray-400 mt-1">{formatDate(record.date)}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold">Lab Results</h2>
            </CardHeader>
            <CardContent className="space-y-4">
              {labTests.map((lab) => (
                <div key={lab.id} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                    <ClipboardList className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">{lab.testType}</p>
                      <Badge variant={lab.status === 'completed' ? 'success' : 'warning'}>
                        {lab.status.replace('_', ' ')}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{lab.result || 'Result pending...'}</p>
                    <p className="text-xs text-gray-400 mt-1">Ordered: {formatDate(lab.createdAt)}</p>
                  </div>
                  {lab.status === 'completed' && (
                    <Button size="sm" variant="ghost"><Download className="w-4 h-4" /></Button>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
