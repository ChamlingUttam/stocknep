import React from 'react'
import Section from './components/Section'
import Header from './components/header/Header'
import Faq from '../faqs/components/Faq'
import PricingTable from '@/components/pricing/PricingTable'

const HomePage = () => {
  return (
    <div>
        <Header/>
      <Section/>
      <PricingTable/>
      <Faq/>
    </div>
  )
}

export default HomePage
