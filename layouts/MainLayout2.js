import React, { Component } from 'react';
import Head from 'next/head'
import $ from 'jquery';
import Cookie from "js-cookie";
import {WebUrl} from './../constant/main';



class Layout extends Component {

  componentDidMount(){

    //facebook whatsapp button
    (function () {
        var options = {
            facebook: "113469750349042", // Facebook page ID
            whatsapp: "+94717492917", // WhatsApp number
            call_to_action: "contact us", // Call to action
            button_color: "#129BF4", // Color of button
            position: "right", // Position may be 'right' or 'left'
            order: "facebook,whatsapp", // Order of buttons
        };
        var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
        var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })();
    

    $(document).ready(function() {

      function isMobile() {
        var windowwidth = $(window).width();

        if(windowwidth<1001){
            $('.ismobile_disable').css({'display':'none'});
            $('.isdesktop_disable').css({'display':'block'});
            $('.desktopmobile').addClass('fontsizeE-9').removeClass('fontsizeE1');

        }
        else{
          $('.ismobile_disable').css({'display':'block'});
          $('.isdesktop_disable').css({'display':'none'});
          $('.desktopmobile').addClass('fontsizeE1').removeClass('fontsizeE-9')
        }
          
       
    }
    isMobile();
    $(window).resize(isMobile);
    })
    if(Cookie.get('user')){
        $('.isuserlogin').show();
        $('.isnotuserlogin').hide();
    }else{
        $('.isuserlogin').hide();
        $('.isnotuserlogin').show();
    }
   
  }

  render(){
   
    return(
  <div >
<Head>
  

 <meta name="google-signin-client_id" content="511880674901-gfn6v2n1ej65rrlnnv29odgbjkpkhpcj.apps.googleusercontent.com"/>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"></link>
<link href="https://fonts.googleapis.com/css?family=Acme|Anton|Cabin|Indie+Flower|Trade+Winds|Ubuntu&display=swap" rel="stylesheet"></link>
<link href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&family=Titillium+Web:wght@600&display=swap" rel="stylesheet"></link>
<link rel="icon" href={WebUrl+"special/icon2.jpg"}></link>

{/**new theme */}
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"/>
<link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

                  <link rel="stylesheet" type="text/css" href="./../vendor/bootstrap/css/bootstrap.min.css"/>
                  <link rel="stylesheet" type="text/css" href="./../fonts/font-awesome-4.7.0/css/font-awesome.min.css"/>
                  <link rel="stylesheet" type="text/css" href="./../fonts/iconic/css/material-design-iconic-font.min.css"/>
                  <link rel="stylesheet" type="text/css" href="./../fonts/linearicons-v1.0.0/icon-font.min.css"/>
                  <link rel="stylesheet" type="text/css" href="./../vendor/animate/animate.css"/>	
                  <link rel="stylesheet" type="text/css" href="./../vendor/css-hamburgers/hamburgers.min.css"/>
                  <link rel="stylesheet" type="text/css" href="./../vendor/animsition/css/animsition.min.css"/>
                  <link rel="stylesheet" type="text/css" href="./../vendor/select2/select2.min.css"/>	
                  <link rel="stylesheet" type="text/css" href="./../vendor/daterangepicker/daterangepicker.css"/>
                  <link rel="stylesheet" type="text/css" href="./../vendor/slick/slick.css"/>
                  <link rel="stylesheet" type="text/css" href="./../vendor/MagnificPopup/magnific-popup.css"/>
                  <link rel="stylesheet" type="text/css" href="./../vendor/perfect-scrollbar/perfect-scrollbar.css"/>
                  <link rel="stylesheet" type="text/css" href="./../css/util.css"/>
                  <link rel="stylesheet" type="text/css" href="./../css/main.css"/>   
{/*********** */}

<meta property="og:site_name" content="OnShop"></meta>
      </Head>
     
        <div className="desktopmobile">
        {this.props.children}

      

        </div>
    

<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossOrigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous"></script>

{/**new theme */}

    <script src="./../vendor/jquery/jquery-3.2.1.min.js"></script>
	<script src="./../vendor/animsition/js/animsition.min.js"></script>
	<script src="./../vendor/bootstrap/js/popper.js"></script>
	<script src="./../vendor/bootstrap/js/bootstrap.min.js"></script>
	<script src="./../vendor/select2/select2.min.js"></script>
	<script src="./../vendor/daterangepicker/moment.min.js"></script>
	<script src="./../vendor/daterangepicker/daterangepicker.js"></script>
	<script src="./../vendor/slick/slick.min.js"></script>
	<script src="./../js/slickcustom.js"></script>
	<script src="./../vendor/parallax100/parallax100.js"></script>
	<script src="./../vendor/MagnificPopup/jquery.magnific-popup.min.js"></script>
	<script src="./../vendor/isotope/isotope.pkgd.min.js"></script>
	<script src="./../vendor/sweetalert/sweetalert.min.js"></script>
	<script src="./../vendor/perfect-scrollbar/perfect-scrollbar.min.js"></script>
	<script src="./../js/main.js"></script>
    <script src="./../js/indexpage.js"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
{/*********** */}

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
    font-size : 1.1em;
   }
   .fontsizeE1-3 {
    font-size : 1.2em;
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


   .m-image{
    width: 100%;
    padding: 2px;

  }
  .m-content{
    padding: 2px;
  
  }
  .m-content-left{
    padding: 0;
    margin:0px;
    text-align: left;
  }
  .m-content-right{
    padding: 0;
    margin:0px;
    text-align: right;
  }
  .m-card{
    padding:5px 5px;
  
  }
   `
   
   }
 </style>

  </div>

)
}
}
export default Layout;