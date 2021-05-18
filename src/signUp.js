
import React from 'react';
 
import "./style.css";

class Signup extends React.Component {
   constructor(props){
       super(props);
       this.state = {Username: ''}
       this.state = {Email: ''}
       this.state = {Password: ''}
       this.state = {ConfirmPassword: ''}
       this.state = {errors:[]}
      this.handleUserChange = this.handleUserChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleEmailChange=this.handleEmailChange.bind(this);
      this.handleConfirmPasswordChange=this.handleConfirmPasswordChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleUserChange(event) {
      this.setState({
          Username: event.target.value})
  }
  handlePasswordChange(event) {
      this.setState({
          Password: event.target.value})
  }
  handleEmailChange(event) {
    this.setState({
        Email: event.target.value})
}
handleConfirmPasswordChange(event) {
  this.setState({
    ConfirmPassword: event.target.value})
}
      handleSubmit(event) {
        event.preventDefault();  //prevnets deafult action of element from happening

        if (this.validate()) {
                this.props.history.push('/Home')
            }
      }
     validate() {
        let errors = {};
        let isValid = true;

        if (! this.state.Username ) {
            isValid = false;
            errors["Username"] = "Please enter your username."
    
        }
      
      if (!this.state.Email) {
        isValid = false;
        errors["Email"] = "Please enter your Email.";

      }

      if (!this.state.Password) {
        isValid = false;
        errors["Password"] = "Please enter your password.";

      }

      if (!this.state.ConfirmPassword) {
        isValid = false;
        errors["ConfirmPassword"] = "Please Confirm your password.";
      }
        this.setState({
            errors: errors
        });

        return isValid;
      }
      render() {
  
          return ( 
            
                <div className="signUp "><br></br>
              <form onSubmit={this.handleSubmit}>
                <div>
                <label>
                    Signup
                 </label>
                </div><br></br><br></br>
                <div>
                <label>
                    Username:
                    <input  type= "text" value={this.state.Username} placeholder="Enter your Username" name="Username"  onChange={this.handleUserChange} />
                </label>
                <div className="text-danger">{this.state.errors.Username}</div><br></br>
                <label>
                    Email:
                    <input  type= "text" value={this.state.Email} placeholder="Enter your Email" name= "Email" onChange={this.handleEmailChange} />
                </label>
                </div>
                <div className="text-danger">{this.state.errors.Email}</div>
                <div><br></br>
                <label>
                    Password:
                    <input  type= "Password" value={this.state.Password} placeholder="Enter your Password" name="Password"  onChange={this.handlePasswordChange} />
                </label>
                </div><br></br>
                <div className="text-danger">{this.state.errors.Password}</div>
                <div>
                <label>
                    Confirm Password:
                    <input  type= "Password" value={this.state.ConfirmPassword} placeholder="Re-Enter your password" name="ConfirmPassword" onChange={this.handleConfirmPasswordChange } />
                </label>
                </div><br></br>
                <div className="btn">
                <button>Signup</button>
                </div>
                
            </form>
            </div>
         );
    }
  }
  
export default Signup;
