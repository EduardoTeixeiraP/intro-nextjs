
import axios from 'axios'
import { LocationFormData } from '@/schema/locationschema'

const API_URL = process.env.NEXT_PUBLIC_API_URL

if (!API_URL) {
  throw new Error('NEXT_PUBLIC_API_URL não está definida')
}

export const addPlace = async (data: LocationFormData) => {
  const response = await axios.post(`${API_URL}/places`, data)
  return response.data
}

export const updatePlace = async (id: string, data: LocationFormData) => {
  const response = await axios.put(`${API_URL}/places/${id}`, data)
  return response.data
}

export const deletePlace = async (id: string) => {
  const response = await axios.delete(`${API_URL}/places/${id}`)
  return response.data
}
