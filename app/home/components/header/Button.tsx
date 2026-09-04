import { Button } from '@/components/ui/button'
import React from 'react'

const Buttons = () => {
  return (
    <div className="flex gap-2 mt-5 flex-col lg:flex-row">
  <Button className="bg-[#0057FB] text-white px-5">
   Start 14 Days Free Trial
  </Button>

  <Button variant="outline" className="px-5 text-[#0057FB]">
    View demo video
  </Button>
</div>
  )
}

export default Buttons
