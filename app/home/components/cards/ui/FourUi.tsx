import { Shield } from 'lucide-react'
import React from 'react'

const FourUi = () => {
  return (
    <section className="flex flex-col items-center pt-4 ">
  <div className="flex h-60 w-60 items-center justify-center border rounded-full border-[#0c7dc4]">
    <div className="flex h-45 w-45 items-center justify-center border rounded-full border-[#0794ec]">
      {/* <Image
        src={"/card6.png"}
        alt="card56"
        className="h-8 w-8 object-contain"
        width={32}
        height={32}
      /> */}
      <span><Shield  className="h-30 w-30 object-contain text-[#0075BF]"/></span>
    </div>
  </div>
</section>
  )
}

export default FourUi
