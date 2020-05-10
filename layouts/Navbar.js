import React, { Component } from 'react';
import Layout from './../layouts/MainLayout';
import Link from 'next/link';
import $ from 'jquery';
import SignUp from './../components/signup';
import {Url,NavLink,wesitename,myProfileUrl,myshopmUrl,myoderUrl,createshopUrl} from './../constant/main';
import Cookie from "js-cookie";
import Router from 'next/router';




const Notfication=(props)=>{

   const deletenotification=(id)=>{
    fetch(`${Url}deletenotification/${id}`);
  //  props.loadnotifications.bind(this);
    }
  
    return(
        <div className="dropdown-menu dropdown-menu-notification notification">
        
        {props.notfication.map((x,i)=>
  
        <div key={i} className="row rownotication col-12 notificationmsg alert">
            <div className="d-flex bd-highlight">
            <div className="p-1 bd-highlight"> {x.imageUrl?<img src={x.imageUrl} alt="Avatar" className="avatar float-left"/>:null}</div>
            <div className="p-1 flex-grow-1 bd-highlight">
            <Link href={x.link?x.link:'#'}>
            <a className=" topicColor fontsizeE-8 font1 float-left p-0 content pointer" onClick={deletenotification.bind(this,x._id)}> {x.content}</a>
            </Link>
            <span className=" fontsizeE-6 float-right footercontent"> {x.name} </span>
            </div>
            <div onClick={deletenotification.bind(this,x._id)} className="py-1 px-0 bd-highlight pointer"><span aria-hidden="true" className="fontsizeE-8 font1 float-right"><i data-dismiss="alert" aria-label="Close">x</i></span></div>
        </div>
        </div>
        )}

      <style jsx>
          {`
                    .notification{
                        width:250px;
                        border-radius:  0 0 10px 10px;
                        background : #b5c6d9f0;
                        overflow: auto;
                        margin-left : -100px;
                        
                    }
                    .rownotication{
                        margin : 0;
                    }
                    .notificationmsg{
                        width:248px;
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
                 
          `}
      </style>
          
          </div>
                     

    )
}

class Index extends Component {

    constructor() {
		super();
		this.state = {
        isuserlogin:false,
        user:{},
        notfication:[],
        notficationcount :0

  }
	}
        //show signup
        showsignup(){
            this.refs.signup.showsignup();
          }

    loadnotifications=()=>{

        fetch(`${Url}notifications/${Cookie.getJSON('user')._id}`)
        .then(res=>{ return res.json()})
        .then(data => { this.setState({notfication:data,notficationcount:data.length});})
    }
    

    componentDidMount(){

        if(Cookie.getJSON('user')){
            this.loadnotifications()
        }

        if(Router.query.signin=='true'){
        this.showsignup();
        }
        

        this.setState({
            user : Cookie.getJSON('user'),
            isuserlogin : Cookie.getJSON('user')?true:false
        })
        $(document).ready(function() {

            $('.togglemenuC').click(function(){
                    $('div.navbar-collapse').removeClass('show');
                    $('.menuClose').fadeOut(10);
                    $('.menuOpen').fadeIn(100);
                 
            });
            $('.togglemenuO').click(function(){
                $('.menuOpen').fadeOut(10);
                $('.menuClose').fadeIn(100);
             
            });
          
            // Transition effect for navbar 
            $(window).scroll(function() {
              // checks if window is scrolled more than 500px, adds/removes solid class
              if($(this).scrollTop() > $(window).height()/3) { 
                  $('.navbar').addClass('SolidNav').removeClass('navbar-bar');
              }
              else {
                  $('.navbar').removeClass('SolidNav').addClass('navbar-bar');
              }
             
            });
            
            function checkMobile() {
                var windowwidth = $(window).width();

                if(windowwidth<600){
                    $('.nav-link-main').css({'background-color':'#03468f','opacity':'0.9','padding-left':'20px'});

                    $(window).scroll(function() {
                        if($(this).scrollTop() > $(window).height()/4) { 
                            $('.nav-link-main').css({'background-color':'darkblue','opacity':'0.9','padding-left':'20px'});
                        }else{
                            $('.nav-link-main').css({'background-color':'#03468f','opacity':'0.9','padding-left':'20px'});
                        }
                        
                      });
                }
                  
               
            }
            checkMobile();
            $(window).resize(checkMobile);
    });
    }

    show(){
        if($('#collapsibleNavbar').is(":visible")){
            $('#collapsibleNavbar').slideUp(500);
        }else{
            $('#collapsibleNavbar').slideDown(500);
        }
    }
    logout(){
        if(confirm('do you need log out from onshop.lk.')){
            Cookie.remove('user');
            Router.reload();
        }
        
    }

     shownotification=()=>{
        if($('.dropdown-menu-notification').is(":visible")){
            $('.dropdown-menu-notification').slideUp(500) 
        }
        else{
          
            $('.dropdown-menu-notification').slideDown(500)  
        }
    }

    render() { 
        
          return ( 
            <Layout>
            <div className="mainnav" >
            <SignUp ref="signup" showsignup={this.props.showsignup} />
            <nav className="navbar-bar navbar fixed navbar-expand-md">

            <span className="navbar-brand isdesktop_disable">
            {this.state.isuserlogin?<img className="float-left avatar" src={this.state.user.imageUrl} />:null}  

            <a className="font7 fontsizeE-8" href="/">&nbsp;{wesitename}</a>


            {this.state.isuserlogin&&this.state.user.isseller?
             <Link  href={`${myProfileUrl}?id=${this.state.isuserlogin?this.state.user._id:''}`}><a className="font1 fontsizeE-7 isuserlogin "  >&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<img src="https://img.icons8.com/material-rounded/20/ffffff/shop.png"/></a></Link>
               : <Link  href={`${createshopUrl}`}><a className="font1 fontsizeE-7 "  >&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<img src="https://img.icons8.com/windows/23/ffffff/add-user-group-man-man.png"/></a></Link>
             
                }

                  {/**notification */}
                  <div className="btn-group">
                <a className="font1" onClick={this.shownotification}>&nbsp;&nbsp;&nbsp;&nbsp;
                <img src="https://img.icons8.com/ios-filled/17/ffffff/appointment-reminders.png"/>
                {this.state.notficationcount>0?<span className="notificationCount"> {this.state.notficationcount}</span>:null}

                </a>
                {this.state.notficationcount>0?<Notfication notfication={this.state.notfication} loadnotifications={this.loadnotifications} />:null}
                
               </div>
                {/**notfication end */}
               

            </span>
            <span className="navbar-brand ismobile_disable">
            <a className="font7 fontsizeE1" href="#">{wesitename}</a>
            </span>

            <button onClick={this.show}  className="navbar-toggler" type="button" data-toggle="collapse" >
            <img src="https://img.icons8.com/ios/20/ffffff/menu.png"/>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <div className="navbar-nav">
                {NavLink.map((x,i)=>
                    <Link key={i} href={x.url} ><a className="nav-link nav-link-main active font1" onClick={this.show} >{x.urlname}</a></Link>
                    )}
                {/* <Link key='100' href='#'><a className="nav-link nav-link-main active font1" onClick={this.showsignup.bind(this)} >signin</a></Link>*/}
               {this.state.isuserlogin&&this.state.user.isseller?
             <Link  href={`${myProfileUrl}?id=${this.state.isuserlogin?this.state.user._id:''}`}><a  onClick={this.show}  className="nav-link nav-link-main active font1 isuserlogin"  >my-shops</a></Link>
               :null
                }
                <Link href={`${myoderUrl}`}><a className="nav-link nav-link-main active font1"  onClick={this.show}  >my-cart-<img src="https://img.icons8.com/pastel-glyph/20/ffffff/shopping-cart--v2.png"/></a></Link>
                <a className="nav-link nav-link-main active font1 isnotuserlogin" onClick={this.showsignup.bind(this) }  >log-in</a>
                <a className="nav-link nav-link-main active font1 isuserlogin" onClick={this.logout.bind(this)} >log-out</a>

                {/**notification */}
                <div className="btn-group ismobile_disable">
                <a className="nav-link nav-link-main active font1 isuserlogin" onClick={this.shownotification}>
                <img src="https://img.icons8.com/ios-filled/17/ffffff/appointment-reminders.png"/>
                {this.state.notficationcount>0?<span className="notificationCount"> {this.state.notficationcount}</span>:null}

                </a>
                {this.state.notficationcount>0?<Notfication notfication={this.state.notfication} loadnotifications={this.loadnotifications} />:null}
                
               </div>
                {/**notfication end */}

                     </div>
            
            </div>
            {this.state.isuserlogin? <a className="ismobile_disable logo-link nav-link nav-link-main active font1" href="#">{this.state.user.givenName} </a>:null }
            {this.state.isuserlogin?<img className="ismobile_disable float-left avatar" src={this.state.user.imageUrl} />:null}  
       
            
            </nav>

            
              
            </div>
            
            <style jsx>
                {`
                .notificationCount{
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #ce0c0c;
                    cursor: pointer;
                    font-size: 0.5rem;
                    width: 1.1rem;
                    height: 1.1rem;
                    top: 0rem;
                    right: -0.4rem;
                    position: absolute;
                    border-radius: 50%;
                }

                .avatar {
                    vertical-align: middle;
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                  }
                .mainnav {
                    z-index : 100;
                  
                }
                
                .navbar-nav{
                    padding-left : 100px;
                }
              
                .navbar-nava a {
                    color : white;
                    
                }
                .navbar-nava a:hover {
                    color : gray;
                    
                }
                .nav-link{
                    color:white;
                }
                .navbar-bar {
                    z-index : 100;
                    height: 80px;
                    background-image: linear-gradient( black,transparent);
                    border: none;
                    color: white;
                    transition: background-color,height 2s ease 0s;
               }
                .SolidNav {
                    z-index : 100;
                    height: 50px;
                    background-color: darkblue;
                    border: none;
                    color: white;
                    transition: background-color,height 2s ease 0s;
               }
               .togglemenuC{
                display:none
               }
               .fixed {
                position: -webkit-sticky;
                width :100%;
                position: fixed;
                top: 0;
                z-index:50;
              }
               
                `}
            </style>
                  </Layout>
           );
      }
    
}

export default Index; 
