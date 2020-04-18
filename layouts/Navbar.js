import React, { Component } from 'react';
import Layout from './../layouts/MainLayout';
import Link from 'next/link';
import $ from 'jquery';
import SignUp from './../components/signup';
import {NavLink,wesitename} from './../constant/main';
import Cookie from "js-cookie";

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
                  $('.navbar').addClass('SolidNav');
              }
              else {
                  $('.navbar').removeClass('SolidNav');
              }
             
            });
            
            function checkMobile() {
                var windowwidth = $(window).width();

                if(windowwidth<990){
                    $('.nav-link-main').css({'background-color':'black','opacity':'0.6','padding-left':'20px'});

                    $(window).scroll(function() {
                        if($(this).scrollTop() > $(window).height()/4) { 
                            $('.nav-link-main').css({'background-color':'darkblue','opacity':'0.6','padding-left':'20px'});
                        }else{
                            $('.nav-link-main').css({'background-color':'black','opacity':'0.6','padding-left':'20px'});
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
            <div className="mainnav" >
            <SignUp ref="signup" showsignup={this.props.showsignup} />
            <nav className="navbar fixed-top navbar-expand-lg">
            <a className="navbar-brand font7" href="#">{wesitename}</a>
  
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
                {/* <Link key='100' href='#'><a className="nav-link nav-link-main active font1" onClick={this.showsignup.bind(this)} >signin</a></Link>*/}
                <Link key='101' href={`/myprofile?id=${this.state.isuserlogin?this.state.user._id:''}`}><a className="nav-link nav-link-main active font1 isuserlogin"  >my-profile</a></Link>
                <Link key='100'  href='?sign=true'><a className="nav-link nav-link-main active font1" onClick={this.showsignup.bind(this)} >sign-in</a></Link>
                       
                     </div>
            </div>
          
       
            
            </nav>

            
              
            </div>
            
            <style jsx>
                {`
                .mainnav {
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
                    z-index : 100;
                    height: 50px;
                    background-color: transparent;
                    border: none;
                    color: white;
                    transition: background-color 2s ease 0s;
               }
              
                .navbar.SolidNav {
                    background-color: darkblue;
                    transition: background-color 2s ease 0s;
                    box-shadow: 0 0 4px grey;
                    color: white;
               }
               .togglemenuC{
                display:none
               }
               
                `}
            </style>
                  </Layout>
           );
      }
    
}

export default Index; 
