import React from 'react'
import "./photos.css"
const Photos = ({Data}) => {
  return (
    <>{
        Data.map((link,i)=>{
            return <img src={link} key={i} alt='xyz'/>
        })
    }
    </>
  )
}

export default Photos