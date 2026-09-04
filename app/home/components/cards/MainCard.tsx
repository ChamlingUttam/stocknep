import React from 'react'
import { CardOne } from './CardOne'
import { CardTwo } from './CardTwo'
import { CardThree } from './CardThree'
import { CardFour } from './CardFour'
import { CardFive } from './CardFive'
import { CardSix } from './CardSix'

const MainCard = () => {
  return (
    <div className='lg:grid-cols-3 lg:grid-rows-2 grid grid-cols-1 gap-4 mt-4'>
        <CardOne/>
        <CardTwo/>
        <CardThree/>
        <CardFour/>
        <CardFive/>
        <CardSix/>
      
    </div>
  )
}

export default MainCard
