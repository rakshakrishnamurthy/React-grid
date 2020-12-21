import React from 'react'
import img from '../images/rss-24.png'
import img1 from '../images/Anthology.png'
export default function Footer() {
  return (
  <div>
<footer className="bg-light text-center text-lg-start">
  <div className="container p-4">
  <div className="mt-0">
    <a className="text-dark" > <img  src={img1} alt="logo" style={{height:'50px'}} className="float-left"></img></a>
    </div>
  <div className="text-center p-3">
    © 2020 Anthology Inc
   
  </div>
  </div>
</footer>
</div>
  )
}

