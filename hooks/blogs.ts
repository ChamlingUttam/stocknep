import { getAllBlogs } from "@/services/blogs.api"
import { useQuery } from "@tanstack/react-query"

export const useBlogs = ()=> {
    return useQuery({
        queryKey: ["blogs"],
        queryFn: getAllBlogs,
    })
}