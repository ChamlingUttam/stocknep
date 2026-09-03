import React from 'react'

import { BarChart2, Database,  ShoppingBag } from 'lucide-react'
import { Card } from '@/components/ui/card'
import CardHeader from './cardHeader'

const Cards = () => {
    const apis = [{
        id:1,
        icon:Database,

        header:"Made for Nepal",
        text:"Built specifically for Nepal's unique business environment, festivals, and tax regulations"
    },
    {
        id:2,
        icon:BarChart2,
        header:"Affordable Pricing",
        text:"Cost-effective plans starting at just Rs. 500/month for small shops and businesses"
    },
    {
        id:3,
        icon:BarChart2,
        header:"Local Support",
        text:"Phone and WhatsApp support in Nepali during local business hours"
    },
    {
        id:4,
        icon:ShoppingBag,

        header:"Real-time Updates",
        text:"Instant sync across all devices - see stock changes immediately from any location"
    },

]
  return (
    // <div className='flex flex-col'>
        <div className='border-b border-gray-400 w-full'>

      <CardHeader/>
     <div className="flex flex-col lg:flex-row gap-4  lg:p-4 p-2">
        {apis.map((api) => (
          <Card key={api.id} className="flex flex-col gap-3 p-6 flex-1">
            <span>
              <api.icon size={28} className="text-[#0057FF]" />
            </span>
            <h1 className="text-[#003773] font-semibold text-lg">{api.header}</h1>
            <p className="text-md text-[#0057ff]">{api.text}</p>
          </Card>
        ))}
      </div>
        </div>
      

    // </div>
  )
}

export default Cards
