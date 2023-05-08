import './HomePage.css'
import React from 'react';
import Carousel from '../../ui/Carousel';
import Categories from '../../components/home/Categories';
import ItemsContainer from '../items/ItemsContainer';
import LoadingItemsContainer from '../items/LoadingItemsContainer';

function HomePage() {
  const posters = ['posters/sale1.png', 'posters/sale2.png', 'posters/sale3.png']
  const sample_product_1 = [
    {
      img_path: 'sample/1/'
    }
  ]
  return (
    <div className='h-[88%] w-full lg:w-[70%] flex flex-col  justify-start items-center'>
      <div className='w-full'>
        <Carousel>
        {
          posters.map((image, index) => {
            return <img key={index} alt='error' src={image} />
          })
        }
        </Carousel>
      </div>

      <Categories/>
      {/* <LoadingItemsContainer/> */}
      <ItemsContainer title="Similar Items You Might Like"/>
    </div>
  )
};

export default HomePage