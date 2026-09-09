
// "use client"

// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import {Calendar,User} from "lucide-react";

// import {
//   Card,
//   CardAction,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {  useBlogs } from "@/hooks/blogs";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";

// export interface BlogCategory {
//   id: number;
//   name: string;
// }

// export interface Blog {
//   id: number;
//   category: BlogCategory;
//   title: string;
//   short_description: string;
//   long_description: string;
//   image: string;
//   Author: string | null;
//   is_published: boolean;
//   slug: string;
//   created_at: string;
// }




// export function CardImage() {
//   const date = new Date().toLocaleDateString('en-US', {
//   year: 'numeric',
//   month: 'long',
//   day: 'numeric',
//   weekday: 'long'
// })

// const {data: blogsData,isLoading: isLoading} = useBlogs(); 
// // const {data:blogsDataById} = useBlogId()

// const router = useRouter()

// const handleReadMore = (slug:string|number)=>{
//   router.push(`/blogs/${slug}`)
  
// }

// useEffect(()=>{
//    console.log("BlogsData:",blogsData)
// },[blogsData])

//   return (
//     <div className="px-4 sm:px-6 lg:px-8">
//       <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
//         {blogsData?.map((blog: Blog) => {
//             const Icon2 = User;
//           const Icon1 = Calendar;

//           return (
//             <Card
//               key={blog.id}
//               className="relative mx-auto w-full max-w-sm overflow-hidden pt-0"
//             >
//               {/* Image overlay */}
//               <div className="absolute inset-0 z-30 aspect-video bg-black/35" />

//               {/* Image */}
//             {blogsData?.image && (
//                      <div className="relative aspect-video w-full overflow-hidden">
//                        <Image
//                          src={`https://stocknep.product-api.hamroyouthit.com${blog.image}`}
//                          alt={blog.title ?? "Blog image"}
//                          fill
//                          sizes="(max-width: 768px) 100vw, 1024px"
//                          className="object-cover"
//                          priority
//                        />
           
//                        <div className="absolute inset-0 z-10 bg-black/35" />
//                      </div>
//                    )}
           

//               <CardHeader className="flex flex-col gap-4">
//                 {/* Icons */}
//                 <CardAction className="flex w-full items-center justify-around my-4">
//                     <div className="flex gap-2 item-center justify-center">
//                         <span className="w-5 text-center h-5 border text-[#007BFF] border-[#03773]"><Icon2 size={20}  /> </span>
//                         <span className="text-[#007BFF]">By stock team</span>

//                     </div>
//                     <div className="flex gap-2 item-center justify-center">
//                         <span className="w-5 text-center h-5 border text-[#007BFF] border-[#03773]">  <Icon1 size={20} />  </span>
//                         <span className="text-[#007BFF]">{blog.created_at}</span>

//                     </div>
                
//                 </CardAction>

//                 {/* Heading */}
//                 <CardTitle className="">
//                     <h1 className=" pr-20 px-4 text-[#033773] font-medium font-Sans">
//                     {blog.title}
//                     </h1>

//                     </CardTitle>

//                 {/* Description */}
//                 <CardDescription >
//                     <p className=" pr-20 px-4 text-[#007BFF]">

//                     {blog.short_description}
//                     </p>
//                     </CardDescription>
//               </CardHeader>

//               {/* Same footer for all cards */}
//               <CardFooter>
//                 <Button onClick={()=>handleReadMore(blog.slug)} className="bg-[#007BFF] p-4 text-white">
//                   Read more
//                 </Button>
//               </CardFooter>
//             </Card>
//           );
//         })}
//       </div>
//     </div>
//   );
// }




"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, User } from "lucide-react"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useBlogs } from "@/hooks/blogs"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export interface BlogCategory {
  id: number
  name: string
}

export interface Blog {
  id: number
  category: BlogCategory
  title: string
  short_description: string
  long_description: string
  image: string
  Author: string | null
  is_published: boolean
  slug: string
  created_at: string
}

export function CardImage() {
  const { data: blogsData, isLoading } = useBlogs()

  const router = useRouter()

  const handleReadMore = (slug: string) => {
    router.push(`/blogs/${slug}`)
  }

  useEffect(() => {
    console.log("BlogsData:", blogsData)
  }, [blogsData])

  if (isLoading) {
    return (
      <div className="px-4 sm:px-6 lg:px-8">
        <p>Loading blogs...</p>
      </div>
    )
  }

  if (!blogsData || blogsData.length === 0) {
    return (
      <div className="px-4 sm:px-6 lg:px-8">
        <p>No blogs found.</p>
      </div>
    )
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {blogsData.map((blog: Blog) => {
          const Icon2 = User
          const Icon1 = Calendar

          return (
            <Card
              key={blog.id}
              className="relative mx-auto w-full max-w-sm overflow-hidden pt-0"
            >
              {/* Image */}
              {blog.image && (
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={`https://stocknep.product-api.hamroyouthit.com${blog.image}`}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 1024px"
                    className="object-cover"
                    priority
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 z-10 bg-black/35" />
                </div>
              )}

              <CardHeader className="flex flex-col gap-4">
                {/* Icons */}
                <CardAction className="my-4 flex w-full items-center justify-around">
                  <div className="flex items-center justify-center gap-2">
                    <span className="h-5 w-5 border text-center text-[#007BFF]">
                      <Icon2 size={20} />
                    </span>

                    <span className="text-[#007BFF]">
                      By stock team
                    </span>
                  </div>

                  <div className="flex items-center justify-center gap-2">
                    <span className="h-5 w-5 border text-center text-[#007BFF]">
                      <Icon1 size={20} />
                    </span>

                    <span className="text-[#007BFF]">
                      {blog.created_at}
                    </span>
                  </div>
                </CardAction>

                {/* Heading */}
                <CardTitle>
                  <h1 className="px-4 pr-20 font-Sans font-medium text-[#033773]">
                    {blog.title}
                  </h1>
                </CardTitle>

                {/* Description */}
                <CardDescription>
                  <p className="px-4 pr-20 text-[#007BFF]">
                    {blog.short_description}
                  </p>
                </CardDescription>
              </CardHeader>

              {/* Footer */}
              <CardFooter>
                <Button
                  onClick={() => handleReadMore(blog.slug)}
                  className="bg-[#007BFF] p-4 text-white"
                >
                  Read more
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </div>
  )

}
