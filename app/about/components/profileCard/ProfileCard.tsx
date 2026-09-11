
import { Button } from "@/components/ui/button"
import {
  Card,
//   CardAction,
  CardDescription,
//   CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { apis } from "./apis"



export function ProfileCard() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 border-b border-gray-400 w-full lg:px-32 p-4">
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
