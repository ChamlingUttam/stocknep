// import React from 'react'

// const Faq = () => {
//    const questions = [
//   {
//     id: 1,
//     question: "What is stockNep?",
//     answer:
//       "StockNep is a smart inventory management solution that helps businesses manage stock, sales, purchases, and daily operations in one place.",
//   },
//   {
//     id: 2,
//     question: "Who can use StockNep?",
//     answer:
//       "StockNep is suitable for retailers, wholesalers, distributors, and businesses that need simple and efficient inventory management.",
//     icon: "ArrowDownIcon",
//   },
//   {
//     id: 3,
//     question: " Can I track my stock in real time??",
//     answer:
//       "Yes. Easily monitor your inventory and keep track of stock movements as your business operates.",
//     icon: "ArrowDownIcon",
//   },
//   {
//     id: 4,
//     question: "How can I track Can I manage sales and purchases?",
//     answer:
//       "You can track Yes. StockNep helps you organize sales, purchases, and inventory records from one platform.",
//     icon: "ArrowDownIcon",
//   },
//   {
//     id: 5,
//     question: "What application statuses Is StockNep easy to use? ",
//     answer:
//       "Yes. It is designed to make inventory management simple, organized, and convenient.",
//     icon: "ArrowDownIcon",
//   },
//   {
//     id: 6,
//     question: "Why should I choose StockNep?",
//     answer:
//       "To save time, reduce manual work, keep your inventory organized, and manage your business more efficiently.",
//     icon: "ArrowDownIcon",
//   },
  
// ];
//   return (
//     <div className=' border border-gray-400 w-250 text-center'>
//         {/** heading */}
//         <div className='flex flex-col items-center justify-center'>
//             <span><h1 className='text-[#003773] text-2xl  font-medium font-sans text-center mb-2'>Frequently Asked Questions <br /> About StockNep</h1></span>
//             <span><p className='text-[#003773] font-sans text-center text-sm'>Find quick answers about StockNep and learn how it can simplify inventory, sales,<br /> 
// purchases, and everyday business management—all in one place.</p></span>
//         </div>

//         {/** Qa part */}

//         {
//             questions.map((question)=>(
//                 <div  key={question.id} className='w-full flex-col text-center  '>
//                     <div className='flex flex-col px-10 '>
//                         <span className='text-[#003773]  text-md'>

//                         {question.question}
//                         </span>
//                         <span className='text-[#003773] text-sm '>

//                         {question.answer}
//                         </span>
//                     </div>


//                 </div>
//             ))
//         }
      
//     </div>
//   )
// }

// export default Faq

import React from 'react'
import { ChevronDown } from 'lucide-react'

const Faq = () => {
  const questions = [
    {
      id: 1,
      question: "What is StockNep?",
      answer:
        "StockNep is a smart inventory management solution that helps businesses manage stock, sales, purchases, and daily operations in one place.",
    },
    {
      id: 2,
      question: "Who can use StockNep?",
      answer:
        "StockNep is suitable for retailers, wholesalers, distributors, and businesses that need simple and efficient inventory management.",
    },
    {
      id: 3,
      question: "Can I track my stock in real time?",
      answer:
        "Yes. Easily monitor your inventory and keep track of stock movements as your business operates.",
    },
    {
      id: 4,
      question: "Can I manage sales and purchases?",
      answer:
        "Yes. StockNep helps you organize sales, purchases, and inventory records from one platform.",
    },
    {
      id: 5,
      question: "Is StockNep easy to use?",
      answer:
        "Yes. It is designed to make inventory management simple, organized, and convenient.",
    },
    {
      id: 6,
      question: "Why should I choose StockNep?",
      answer:
        "To save time, reduce manual work, keep your inventory organized, and manage your business more efficiently.",
    },
  ];

  return (
    <>
    <hr className='border-black'/>
    <div className="w-full min-h-screen flex items-center justify-center p-6">
      <div className="border border-gray-400 w-250 max-w-full text-center p-6 rounded-lg">
        {/* heading */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[#003773] text-2xl font-medium font-sans text-center mb-2">
            Frequently Asked Questions <br /> About StockNep
          </h1>
          <p className="text-[#003773] font-sans text-center text-sm">
            Find quick answers about StockNep and learn how it can simplify inventory, sales,
            <br />
            purchases, and everyday business management—all in one place.
          </p>
        </div>

        {/* Q&A part */}
        <div className="mt-6">
          {questions.map((question) => (
            <div
              key={question.id}
              className="w-full flex flex-col text-left border-t border-gray-300 py-4 px-10"
            >
              <div className="w-full flex items-center justify-between">
                <span className="text-[#003773] font-semibold text-md">
                  {question.question}
                </span>
                <ChevronDown className="text-[#003773] w-5 h-5 shrink-0 ml-4" />
              </div>
              <span className="text-[#003773] text-sm mt-1">
                {question.answer}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Faq;