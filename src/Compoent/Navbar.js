import React from 'react'
 export default function Navbar(props){
   let myStyle={
     color:'white',
     backgroundColor:'black'
   }
  
 return(
   <>
      <div className="container" style={myStyle}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    </nav>
</div>
   </>
  

 )
 }
