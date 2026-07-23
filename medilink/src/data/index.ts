import type { Doctor, Patient, Appointment, Prescription, MedicalRecord, LabTest, Review, Notification, Payment, Specialty } from '@/types'

export const specialties: Specialty[] = [
  { id: '1', name: 'General Medicine', icon: '🩺', description: 'General health checkups and consultations', doctorCount: 45 },
  { id: '2', name: 'Cardiology', icon: '❤️', description: 'Heart and cardiovascular system', doctorCount: 28 },
  { id: '3', name: 'Dermatology', icon: '🔬', description: 'Skin, hair, and nail conditions', doctorCount: 22 },
  { id: '4', name: 'Dentistry', icon: '🦷', description: 'Oral health and dental care', doctorCount: 35 },
  { id: '5', name: 'Neurology', icon: '🧠', description: 'Brain and nervous system', doctorCount: 18 },
  { id: '6', name: 'Pediatrics', icon: '👶', description: 'Child healthcare', doctorCount: 30 },
  { id: '7', name: 'Orthopedics', icon: '🦴', description: 'Bones and joints', doctorCount: 20 },
  { id: '8', name: 'Gynecology', icon: '👩', description: 'Women\'s reproductive health', doctorCount: 25 },
  { id: '9', name: 'Psychiatry', icon: '💭', description: 'Mental health', doctorCount: 15 },
  { id: '10', name: 'Ophthalmology', icon: '👁️', description: 'Eye care and vision', doctorCount: 19 },
  { id: '11', name: 'ENT', icon: '👂', description: 'Ear, nose, and throat', doctorCount: 17 },
  { id: '12', name: 'Nutrition', icon: '🥗', description: 'Diet and nutrition', doctorCount: 12 },
]

export const doctors: Doctor[] = [
  {
    id: 'd1', firstName: 'Sarah', lastName: 'Johnson', email: 'sarah.johnson@medilink.com', role: 'doctor',
    specialty: 'Cardiology', biography: 'Board-certified cardiologist with 15+ years of experience in interventional cardiology.',
    education: [{ degree: 'MD', institution: 'Harvard Medical School', year: 2005 }],
    experience: [{ position: 'Senior Cardiologist', hospital: 'Mayo Clinic', from: 2010, to: 'present' }],
    languages: ['English', 'French'], consultationFee: 200, rating: 4.8, reviewCount: 127,
    workingHours: [
      { day: 'Monday', start: '09:00', end: '17:00', isAvailable: true },
      { day: 'Wednesday', start: '09:00', end: '17:00', isAvailable: true },
      { day: 'Friday', start: '10:00', end: '15:00', isAvailable: true },
    ], isOnlineConsultation: true, city: 'New York', gender: 'female', phone: '+1 (555) 123-4567',
  },
  {
    id: 'd2', firstName: 'Michael', lastName: 'Chen', email: 'michael.chen@medilink.com', role: 'doctor',
    specialty: 'Dermatology', biography: 'Specializing in medical and cosmetic dermatology.',
    education: [{ degree: 'MD', institution: 'Stanford University', year: 2007 }],
    experience: [{ position: 'Dermatologist', hospital: 'Cleveland Clinic', from: 2012, to: 'present' }],
    languages: ['English', 'Mandarin'], consultationFee: 180, rating: 4.6, reviewCount: 98,
    workingHours: [
      { day: 'Tuesday', start: '08:00', end: '16:00', isAvailable: true },
      { day: 'Thursday', start: '08:00', end: '16:00', isAvailable: true },
      { day: 'Saturday', start: '09:00', end: '13:00', isAvailable: true },
    ], isOnlineConsultation: true, city: 'Los Angeles', gender: 'male', phone: '+1 (555) 234-5678',
  },
  {
    id: 'd3', firstName: 'Emily', lastName: 'Williams', email: 'emily.williams@medilink.com', role: 'doctor',
    specialty: 'Pediatrics', biography: 'Dedicated to providing compassionate care for children from infancy through adolescence.',
    education: [{ degree: 'MD', institution: 'Johns Hopkins University', year: 2008 }],
    experience: [{ position: 'Pediatrician', hospital: 'Children\'s Hospital', from: 2013, to: 'present' }],
    languages: ['English', 'Spanish'], consultationFee: 160, rating: 4.9, reviewCount: 203,
    workingHours: [
      { day: 'Monday', start: '08:00', end: '16:00', isAvailable: true },
      { day: 'Tuesday', start: '08:00', end: '16:00', isAvailable: true },
      { day: 'Thursday', start: '08:00', end: '14:00', isAvailable: true },
    ], isOnlineConsultation: true, city: 'Chicago', gender: 'female', phone: '+1 (555) 345-6789',
  },
  {
    id: 'd4', firstName: 'James', lastName: 'Wilson', email: 'james.wilson@medilink.com', role: 'doctor',
    specialty: 'Neurology', biography: 'Expert in neurological disorders with focus on stroke and epilepsy management.',
    education: [{ degree: 'MD', institution: 'Yale School of Medicine', year: 2006 }],
    experience: [{ position: 'Neurologist', hospital: 'Mass General', from: 2011, to: 'present' }],
    languages: ['English'], consultationFee: 250, rating: 4.7, reviewCount: 85,
    workingHours: [
      { day: 'Wednesday', start: '10:00', end: '18:00', isAvailable: true },
      { day: 'Friday', start: '10:00', end: '16:00', isAvailable: true },
    ], isOnlineConsultation: false, city: 'Boston', gender: 'male', phone: '+1 (555) 456-7890',
  },
  {
    id: 'd5', firstName: 'Olivia', lastName: 'Brown', email: 'olivia.brown@medilink.com', role: 'doctor',
    specialty: 'Orthopedics', biography: 'Sports medicine specialist and orthopedic surgeon.',
    education: [{ degree: 'MD', institution: 'UCSF School of Medicine', year: 2009 }],
    experience: [{ position: 'Orthopedic Surgeon', hospital: 'UCLA Medical Center', from: 2014, to: 'present' }],
    languages: ['English', 'German'], consultationFee: 220, rating: 4.5, reviewCount: 64,
    workingHours: [
      { day: 'Monday', start: '07:00', end: '15:00', isAvailable: true },
      { day: 'Wednesday', start: '07:00', end: '15:00', isAvailable: true },
      { day: 'Friday', start: '08:00', end: '12:00', isAvailable: true },
    ], isOnlineConsultation: false, city: 'San Francisco', gender: 'female', phone: '+1 (555) 567-8901',
  },
  {
    id: 'd6', firstName: 'David', lastName: 'Martinez', email: 'david.martinez@medilink.com', role: 'doctor',
    specialty: 'General Medicine', biography: 'Family medicine practitioner with holistic approach to healthcare.',
    education: [{ degree: 'MD', institution: 'University of Michigan', year: 2010 }],
    experience: [{ position: 'Family Physician', hospital: 'Kaiser Permanente', from: 2015, to: 'present' }],
    languages: ['English', 'Spanish'], consultationFee: 120, rating: 4.4, reviewCount: 156,
    workingHours: [
      { day: 'Monday', start: '09:00', end: '17:00', isAvailable: true },
      { day: 'Tuesday', start: '09:00', end: '17:00', isAvailable: true },
      { day: 'Wednesday', start: '09:00', end: '17:00', isAvailable: true },
      { day: 'Thursday', start: '09:00', end: '17:00', isAvailable: true },
      { day: 'Friday', start: '09:00', end: '15:00', isAvailable: true },
    ], isOnlineConsultation: true, city: 'Miami', gender: 'male', phone: '+1 (555) 678-9012',
  },
]

export const patients: Patient[] = [
  {
    id: 'p1', firstName: 'John', lastName: 'Doe', email: 'john.doe@email.com', role: 'patient',
    phone: '+1 (555) 111-2222', gender: 'male', bloodType: 'O+', isVerified: true, isBanned: false,
    createdAt: '2024-01-15', allergies: ['Penicillin', 'Peanuts'],
    emergencyContact: { name: 'Jane Doe', phone: '+1 (555) 333-4444', relation: 'Spouse' },
  },
  {
    id: 'p2', firstName: 'Alice', lastName: 'Smith', email: 'alice.smith@email.com', role: 'patient',
    phone: '+1 (555) 555-6666', gender: 'female', bloodType: 'A-', isVerified: true, isBanned: false,
    createdAt: '2024-03-20', chronicDiseases: ['Type 2 Diabetes'],
    emergencyContact: { name: 'Bob Smith', phone: '+1 (555) 777-8888', relation: 'Brother' },
  },
]

export const appointments: Appointment[] = [
  { id: 'a1', patientId: 'p1', doctorId: 'd1', specialty: 'Cardiology', date: '2026-07-20', time: '10:00', status: 'confirmed', type: 'in_person', paymentStatus: 'paid', amount: 200, createdAt: '2026-07-15' },
  { id: 'a2', patientId: 'p1', doctorId: 'd2', specialty: 'Dermatology', date: '2026-07-22', time: '14:00', status: 'confirmed', type: 'video', paymentStatus: 'paid', amount: 180, createdAt: '2026-07-16' },
  { id: 'a3', patientId: 'p2', doctorId: 'd3', specialty: 'Pediatrics', date: '2026-07-19', time: '09:00', status: 'completed', type: 'in_person', paymentStatus: 'paid', amount: 160, createdAt: '2026-07-14' },
  { id: 'a4', patientId: 'p1', doctorId: 'd4', specialty: 'Neurology', date: '2026-07-25', time: '11:00', status: 'pending', type: 'in_person', paymentStatus: 'pending', amount: 250, createdAt: '2026-07-18' },
  { id: 'a5', patientId: 'p2', doctorId: 'd1', specialty: 'Cardiology', date: '2026-07-18', time: '15:00', status: 'cancelled', type: 'video', paymentStatus: 'refunded', amount: 200, createdAt: '2026-07-12' },
]

export const prescriptions: Prescription[] = [
  {
    id: 'rx1', patientId: 'p1', doctorId: 'd1', appointmentId: 'a1',
    medicines: [
      { name: 'Atorvastatin', dosage: '10mg', frequency: 'Once daily', duration: '30 days', notes: 'Take after dinner' },
      { name: 'Aspirin', dosage: '81mg', frequency: 'Once daily', duration: '90 days' },
    ],
    notes: 'Monitor cholesterol levels after 3 months.',
    createdAt: '2026-07-15',
  },
  {
    id: 'rx2', patientId: 'p2', doctorId: 'd3',
    medicines: [
      { name: 'Amoxicillin', dosage: '500mg', frequency: 'Three times daily', duration: '10 days', notes: 'Take with food' },
      { name: 'Ibuprofen', dosage: '200mg', frequency: 'As needed', duration: '5 days' },
    ],
    notes: 'Complete the full course of antibiotics.',
    createdAt: '2026-07-14',
  },
]

export const medicalRecords: MedicalRecord[] = [
  { id: 'mr1', patientId: 'p1', doctorId: 'd1', type: 'diagnosis', title: 'Hypertension Diagnosis', description: 'Stage 1 hypertension detected. Prescribed lifestyle changes and medication.', date: '2026-07-15' },
  { id: 'mr2', patientId: 'p1', doctorId: 'd1', type: 'lab_result', title: 'Blood Panel Results', description: 'Cholesterol: 210 mg/dL (elevated). LDL: 130 mg/dL. HDL: 45 mg/dL.', date: '2026-07-14' },
  { id: 'mr3', patientId: 'p2', doctorId: 'd3', type: 'vaccination', title: 'Annual Flu Shot', description: 'Influenza vaccine administered.', date: '2026-07-10' },
]

export const labTests: LabTest[] = [
  { id: 'lt1', patientId: 'p1', doctorId: 'd1', testType: 'Complete Blood Count', status: 'completed', result: 'Normal range', resultDate: '2026-07-16', createdAt: '2026-07-13' },
  { id: 'lt2', patientId: 'p1', doctorId: 'd1', testType: 'Lipid Profile', status: 'completed', result: 'See attached report', resultDate: '2026-07-16', createdAt: '2026-07-13' },
  { id: 'lt3', patientId: 'p2', doctorId: 'd3', testType: 'Blood Glucose', status: 'in_progress', createdAt: '2026-07-17' },
]

export const reviews: Review[] = [
  { id: 'r1', patientId: 'p1', doctorId: 'd1', rating: 5, comment: 'Excellent cardiologist! Very thorough and caring.', createdAt: '2026-07-16', isAbuseReported: false },
  { id: 'r2', patientId: 'p2', doctorId: 'd3', rating: 5, comment: 'Dr. Williams is amazing with kids. My daughter loves her!', doctorResponse: 'Thank you for your kind words!', createdAt: '2026-07-15', isAbuseReported: false },
]

export const notifications: Notification[] = [
  { id: 'n1', userId: 'p1', type: 'appointment_reminder', title: 'Appointment Tomorrow', message: 'You have a cardiology appointment with Dr. Johnson at 10:00 AM tomorrow.', isRead: false, createdAt: '2026-07-19' },
  { id: 'n2', userId: 'p1', type: 'prescription_ready', title: 'Prescription Ready', message: 'Your prescription from Dr. Johnson is ready for download.', isRead: false, createdAt: '2026-07-15' },
  { id: 'n3', userId: 'p1', type: 'lab_result', title: 'Lab Results Available', message: 'Your blood test results are now available.', isRead: true, createdAt: '2026-07-16' },
]

export const payments: Payment[] = [
  { id: 'pay1', userId: 'p1', appointmentId: 'a1', amount: 200, method: 'credit_card', status: 'completed', invoiceUrl: '#', createdAt: '2026-07-15' },
  { id: 'pay2', userId: 'p1', appointmentId: 'a2', amount: 180, method: 'paypal', status: 'completed', invoiceUrl: '#', createdAt: '2026-07-16' },
]

export const chatMessages: { senderId: string; receiverId: string; content: string; type: 'text'; createdAt: string }[] = [
  { senderId: 'p1', receiverId: 'd1', content: 'Hello Dr. Johnson, I have a question about my medication.', type: 'text', createdAt: '2026-07-18T10:00:00' },
  { senderId: 'd1', receiverId: 'p1', content: 'Hi John, of course. What would you like to know?', type: 'text', createdAt: '2026-07-18T10:05:00' },
  { senderId: 'p1', receiverId: 'd1', content: 'Should I take Atorvastatin with or without food?', type: 'text', createdAt: '2026-07-18T10:06:00' },
  { senderId: 'd1', receiverId: 'p1', content: 'Take it after dinner, preferably at the same time each day.', type: 'text', createdAt: '2026-07-18T10:07:00' },
]
