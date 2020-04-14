import React, { Component } from 'react';
import Layout from './../layouts/MainLayout';
import fetch from 'isomorphic-unfetch';
import $ from 'jquery';
import  {Url,ImageUrl,createitemUrl,updateshopUrl,itemUrl} from './../constant/main';
import Link from 'next/link';
import Cookie from "js-cookie";


const Imageside=(props)=> {
    return(
<div className="col-lg-6 col-sm-12">
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
<ol className="carousel-indicators">
{props.shop.images.map((x,i)=>
    <li key={i} data-target="#carouselExampleIndicators" data-slide-to={i} className={i==0?'active':'c'} ></li> 
    )}
</ol>
<div className="carousel-inner">   
    {props.shop.images.map((x,i)=>
                <div key={i} className={i==0?'carousel-item active':'carousel-item'}>
                <img className="d-block w-100 silde2image" src={ImageUrl+x} alt="first slide" width="100%" />
                </div> 
                )}
    
</div>
<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
</a>
<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
</a>
</div>

        <div className="card-footer">
            <small className="font3 card-footer-button">{props.shop.createDate}</small>
 
        </div>

        <style jsx >
        {`  .card-footer {
            font-size: 1em;
            position: static;
            top: 0;
            left: 0;
            max-width: 100%;
            padding: 1em 0.75em;
            
        }
        .card-footer-button{
            padding: 0.5em 0.1em;
        }
        `}
        </style>
    </div>
    )
}


const Contentside=(props)=>{



    return (
        <div className="col-lg-6 col-sm-12">

        <div className="card">
            <div className="card-block">
            
                <h4 className="card-title font2 topicColor">{props.shop.shopName}</h4>
                <div className="meta font6 subtopicColor">
                    <a>{props.shop.categery}</a>
                    <div className=" float-right"> 
                    <a className="Icutprise font6">{props.shop.district+'/'+props.shop.town} </a> 
                    </div>
                </div>
                
                <div className="meta font6">
                    <div className=" float-right"> 
                    <a className="Icutprise font6">{props.shop.contact1+'/'+props.shop.contact2} </a>
                    </div>
                </div>

                <div className="card-text font6">
                {props.shop.content1}
                </div>
                <div className="card-text font6">
                {props.shop.content2}
                </div>
                <div className="profile-specification">
                <h5 className="profile-subcard-title font2 fontcolorSkyblue"> &nbsp; </h5>
                <div className=" card-text font6">
                    <div className="row">
                        {props.shop.shopDetail?props.shop.shopDetail.map((x,i)=>
                            <div className="col-lg-6 col-sm-12" key={i}>
                            <a className="float-left profile-speca"><img src="https://img.icons8.com/metro/15/000000/external-link.png"/>&nbsp; &nbsp; {x.name} &nbsp;: </a> <a className="float-left profile-specb"> &nbsp; {x.value}</a>
                            </div>
                            ):null}
                        
                    </div>
                </div>
                <hr/>
                <Link href={createitemUrl+'?id='+props.shop._id+'&shopname='+props.shop.shopName}><a href="#" className="btn btn-primary float-right btn-sm"><img src="https://img.icons8.com/ios/25/ffffff/new-view.png"/> &nbsp;add new item</a></Link>
                <Link href={updateshopUrl+props.shop._id}><a href="#" className="btn btn-danger float-right btn-sm"><img src="https://img.icons8.com/ios/25/ffffff/new-view.png"/> &nbsp;update shop</a></Link>
              
            </div>

        </div>
           
        </div>
        <style jsx>
                {`
                h5 {
                    font-size: 1.5em;
                    font-weight: 700;
                    line-height: 1.2857em;
                    margin-bottom: 20px;
                }
                .profile{
                    margin-bottom : 20px;
                }
                .profile-topic{
                    padding : 20px 10px 10px 10px;
                }
                .profile-speca{
                    font-size: 1em;
                    color: #CF570E ;
                    
                }
                .profile-specb{
                    font-size: 1em;
                    color: #3E1903;
                }
                .card {
                    font-size: 1em;
                    overflow: hidden;
                    padding: 0;
                    transition: 0.5s;
                    border : none;
                }
              
                .card-block {
                    font-size: 1em;
                    position: relative;
                    margin: 0;
                    padding: 0.5em;
                    box-shadow: none;
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
                .profile-subcard-title {
                    font-size: 1em;
                    font-weight: 700;
                    line-height: 1.2857em;
                    margin-bottom: 0px;
                    
                }
                
                .card-text {
                    clear: both;
                    margin-top: .5em;
                    color: rgba(0, 0, 0, .68);
                    font-size : 15px;
                }
                
                .card-footer {
                    font-size: 1em;
                    position: static;
                    top: 0;
                    left: 0;
                    max-width: 100%;
                    padding: .5em 0.75em;
                    
                }
                
                
                .profile {
                    position: absolute;
                    top: -12px;
                    display: inline-block;
                    overflow: hidden;
                    width: 25px;
                    height: 25px;
                    margin: 0;

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
                    font-size: 1.3em;
                    
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
                    font-size: 1em;
                }
                `}
                </style>
           
            </div>
        
    )
}



const CartList=(props)=>{



    return(
        <div>
            <h5 className="font6 fontcolorOrange">{}</h5>
   
        <div className=" row profile-css projects">
   
        {props.items.map((c,i)=>
        
        <div key={i} className="col-lg-6 col-sm-12">
        <div  className="card">
        <div className="row col-12">
        <Link href={itemUrl+c.urlname}>
        <div className="col-lg-3">
        <img className="f-card-img-top" src={ImageUrl+c.images[0]}/>
        </div>
        </Link>
        <div className="col-lg-9">
        <h4 className="card-title font2 topicColor">{c.itemname}</h4>
        <div className="meta font6 subtopicColor">
            <a>{c.categery} - {c.subcategery}</a>
            <div className=" float-right"> 
            <a className="Icutprise font6"> <strike>Rs.{c.itemPrice}.00</strike>  </a> 
            <a className="Idiscount font6"> {c.itemdiscount}% </a>
            <a className="Iprise font6">&nbsp;Rs.{/*c.price*(100-c.discount)/100*/}</a>
            </div>
        </div>
        <div className="card-text font6">
        {c.content1.slice(0,150)}...
         </div>
        
        <div className="card-footer">
        <small className="font3 float-left">2020/25/5</small>
        
        <div className="card-footer">
           
              <a onClick={props.addtocart.bind(this,c._id,c.itemname)} className="btn btn-danger float-right btn-sm ismobile_disable"><img src="https://img.icons8.com/ios/25/ffffff/favorite-cart.png"/> &nbsp;Add to Cart</a>
             <a onClick={props.addtocart.bind(this,c._id,c.itemname)} className="btn btn-primary float-right btn-sm ismobile_disable"><img src="https://img.icons8.com/ios/25/ffffff/in-transit.png"/> &nbsp; Order Now</a>
           
        </div>
        
             </div>
    </div>


</div>    
            </div>
        </div>

        )}
      </div>
            <style jsx>{
                    `.unitcount-text{
                        width : 50px;
                    }
                    h5 {
                        font-size: 1.28571429em;
                        font-weight: 700;
                        line-height: 1.2857em;
                        margin: 0;
                    }
                    .profile-css{
                        margin-bottom : 20px;
                    }
                    .profile-css-topic{
                        padding : 20px 10px 10px 10px;
                    }
                    .card {
                        font-size: 1em;
                        overflow: hidden;
                        padding: 2%;
                        border: none;
                        border-radius: .28571429rem;
                        box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
                        transition: 0.5s;
                        margin : 0.5em 0 ;
                    
                    }
                    .card:hover{
                        box-shadow: 0 5px 5px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
                        transform: scale(1.001);
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
                    
                    .f-card-img-top {
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
                        font-size : 12px;
                    }
                    
                    .card-footer {
                        font-size: 1em;
                        position: static;
                        top: 0;
                        left: 0;
                        max-width: 100%;
                        padding: .5em 0.75em;
                        border-top: 1px solid rgba(0, 0, 0, .05) ;
                        background: #fff;
                    }
                
                    .card-inverse  {
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
      
    )
}


class Index extends Component {


    state = {
        items : [],
        totalprice : 0,

    }

    addtocart(itemid,name){
        var data = Cookie.getJSON('faverite-item');
        var jsonarray = []
        
        if(data){
            if(!data.includes(itemid))
            {jsonarray = [...data,itemid]
            Cookie.set('faverite-item',jsonarray);
            alert(`add ${name} to cart.`)
            }else{
            alert(`already added ${name} to cart.`) 
            }
        }else{
            jsonarray = [itemid]
            Cookie.set('faverite-item',jsonarray);
            alert(`add ${name} to cart.`)
        }
  
        
    }


    componentDidMount(){
        $(document).ready(function() {
           
          
            function checkWidth() {
                var windowwidth = $('.silde2image').width();
                var windowheight = $(window).height();
                    //if the window is greater than 440px wide then turn on jScrollPane..
                  //  $('.div1').addClass('desktop')
                  $('.silde2image').css({'max-height':windowwidth/3*2,'width':'100%'});
                  $('.silde2image').parent().css({'height':windowwidth/3*2,'width':'100%','background': '#ffffff'});
               
            }
            // Execute on load
            checkWidth();
            // Bind event listener
            $(window).resize(checkWidth);
    });
    this.setState({
        items : this.props.items
    })
    }

    
    render() { 

          return ( 
            <Layout>
             
                <div className="cart-menu col-lg-11 col-sm-12 mx-auto">
                <div>
                    <h2 className="font1 topicColor profile-css-topic">{this.props.topic}</h2>
                    
                </div>
                <div className="row col-12">
                <Imageside shop={this.props.shop?this.props.shop:null} ></Imageside>
                <Contentside shop={this.props.shop?this.props.shop:null} ></Contentside>
                </div>
                <br/>  
                <CartList items={this.state.items} catagerytype="Phones" addtocart ={(id,name)=>this.addtocart(id,name)} />
                </div>  
                  </Layout>
           );
      }
    
}

  
  export default Index;
  
