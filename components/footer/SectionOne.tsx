import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import React from 'react'

const SectionOne = () => {
    
  return (
    <div className='w-full  bg-[#003773] border-none  flex items-center justify-center  flex-col'>
        <div className='mb-3 p-4 pt-10 inline-start text-left lg:text-center text-white '>
            <h1 className='font-medium   leading-11 tracking-[-0.15] text-[38px] lg:text-[42px] '>
                Everything You Need to Manage <br/>
                <span className='text-center'>
                  Your Inventory
                </span>
            </h1>
        </div>

        <div className='mb-5 p-4'>
            <p className='text-white  tracking-[-0.15] text'>Manage your stock, sales, purchases, and business operations effortlessly with StockNep. Keep everything <br /> organized in one place, save time, reduce errors, and make smarter decisions for your business.</p>
        </div>

        <div className='flex-col lg:flex-row flex  items-start inline-start lg:items-center  text-white'>
            <div className='flex gap-2 px-3'>
                <span><Check/></span>
                <span>Real-time_tracking</span>

            </div>
            <div className='flex gap-2 text-white px-3'>
                <span><Check/></span>
                <span>Automated Reporting</span>

            </div>            
            <div className='flex gap-2 px-3 text-white'>
                <span ><Check/></span>
                <span className='text-white'>Predicative analysis</span>

            </div>
        </div>

        <div className='gap-2 flex-col flex lg:flex-row items-center mt-4 mb-10'>
            <div  >
                <button className='bg-[#007BFF] text-white px-8 py-2 rounded-sm  border-none' >start 14 day trail free</button>
            </div>

            <div>
            <button className='px-10 py-2 bg-[#003773]  text-[#007bffd2] rounded-sm border border-blue-600'>View Demo video</button>
            </div>
        </div>
      
    </div>
  )
}

export default SectionOne 
