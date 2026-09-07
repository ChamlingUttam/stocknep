import React from 'react'
import Section from './components/Section'
import PricingTable from '../components/pricing/PricingTable'
import Header from './components/header/Header'
import Faq from '../faqs/components/Faq'

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
