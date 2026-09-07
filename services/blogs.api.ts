import api from "@/api/api"
import { API_ENDPOINTS } from "@/api/api-endpoints"

export const getAllBlogs= async ()=> {
   const res = await api.get(`${API_ENDPOINTS.PUBLIC.BLOG}`);
   return res.data.data.data;
}

export const getBlogById = async ()=>{
    const res = await api.get(`${API_ENDPOINTS.PUBLIC.BLOGID}`)
    return res.data.data.data
}