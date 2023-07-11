import React from 'react'
import {BsStar} from "react-icons/bs"
import {FaStarHalfAlt,FaStar} from "react-icons/fa"
function 
Stars({stars}) {

    const reiting = Array.from({length: 5}, (i,index)=>{
        let num = index + 0.5   
        return (
           <div className="container flex">
             <div key={index} className='flex'>
                {stars >= index +1 ? (
             <FaStar/>
                ):stars >=num ?(
                    <FaStarHalfAlt/>
                ) : (
                    <BsStar/>
                )
}
            </div>
           </div>
        )
     })

  return (
    <div className='stars flex text-yellow-400 text-xl'>
    {reiting}
    </div>
  )
}

export default Stars