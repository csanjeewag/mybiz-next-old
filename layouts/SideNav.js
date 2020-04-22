import React, { Component } from 'react';
import Link from 'next/link';
import Layout from './../layouts/MainLayout';
import $ from 'jquery';
import {wesitename} from './../constant/main';

class Index extends Component {

  componentDidMount= ()=> {

    $(document).ready(function() {
      $('.open-side-navbar').click(function(){
        $('.js-side-nav-container').addClass('side-nav-animatable side-nav-visible');
      });

      $('.js-menu-close').click(function(){
        $('.js-side-nav-container').addClass('side-nav-animatable').removeClass(' side-nav-visible');
      })
      $('.sidenavbar').click(function(){
        $('.js-side-nav-container').addClass('side-nav-animatable').removeClass(' side-nav-visible');
      })

    });


  }


  showSidebar=()=>{
    $(document).ready(function() {
        $('.js-side-nav-container').addClass('side-nav-animatable side-nav-visible');
    })
  }
  
  
render(){
  return(
<Layout>


<div className="js-side-nav-container side-nav-container sidenavbar">
<div className="js-side-nav side-nav">
  
  <a  className="js-menu-close menu-close navbar-brand font7">&nbsp;
  <img src="https://img.icons8.com/windows/25/FF8C8C/delete-slide.png"/>&nbsp;
  {wesitename}
  </a>

  <h4 className="sidenav-link-topic  font1 fontsizeE2">  &nbsp; {this.props.sidenavconst.topic}</h4>
  <div className="sidenavbar-link pointer">
                {this.props.sidenavconst.sidenavlink.map((c,i)=>
                <Link key={i} href={c.suburl+c.type?c.type:(c.urlname?c.urlname+'?ide='+c._id:c.district)} >
                <div>
             
                <a className="nav-link font1 fontsizeE1" ><i className="fa fa-telegram" aria-hidden="true"></i> &nbsp;{c.name?c.name:c.itemname?c.itemname:c.district}</a>
                
                </div>
                </Link>
                  )}
                </div>
</div>
</div>


  <style jsx>
  {`

.sidenavbar{
  z-index:100;
}

.menu-close{
width:100%;
color: rgb(61, 228, 246);
font-size: 1.5em;
padding: 20px 10px 20px 10px;
background: rgba(7, 36, 159 );
}
.side-nav {
position: relative;
transition: transform 0.35s ease-out;
background: darkblue;
opacity: 0.9;
height: 100%;
width: 90%;
max-width: 200px;
box-shadow: 0 5px 6px 4px rgba(0, 0, 0, .2);
transform: translateX(-102%);
will-change: transform;
overflow: auto;
flex-direction: column;
}
.side-nav-container {
position: fixed;
left: 0;
top: 0;
width: 100%;
height: 100%;
overflow: hidden;
pointer-events: none;
}
.side-nav-container:before {
transition: opacity 0.3s cubic-bezier(0, 0, 0.3, 1);
content: '';
display: block;
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
background: rgba(0, 0, 0, .4);
will-change: opacity;
opacity: 0;
pointer-events: none;
}
.side-nav-animatable .side-nav {
transition: transform 0.33s cubic-bexier(0, 0, 0.3, 0.1);
z-index : 100;
}
.side-nav-animatable.side-nav-visible .side-nav {
transition: transform 0.33s cubic-bezier(0, 0, 0.3, 1);
}
.side-nav-visible {
pointer-events: auto;
z-index : 100;
}
.side-nav-visible .side-nav {
transform: none;
}
.side-nav-visible:before {
opacity: 1;
}
.sidenav-link-topic {
  padding: 20px 10px 10px 10px;
  color: #F7A12D;
}
.sidenavbar-link{
    padding:10%;
}
.sidenavbar-link a{
    color: #C4FBFE ;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5) ;
}
.sidenavbar-link a:hover{
  transform: scale(1.01);
  transition: 0.5s;
  
}
  `}
  </style>
</Layout>
  )
}
 
}



export default Index;