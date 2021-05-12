import React from 'react';
import loginImg from "../../login.svg"
//import logo from "../../logo.svg"

export class Login extends React.Component {

    constructor() {
        super();
        this.state = {password: "", username:"", errors: {}};
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleUserChange(event) {
        this.setState({
            username: event.target.value})
    }
    handlePasswordChange(event) {
        this.setState({
            password: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();  //prevnets deafult action of element from happening

        if (this.validate()) {

            alert('Form is submitted');
        }

        else{
            alert('Please enter correct Login details');
        }
    }
    validate() {
        let input = this.state.input;
        let errors = {};
        let isValid = true;

        if (! this.state.username ) {
            isValid = false;
            errors["username"] = "Please enter your username."
    
        }

      if (!this.state.password) {
        isValid = false;
        errors["password"] = "Please enter your password.";

      }
        this.setState({
            errors: errors
        });

        return isValid;
    }
    render() {

        return (


            <div className="base-container">
                <div className="header"> <h3>Login Page</h3></div><br></br><br></br>
                <div className="content">
                    <div className="image">
                        <img src={loginImg} alt="Beautiful" /></div><br></br>
                    <div>
                        <br></br><br></br>
                        <form onSubmit={this.handleSubmit}>
                            <label htmlFor="username">User Name</label>
                            <input type="text" name="username" placeholder="Enter username" value={this.state.username}
                                onChange={this.handleUserChange} /><br></br>
                            <div className="text-danger">{this.state.errors.username}</div><br></br><br></br>



                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="Enter password" value={this.state.password}
                                onChange={this.handlePasswordChange} /><br></br>
                            <div className="text-danger">{this.state.errors.password}</div>

                            <br></br><br></br>



                            <input type="submit" value="Submit" />

                        </form>
                    </div>

                </div>
            </div>

        );
    }
}

