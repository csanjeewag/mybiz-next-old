import React, { Component } from 'react';
import Head from 'next/head'
import Header from './Header';
import $ from 'jquery';
import Cookie from "js-cookie";


class Layout extends Component {

  componentDidMount(){
    $(document).ready(function() {

      function isMobile() {
        var windowwidth = $(window).width();

        if(windowwidth<600){
            $('.ismobile_disable').css({'display':'none'});
            $('.isdesktop_disable').css({'display':'block'});
        }
        else{
          $('.ismobile_disable').css({'display':'block'});
          $('.isdesktop_disable').css({'display':'none'});
        }
          
       
    }
    isMobile();
    $(window).resize(isMobile);
    })
    if(Cookie.get('user')){
        $('.isuserlogin').show();
    }else{
        $('.isuserlogin').hide();
    }
   
  }

  render(){
   
    return(
  <div >
<Head>
<title>Agency - Start Bootstrap Theme</title>

  

 <meta name="google-signin-client_id" content="511880674901-gfn6v2n1ej65rrlnnv29odgbjkpkhpcj.apps.googleusercontent.com"/>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>
<link href="https://fonts.googleapis.com/css?family=Acme|Anton|Cabin|Indie+Flower|Trade+Winds|Ubuntu&display=swap" rel="stylesheet"></link>
<link href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&family=Titillium+Web:wght@600&display=swap" rel="stylesheet"></link>

      </Head>
        <div className="fontsizeE-9">
        {this.props.children}
        </div>
    

<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossOrigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous"></script>

 <style global jsx>
   {`
   
   .projects div {
    animation-name: fade-in;
    animation-fill-mode: both;
    animation-duration: 1s;
}
.projects div:nth-of-type(1) {
    animation-delay: 0.6s;
}
.projects div:nth-of-type(2) {
    animation-delay: 0.8s;
}
.projects div:nth-of-type(3) {
    animation-delay: 1.0s;
}
.projects div:nth-of-type(4) {
    animation-delay: 1.2s;
}
.projects div:nth-of-type(5) {
    animation-delay: 1.4s;
}
.projects div:nth-of-type(6) {
    animation-delay: 1.6s;
}
.projects div:nth-of-type(7) {
    animation-delay: 1.8s;
}
.projects div:nth-of-type(8) {
    animation-delay: 2.0s;
}
.projects div:nth-of-type(9) {
    animation-delay: 2.2s;
}
.projects div:nth-of-type(10) {
    animation-delay: 2.4s;
}
.projects div:nth-of-type(11) {
    animation-delay: 2.6s;
}
.projects div:nth-of-type(12) {
    animation-delay: 2.8s;
}
.projects div:nth-of-type(13) {
    animation-delay: 3.0s;
}
.projects div:nth-of-type(14) {
    animation-delay: 3.2s;
}
.projects div:nth-of-type(15) {
    animation-delay: 3.4;
}
@keyframes fade-in {
    0% {
        opacity: 0;
   }
    100% {
        opacity: 1;
   }
}
  
   .btn{
    font-size : 0.9rem;
   }
   
   
   .font1 {
    font-family: 'Titillium Web', sans-serif;
   }
   .font2{
    font-family: 'Ubuntu', sans-serif;
   }
   .font3{
    font-family: 'Cabin', sans-serif;
   }
   .font4{
    font-family: 'Anton', sans-serif;
   }
   .font5{
    font-family: 'Indie Flower', cursive;
   }
   .font6{
    font-family: 'Acme', sans-serif;
   }
   .font7{
    font-family: 'Trade Winds', cursive;
   }

   .topicColor {
    color:darkblue;
   }
   .subtopicColor{
    color:blue;
   }
   .fontcolorOrange{
    color:orange;
   }
   .fontcolorSkyblue{
     color : #008ACC;
   }
   .fontcolorpink{
     color : #CC0047;
   }
   .fontcolorred{
     color : #CC0000;
   }
   .fontsizeE-5 {
    font-size : 0.5em;
   }
   .fontsizeE-6 {
    font-size : 0.6em;
   }
   .fontsizeE-7 {
    font-size : 0.7em;
   }
   .fontsizeE-8 {
    font-size : 0.8em;
   }
   .fontsizeE-9 {
    font-size : 0.9em;
   }
   .fontsizeE1 {
    font-size : 1em;
   }
   .fontsizeE1-25 {
    font-size : 1.25em;
   }
   .fontsizeE1-5 {
    font-size : 1.5em;
   }
   .fontsizeE2 {
    font-size : 2em;
   }
   .fontsizeE2-25 {
    font-size : 2.25em;
   }
   .fontweight700 {
    font-weight : 700
   }

   .pointer {cursor: pointer;}
  .progress {cursor: progress;}

   .isuserlogin{}

   `}
 </style>

  </div>

)
}
}
export default Layout;