import React from 'react'
import img1 from '../images/Anthology.png'

export default function SearchBar() {

  const buttonClick=()=>{
    console.log("This is search Bar")
  }
return(
<form className="form-inline ml-3 mt-3 mb-3">
  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
  <button className="btn btn-outline-success btn-rounded btn-sm my-10 mr-sm-2" type="submit" style={{color:'green'}} onClick={()=>buttonClick}>Search</button>
  <button type="button" className="btn btn-danger btn-rounded btn-sm my-0">Clear</button>
</form>
)
}