




import Image from "next/image";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { blogs } from "./api";


export function CardImage() {
  const date = new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long'
})
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {blogs.map((blog) => {
            const Icon2 = blog.icon2;
          const Icon1 = blog.icon1;

          return (
            <Card
              key={blog.id}
              className="relative mx-auto w-full max-w-sm overflow-hidden pt-0"
            >
              {/* Image overlay */}
              <div className="absolute inset-0 z-30 aspect-video bg-black/35" />

              {/* Image */}
              <Image
                src={blog.image}
                alt={blog.heading}
                width={600}
                height={400}
                // fill
                className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
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
                        <span className="text-[#007BFF]">{date}</span>

                    </div>
                
                </CardAction>

                {/* Heading */}
                <CardTitle className="">
                    <h1 className=" pr-20 px-4 text-[#033773] font-medium font-Sans">
                    {blog.heading}
                    </h1>

                    </CardTitle>

                {/* Description */}
                <CardDescription >
                    <p className=" pr-20 px-4 text-[#007BFF]">

                    {blog.text}
                    </p>
                    </CardDescription>
              </CardHeader>

              {/* Same footer for all cards */}
              <CardFooter>
                <Button className="bg-[#007BFF] p-4 text-white">
                  Read more
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}