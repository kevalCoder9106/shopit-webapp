import React from 'react'
import { MdStar, MdStarOutline, MdStarHalf } from 'react-icons/md'

function Ratings(props) {
    var { rating, totalUsers } = props
    if (rating > 5) rating = 5

    return (
        <div className='flex flex-row text-sm md:text-lg my-2 items-center'>
            {
                [...Array(Math.floor(rating))].map((x, i) => {
                    return <MdStar/>
                })
            }
            {
                rating - Math.floor(rating) > 0
                &&
                <MdStarHalf/>
            }
            {
                rating - Math.floor(rating) > 0
                ?
                [...Array(5-Math.floor(rating + 1))].map((x, i) => {
                    return <MdStarOutline />
                })
                :
                [...Array(5-Math.floor(rating))].map((x, i) => {
                    return <MdStarOutline />
                })
            }
            <h1 className='text-sm px-1'>({totalUsers})</h1>
        </div>
    )
}

export default Ratings