

import Image from 'next/image'
import React from 'react'

const SectionTwo = () => {
  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-[6fr_1.5fr_2fr_2.5fr] lg:grid-rows-[auto_auto_1fr] w-full border border-gray-400'>

        {/* Logo / About column */}
        <div className='lg:col-start-1 lg:row-start-1 border lg:border-b-0 lg:border-r border-gray-400 px-6 pt-6 pb-4 lg:px-10 lg:py-6 flex items-center'>
          <Image src={"/Logo.png"} alt="logo" width={100} height={10} />
        </div>
        <hr className='lg:col-start-1 lg:row-start-2 border-black w-full lg:border-r' />
        <div className='lg:col-start-1 lg:row-start-3 lg:border-r border-gray-400 px-6 py-5 lg:p-5 text-[#003773]'>
          <p>
            StockNep is a smart inventory management SaaS designed <br />
            for businesses in Nepal. Track stock, manage sales, generate <br />
            invoices, and grow faster with confidence.
          </p>
        </div>

        {/* Company column */}
        <div className='lg:col-start-2 lg:row-start-1 border lg:border-b-0 lg:border-r border-gray-400 px-6 pt-7 pb-4 lg:px-10 lg:py-7.5 flex items-center lg:justify-center text-[#003773]'>
          Company
        </div>
        <hr className='lg:col-start-2 lg:row-start-2 border-black w-full lg:border-r' />
        <div className='lg:col-start-2 lg:row-start-3 lg:border-r border-gray-400 px-6 py-4 lg:px-0 flex justify-start lg:justify-center'>
          <ul className='text-md font-serif text-[#003773]'>
            <li>About Us</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Testomonial</li>
            <li>Blogs</li>
          </ul>
        </div>

        {/* Legal column */}
        <div className='lg:col-start-3 lg:row-start-1 border lg:border-b-0 lg:border-r border-gray-400 px-6 pt-7 pb-4 lg:px-10 lg:py-7.5 flex items-center lg:justify-center text-[#003773]'>
          Legal
        </div>
        <hr className='lg:col-start-3 lg:row-start-2 border-black w-full lg:border-r' />
        <div className='lg:col-start-3 lg:row-start-3 lg:border-r border-gray-400 px-6 py-4 lg:px-0 flex justify-start lg:justify-center'>
          <ul className='text-md font-serif text-[#003773]'>
            <li>Privacy policy</li>
            <li>Terms of service</li>
            <li>Cookies policy</li>
          </ul>
        </div>

        {/* Contact column */}
        <div className='lg:col-start-4 lg:row-start-1 border-b lg:border-b-0 border-gray-400 px-6 pt-7 pb-4 lg:px-10 lg:py-7.5 flex items-center lg:justify-center text-[#003773]'>
          Contact
        </div>
        <hr className='lg:col-start-4 lg:row-start-2 border-black w-full' />
        <div className='lg:col-start-4 lg:row-start-3 px-6 py-4 lg:px-10 flex justify-start lg:justify-center'>
          <ul className='text-md font-serif text-[#003773]'>
            <li>9746888890</li>
            <li>hamroyouthit@gmail.com</li>
            <li>Pragati Chowk, Itahari, Nepal</li>
          </ul>
        </div>

      </div>

      <div className='p-2 text-center border-b border-gray-400 mb-4'>
        <p className='text-[#003773] text-sm font-bold'>
          © {new Date().getFullYear()} JobPortal. All rights reserved.
        </p>
      </div>
    </>
  )
}

export default SectionTwo