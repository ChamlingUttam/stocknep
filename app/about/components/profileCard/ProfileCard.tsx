import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
//   CardAction,
  CardDescription,
//   CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Mail, Phone } from "lucide-react"
import Image from "next/image"

const apis = [
    {
        id:1,
        image:"/blogImage.png",
        name:"Ram Shrestha",
        position:"Founder & CEO",
        icon1:Mail,
        icon2:Phone,
    },
      {
        id:2,
        image:"/blogImage.png",
        name:"Ram Gurung",
        position:"Founder & CEO",
        icon1:Mail,
        icon2:Phone,
    },
      {
        id:3,
        image:"/blogImage.png",
        name:"Ram Gurung",
        position:"Founder & CEO",
        icon1:Mail,
        icon2:Phone,
    },
]

// export function ProfileCard() {
//   return (
//     <>
//       {
//        <div className="flex flex-col lg:flex-row gap-4">
//     apis.map((api)=>(
//          <Card key={api.id} className="relative mx-auto w-full max-w-sm pt-0">
//       <div className="absolute inset-0 z-30  relative aspect-video bg-black/35" >
//       <Image src={api.image} alt="image" fill className="object-cover"/>
//       <div/>
//       <CardHeader>
        
//         <CardTitle>{api.name}</CardTitle>
//         <CardDescription>
//           {api.position}
//         </CardDescription>
//       </CardHeader>
//       <div className="flex gap-2 ">
//         <span>
//             <api.icon1 size={20} className="text-[#00557BF]" />
//         </span>
// <span>
//             <api.icon2 size={20} className="text-[#00557BF]" />
//         </span>

//       </div>
    
//     </Card>
//     ))
//   </div>
//    }
//    </>
//   )
// }

export function ProfileCard() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 border-b border-gray-400 w-full p-4">
      {apis.map((api) => (
        <Card key={api.id} className="relative mx-auto w-full max-w-sm pt-0 overflow-hidden">
          <div className="relative aspect-video">
            <Image src={api.image} alt={api.name} fill className="object-cover" />
            <div className="absolute inset-0 bg-black/35" />
          </div>

          <CardHeader>
            <CardTitle>
                <h1 className="text-[#0057BF]">

                {api.name}
                </h1>
                </CardTitle>
            <CardDescription>
                <p className="text-[#0057BF]">

                {api.position}
                </p>
                </CardDescription>
          </CardHeader>

          <div className="flex gap-2 px-6 pb-4">
            <span>
              <api.icon1 size={20} className="text-[#0057BF]" />
            </span>
            <span>
              <api.icon2 size={20} className="text-[#0057BF]" />
            </span>
          </div>
        </Card>
      ))}
    </div>
  )
}
