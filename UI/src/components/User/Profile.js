import React, { Component } from "react";
//import logo from '../images/userhome.jpg';
import '../images/bgimage.css';
import './UserHome.css'
import Nav from './nav.js';
import img from '../images/userlogin.jpeg';
const image = {
  backgroundImage: 'url(' + img + ')',
  width: '100%',
  height: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%',
}
const span1 = {
  color: "red"
}
var body;
const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validMobileRegex = RegExp(/^[6-9]{1}[0-9]{9}$/);
export default class Profile extends Component{
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMobileChange = this.handleMobileChange.bind(this);  
        this.handleUpdate = this.handleUpdate.bind(this);
        //this.validateForm = this.validateForm.bind(this);
    
        //
        this.state = {
          // n:false,
          // e:false,
          // m:false,
          name: "",
          email:"",
          mobile:"",
          confirmPassword: "",
          errors: {
            // name: '',
            // email: '',
            // mobile : '',
          }
          
        };
        
    this.state={
      userdetails :[]
    
    }
    
  }
  componentDidMount(){
    console.log(this.state.Id);
    var body = {
      Id: sessionStorage.getItem("Identity"),
    
    }
    console.log("Body"+body.Id);

        const url = "http://localhost:9000/details";
          let headers = new Headers();
      
          headers.append('Content-Type','application/json');
          headers.append('Accept','application/json');
      
          headers.append('Access-Control-Allow-origin',url);
          headers.append('Access-Control-Allow-Credentials','true');
      
          headers.append('POST','GET');
      
          fetch(url, {
            headers:headers,
            method: 'POST',
            body: JSON.stringify(body)
          })
          .then(response => {if(response.ok){
            response.json()
            .then(res=> {
              console.log("Response:"+res)
              this.setState({
                  userdetails : res,
                  name : res.Name,
                  email : res.Email,
                  mobile : res.Mobile

              })          
            })
          }
          
          })
          console.log(body);
             
    } 
    // handleNameChange = event => {
    //   const { name, value } = event.target;
    //   let errors = this.state.errors;
    //   errors.name = 
    //         value.length < 5
    //           ? 'Full Name must be 5 characters long!'
    //           : '';
    //   if(errors.name ===  '')
    //   {
    //         this.setState({n : true});
    //  }
    //   this.setState({errors, [name]: value});
    // }
  
    // handleEmailChange = event => {
    //   const { name, value } = event.target;
    //   let errors = this.state.errors;
    //   errors.email = 
    //         validEmailRegex.test(value)
    //           ? ''
    //           : 'Email is not valid!';
    //   if(errors.email ===  '')
    //     {
    //        this.setState({e : true});
    //    }
    //   this.setState({errors, [name]: value});
    // }
  
    // handleMobileChange = event => {
    //   const { name, value } = event.target;
    //   let errors = this.state.errors;
    //   errors.mobile = 
    //   (validMobileRegex.test(value))
    //     ? ''
    //     : 'Enter a valid phone number!';
    //  if(errors.mobile ===  '')
    //   {
    //       this.setState({m : true});
    //   }
    //   this.setState({errors, [name]: value});
    // }
    handleNameChange = event => {
      this.setState({
        name : event.target.value
      });
      console.log(this.state.name);
    }
    handleEmailChange = event => {
      this.setState({
        email : event.target.value
      });
     
    }
    handleMobileChange = event => {
      this.setState({
        mobile : event.target.value
      });
     
    }
    handleUpdate(event) {
      // window.location.href="/editprofile"
      sessionStorage.setItem("TempUserName",this.state.userdetails.Name)
      sessionStorage.setItem("TempUserEmail",this.state.userdetails.Email)
      sessionStorage.setItem("TempUserMobile",this.state.userdetails.Mobile)
      this.props.history.push("/editprofile");
  //     console.log("sample"+this.state.image);
  //     event.preventDefault();
  //     body = {
  //       Id : sessionStorage.getItem("Identity"),
  //       Name: this.state.name,
  //       Email: this.state.email,
  //       Mobile: this.state.mobile,
        
        
  //     }
  //     console.log(body);
  //     if (this.state.name ===""){
  //       alert('Please select the name')
  //     }
  //     else if(this.state.email ===""){
  //       alert('Please select the email')
  //     }
  //      else if (this.state.mobile ===""){
  //       alert('Please select the mobile')
  //     }
    
  //     else{
  //        const url = "http://localhost:9000/editprofile";
  //        let headers = new Headers();
   
  //        headers.append('Content-Type','application/json');
  //        headers.append('Accept','application/json');
   
  //        headers.append('Access-Control-Allow-origin',url);
  //        headers.append('Access-Control-Allow-Credentials','true');
   
  //        headers.append('GET','POST');
   
  //        fetch(url, {
  //         headers:headers,
  //         method: 'POST',
  //         body: JSON.stringify(body)
  //      })
  //       .then(response => response.json())
  //       .then(contents => {console.log(contents);
  //       // .then(response =>{window.location.href="/Login"});             
  //    })
  //  .catch(()=> console.log("can't access" + url + "response. "))
  //  alert("Details updated successfully!");
  // this.props.history.push("/profile");
  //     }
  
    
    }

    render() {
      // const {errors} = this.state;
        return (
          <div style={image}>
<div className="wrapper">
          <Nav/>
                      
                      <div class="main_content">
                    <center>
                    <br/><br/><br/>
                      <br/><br/><br/><br/>
                      <br/><br/><br/>
                    
                      <div className="auth-wrapper">
                      <div className="auth-inner">
                         
                      <form>
                          <h3>Profile</h3>
                          <div className="form-group">
                              <label>ID:</label>
                              <input type="text" name="email"  className="form-control"   value={this.state.userdetails.Id}
                             />
                               
                          </div>
                          <div className="form-group">
                              <label>Name:</label>
                              <input type="text" name="name"  className="form-control" onChange={this.handleNameChange} value={this.state.userdetails.Name}
                             />
                              {/* <span style={span1} className='error'>{errors.name}</span>  */}
                          </div>
                          <div className="form-group">
                              <label>Email address</label>
                              <input type="email" name="email"  className="form-control" onChange={this.handleEmailChange} value={this.state.userdetails.Email}
                             />
                               {/* <span style={span1} className='error'>{errors.email}</span>  */}
                          </div>
          
                          <div className="form-group">
                              <label>Mobile</label>
                              <input type="phone" name="mobile" className="form-control" onChange={this.handleMobileChange} value={this.state.userdetails.Mobile}
                             />
                               {/* <span style={span1} className='error'>{errors.mobile}</span>  */}
                          </div>
          
                          
          
                          <button type="submit" className="btn btn-primary btn-block" onClick={this.handleUpdate}>Edit Profile</button>          
                      </form>
                      </div>
                      <br/><br/><br/><br/><br/><br/><br/><br/>
                      <br/><br/><br/><br/><br/><br/><br/><br/>
                      <br/><br/><br/><br/><br/><br/><br/><br/>
                      </div>
                      </center>
                      </div>
                     </div>
                      </div>
        );
    }
}
