import React from 'react';
//import logo from "../../logo.svg"
import loginImg from "../../login.svg";
 
export class Register extends React.Component {

render(){

    return(
       <div className="base-container">
    <div className="header"> </div>
    <div className="content">  
    <div className="image">
            <img src={ loginImg }  alt= "Beautiful"/>
          </div> 
    <div className="form">
    <div className="form-group">
        <label htmlFor="username">User Name</label>
        <input type="text" name="username" placeholder="username" />
    </div>
    <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="email" />
    </div>
    <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="password" />
</div>
</div>
    </div>

    <div className="footer">
    <input type="submit"  value="Submit"> </input>

</div>
</div>

    
    );
}
}

