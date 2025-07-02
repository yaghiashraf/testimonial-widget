export interface Testimonial {
  id: string
  text: string
  author: string
  rating?: number
  photoUrl?: string
}

export interface Theme {
  primaryColor: string
  fontSize: number
}

export interface WidgetConfig {
  testimonials: Testimonial[]
  theme: Theme
  showPoweredBy: boolean
}

export interface PaymentStatus {
  paid: boolean
  sessionId?: string
}