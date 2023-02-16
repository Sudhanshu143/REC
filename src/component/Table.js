
import React, {useState}from 'react'

import './Table.css'

function Table() {
    const openBox = ()=> {
        alert ("name");




    }
  return (

     
  
        
    
   <>
  
    <div className='box'>
    <button type="button" class="btn btn-primary mx-2  "onClick={openBox}>Columns</button>
    <button type="button" class="btn btn-secondary mx-2 ">Filter</button>
    <button type="button" class="btn btn-success mx-2 ">Export</button>
    
        
        
       
        <div className='comp'>
        <table class="table table-striped ">
  <thead>
    <tr>
      <th  scope="col"  >Serial</th>
      <th className= "border border-5 .me-1" scope="col">First</th>
      
      <th  scope="col">Last</th>
      <th className= 'table-dark mx-2' scope="col">Eamil</th>
      <th   scope="col">Contact No</th>
      <th className= 'table-dark mx-2' scope="col">Country</th>
      <th scope="col">Com</th>
      <th className= 'table-dark mx-2' scope="col">Qualifaction</th>
      <th scope="col">Subject</th>
      <th className= 'table-dark mx-2' scope="col">Garde</th>
      <th scope="col">Male</th>
      <th className= 'table-dark mx-2' scope="col">Female</th>
    </tr>
  </thead>
  
  <tbody>
    <tr>
      <td >1</td>
      <td>Madhup</td>
      <td>Kaumar</td>
      <td>madycomm235q23@gmail.com</td>
      <td>madycomm235q23@gmail.com</td>
      
      <td>india</td>
      <td>nil</td>
      <td>diploma</td>
      <td >machinical</td>
      <td>First</td>
      <td>male</td>
      <td>nil</td>
    </tr>
    </tbody>
   

    
</table>

</div>
 
       </div>
       
       </>
  )
}

export default Table