import React from 'react'
import {BsStar} from "react-icons/bs"
import {FaStarHalfAlt,FaStar} from "react-icons/fa"
function Stars({stars}) {

    const reiting = Array.from({length: 5}, (i,index)=>{
        let num = index + 0.5   
        return (
            <span key={index}>
                {stars >= index +1 ? (
             <FaStar/>
                ):stars >=num ?(
                    <FaStarHalfAlt/>
                ) : (
                    <BsStar/>
                )
}
            </span>
        )
     })

  return (
    <div className='stars'>
    {reiting}
    </div>
  )
}

export default Stars