import React, { Component } from 'react';
import Router from 'next/router';
import Layout from './../layouts/MainLayout';
import {Url} from './../constant/main';
import $ from 'jquery';
import FacebookLogin from 'react-facebook-login';
class Index extends Component {

    constructor(){
        super();
        this.state={
 
        }
    }



    componentDidMount(){

    }

    
    render() { 
        const responseFacebook = (response) => {
            console.log(response);
          }

          return ( 
           <Layout>
            {/**<FacebookLogin
    appId="639750616597961"
    autoLoad={true}
    fields="name,email,picture"
    callback={responseFacebook}
    cssClassnaclassName="my-facebook-button-class"
    icon="fa-facebook"
  /> */} 
  <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Right-aligned menu  Right-aligned menu
  </button>
<div className="btn-group">
  <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   <img src="https://img.icons8.com/ios-filled/20/ffffff/appointment-reminders.png"/>
   <span className="notificationCount">5</span>
  </button>
  <div className="dropdown-menu dropdown-menu-right notification">


  <div className="alert row rownotication col-12 notificationmsg">
        <div className="d-flex bd-highlight">
        <div className="p-1 bd-highlight"> <img src="./form1.jpg" alt="Avatar" className="avatar float-left"/></div>
        <div className="p-1 flex-grow-1 bd-highlight"> 
          <span className=" topicColor fontsizeE-8 font1 float-left p-0 content"> you have one orde</span>
          <span className=" fontsizeE-6 float-right footercontent"> chanaka sanjeewa - 2018-4-15 </span>
          </div>
        <div className="py-1 px-0 bd-highlight"><span aria-hidden="true" className="fontsizeE-8 font1 float-right"><i data-dismiss="alert" aria-label="Close">x</i></span></div>
    </div>
</div>

  <div className="row rownotication col-12 notificationmsg">
        <div className="d-flex bd-highlight">
        <div className="p-1 bd-highlight"> <img src="./form1.jpg" alt="Avatar" className="avatar float-left"/></div>
        <div className="p-1 flex-grow-1 bd-highlight"> 
          <span className=" topicColor fontsizeE-8 font1 float-left p-0 content"> you have one order you have one order</span>
          <span className=" fontsizeE-6 float-right footercontent"> chanaka sanjeewa - 2018-4-15 </span>
          </div>
        <div className="py-1 px-0 bd-highlight"><span aria-hidden="true" className="fontsizeE-8 font1 float-right"><i data-dismiss="alert" aria-label="Close">x</i></span></div>
    </div>
</div>

  <div className="row rownotication col-12 notificationmsg">
        <div className="d-flex bd-highlight">
        <div className="p-1 bd-highlight"></div>
        <div className="p-1 flex-grow-1 bd-highlight"> 
          <span className=" topicColor fontsizeE-8 font1 float-left p-0 content"> you have one order you have one order</span>
          <span className=" fontsizeE-6 float-right footercontent"> chanaka sanjeewa - 2018-4-15 </span>
          </div>
        <div className="py-1 px-0 bd-highlight"><span aria-hidden="true" className="fontsizeE-8 font1 float-right"><i data-dismiss="alert" aria-label="Close">x</i></span></div>
    </div>
</div>

    
    </div>
</div>

<style jsx>
{`
.rownotication{
    margin : 0;
}
.notification{
    width:250px;
    
}
.notificationmsg{
    padding: 0 5px 0 5px;;
    marging:0;
    border-bottom: 1px solid #ececec;
}
.avatar {
    vertical-align: middle;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
.content{
    padding:0;
    marging:0;
}
.footercontent{
    padding:0;
    marging:0;
}
.notificationCount{
    color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #01567e;
	cursor: pointer;
	font-size: 0.6rem;
	width: 1.5rem;
	height: 1.5rem;
	top: 0rem;
	right: 0rem;
    position: absolute;
    border-radius: 50%;
}
`}
</style>
         
                </Layout>
           );
      }
    
}


export default Index; 
