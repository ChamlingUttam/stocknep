"use client"

import { ShoppingBasket, TrendingUp } from "lucide-react"
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
import ThreeUi from "./ui/ThreeUi"

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

export function CardThree() {
  return (
    <Card className="m-4 lg:m-2">
      {/* <CardHeader>
        <CardTitle>Bar Chart</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader> */}
      {/* <CardContent>
        <ChartContainer config={chartConfig}>
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
        </ChartContainer>
      </CardContent> */}
      <ThreeUi/>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <span><ShoppingBasket className="text-[#0075BF] w-10 h-7"/></span>
         <div className="flex gap-2 leading-none font-medium">
          <h1 className="text-[#003773] text-xl ">Purchases Order</h1>
        </div>
        <div className="leading-none text-muted-foreground">
        <p className="text-[#0075BF]">Detailed insights to help you make better <br /> business decisions</p>
        </div>
      </CardFooter>
    </Card>
  )
}