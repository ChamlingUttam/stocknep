
"use client"

import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useBlogs, useBlogId } from "@/hooks/blogs"
import { Calendar, User } from "lucide-react"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useEffect } from "react"

export default function BlogPage() {
  const params = useParams<{ slug: string }>()
  const slug = params.slug

  // 1. Get all blogs
  const {
    data: blogsData,
    isLoading: blogsLoading,
  } = useBlogs()

  // 2. Find the blog using the slug from the URL
  const blog = blogsData?.find(
    (blog: { slug: string }) => blog.slug === slug
  )

  // 3. Get the complete blog using its ID
  const {
    data: blogsDataById,
    isLoading: blogLoading,
  } = useBlogId(blog?.id ?? "")

  useEffect(() => {
    console.log("Blog detail:", blogsDataById)
  }, [blogsDataById])

  // Loading state
  if (blogsLoading || blogLoading) {
    return (
      <div className="p-10 text-center">
        Loading...
      </div>
    )
  }

  // Blog not found
  if (!blog) {
    return (
      <div className="p-10 text-center">
        Blog not found
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full px-4 py-6 sm:px-6 lg:px-8">
      <Card className="mx-auto flex w-full max-w-5xl flex-col items-center overflow-hidden py-0">

        {/* Image */}
        {blogsDataById?.image && (
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={`https://stocknep.product-api.hamroyouthit.com${blogsDataById.image}`}
              alt={blogsDataById.title ?? "Blog image"}
              fill
              sizes="(max-width: 768px) 100vw, 1024px"
              className="object-cover"
              priority
            />

            <div className="absolute inset-0 z-10 bg-black/35" />
          </div>
        )}

        <CardHeader className="flex w-full flex-col items-center px-4 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-10">

          {/* Author / Date */}
          <CardAction className="flex w-full flex-wrap items-center justify-center gap-6 sm:gap-10">

            {/* Author */}
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center border border-[#033773] text-[#007BFF]">
                <User size={18} />
              </span>

              <span className="text-sm font-medium text-[#007BFF] sm:text-base">
                By stock team
              </span>
            </div>

            {/* Date */}
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center border border-[#033773] text-[#007BFF]">
                <Calendar size={18} />
              </span>

              <span className="text-sm font-medium text-[#007BFF] sm:text-base">
                {blogsDataById?.created_at &&
                  new Date(
                    blogsDataById.created_at
                  ).toLocaleDateString()}
              </span>
            </div>

          </CardAction>

          {/* Title */}
          <CardTitle className="mt-6 w-full text-center">
            <h1 className="text-xl font-semibold leading-tight text-[#033773] sm:text-2xl md:text-3xl lg:text-4xl">
              {blogsDataById?.title}
            </h1>
          </CardTitle>

          {/* Description */}
          <CardDescription className="w-full">
            <div
              className="
                w-full
                text-base
                leading-7
                text-[#0057BF]
                sm:text-lg
                sm:leading-8
                lg:text-xl
                lg:leading-9
              "
              dangerouslySetInnerHTML={{
                __html:
                  blogsDataById?.long_description ?? "",
              }}
            />
          </CardDescription>

        </CardHeader>
      </Card>
    </div>
  )
}
