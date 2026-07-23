export type UserRole = 'patient' | 'doctor' | 'receptionist' | 'lab_staff' | 'clinic_manager' | 'admin'

export type AppointmentStatus = 'pending' | 'confirmed' | 'checked_in' | 'completed' | 'cancelled' | 'missed'

export type PaymentMethod = 'credit_card' | 'debit_card' | 'paypal' | 'stripe' | 'cash'

export type NotificationType = 'appointment_reminder' | 'prescription_ready' | 'lab_result' | 'payment_confirmation' | 'doctor_message'

export interface User {
  id: string
  email: string
  phone?: string
  password?: string
  role: UserRole
  firstName: string
  lastName: string
  photo?: string
  gender?: 'male' | 'female'
  dateOfBirth?: string
  bloodType?: string
  language?: string[]
  isVerified: boolean
  isBanned: boolean
  createdAt: string
}

export interface Patient extends User {
  role: 'patient'
  emergencyContact?: EmergencyContact
  allergies?: string[]
  chronicDiseases?: string[]
  familyMembers?: FamilyMember[]
  insuranceInfo?: InsuranceInfo
}

export interface Doctor extends User {
  role: 'doctor'
  specialty: string
  biography?: string
  education?: Education[]
  certificates?: string[]
  experience?: Experience[]
  languages: string[]
  workingHours: WorkingHours[]
  consultationFee: number
  rating: number
  reviewCount: number
  awards?: string[]
  publications?: string[]
  isOnlineConsultation: boolean
  insuranceAccepted?: string[]
  city?: string
}

export interface EmergencyContact {
  name: string
  phone: string
  relation: string
}

export interface FamilyMember {
  id: string
  name: string
  relation: string
  dateOfBirth: string
  bloodType?: string
}

export interface InsuranceInfo {
  provider: string
  policyNumber: string
  expiryDate: string
}

export interface Education {
  degree: string
  institution: string
  year: number
}

export interface Experience {
  position: string
  hospital: string
  from: number
  to: number | 'present'
}

export interface WorkingHours {
  day: string
  start: string
  end: string
  isAvailable: boolean
}

export interface Appointment {
  id: string
  patientId: string
  doctorId: string
  specialty: string
  date: string
  time: string
  status: AppointmentStatus
  type: 'in_person' | 'video'
  paymentStatus: 'pending' | 'paid' | 'refunded'
  amount: number
  notes?: string
  createdAt: string
}

export interface Prescription {
  id: string
  patientId: string
  doctorId: string
  appointmentId?: string
  medicines: Medicine[]
  notes?: string
  createdAt: string
}

export interface Medicine {
  name: string
  dosage: string
  frequency: string
  duration: string
  notes?: string
}

export interface MedicalRecord {
  id: string
  patientId: string
  doctorId: string
  type: 'diagnosis' | 'lab_result' | 'imaging' | 'vaccination' | 'surgery' | 'note'
  title: string
  description: string
  date: string
  files?: string[]
}

export interface LabTest {
  id: string
  patientId: string
  doctorId: string
  testType: string
  status: 'requested' | 'in_progress' | 'completed'
  result?: string
  resultDate?: string
  createdAt: string
}

export interface ChatMessage {
  id: string
  senderId: string
  receiverId: string
  content: string
  type: 'text' | 'image' | 'file' | 'voice'
  fileUrl?: string
  readAt?: string
  createdAt: string
}

export interface Review {
  id: string
  patientId: string
  doctorId: string
  rating: number
  comment: string
  isAbuseReported: boolean
  doctorResponse?: string
  createdAt: string
}

export interface Notification {
  id: string
  userId: string
  type: NotificationType
  title: string
  message: string
  isRead: boolean
  createdAt: string
}

export interface Payment {
  id: string
  userId: string
  appointmentId: string
  amount: number
  method: PaymentMethod
  status: 'completed' | 'pending' | 'refunded'
  invoiceUrl?: string
  createdAt: string
}

export interface Specialty {
  id: string
  name: string
  icon: string
  description: string
  doctorCount: number
}
