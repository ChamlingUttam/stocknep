
// import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
//   CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useBlogId } from "@/hooks/blogs";
import { Calendar, User } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";

export function CardImage() {
    const params = useParams<{id:string}>()
    const id = params.id

const {data:blogsDataById} = useBlogId(id)

const Icon2 = User
const Icon1 = Calendar 


  return (
       <div className="">
      <div className="">
            <Card className="relative mx-auto w-full max-w-sm overflow-hidden pt-0">
              {/* Image overlay */}
              <div className="absolute inset-0 z-30 aspect-video bg-black/35" />

              {/* Image */}
              <Image
                src={`https://stocknep.product-api.hamroyouthit.com/api/v1${blogsDataById.image}/`}
                alt={blogsDataById.title}
                width={600}
                height={400}
                // fill
                // className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
              />

              <CardHeader className="flex flex-col gap-4">
                {/* Icons */}
                <CardAction className="flex w-full items-center justify-around my-4">
                    <div className="flex gap-2 item-center justify-center">
                        <span className="w-5 text-center h-5 border text-[#007BFF] border-[#03773]"><Icon2 size={20}  /> </span>
                        <span className="text-[#007BFF]">By stock team</span>

                    </div>
                    <div className="flex gap-2 item-center justify-center">
                        <span className="w-5 text-center h-5 border text-[#007BFF] border-[#03773]">  <Icon1 size={20} />  </span>
                        <span className="text-[#007BFF]">{blogsDataById.create_at}</span>

                    </div>
                
                </CardAction>

                {/* Heading */}
                <CardTitle className="">
                    <h1 className=" pr-20 px-4 text-[#033773] font-medium font-Sans">
                    {blogsDataById.title}
                    </h1>

                    </CardTitle>

                {/* Description */}
                <CardDescription >
                    <p className=" pr-20 px-4 text-[#007BFF]">

                    {blogsDataById.long_description}
                    </p>
                    </CardDescription>
              </CardHeader>

             
            </Card>

      </div>
    </div>
  )
}
