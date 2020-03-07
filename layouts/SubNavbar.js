import React, { Component } from 'react';
import Layout from './../layouts/MainLayout';
import Link from 'next/link';
import $ from 'jquery';


class Index extends Component {

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
          
            
            function checkMobile() {
                var windowwidth = $(window).width();

                if(windowwidth<990){
                   $('.nav-link').css({'background-color':'darkblue','opacity':'0.5','padding-left':'20px'});
                }
                  
               
            }
            checkMobile();
            $(window).resize(checkMobile);
    });
    }
    render() { 
        
          return ( 
            <Layout>
            
            <nav className="navbar sticky-top navbar-expand-lg">
            <a className="navbar-brand font1" href="#">MYBIZ.COM</a>
  
            <button className="navbar-toggler togglemenuO menuOpen" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <img src="https://img.icons8.com/ios/30/ffffff/menu.png"/>
            </button>
            <button className=" navbar-toggler togglemenuC menuClose" type="button">
            <img src="https://img.icons8.com/ios/25/ffffff/delete-sign.png"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <Link href="/"><a className="nav-link active font1" >Home</a></Link>
                <Link href="/menu2"><a className=" nav-link active font1" >menu2</a></Link>
                <Link href="/menu1"><a className=" nav-link active font1" >menu1</a></Link>
                
                <Link href="/menu3"><a className=" nav-link active font1" >menu3</a></Link>
                <Link href="/menu1"><a className=" nav-link active font1" >menu1</a></Link>
                
                </div>
            </div>
       
            
            </nav>

            
              
            
            
            <style jsx>
                {`
                
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
                   
                    height: 80px;
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
