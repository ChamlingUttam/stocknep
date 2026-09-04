
import React from 'react'
import { ChevronDown } from 'lucide-react'
import { questions } from './apis';

const Faq = () => {
 

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