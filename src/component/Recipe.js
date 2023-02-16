import React from 'react'
import './Recipe.css'

function Recipe({title, calories, image}) {
  return (
        <>
        <div className='product'>
    
        <p className='title'>{title}</p>
        <p className='product'>{calories}</p>
        <img src={image} alt='' />
      
    </div>
        </>




    
  )
}

export default Recipe
