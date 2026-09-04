import React from 'react'
import Section from './components/Section'
import PricingTable from '../components/pricing/PricingTable'
import Header from './components/header/Header'

const HomePage = () => {
  return (
    <div>
        <Header/>
      <Section/>
      <PricingTable/>
    </div>
  )
}

export default HomePage
