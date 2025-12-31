import AsyncStorage from '@react-native-async-storage/async-storage'
import { Shift } from '../types/shift'

const STORAGE_KEY = '@shifts'

export async function getShifts(): Promise<Shift[]> {
  const data = await AsyncStorage.getItem(STORAGE_KEY)
  return data ? JSON.parse(data) : []
}

export async function saveShift(newShift: Shift) {
  const shifts = await getShifts()
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify([...shifts, newShift]))
}

export async function deleteShift(id: string) {
  const shifts = await getShifts()
  const filtered = shifts.filter((s) => s.id !== id)

  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(filtered))
}
