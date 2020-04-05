import React, { Component } from 'react';
import Layout from './../layouts/MainLayout';
import Link from 'next/link';
import $ from 'jquery';
import SideNav from './../layouts/SideNav';
import SignUp from './../components/signup';
import {NavLink} from './../constant/main';
 
class Index extends Component {

    //side nav bar open
    showsidebar(){
        this.refs.sidenav.showSidebar();
      }
    //show signup
      showsignup(){
        this.refs.signup.showsignup();
      }
    
    componentDidMount(){
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
              if($(this).scrollTop() >  $(window).width()/4) { 
                  $('.sub1nav').addClass('SolidNav').css({'opacity':'1'}).addClass('fixed-top').removeClass('sticky-top');
                  $('.logo-link').css({'display':'none'}); $('.all-link').css({'display':'block'});
              }
              else {
                  $('.sub1nav').removeClass('SolidNav').removeClass('fixed-top').addClass('sticky-top');
                  $('.all-link').css({'display':'none'}); $('.logo-link').css({'display':'block'});
              }
             
            });
            
            function checkMobile() {
                var windowwidth = $(window).width();

                if(windowwidth<990){
                    $('.nav-link-main').css({'background-color':'black','opacity':'0.5','padding-left':'20px'});

                    $(window).scroll(function() {
                        if($(this).scrollTop() > $(window).width()/3) { 
                            $('.nav-link-main').css({'background-color':'darkblue','opacity':'0.5','padding-left':'20px'});
                            
                        }else{
                            $('.nav-link-main').css({'background-color':'black','opacity':'0.5','padding-left':'20px'});
                            
                        }
                        
                      });
                }
                  
               
            }
            checkMobile();
            $(window).resize(checkMobile);
    });
    }
    render() { 
        
          return ( 
            <Layout>
            <SideNav ref="sidenav"  sidenavconst={this.props.sidenavconst}/>
            <SignUp ref="signup" showsignup={this.props.showsignup} />
            <div className="subnav" >
            <nav className="navbar sub1nav sticky-top navbar-expand-lg">
            <a className="navbar-brand font7 logo-link" href="#">MYBIZ.COM</a>
            <button onClick={this.showsidebar.bind(this)} type="button" className="btn btn-primary all-link font1">{this.props.sidenavconst.topiclink}</button>
 
            <button className="navbar-toggler togglemenuO menuOpen" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <img src="https://img.icons8.com/ios/30/ffffff/menu.png"/>
            </button>
            <button className=" navbar-toggler togglemenuC menuClose" type="button">
            <img src="https://img.icons8.com/ios/25/ffffff/delete-sign.png"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                {NavLink.map((x,i)=>
                    <Link key={i} href={x.url}><a className="nav-link nav-link-main active font1" >{x.urlname}</a></Link>
                    )}
                    <Link key='100' href='#'><a className="nav-link nav-link-main active font1" onClick={this.showsignup.bind(this)} >signin</a></Link>
                            </div>           </div>
       
            
            </nav>
    
            
              
            </div>
            
            <style jsx>
                {`
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
                    height: 60px;
                    background-color: darkblue;
                    border: none;
                    color: white;
                    transition: background-color 2s ease 0s;
               }
              
                .navbar.SolidNav {
                    background-color: darkblue;
                    transition: background-color 2s ease 0s;
                    box-shadow: 0 0 4px grey;
                    color: white;
                    height:50px;
               }
               .togglemenuC{
                display:none
               }
               .sticky-top{
                position: -webkit-sticky; /* Safari */
                position: sticky;
                top: 0;
                transition: background-color 2s ease 0s;
               }
               .all-link{
                   display:none;
               }
               
                `}
            </style>
                  </Layout>
           );
      }
    
}

export default Index; 
