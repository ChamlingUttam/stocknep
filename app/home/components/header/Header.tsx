import React from 'react'
import { FeatureBanner } from './FeatureBanner'
import Buttons from './Button'
import Trusted from './Trusted'
import TrustCard from './TrustCard'
// import { CardOne } from '../cards/CardOne'
import MainCard from '../cards/MainCard'

const Header = () => {
  return (
    <div>
       <header className='flex flex-col items-center text-center justify-center py-10 lg:px-4 px-6 mb-4 '>
        <FeatureBanner/>
        <div>
 <h1 className="text-3xl md:text-4xl font-sans  font-medium text-[#003773] tracking-tight">
         Simplify Your Shop <br />
Inventory Like Never Before
        </h1>
        </div>
       
      <div>
          <p className="text-sm lg:text-base font-medium tracking-wide mb-3 text-[#0057B5]">
          Track stock levels, manage suppliers, and grow your business with StockNep's <br />
all-in-one inventory management solution. Perfect for Nepali businesses.
        </p>
      </div>
      <Buttons/>
      </header>
      <Trusted/>
      <TrustCard/>
      <MainCard/>
    </div>
  )
}

export default Header
