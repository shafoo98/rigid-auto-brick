import React from 'react'

import SolidBrick from '../assets/Solid-Concrete-Blocks.jpg'
import Pavement from '../assets/Pavement.png'
import Hollow from '../assets/Hollow Concrete Block.jpg'
import TenHole from '../assets/10_Hole_Brick_.png'
import Kerb from '../assets/Kerb-Stone.jpg'
import Card from './card'

const Gallery = () => {
  return (
    <div>
      <h1 className='w-full text-4xl font-semibold text-center mt-24 md:mt-32 md:text-6xl'>
        Our Products
      </h1>
      <div className='md:max-w-[1240px] w-full px-8 mx-auto grid lg:grid-cols-3 gap-8 h-screen'>
        <Card
          name='Solid Brick'
          src={SolidBrick}
          color='Grey'
          minimumOrderQty={1000}
          type='Solid'
          size='400 x 200 x 200 mm'
        />
        <Card
          name='Hollow Brick'
          src={Hollow}
          color='Grey'
          minimumOrderQty={1000}
          type='Hollow'
          size='400 x 200 x 200 mm'
        />
        <Card
          name='Pavement Block'
          src={Pavement}
          color='Grey'
          minimumOrderQty={1000}
          type='Pavement Block'
          size='400 x 200 x 200 mm'
        />
        <Card
          name='10 Hole Solid Brick'
          src={TenHole}
          color='Grey'
          minimumOrderQty={1000}
          type='10 Hole Solid Brick'
          size='400 x 200 x 200 mm'
        />
        <Card
          name='Kerb Stone'
          src={Kerb}
          color='Grey'
          minimumOrderQty={1000}
          type='Kerb Stone'
          size='400 x 200 x 200 mm'
        />
      </div>
    </div>
  )
}

export default Gallery
