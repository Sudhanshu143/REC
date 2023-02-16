import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Recipe from './Recipe'
import './Recipe.css'



function Navebar() {
 const APP_ID = "323c4ee8"
 const APP_KEY = "022beeff2826fc6b6f786dfbeb54faf2"
 const [recipes, setRecipes] = useState ([])
 const [search, setSearch] = useState ('')
  const [query, setQuery] = useState('banana')
  useEffect (() =>{
    getRecipe();
  }, [query])
  const getRecipe = async() => {
    const response = await axios.get (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    setRecipes(response.data.hits)
    console.log(response.data.hits)
  };
  const updateSearch = (e) => {
    setSearch(e.target.value);
    
  }
  const updateQuary = (e) => {
    e.preventDefault();
    setQuery (search)
    setSearch('')
  };
  return (
    <div className='nev'>
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
          
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Login</a>
          
        </li>
        
        
      </ul>
      <div className='search'>
          <form className="d-flex" role="search" onSubmit={updateQuary}>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={updateSearch}/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          
      </div> 
      
         
      
      
    </div>
  </div>
</nav>

        </>
        {recipes.map((recipe) =>(
      <Recipe title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image}  />
    ))}
       
    </div>
   

    
  )
}

export default Navebar