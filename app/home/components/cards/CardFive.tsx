"use client"

import { Smartphone, TrendingUp } from "lucide-react"
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
import { FiveUi } from "./ui/FiveUi"

export const description = "A bar chart"

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#3b82f6",
  },
} satisfies ChartConfig

export function CardFive() {
  return (
    <Card className="m-4 lg:m-2">
      {/* <CardHeader>
        <CardTitle>Bar Chart</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader> */}
      <CardContent>
        <FiveUi/>
       
      </CardContent>
       <CardFooter className="flex-col items-start gap-2 text-sm">
        <span><Smartphone className="text-[#0075BF] w-10 h-8"/></span>
         <div className="flex gap-2 leading-none font-medium">
          <h1 className="text-[#003773] text-xl ">Mobile Access</h1>
        </div>
        <div className="leading-none text-muted-foreground">
        <p className="text-[#0075BF]">Manage your inventory from anywhere using our <br />  mobile apps</p>
        </div>
      </CardFooter>
    </Card>
  )
}