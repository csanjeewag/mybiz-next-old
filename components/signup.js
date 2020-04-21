import React, { Component } from 'react';
import Router from 'next/router';
import Layout from './../layouts/MainLayout';
import { GoogleLogin } from 'react-google-login';
import $ from 'jquery';
import fetch from 'isomorphic-unfetch';
import Cookie from "js-cookie";
class Index extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            email:'',
            address : '',
            contact : '',
            imageUrl:'',
            googleId:'',
            givenName:'',
            familyName:'',
            token:''
        };
    }


    
  componentDidMount= ()=> {

    $(document).ready(function() {

  
        $('.popup-close').click(function(){

         $('#logreg-forms').slideUp(1000,function(){
            $('#background-signin').hide(); 
         });
        })

  
      });

  }

  handleChange = evt => {
    // This triggers everytime the input is changed
        this.setState({
            [evt.target.name]: evt.target.value,
        });
    };

  responseGoogle = (response) => {

    if(this.state.contact.length>0){
        this.setState({
            ...response.profileObj,
            token:response.tokenId
        });
        this.handleSubmit();
    }
    else{
        alert('There should be contact details.')
    }

  }

  responseGoogleSignIn = (response) => {
    this.hidesignup();  
    var res = null;
        this.setState({
            ...response.profileObj,
            token:response.tokenId
         
        });
        const datas = new FormData();
         datas.append('jsonbody', JSON.stringify(this.state));
         datas.append('token', response.tokenId);
         fetch('/api/signinuser', {
            method: 'POST',
            headers: {
            }, 
            body:datas,
        
            }
            
            )
            .then(response => {return response.json(); } )
            .then(data => { alert(data.msg); if(data.status==200){Cookie.set('user',data); Router.reload();}})
            .catch(error => console.log(error))
           
            
        
  }

  handleSubmit = () => {
    this.hidesignup(); 
  //  evt.preventDefault();
    const datas = new FormData();
   // datas.append('file', this.state.selectedFile);
   if(this.state.email.length>2){
    datas.append('jsonbody', JSON.stringify(this.state));
    fetch('/api/createuser', {
     method: 'POST',
     headers: {
           //'Accept': 'application/json',
          // 'Content-Type': 'application/json',
          //'Content-Type': 'multipart/form-data'
     }, 
     body:datas,
 
     }
     
     )
     .then(response => {return response.json(); } )
     .then(data => { alert(data.msg); if(data.status==200){Cookie.set('user',data);Router.reload();}})
     .catch(error => console.log(error))
   }
  
    

};


  showsignup=()=>{
    $('#background-signin').show();
    $('#logreg-forms').hide();
    $('#logreg-forms').slideDown(1000);

  }

  hidesignup=()=>{
    $('#logreg-forms').slideUp(1000,function(){
        $('#background-signin').hide(); 
     });
        
  }
  
render(){

  return(
<Layout>

<div id="background-signin">


    <div id="logreg-forms" className="col-lg-4 col-md-8 col-sm-12">
    <div className="popup-close">x</div>
            <br/>
            <h3 className="h3 mb-3 font1 topicColor fontsizeE1" > Sign in</h3>
            <div className="social-login row col-12 fontsizeE-9">
                 <GoogleLogin
                    clientId="511880674901-gfn6v2n1ej65rrlnnv29odgbjkpkhpcj.apps.googleusercontent.com"
                    buttonText="Sign in with Google+"
                    onSuccess={this.responseGoogleSignIn}
                    onFailure={this.responseGoogleSignIn}
                    cookiePolicy={'single_host_origin'}
                    className="btn google-btn social-btn col-lg-6 col-sm-12"
                    isSignedIn={false}
                    />
                     <button className="btn facebook-btn social-btn col-lg-6 col-sm-12 fontsizeE-9" type="button"><span><i className="fab fa-facebook-f"></i> Sign in with Facebook</span> </button>
              
            </div>
            <hr/>
            <h3 className="h3 mb-3 font1 topicColor fontsizeE1" > Sign up</h3>
            <form>

            <div className="form-group">
                <label  className="font1 fontsizeE1">address</label>
                <input type="email" className="form-control fontsizeE1" name="address" placeholder="Enter Address" value={this.state.address} onChange={this.handleChange}/>
            </div>
            <div className="form-group">
                <label  className="font1 fontsizeE1">Contact *</label>
                <input type="email" className="form-control fontsizeE1" id="exampleInputAddress" placeholder="Enter Contact *" name="contact" value={this.state.contact} onChange={this.handleChange}/>
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label"  className="font1 fontsizeE-9">Sign up as Seller</label>
            </div>
            <small id="emailHelp" className="form-text text-muted fontsizeE-7">We'll never share your details with anyone else.</small>
            <div className="social-login row col-12 fontsizeE-9">
                  <GoogleLogin
                    clientId="511880674901-gfn6v2n1ej65rrlnnv29odgbjkpkhpcj.apps.googleusercontent.com"
                    buttonText="Sign up with Google+"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    className="btn google-btn social-btn col-lg-6 col-sm-12"
                    isSignedIn={false}
                    />
                     <button className="btn facebook-btn social-btn col-lg-6 col-sm-12 fontsizeE-9" type="button"><span><i className="fab fa-facebook-f"></i> Sign in with Facebook</span> </button>
              
            </div>
            </form>
                </div>
</div>
<style jsx>
{`


.visual-signup {
    transition: transform 1s cubic-bezier(0, 0, 0.3, 1);

}
.popup-close {
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	background: darkred;
	cursor: pointer;
	font-size: 1.0rem;
	width: 2.0rem;
	height: 2.0rem;
	top: 0.5rem;
	right: 0.5rem;
	position: absolute;
	border-radius: 100%;
}
#background-signin{
    width: 100%;
    background: rgba(0,0,0,0.8);
    font-family: "Robato",sans-serif;
    font-size: 1.1em;
    display:none;
    z-index:100;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    

  }
  
  #logreg-forms{
    box-shadow: 0 7px 7px rgba(0, 0, 0, 0.12), 0 12px 40px rgba(0,0,0,0.24);
      margin:10vh auto;
      background-color: lightgray;
      overflow: auto;
      
  }
  
  #logreg-forms form {
      width: 100%;
      
      padding: 15px;
      margin: auto;
  }
  #logreg-forms .form-control {
      position: relative;
      box-sizing: border-box;
      height: auto;
      padding: 10px;
      font-size: 1.1em;
  }
  #logreg-forms .form-control:focus { z-index: 2; }
  #logreg-forms .form-signin input[type="email"] {
      margin-bottom: -1px;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
  }
  #logreg-forms .form-signin input[type="password"] {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
  }
  
  #logreg-forms .social-login{

      margin:0 auto;
      margin-bottom: 14px;
  }
  #logreg-forms .social-btn{
      font-weight: 100;
      color:white;
      font-size: 0.9rem;
  }
  
  #logreg-forms a{
      display: block;
      padding-top:10px;
      color:#fff;
  }
  
  #logreg-form .lines{
      width:200px;
      border:1px solid red;
  }
  
  
  #logreg-forms button[type="submit"]{ margin-top:10px; }
  
  #logreg-forms .facebook-btn{  background-color:#3C589C; }
  
  #logreg-forms .google-btn{ background-color: #DF4B3B;}
  
  #logreg-forms .form-reset, #logreg-forms .form-signup{ display: none; }
  
  #logreg-forms .form-signup .social-btn{ width:210px; }
  
  #logreg-forms .form-signup input { margin-bottom: 2px;}
  
  .form-signup .social-login{
      margin: 0 auto;
  }
  
  .submit{
    background: -webkit-linear-gradient(0deg,  #2dfbff 0%, #3c96ff 100%);
    border-radius: 25px;
    color: #fff;
  }
  
  /* Mobile */
  
  @media screen and (max-width:500px){
      #logreg-forms{
          width:300px;
      }
  
      #logreg-forms  .social-login{
          width:200px;
          margin:0 auto;
          margin-bottom: 10px;
      }
      #logreg-forms  .social-btn{
          font-size: 1.3rem;
          font-weight: 100;
          color:white;
          height: 56px;
  
      }
      #logreg-forms .social-btn:nth-child(1){
          margin-bottom: 5px;
      }
      #logreg-forms .social-btn span{
          display: none;
      }
      #logreg-forms  .facebook-btn:after{
          content:'Facebook';
      }
  
      #logreg-forms  .google-btn:after{
          content:'Google+';
      }

  }
`}
</style>

</Layout>
  )
}
 
}



export default Index;