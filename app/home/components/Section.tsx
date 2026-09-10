


// import Image from 'next/image'
// import React from 'react'

// const testimonials = [
//   { id: 1, 
//     name: "Rohit Dahal",
//     role: "CEO & Founder at Youth IT",
//     "words":"This software completely changed how we manage our workflow.It's simple, fast, and saves us hours every week. Highly recommended! from rohit" },
//     { id: 2, 
//     name: "Ram Dahal",
//     role: "CEO & Founder at Youth IT",
//     "words":"hello this is ram .This software completely changed how we manage our workflow.It's simple, fast, and saves us hours every week. Highly recommended!" },
//     { id: 3, 
//     name: "Ronil Dahal",
//     role: " Founder at Youth IT",
//     "words":" from ronil.This software completely changed how we manage our workflow.It's simple, fast, and saves us hours every week. Highly recommended!" },
//     { id: 4, 
//     name: "Rojesh Dahal",
//     role: "CEO & Founder at Youth IT",
//     "words":" from the fourth person.This software completely changed how we manage our workflow.It's simple, fast, and saves us hours every week. Highly recommended!" },
  
// ]

// const handleWord= ()=>{}

// const Section = () => {
//   return (
//     <>
//       <header className='text-center py-10 px-4 mb-4 '>
//         <h1 className="text-3xl md:text-4xl font-sans font-medium text-[#003773] tracking-tight">
//           What Our Clients Say
//         </h1>
//         <p className="text-sm lg:text-base font-medium tracking-wide mb-3 text-[#0057B5]">
//           Join hundreds of Nepali businesses that trust StockNep for their inventory management
//         </p>
//       </header>

//       <div className='w-full flex flex-col lg:flex-row items-stretch justify-between px-6 lg:px-30 gap-5 pb-10'>
//         {/* left side */}
//         <div className='w-full lg:w-9/12 border border-gray-400 rounded-lg p-6 lg:p-8 flex flex-col justify-center'>
//           <div className='relative w-20 h-20 '>
//             <Image src="/Vector.png" alt="quote icon" fill className='object-contain' />
//           </div>

//           <h2 className='text-[#003773] text-lg lg:text-xl leading-relaxed'>
//             "This software completely changed how we manage our workflow. <br />
//             It's simple, fast, and saves us hours every week. Highly recommended!"
//           </h2>
//         </div>

//         {/* right side */}
//         <div className='w-full lg:w-3/12 border border-gray-400 rounded-lg p-6 flex flex-col gap-4 justify-center'>
//           {testimonials.map((t) => (
//             <div key={t.id} className='flex flex-col border-b border-gray-200   pb-3 ' onClick={handleWord}>
//               <h3 className='text-[#033773] font-medium'>{t.name}</h3>
//               <p className='text-[#0057FB] text-sm'>@{t.role}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   )
// }

// export default Section

















"use client"

import Image from 'next/image'
import React, { useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: "Rohit Dahal",
    role: "CEO & Founder at Youth IT",
    words: "This software completely changed how we manage our workflow. It's simple, fast, and saves us hours every week. Highly recommended!"
  },
  {
    id: 2,
    name: "Ram Dahal",
    role: "CEO & Founder at Youth IT",
    words: "this is from ram. This software completely changed how we manage our workflow. It's simple, fast, and saves us hours every week. Highly recommended!"
  },
  {
    id: 3,
    name: "Ronil Dahal",
    role: "Founder at Youth IT",
    words: " this one is form ronail. This software completely changed how we manage our workflow. It's simple, fast, and saves us hours every week. Highly recommended!"
  },
  {
    id: 4,
    name: "Rojesh Dahal",
    role: "CEO & Founder at Youth IT",
    words: " i am fourth person. This software completely changed how we manage our workflow. It's simple, fast, and saves us hours every week. Highly recommended!"
  },
]

const Section = () => {
  // default to the first testimonial
  const [activeTestimonial, setActiveTestimonial] = useState(testimonials[0])

  return (
    <>
      <header className='text-center py-10 px-4 mb-4 '>
        <h1 className="text-3xl md:text-4xl font-sans font-medium text-[#003773] tracking-tight">
          What Our Clients Say
        </h1>
        <p className="text-sm lg:text-base font-medium tracking-wide mb-3 text-[#0057B5]">
          Join hundreds of Nepali businesses that trust StockNep for their inventory management
        </p>
      </header>

      <div className='w-full flex flex-col lg:flex-row items-stretch justify-between px-6 lg:px-30 gap-5 pb-10'>
        {/* left side */}
        <div className='w-full lg:w-9/12 border border-gray-400 rounded-lg p-6 lg:p-8 flex flex-col justify-center'>
          <div className='relative w-20 h-20 '>
            <Image src="/Vector.png" alt="quote icon" fill className='object-contain' />
          </div>

          <h2 className='text-[#003773] text-lg lg:text-xl leading-relaxed'>
            "{activeTestimonial.words}"
          </h2>
        </div>

        {/* right side */}
        <div className='w-full lg:w-3/12 border border-gray-400 rounded-lg p-6 flex flex-col gap-4 justify-center'>
          {testimonials.map((t) => (
            <div
              key={t.id}
              className={`flex flex-col border-b border-gray-200 pb-3 cursor-pointer transition-colors ${
                activeTestimonial.id === t.id ? 'opacity-100' : 'opacity-70 hover:opacity-100'
              }`}
              onClick={() => setActiveTestimonial(t)}
            >
              <h3 className='text-[#033773] font-medium'>{t.name}</h3>
              <p className='text-[#0057FB] text-sm'>@{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Section