import api from "@/api/api"
import { API_ENDPOINTS } from "@/api/api-endpoints"

export const getTestimonial = async ()=>{
    const res = await api.get(`${API_ENDPOINTS.PUBLIC.TESTIMONIAL}`)
    console.log(res.data)

    return res.data.data.data
}