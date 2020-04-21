import React, { Component } from 'react';
import Layout from '../layouts/MainLayout';
import {ImageUrl,myshopmUrl} from '../constant/main'
import Link from 'next/link';
import Cookie from "js-cookie";

class Index extends Component {



    
    render() { 
        
        
          return ( 
            <Layout>
                
                <div className="container">
                <div>
                    <h2 className="font1 topicColor menu2-topic fontsizeE2-25">{this.props.topic}</h2>
                    
                </div>
                <div className="menu2 row projects">
                {this.props.allshops.map((c,i)=>
                  
                    <div key={i} className="col-sm-6 col-md-4 col-lg-3 mt-4">
                {/***desktop and responsive */}
                <div className="card ismobile_disable">
                <Link key={i} href={myshopmUrl+c.urlname+'?ide='+c._id}>
                    <div className="card-img-top-div">
                    <img className="card-img-top" src={ImageUrl+c.images[0]} height="150px" />
                    </div>
                    </Link> 
                    <div className="card-block">
                        <figure className="profile">
                            <img src={ImageUrl+c.images[1]} className="profile-avatar" alt=""/>
                        </figure>
                        <h4 className="card-title font2 topicColor">{c.shopName}</h4>
                        <div className="meta font6 subtopicColor">
                            <a>{c.subcategery}</a>
                            <div className=" float-right"> 
                            <a className="Catagory-style font6">&nbsp;{c.categery}</a>
                            </div>
                        </div>
                        <div className="card-text font6 ">
                            {c.content1.slice(0,150)}...
                        </div>
                    </div>
                    
                    <div className="card-footer">
                        <a className="font3 float-left">{c.date}</a>
                        <a className="Location-style font6"> {c.district}->{c.town} </a>
                    </div>
                </div>
                {/******** */}

                  {/*** mobile version */}
                  <div className="isdesktop_disable">
                <div className="row m-card">

                <div className="col-4 m-image">
                <Link key={i} href={myshopmUrl+c.urlname+'?ide='+c._id}>
                <img className="card-img-top pointer" src={ImageUrl+c.images[0]} />
                </Link>
                </div>

                <div className="col-8 m-content">

                <h4 className="font1 topicColor fontsizeE1-3 m-content-left">{c.shopName}</h4>

                <p className="font6 subtopicColor fontsizeE1 m-content-left Catagory-style">{c.categery}</p>
                <p className="font6 card-text m-content-left ">{c.content1.slice(0,100)}</p>
                <div className="float-right">
               <a className="font6 fontsizeE1 float-right m-content-righ Location-style">{c.district}->{c.town} &nbsp;&nbsp;</a>
                
                </div>                
                </div>

                </div>
                <hr/>
                </div>
                {/** mobile verison */}
                   
                    </div>
                )}
                    
                </div>
              
                </div>

                <style jsx>{
                    `
                    h5 {
                        font-size: 1.28571429em;
                        font-weight: 700;
                        line-height: 1.2857em;
                        margin: 0;
                    }
                    .menu2{
                        margin-bottom : 20px;
                    }
                    .menu2-topic{
                        padding : 10px 10px 0px 10px;
                    }
                    .card {
                        font-size: 1em;
                        overflow: hidden;
                        padding: 0;
                        border: none;
                        border-radius: .28571429rem;
                        box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
                        transition: 0.5s;
                        font-size: 0.9em;
                    }
                    .card:hover{
                        box-shadow: 0 5px 5px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
                        transform: scale(1.02);
                        transition: 0.5s;
                    }
                    .card-block {
                        font-size: 1em;
                        position: relative;
                        margin: 0;
                        padding: 0.5em;
                        border: none;
                        border-top: 1px solid rgba(34, 36, 38, .1);
                        box-shadow: none;
                    }
                    .card-img-top-div{
                        height: 100;
                        overflow : hidden;
                    }
                    
                    .card-img-top {
                        display: block;
                        width: 100%;
                        height: 200;
                    }
                    
                    .card-title {
                        font-size: 1.28571429em;
                        font-weight: 700;
                        line-height: 1.2857em;
                        margin-bottom: 0px;
                        
                    }
                    
                    .card-text {
                        clear: both;
                        margin-top: .5em;
                        color: rgba(0, 0, 0, .68);
                        font-size : 0.9em;
                    }
                    
                    .card-footer {
                        font-size: 1em;
                        position: static;
                        top: 0;
                        left: 0;
                        max-width: 100%;
                        padding: .5em 0.75em;
                        border-top: 1px solid rgba(0, 0, 0, .05) !important;
                        background: #fff;
                    }
                    
                    .card-inverse .btn {
                        border: 1px solid rgba(0, 0, 0, .05);
                    }
                    
                    .profile {
                        position: absolute;
                        top: -12px;
                        display: inline-block;
                        overflow: hidden;
                        box-sizing: border-box;
                        width: 25px;
                        height: 25px;
                        margin: 0;
                        border: 1px solid #fff;
                        border-radius: 50%;
                    }
                    
                    .profile-avatar {
                        display: block;
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                    }
                    
                    .profile-inline {
                        position: relative;
                        top: 0;
                        display: inline-block;
                    }
                    
                    .profile-inline ~ .card-title {
                        display: inline-block;
                        margin-left: 4px;
                        vertical-align: top;
                    }
                    
                    .text-bold {
                        font-weight: 700;
                    }
                    
                    .meta {
                        font-size: 1em;
                        
                    }
                    
                    .meta a {
                        text-decoration: none;
                        
                    }
                    .Icutprise{
                        text-decoration: line-through;
                        color: rgba(0, 0, 0, .8);
                        font-size: 0.75em;
                    }
                    .Location-style{
                        color: darkorange;
                        font-size: 1em;
                    }
                    .Catagory-style{
                        color: red;
                        font-size: 1em;
                    }

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

                    `
                }</style>
                  </Layout>
           );
      }
    
}

export default Index; 
