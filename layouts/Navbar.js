import React, { Component } from 'react';
import Layout from './../layouts/MainLayout';
import Link from 'next/link';
import $ from 'jquery';
import SignUp from './../components/signup';
import {NavLink,wesitename,myProfileUrl,myshopmUrl,myoderUrl} from './../constant/main';
import Cookie from "js-cookie";
import Router from 'next/router';

class Index extends Component {

    constructor() {
		super();
		this.state = {
        isuserlogin:false,
        user:{}

  }
	}
        //show signup
        showsignup(){
            this.refs.signup.showsignup();
          }

    

    componentDidMount(){
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

    render() { 
        
          return ( 
            <Layout>
            <div className="mainnav" >
            <SignUp ref="signup" showsignup={this.props.showsignup} />
            <nav className="navbar-bar navbar fixed navbar-expand-md">

            <span className="navbar-brand isdesktop_disable">
            <a className="font7 fontsizeE1" href="/">{wesitename}</a>
            {this.state.isuserlogin&&this.state.user.isseller?
             <Link  href={`${myProfileUrl}?id=${this.state.isuserlogin?this.state.user._id:''}`}><a className="font1 fontsizeE-7 isuserlogin "  >&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<img src="https://img.icons8.com/material-rounded/20/ffffff/shop.png"/></a></Link>
               :null
                }
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
                <Link  href='?sign=true'><a className="nav-link nav-link-main active font1" onClick={this.showsignup.bind(this) }  >sign-in/out</a></Link>
                
                    
                     </div>
            
            </div>
            {this.state.isuserlogin? <a className="ismobile_disable logo-link nav-link nav-link-main active font1" href="#">{this.state.user.givenName} </a>:null }
            {this.state.isuserlogin?<img className="ismobile_disable float-left avatar" src={this.state.user.imageUrl} />:null}  
       
            
            </nav>

            
              
            </div>
            
            <style jsx>
                {`
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
