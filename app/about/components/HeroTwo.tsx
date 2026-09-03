import { Card } from '@/components/ui/card'
import { Database } from 'lucide-react'
import React from 'react'

const HeroTwo = () => {
    const apis = [
        {
            id:1,
            icon:Database,
            text:"Manual stock counting leading to errors and losses"

        },
        {
            id:2,
            icon:Database,
            text:"Difficulty tracking inventory across multiple locations"

        },{
            id:3,
            icon:Database,
            text:"Challenges with Nepal VAT and tax compliance"

        },{
            id:4,
            icon:Database,
            text:"Seasonal demand fluctuations during festivals"

        },{
            id:5,
            icon:Database,
            text:"Supplier management and payment tracking"

        },{
            id:6,
            icon:Database,
            text:"Inventory theft and pilferage prevention"

        },
    ]
  return (
    <div className=''>
        <header className='text-center py-10 px-4 mb-4 border-b border-gray-400'>
             <h1 className="text-4xl md:text-5xl font-sans font-medium text-[#003773] tracking-tight">
       The Challenges We Address
      </h1>
      <p className=" font-medium tracking-wide mb-3 text-[#0057B5]">
        Inventory management problems faced by Nepali businesses that inspired us to build StockNep
      </p>

        </header>

        <div>
            <div  className='grid grid-cols-1 lg:grid-cols-3 grid-row-2 p-4 lg:grid-row-1 gap-2 ' >
            {apis.map((api)=>(
                    <Card key={api.id} className='flex items-center gap-2 p-5'>
                        <span><api.icon size={20} className='text-[#0057B5]'></api.icon></span>
                        <span><p className='text-[#0057B5] text-md'>{api.text}</p></span>

                    </Card>
                
            ))}
            </div>
        </div>
      
    </div>
  )
}

export default HeroTwo
