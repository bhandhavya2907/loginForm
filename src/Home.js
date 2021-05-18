
import React from "react";
import "./style.css";
import { Link } from 'react-router-dom';
function Home(props){
 
    return (
      <div
      style={{
        backgroundImage: `url("http://pavbca.com/walldb/original/9/4/8/573662.jpg")`,
        backgroundRepeat: "no-repeat",
        width: "1470px",
        height: "900px",
        color: "black",
      }}
    >
   
     
      <nav>

      <ul className="bg_iamge">
      <Link to="/About" style= {{textDecoration:'none',color:'purple'}}>
          <li >About us</li>
          </Link>
          <Link to="/Tops" style= {{textDecoration:'none',color:'purple'}}>
          <li >Tops</li>
          </Link>
          <Link to="/Bottoms" style= {{textDecoration:'none',color:'purple'}}>
          <li >Bottoms</li>
          </Link>
          <Link to="/Arrivals" style= {{textDecoration:'none',color:'purple'}}>
          <li >New</li>
          </Link>
          <Link to="/Others" style= {{textDecoration:'none',color:'purple'}}>
          <li >Others</li>
          </Link>
          <Link to="/signUp" style= {{textDecoration:'none',color:'purple'}}>
          <li >Sign up</li>
          </Link>
          <Link to="/login" style= {{textDecoration:'none',color:'purple'}}>
          <li >Login</li>
          </Link>
        </ul>
        </nav>
      
      </div>
        
    );

  }


export default Home;

