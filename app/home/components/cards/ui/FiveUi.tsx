import { Menu, Settings, ShoppingBag } from "lucide-react"

export function FiveUi() {
  return (
    <div className="flex flex-col gap-4 rounded-xl border p-4">
      {/* Row 1: nav bar */}
      <div className="flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center gap-2">
          <Menu className="h-5 w-5 text-[#0075BF]" />
          <span className="font-medium text-[#0075BF]">Dashboard</span>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <Settings className="h-5 w-5 text-[#0075BF]" />
          <div className="flex h-8 w-8  text-[#0075BF] items-center justify-center rounded-full bg-muted text-sm font-medium">
            A
          </div>
        </div>
      </div>

      {/* Row 2: stat cards */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-1 items-center gap-3 rounded-lg border p-3">
          <ShoppingBag className="h-6 w-6 text-[#0075BF]" />
          <div className="flex flex-col">
            <span className="text-sm  text-[#0075BF]">Today's Sales</span>
            <span className="text-lg font-semibold text-[#0075BF]">Rs 12324</span>
          </div>
        </div>

        <div className="flex flex-1 items-center gap-3 rounded-lg border p-3">
          <ShoppingBag className="h-6 w-6 text-[#0075BF]" />
          <div className="flex flex-col">
            <span className="text-sm text-[#0075BF]">Today's Sales</span>
            <span className="text-lg font-semibold text-[#0075BF]">Rs 12324</span>
          </div>
        </div>

        <div className="flex flex-1 items-center gap-3 rounded-lg border p-3">
          <ShoppingBag className="h-6 w-6 text-[#0075BF]" />
          <div className="flex flex-col">
            <span className="text-sm text-[#0075BF]">Today's Sales</span>
            <span className="text-lg font-semibold text-[#0075BF]">Rs 12324</span>
          </div>
        </div>
      </div>
    </div>
  )
}