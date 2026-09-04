import React from 'react'
import Hero from './components/Hero'
import Cards from './components/card/Card'
import HeroTwo from './components/HeroTwo'
import ProfileMain from './components/profileCard/ProfileMain'

const AboutPage = () => {
  return (
    <div>
      <Hero/>
      <Cards/>
      <ProfileMain/>
      <HeroTwo/>
    </div>
  )
}

export default AboutPage