import { getAllBlogs, getBlogById } from "@/services/blogs.api"
import { useQuery } from "@tanstack/react-query"

type idType = string | number
export const useBlogs = ()=> {
    return useQuery({
        queryKey: ["blogs"],
        queryFn: getAllBlogs,
        
    })
}

export const useBlogId = (id:idType)=>{
    return useQuery({
        queryKey:["blog",id],
        queryFn:getBlogById,
    })
}