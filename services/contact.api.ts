import api from "@/api/api"
import { API_ENDPOINTS } from "@/api/api-endpoints"

export type SendMessagePayload = {
  first_name: string,
  last_name: string,
  email: string,
  phone_number: string,
  message: string
}

export const sendMessage = async (payload: SendMessagePayload) => {
   const res =  await api.post(API_ENDPOINTS.PUBLIC.CONTACT_US, payload)
   return res.data.data;
}