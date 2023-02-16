import React from 'react'
import './Recipe.css'

function Recipe({title, calories, image}) {
  return (
        <>
        <div className='product'>
         <ul>  
        <img src={image} alt='' />
    
        <p className='title'>{title}</p>
        <p className='product'>{calories}</p>
        </ul> 
      
    </div>
        </>




    
  )
}

export default Recipe
