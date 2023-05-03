import './HomePage.css'
import Loading from '../../ui/Loading';

function HomePage() {

  return (
    <div className='w-full h-body bg-light-white'>
      <div id='poster_area' className='z-[0] relative w-full h-[95%] flex justify-center items-center'>
      <Loading />
      <img src={process.env.PUBLIC_URL + '/posters/sale1.png'} className='absolute top-0 lg:h-full object-contain'/>
        <div className='w-full mx-[50%]'>
          <img src={process.env.PUBLIC_URL + 'left-arrow.png'} alt='error' className='absolute h-[2%] object-contain left-[5%] xl:left-[15%]'/>
          <img src={process.env.PUBLIC_URL + 'right-arrow.png'} alt='error' className='absolute h-[2%] object-contain right-[5%]  lg:top-[none] xl:right-[15%]'/>
        </div>
      </div>
    </div>
  )
}

export default HomePage