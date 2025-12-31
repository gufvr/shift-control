export type Shift = {
  id: string
  date: string
  shift: 'MORNING' | 'AFTERNOON' | 'EVENING'
  location: string
  notificationId?: string
}
