"use client"

import { TrendingUp, User } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import Image from "next/image"

export const description = "A bar chart"

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
]

// const chartConfig = {
//   desktop: {
//     label: "Desktop",
//     color: "#3b82f6",
//   },
// } satisfies ChartConfig

export function CardSix() {
  return (
    <Card className="m-4 lg:m-2">
      {/* <CardHeader>
        <CardTitle>Bar Chart</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader> */}
      <CardContent className="flex flex-col items-center pt-4">
        {/* <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
          </BarChart>
        </ChartContainer> */}
      <Image src={"/card6.png"} alt="card56" className="w-64  h-auto"  width={100} height={50} />
      </CardContent>
     <CardFooter className="flex-col items-start gap-2 text-sm">
        <span><User className="text-[#0075BF] w-10 h-8"/></span>
         <div className="flex gap-2 leading-none font-medium">
          <h1 className="text-[#003773] text-xl ">Team Management</h1>
        </div>
        <div className="leading-none text-muted-foreground">
        <p className="text-[#0075BF]">Work together with role-based access for your staff</p>
        </div>
      </CardFooter>
    </Card>
  )
}