import React, { Component } from 'react';
import Layout from './../layouts/MainLayout';
import { GoogleLogin } from 'react-google-login';
import SubNavBar from './../layouts/SubNavbar';
import SignUp from './../components/signup';
class Index extends Component {

  componentDidMount= ()=> {
    this.showsignup();
  }
  showsignup(){
    this.refs.signup.showsignup();
  }

 
  
render(){
      //side navbar link
      const sidenavlink = [
        {id:1,link:'/',linkname:'home'},
        {id:1,link:'/menu',linkname:'menu'},

      ];
      
        const sidenavconst = {topic : 'Categeries',topiclink:'All ',sidenavlink:sidenavlink};
  return(
<Layout>
<SubNavBar sidenavconst={sidenavconst}/>

<SignUp ref="signup" showsignup={this.props.showsignup} />

</Layout>
  )
}
 
}



export default Index;