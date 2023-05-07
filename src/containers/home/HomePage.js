import './HomePage.css'
import React from 'react';
import Carousel from '../../ui/Carousel';
import Categories from '../../components/home/Categories';

function HomePage() {
  const posters = ['posters/sale1.png', 'posters/sale2.png', 'posters/sale3.png']

  return (
    <div className='h-[88%]  w-full flex flex-col  justify-start items-center'>
      <div className='max-w-[70%] '>
        <Carousel>
        {
          posters.map((image, index) => {
            return <img key={index} alt='error' src={image} />
          })
        }
        </Carousel>
      </div>

      <Categories/>
    </div>
  )
};

export default HomePage