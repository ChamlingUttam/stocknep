import Image from 'next/image'
import React from 'react'

const Trusted = () => {
  return (
    <div className='flex flex-col gap-2 items-center'>
        <span>
            <p className='text-[#003773]'>Trusted by 100+ business</p>
        </span>


        <div className='flex flex-col lg:flex-row gap-10 lg:gap-5 items-center text-center'>
            <div className='flex gap-2'>
                <span><Image src={"/1.png"} alt='image' width={25} height={10}/></span>
                <span><h1 className='text-[#003773] font-semibold text-xl'>Logoipsum</h1></span>
            </div>
             <div className='flex gap-2'>
                <span><Image src={"/2.png"} alt='image' width={25} height={10}/></span>
                <span><h1 className='text-[#003773] font-semibold text-xl' >Logoipsum</h1></span>
            </div>
             <div className='flex gap-2'>
                <span><Image src={"/3.png"} alt='image' width={25} height={10}/></span>
                <span><h1 className='text-[#003773] font-semibold text-xl'>Logoipsum</h1></span>
            </div>

        </div>

      
    </div>
  )
}

export default Trusted
