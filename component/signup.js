import React, { Component } from 'react';
import Router from 'next/router';
import { GoogleLogin } from 'react-google-login';
import $ from 'jquery';
import fetch from 'isomorphic-unfetch';
import Cookie from "js-cookie";
import FacebookLogin from 'react-facebook-login';
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
            token:'',
            isseller:true,
            login:false
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
    if(evt.target.name=='isseller'){
        this.setState({
            [evt.target.name]: true,
        });
    }
    else{
        this.setState({
            [evt.target.name]: evt.target.value,
        });
    }
        
    };

  responseGoogle = (response) => {
    
    if(this.state.isseller==true){
        if(this.state.address.length>2&&this.state.contact.length>2){
            this.setState({
                ...response.profileObj,
                token:response.tokenId
            });
            this.handleSubmit();
        }
        else{
            swal("Add city and contact", "if you need seller account, you should complete city and contact number","warning")
        }
      
    }
    else{
        this.setState({
            ...response.profileObj,
            token:response.tokenId
        });
        this.handleSubmit();
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
            .then(data => { if(data.status==200){Cookie.set('user',data);swal("login Success", "You are join with onshop.lk again, Thank you.", "success");}else{swal("Sorry!", data.msg, "error");}})
            .catch(error => console.log(error))
           
            
        
  }

  handleSubmit = () => {
    this.hidesignup(); 
  //  evt.preventDefault();
    const datas = new FormData();
   // datas.append('file', this.state.selectedFile);
   if(this.state.email&&this.state.email.length>2){
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
     .then(data => { if(data.status==200){Cookie.set('user',data);swal("Success sign up", "You are join with onshop.lk, Thank you.", "success");}else{swal("Sorry!", data.msg, "error");}})
     .catch(error => console.log(error))
   }
  
    

};


  showsignup=(x)=>{
    $('#background-signin').show();
    $('#logreg-forms').hide();
    $('#logreg-forms').slideDown(500);
    if(x=='seller'){
        this.setState({
            isseller:true,
            login:false
        })
    }
    else if(x=='login'){
        this.setState({
            isseller:false,
            login:true
        });
        $('#loginTab').addClass('show active');
        $('#signupTab').removeClass('show active');
    }
  }

  hidesignup=()=>{
    $('#logreg-forms').slideUp(500,function(){
        $('#background-signin').hide(); 
     });
        
  }
  signOut=()=>{
      if(confirm('Are you sure, do you need to sign out from onshop.lk')){
        Cookie.remove('user');
        Router.reload();
      }
  }
  
  signupwithfb=(res)=>{
    this.setState({
        name:res.name,
        email:res.email?res.email:res.userID,
        imageUrl:res.picture?res.picture.data.url:'',
        googleId:res.userID,
        givenName:res.name,
        token:res.accessToken
        

    });
    if(this.state.isseller==true){
        if(this.state.address.length>2&&this.state.contact.length>2){
            this.handleSubmit();
        }
        else{
            swal("Add city and contact", "if you need seller account, you should complete city and contact number","warning")
   
        }
      
    }
    else{
        this.handleSubmit();
    }


  }

  responsefacebook = (res) => {
    this.setState({
        name:res.name,
        email:res.email?res.email:res.userID,
        imageUrl:res.picture?res.picture.data.url:'',
        googleId:res.userID,
        givenName:res.name,
        token:res.accessToken

    });
    const datas = new FormData();
    datas.append('jsonbody', JSON.stringify(this.state));
    datas.append('token', this.state.token);
    fetch('/api/signinuser', {
       method: 'POST',
       headers: {
       }, 
       body:datas,
   
       }
       
       )
       .then(response => {return response.json(); } )
       .then(data => { if(data.status==200){Cookie.set('user',data);swal("Success sign up", "You are join with onshop.lk, Thank you.", "success");}else{swal("Sorry!", data.msg, "error");}})
       .catch(error => console.log(error))
  }

render(){

  return(
<div>

<div id="background-signin">
<br/><br/>

    <div id="logreg-forms" className="col-lg-4 col-md-8 col-sm-12">
        	<div className="bor10 m-t-50 p-b-5">

				{/** Tab01 */}
				<div className="tab01">
                <div className="popup-close">x</div>
					{/** Nav tabs */}
					<ul className="nav nav-tabs" role="tablist">
						<li className="nav-item p-b-10">
							<a className="nav-link p-1" data-toggle="tab" href="#loginTab" style={{color:'black'}}  role="tab">Login</a>
						</li>

						<li className="nav-item p-b-10">
							<a className="nav-link p-1 active" data-toggle="tab" href="#signupTab" style={{color:'black'}} role="tab">Sign Up</a>
						</li>
					</ul>

					{/** Tab panes */}
					<div className="tab-content">
						{/** - */}
						<div className="tab-pane fade" id="loginTab" role="tabpanel">
                        <h2 className="h3 mb-3 pl-2 font1 topicColor fontsizeE1" > Login</h2>
                        <div className="social-login row col-12 fontsizeE-9">
                 <GoogleLogin
                    clientId="511880674901-gfn6v2n1ej65rrlnnv29odgbjkpkhpcj.apps.googleusercontent.com"
                    buttonText="login with Google+"
                    onSuccess={this.responseGoogleSignIn}
                    onFailure={this.responseGoogleSignIn}
                    cookiePolicy={'single_host_origin'}
                    className="bg-danger text-light btn google-btn social-btn col-lg-6 col-sm-12"
                    isSignedIn={false}
                    />
                    {/*<button className="btn social-btn col-lg-6 col-sm-12 fontsizeE-9" onClick={this.signOut} type="button"><span><img className="google-icon" width="15px" height="15px" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/> Sign out from google+</span> </button>*/}
                    <div className="facebook-btn col-lg-6 col-sm-12 ">
                    <FacebookLogin
                    appId="639750616597961"
                    fields="name,email,picture"
                    callback={this.responsefacebook}
                    cssClass="btn text text-light fontsizeE1 col-12"
                    textButton=" login with facebook"
                    icon="fa-facebook"
                    //redirectUri="https://onshop.lk"
                    disableMobileRedirect={true}
                />
                </div>
              
            </div>

            <small id="emailHelp" className="form-text text-muted fontsizeE-7">If you have account sign in now, or you can sign out from your account. </small>
           
						</div>

						{/** - */}
						<div className="tab-pane fade show active" id="signupTab" role="tabpanel">
                        <h2 className="h3 mb-3 font1 topicColor fontsizeE1 pl-2" > Sign up</h2>
                        <form>
            {/*<div className="form-check">
                <input type="checkbox" className="form-check-input" name="isseller" value={this.state.isseller} onChange={this.handleChange} />
                <label className="form-check-label"  className="font1 fontsizeE-9">Seller Account</label>
  </div>*/}
        
                <div className="col-lg-12">
                        <label className="stext-111 pl-2">Your city</label>
						<div className="bor8 m-b-20 how-pos4-parent">
							<input className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" type="text" name="address" placeholder="ex: Nugegoda" value={this.state.address} onChange={this.handleChange}/>
							<i className="how-pos4 pointer-non zmdi zmdi-pin"></i>
						</div>
                        </div>

            
              <div className="col-lg-12">
              <label className="stext-111 pl-2">Phone Number</label>
              <div className="bor8 m-b-20 how-pos4-parent">
                  <input className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" type="text" placeholder="071x1234567" name="contact" value={this.state.contact} onChange={this.handleChange}/>
                  <i className="how-pos4 pointer-non zmdi zmdi-phone"></i>
              </div>
              </div>
            
                    
            <small id="emailHelp" className="form-text text-muted fontsizeE-7">If you register as seller, you should provide city and contact. Otherwise that are not compulsory.</small>
           <div className="social-login row col-12 fontsizeE-9">
                  <GoogleLogin
                    clientId="511880674901-gfn6v2n1ej65rrlnnv29odgbjkpkhpcj.apps.googleusercontent.com"
                    buttonText="Sign up with Google+"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    className="btn bg-danger text-light social-btn col-lg-6 col-sm-12"
                    isSignedIn={false}
                    />
                    <div className="facebook-btn col-lg-6 col-sm-12">
                    <FacebookLogin
                    appId="639750616597961"
                    fields="name,email,picture"
                    callback={this.signupwithfb}
                    cssClass="btn text text-light fontsizeE1 col-12"
                    textButton=" sign up with facebook"
                    icon="fa-facebook"
                    disableMobileRedirect={true}
                    //redirectUri="https://onshop.lk"
                />
                </div>
              
            </div>
            <small id="emailHelp" className="form-text text-muted fontsizeE-7">If you have aleady account, acount details will be update.</small>
           
            </form>
            
						</div>

					</div>
				</div>
			</div>
		
    
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
    overflow:auto;

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
      padding: 2px;
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
      color:gray;
      font-size: 0.9rem;
      background: #d13618;
      width:100%;
      box-shadow: 0 7px 7px rgba(0, 0, 0, 0.12), 0 10px 20px rgba(0,0,0,0.24);
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
  
  .facebook-btn{  background:#3C589C; padding: 5px}
  
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

</div>
  )
}
 
}



export default Index;