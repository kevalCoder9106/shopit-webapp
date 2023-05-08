import Ratings from '../../components/item/Ratings'
import { useState } from 'react'

function Product() {
    const [totalItems, setTotalItems] = useState(0)

    return (
        <div className='px-[2%] lg:px-[8%] font-work_sans w-full h-[88%] flex flex-col lg:flex-row items-center justify-center'>
            <div className='w-[70%] lg:w-1/2 h-[80%] flex flex-col'>
                <div className='w-[95%] lg:w-[80%] h-[80%] bg-gray-200 relative flex items-center justify-center rounded-sm'>
                    <img src={process.env.PUBLIC_URL + '/sample/4/1.png'} className='absolute h-[50%] lg:h-[70%]' ></img>
                </div>
                <div className='w-[90%] lg:w-[70%] h-[20%] flex flex-row'>
                {
                    [...Array(4)].map((value, index) => {
                        return <div className='w-[100%] h-[80%] mr-3 mt-3 p-3 bg-gray-200 flex justify-center items-center rounded-sm hover:bg-zinc-100'>
                            <img src={process.env.PUBLIC_URL + `/sample/4/${index+2}.png`} className=''></img>
                        </div>
                    })
                }
                </div>
            </div>
            <div className='w-[70%] lg:w-1/2 h-[80%] flex flex-col items-start justify-start mt-[4rem] lg:mt-[0rem]'>
                <h1 className='text-xl lg:text-3xl font-bold'>Sneakers That are Good</h1>
                <h1 className='text-vsm lg:text-sm my-2'>Seems like you are working hard on this webapp, good! What you are going to implement more into this webapp!</h1>

                <Ratings rating={5.5} totalUsers={500}/>

                <h1 className='text-xl lg:text-3xl py-4'>10,045 ₹</h1>

                <div className='m-3 w-full flex flex-row items-center'>
                    <button 
                    onClick={() => { totalItems > 0 ? setTotalItems(totalItems-1) : setTotalItems(totalItems) }}
                    className='w-[1rem] lg:w-[2rem] h-[2rem] lg:h-[3rem]  text-2xl bg-gray-200 rounded-full'>-</button>
                    <input type='number' value={totalItems.toString()} className='z-[-1] w-[10rem] lg:w-[12rem] h-[3rem] translate-x-[-3rem] outline-none text-center text-xl bg-gray-200 rounded-full'></input>
                    <button 
                    onClick={() => { setTotalItems(totalItems+1) }}
                    className='w-[1rem] lg:w-[2rem] h-[2rem] lg:h-[3rem] translate-x-[-6rem] bg-gray-200 rounded-full text-2xl'>+</button>

                    <h1 className='mx-2 translate-x-[-4rem]'>Only <span className=' text-orange-400'>12 Items</span> Left</h1>
                </div>

                <div className='mt-[3rem] w-full h-fit flex flex-row'>
                    <button className='w-[7rem] mr-5 border-[1px] border-black  rounded-full p-2 hover:bg-slate-200 hover:opacity-70'>Buy Now</button>
                    <button className='w-[7rem] mr-5 border-[1px] border-black rounded-full p-2 hover:bg-slate-200 hover:opacity-70'>Add to Cart</button>
                </div>
            </div>
        </div> 
    )
}

export default Product