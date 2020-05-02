import React, { Component } from 'react';
import Layout from './../layouts/MainLayout';
import Loading from './../components/loading';
import Link from 'next/link';
import $ from 'jquery';
import SideNav from './../layouts/SideNav';
import SignUp from './../components/signup';
import {NavLink,wesitename,filteritemUrl,myProfileUrl,myshopmUrl,myoderUrl} from './../constant/main';
import Cookie from "js-cookie";
import Filter from './filterItem'
import Router from 'next/router';

const NavBar=(props)=>{
    return(
        <div>
        <nav className="navbar navbar-expand-md">
       
        { props.sidenavconst.visible?<button onClick={props.showsidebar.bind(this)} type="button" className="btn btn-sm btn-primary font1">{props.sidenavconst.topiclink}</button>:<a className="navbar-brand font7 fontsizeE1" href="/">{wesitename}</a>}
  
        
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            {NavLink.map((x,i)=>
                <Link key={i} href={x.url}><a className="nav-link nav-link-main active font1 fontsizeE-9 pointer" >{x.urlname}</a></Link>
                )}
            {props.state.isuserlogin&&props.state.user.isseller?
             <Link  href={`${myProfileUrl}?id=${props.state.isuserlogin?props.state.user._id:''}`}><a className="nav-link nav-link-main active font1 isuserlogin"  >my-shops</a></Link>
               :null
                }
                <a className="nav-link nav-link-main active font1 fontsizeE-9 pointer" onClick={props.showsignup.bind(this)} >sign-in/out</a>
               
                <Link  href={`${myoderUrl}`}><a className="nav-link nav-link-main active font1 isuserlogin"  ><img src="https://img.icons8.com/pastel-glyph/30/ffffff/shopping-cart--v2.png"/></a></Link>
                
                <a  className="nav-link nav-link-main active font1 pointer fontsizeE-9 search-icon" onClick={props.showfilter.bind(this)} ><img src="https://img.icons8.com/pastel-glyph/30/ffffff/search--v2.png"/></a>
               
               
            
                
         </div>
                
          </div>
          {props.state.isuserlogin? <a className="logo-link nav-link nav-link-main active font1" href="#">{props.state.user.givenName} </a>:
        <a className="navbar-brand font7 all-link fontsizeE1" href="#">{wesitename}</a>
            }
            {props.state.isuserlogin?<img className="float-left avatar" src={props.state.user.imageUrl} />:null}    
        </nav>
        <div className="load" >
            <Loading />
            </div>

        <style jsx>
                {`
                  .avatar {
                    vertical-align: middle;
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                  }
                .subnav {
                    z-index : 100;
                  
                }
                .navbar-nav{
                    padding-left : 100px;
                }
              
                .navbar-nav a {
                    color : white;
                    
                }
                .navbar-nav a:hover {
                    color : gray;
                    
                }
               
                .navbar {
                    z-index : 50;
                    height: 50px;
                    background-color: darkblue;
                    border: none;
                    color: white;
                    transition: background-color 2s ease 0s;
                    
               }
            
               .togglemenuC{
                display:none
               }
               .sticky {
                position: -webkit-sticky;
                width :100%;
                position: fixed;
                top: 0;
              }
               .all-link{
                   display:none;
               }
               
                `}
            </style>
           
    </div>
    )
}


const MobileNavBar=(props)=>{

    const show=()=>{
        if($('#collapsibleNavbar').is(":visible")){
            $('#collapsibleNavbar').slideUp(500);
        }else{
            $('#collapsibleNavbar').slideDown(500);
        }
    }

    return(
        <div>
            <div className="mobile-nav">
            <nav className="navbar navbar-expand-lg ">
            <span className="navbar-brand">
            {props.state.isuserlogin?<img className="float-left avatar" src={props.state.user.imageUrl} />:null} 
            &nbsp;{ props.sidenavconst.visible?<button onClick={props.showsidebar.bind(this)} type="button" className="btn btn-sm btn-primary font1 fontsizeE-7">{props.sidenavconst.topiclink}</button>:<a className="font7 fontsizeE1" href="/">{wesitename}</a>}
            &nbsp; <a className=" font1 pointer" onClick={props.showfilter.bind(this)} ><img src="https://img.icons8.com/pastel-glyph/25/ffffff/search--v2.png"/></a>
            
            {props.state.isuserlogin&&props.state.user.isseller?
             <Link  href={`${myProfileUrl}?id=${props.state.isuserlogin?props.state.user._id:''}`}><a className="font1 fontsizeE-7 isuserlogin"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://img.icons8.com/material-rounded/25/ffffff/shop.png"/></a></Link>
               :null
                }

            </span>
           
            <button className="navbar-toggler" type="button"  onClick={show} >
                <img src="https://img.icons8.com/ios/30/ffffff/menu.png"/>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                {NavLink.map((x,i)=>
                <Link key={i} href={x.url}><a className="nav-link  active font1 fontsizeE-9 pointer" onClick={show} >{x.urlname}</a></Link>
                )}
               
                <Link  href={`${myoderUrl}`}><a className="nav-link nav-link-main active font1 isuserlogin"  ><img onClick={show} src="https://img.icons8.com/pastel-glyph/20/ffffff/shopping-cart--v2.png"/></a></Link>
                <a className="nav-link  active font1 fontsizeE-9 pointer" onClick={props.showsignup.bind(this) } >sign-in/out</a>
                {props.state.isuserlogin&&props.state.user.isseller?
             <Link  href={`${myProfileUrl}?id=${props.state.isuserlogin?props.state.user._id:''}`}><a className="nav-link nav-link-main active font1 isuserlogin" onClick={show} >my-shops</a></Link>
               :null
                }
                </ul>
            </div>  
            </nav>
            <div className="load" >
            <Loading />
            </div>
            </div>
         <style jsx>
         {`
         .avatar {
            vertical-align: middle;
            width: 30px;
            height: 30px;
            border-radius: 50%;
          }
         .navbar{
            background-color: darkblue;
            background-image: linear-gradient( darkblue,transparent);
         }
         .nav-link{
             color:white;
             padding-left : 10px;
             background-image: linear-gradient( #0b4286,darkblue);
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
        user:{}

  }
	}

    //side nav bar open
    showsidebar(){
        this.refs.sidenav.showSidebar();
      }
    //show signup
      showsignup(){
          $('.filter-item').hide()  
        this.refs.signup.showsignup();
      }

    //showfilter
    showfilter(){
        if($('.filter-item').is(":visible")){
            $('.filter-item').slideUp(1000) 
        }
        else{
          
            $('.filter-item').slideDown(1000)  
        }
    }
    
    componentDidMount(){
        $('.filter-item').hide();
        $('.load').hide();
        $('.show-fixed-bar').hide();

        if(Router.query.signin=='true'){
            this.showsignup();
            }

        this.setState({
            user : Cookie.getJSON('user'),
            isuserlogin : Cookie.getJSON('user')?true:false
        })

        $(document).ready(function() {

            //nav-bar
            $('.search-icon').hover(function () {
     
                $('.filter-item').slideDown(1000);
            }, function () {
               // $('.filter-item').slideUp(1000);
            });
           
          
            // Transition effect for navbar 
            $(window).scroll(function() {
              // checks if window is scrolled more than 500px, adds/removes solid class
              if($(window).width()>600 && $(this).scrollTop() >  $(window).width()/6) { 
                  $('.sub1nav').removeClass('sticky-top');
                  $('.show-fixed-bar').slideDown(200);
              }
              else {
                  $('.sub1nav').addClass('sticky-top');
                  $('.show-fixed-bar').slideUp(100);
              }
             
            });
        
    });
    }

    

    render() { 
        
          return ( 
            <Layout>
            {this.props.sidenavconst.visible ?<SideNav ref="sidenav"  sidenavconst={this.props.sidenavconst}/>:null}

            <SignUp ref="signup" showsignup={this.props.showsignup} />
            <div className="subnav" >
         
            <div className="ismobile_disable fixed show-fixed-bar">
            <NavBar state={this.state} showsignup={this.showsignup.bind(this)} showfilter={this.showfilter} showsidebar={this.showsidebar.bind(this)} sidenavconst={this.props.sidenavconst} />        
            </div>

            <div className="ismobile_disable">
            <NavBar state={this.state} showsignup={this.showsignup.bind(this)} showfilter={this.showfilter} showsidebar={this.showsidebar.bind(this)} sidenavconst={this.props.sidenavconst} />
        
            </div>

            <div className="isdesktop_disable">
            <MobileNavBar state={this.state} showsignup={this.showsignup.bind(this)} showfilter={this.showfilter} showsidebar={this.showsidebar.bind(this)} sidenavconst={this.props.sidenavconst}  />
            </div>

            <div className="filter-item" >
            <Filter searchitem={this.props.searchitem}/>

            </div>
            </div>
            <style jsx>{
                `.subnav {
                    z-index : 100;
                  
                }
                .fixed {
                    position: -webkit-sticky;
                    width :100%;
                    position: fixed;
                    top: 0;
                    z-index:50;
                  }
                `
            }</style>
           </Layout>
           );
      }
    
}

export default Index; 
