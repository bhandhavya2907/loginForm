import React from 'react';
//import logo from "../../logo.svg"
 
export class Login extends React.Component {

 
render(){

    return(
       <div className="base-container">
    <div className="header"> </div>
    <div className="content">
    <div className="form">
    <div className="form-group">
        <label htmlFor="username">User Name:</label>
        <input type="text" name="username" placeholder="username" /><br></br><br></br>
    </div>
    <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" placeholder="password" /><br></br><br>
        </br>
</div>
</div>
    </div>

    <div className="footer">
    <button type= "button" className="btn"> Login </button>

</div>
</div>

    
    );
}
}

