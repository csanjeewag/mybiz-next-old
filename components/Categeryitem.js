import React, { Component } from 'react';
import Layout from '../layouts/MainLayout';
import {ImageUrl,itemUrl,myshopmUrl} from '../constant/main'
import Link from 'next/link';
import Cookie from "js-cookie";

class Index extends Component {

    addtocart(itemid,name){
        var data = Cookie.getJSON('faverite-item');
        var jsonarray = []
        
        if(data){
            if(!data.includes(itemid))
            {jsonarray = [...data,itemid]
            Cookie.set('faverite-item',jsonarray);
            alert(`add ${name} to cart. you can change count, go to my-cart.`)
            }else{
            alert(`already added ${name} to cart.`) 
            }
        }else{
            jsonarray = [itemid]
            Cookie.set('faverite-item',jsonarray);
            alert(`add ${name} to cart. you can change count, go to my-cart.`)
        }
    
     
    }

    
    render() { 
        
        
          return ( 
            <Layout>
                
                <div className="col-lg-11 col-sm-12 mx-auto">
                <div>
                    <h2 className="font1 topicColor menu2-topic fontsizeE2-25">{this.props.topic}</h2>
                    
                </div>
                <div className="menu2 row projects">
                {this.props.catageries.map((c,i)=>
                  
                <div key={i} className="col-sm-4 col-md-3 col-lg-2 mt-3">
                {/****destop and responsive */}
                <div className="card ismobile_disable m-0">
                <Link key={i} href={itemUrl+c.urlname+'?ide='+c._id}>
                    <div className="card-img-top-div">
                    <img className="card-img-top pointer" src={ImageUrl+c.images[0]} height="150px" />
                    </div>
                    </Link> 
                    <div className="card-block">
                        <figure className="profile">
                            <img src={c.user.imageUrl} className="profile-avatar" alt=""/>
                        </figure>
                        <Link key={i} href={itemUrl+c.urlname+'?ide='+c._id}>
                        <h5 className=" font2 topicColor fontsizeE1-9">{c.itemname}</h5>
                        </Link>
                        <div className="meta font6 subtopicColor">
                            <a>{c.subcategery}</a>
                            <div className=" float-right"> 
                            <a className="Icutprise font6"> <strike>Rs.{c.itemPrice}.00</strike>  </a> 
                            <a className="Idiscount font6"> {c.itemdiscount}% </a>
                            <a className="Iprise font6">&nbsp;Rs.{c.itemPrice*(100-c.itemdiscount)/100}</a>
                            </div>
                        </div>
                        <div className="card-text font6">
                            {c.content1.slice(0,100)}...
                        </div>
                    </div>
                    
                    <div className="card-footer">
                        <small className="font3 float-left">{c.date}</small>
                         <a onClick={()=>this.addtocart(c._id,c.itemname)} className="btn btn-danger float-right btn-sm"><img src="https://img.icons8.com/ios/25/ffffff/favorite-cart.png"/></a>
                        {/* <a onClick={()=>this.addtocart(c._id,c.itemname)} className="btn btn-primary float-right btn-sm"><img src="https://img.icons8.com/ios/25/ffffff/in-transit.png"/></a>*/}
                        <Link key={i} href={myshopmUrl+c.shop[0].shopurl}><a className="font6 fontsizeE-9 float-left m-content-righ">{c.shop[0].shopName} <br/>in {c.shop[0].town} &nbsp;&nbsp;</a>
                        </Link>
                       
                    </div>
                </div>
                {/*******desktop */}

                {/*** mobile version */}
                <div className="isdesktop_disable">
                <div className="row m-card">

                <div className="col-4 m-image">
                <Link key={i} href={itemUrl+c.urlname+'?ide='+c._id}>
                <img className="card-img-top pointer" src={ImageUrl+c.images[0]} />
                </Link>
                </div>

                <div className="col-8 m-content">
                <Link key={i} href={itemUrl+c.urlname+'?ide='+c._id}>
                <h4 className="font1 topicColor fontsizeE1-3 m-content-left">{c.itemname}</h4>
                </Link>
                <p className="font6 subtopicColor fontsizeE1 m-content-left ">{c.categery} / {c.subcategery}</p>
                <p className="font6 m-content-right"><strike className="fontsizeE-9">Rs.{c.itemPrice}.00</strike><span className="fontcolorOrange fontsizeE-9">{c.itemdiscount}%</span><span className="fontcolorred fontsizeE1">&nbsp;Rs.{c.itemPrice*(100-c.itemdiscount)/100}</span></p>

                <div className="float-right">
                <a onClick={()=>this.addtocart(c._id,c.itemname)} className="btn btn-danger fontsizeE1 float-right btn-sm m-content-righ"><img src="https://img.icons8.com/ios/20/ffffff/favorite-cart.png"/></a>
                <Link key={i} href={myshopmUrl+c.shop[0].shopurl}><a className="font6 fontsizeE1 float-right m-content-righ">{c.shop[0].shopName} - {c.shop[0].town} &nbsp;&nbsp;</a>
                </Link>
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
                    `h5 {
                        font-size: 1.28571429em;
                        font-weight: 700;
                        line-height: 1.2857em;
                        margin: 0;
                    }
                    .menu2{
                        margin-bottom : 20px;
                    }
                    .menu2-topic{
                        padding : 20px 10px 10px 10px;
                    }
                    .card {
                        font-size: 1em;
                        overflow: hidden;
                        padding: 0;
                        border: none;
                        border-radius: 0em;
                        box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
                        transition: 0.5s;
                    }
                    .card:hover{
                        box-shadow: 0 5px 5px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
                        transform: scale(1.01);
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
                        font-weight: 700;
                        line-height: 1.2857em;
                        margin-bottom: 0px;
                        
                    }
                    
                    .card-text {
                        clear: both;
                        margin-top: .5em;
                        color: rgba(0, 0, 0, .68);
                        font-size : 0.8em;
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
                    .Idiscount{
                        color: darkorange;
                        font-size: 0.8em;
                    }
                    .Iprise{
                        color: red;
                        font-size: 0.9em;
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
