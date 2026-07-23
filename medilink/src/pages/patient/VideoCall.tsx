import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar } from '@/components/ui/avatar'
import { Mic, MicOff, Video, VideoOff, PhoneOff, MessageSquare, ScreenShare } from 'lucide-react'
import { useState } from 'react'
import { doctors } from '@/data'

export default function PatientVideoCall() {
  const [micOn, setMicOn] = useState(true)
  const [camOn, setCamOn] = useState(true)
  const [inCall, setInCall] = useState(false)

  return (
    <DashboardLayout role="patient">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Video Consultation</h1>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-gray-900 rounded-2xl aspect-video flex items-center justify-center relative">
              {inCall ? (
                <>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Avatar fallback="SJ" size="xl" className="mx-auto mb-3 border-4 border-white/30" />
                      <p className="text-lg font-semibold">Dr. Sarah Johnson</p>
                      <p className="text-sm text-gray-400">Connected</p>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 w-36 aspect-video bg-gray-700 rounded-lg flex items-center justify-center">
                    <p className="text-xs text-gray-400">Your video</p>
                  </div>
                </>
              ) : (
                <div className="text-center text-gray-400">
                  <VideoOff className="w-16 h-16 mx-auto mb-3" />
                  <p className="text-lg">Ready to start your call</p>
                  <p className="text-sm">Ensure your camera and microphone are working</p>
                </div>
              )}
            </div>

            <div className="flex items-center justify-center gap-3 mt-4">
              <button onClick={() => setMicOn(!micOn)} className={`p-3 rounded-full ${micOn ? 'bg-gray-100 text-gray-700' : 'bg-red-100 text-red-600'} cursor-pointer`}>
                {micOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
              </button>
              <button onClick={() => setCamOn(!camOn)} className={`p-3 rounded-full ${camOn ? 'bg-gray-100 text-gray-700' : 'bg-red-100 text-red-600'} cursor-pointer`}>
                {camOn ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
              </button>
              <button onClick={() => setInCall(!inCall)} className={`p-3 rounded-full ${inCall ? 'bg-red-600 text-white' : 'bg-green-600 text-white'} cursor-pointer`}>
                {inCall ? <PhoneOff className="w-5 h-5" /> : <Video className="w-5 h-5" />}
              </button>
              <button className="p-3 rounded-full bg-gray-100 text-gray-700 cursor-pointer">
                <ScreenShare className="w-5 h-5" />
              </button>
              <button className="p-3 rounded-full bg-gray-100 text-gray-700 cursor-pointer">
                <MessageSquare className="w-5 h-5" />
              </button>
            </div>
          </div>

          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3">Upcoming Calls</h3>
              <div className="space-y-3">
                {doctors.slice(0, 2).map((doc) => (
                  <div key={doc.id} className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50">
                    <Avatar fallback={`${doc.firstName[0]}${doc.lastName[0]}`} size="md" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Dr. {doc.lastName}</p>
                      <p className="text-xs text-gray-500">{doc.specialty}</p>
                    </div>
                    <Button size="sm" onClick={() => setInCall(true)}>Call</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
