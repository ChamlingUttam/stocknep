import { getTestimonial } from "@/services/testimonial"
import { useQuery } from "@tanstack/react-query"



export const useTestimonial = ()=>{
    return useQuery({
        queryKey:["testimonial"],
        queryFn: getTestimonial
    })
}