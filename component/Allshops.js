import React, { Component } from 'react';
import Router from 'next/router';
import Layout from '../layouts/MainLayout';
import {ImageUrl,myshopmUrl} from '../constant/main'
import Link from 'next/link';
import Cookie from "js-cookie";

class Index extends Component {

    loadview(name){
        Router.push(myshopmUrl+name)
    }

    
    render() { 
        
        
          return ( 
            <div>
                
                <div className="col-lg-11 col-sm-12 mx-auto">
                <div>
                    <h2 className="stext-104  subtopicColor menu2-topic fontsizeE1-5">{this.props.topic}</h2>
                    
                </div>
                <div className="menu2 row projects">

                {this.props.allshops.map((c,i)=>
				<div key={i} className={"col-sm-6 col-md-4 col-lg-3 p-b-35 "+c.categery}>
		
				<div className="block2">
					<div className="block2-pic hov-img0">
					<Link key={i} href={myshopmUrl+c.urlname+'?ide='+c._id}>
					<img className="card-img-top pointer lazyload" src={ImageUrl+c.images[0]} height="200px" />
					</Link>
						<a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1" onClick={this.loadview.bind(this,c.urlname)}>
                        shop
						</a>
					</div>

					<div className="block2-txt flex-w flex-t p-t-14">
						<div className="block2-txt-child1 flex-col-l ">
                            <a style={{color:'orange'}} className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-1">
							{c.shopName} 
							</a>
							<a className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-1">
							{c.categery} 
							</a>

							<span className="stext-105 cl3">
                            <p className="stext-104 m-content-right">{c.district}/{c.town}</p>
							</span>
						</div>

						<div className="block2-txt-child2 flex-r p-t-3">
						
						</div>
					</div>
				</div>
                
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
                        border-radius: 0em;
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
                  </div>
           );
      }
    
}

export default Index; 
