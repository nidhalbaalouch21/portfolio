import { useState } from 'react'
import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { doctors, chatMessages } from '@/data'
import { Send, Search, Phone, Video } from 'lucide-react'
import { formatDate } from '@/lib/utils'

export default function PatientMessages() {
  const [selectedDoc, setSelectedDoc] = useState(doctors[0])
  const [message, setMessage] = useState('')
  const messages = chatMessages.filter(m => m.senderId === 'p1' && m.receiverId === selectedDoc.id || m.senderId === selectedDoc.id && m.receiverId === 'p1')

  return (
    <DashboardLayout role="patient">
      <div className="h-[calc(100vh-8rem)]">
        <div className="flex h-full bg-white rounded-2xl border overflow-hidden">
          <div className="w-72 lg:w-80 border-r flex flex-col">
            <div className="p-3 border-b">
              <Input placeholder="Search conversations..." icon={<Search className="w-4 h-4" />} />
            </div>
            <div className="flex-1 overflow-y-auto">
              {doctors.map((doc) => (
                <button
                  key={doc.id}
                  onClick={() => setSelectedDoc(doc)}
                  className={`w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 transition-colors cursor-pointer ${
                    selectedDoc.id === doc.id ? 'bg-primary/5' : ''
                  }`}
                >
                  <Avatar fallback={`${doc.firstName[0]}${doc.lastName[0]}`} size="md" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">Dr. {doc.lastName}</p>
                    <p className="text-xs text-gray-500 truncate">{doc.specialty}</p>
                  </div>
                  <div className="text-xs text-gray-400">{'12:30'}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between p-3 border-b">
              <div className="flex items-center gap-3">
                <Avatar fallback={`${selectedDoc.firstName[0]}${selectedDoc.lastName[0]}`} size="md" />
                <div>
                  <p className="text-sm font-semibold">Dr. {selectedDoc.firstName} {selectedDoc.lastName}</p>
                  <p className="text-xs text-green-600">Online</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer"><Phone className="w-4 h-4" /></button>
                <button className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer"><Video className="w-4 h-4" /></button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => {
                const isMine = msg.senderId === 'p1'
                return (
                  <div key={i} className={`flex ${isMine ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[70%] p-3 rounded-2xl text-sm ${
                      isMine ? 'bg-primary text-white rounded-br-md' : 'bg-gray-100 text-gray-900 rounded-bl-md'
                    }`}>
                      {msg.content}
                      <p className={`text-xs mt-1 ${isMine ? 'text-white/60' : 'text-gray-400'}`}>
                        {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="p-3 border-t flex gap-2">
              <Input
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1"
              />
              <Button className="px-4"><Send className="w-4 h-4" /></Button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
