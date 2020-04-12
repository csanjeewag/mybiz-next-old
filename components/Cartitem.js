import React, { Component } from 'react';
import Layout from '../layouts/MainLayout';
import Cookie from "js-cookie";
import Link from 'next/link';
import {Url,ImageUrl,itemUrl} from './../constant/main';


const CartList=(props)=>{

   const  unitcount=(id,qty)=>{
      
        props.updateOrder(id,qty)
        
    }
    const deletefavItems=(itemid)=>{
        
        var array = Cookie.getJSON('faverite-item');
        const index = array.indexOf(itemid);
      
        if (index > -1) {
          array.splice(index, 1);
          }
          Cookie.set('faverite-item',array);
          props.componentDidMount();

    }

    return(
        <div className="menu2 row projects">
        
        {props.catageries.length!=0?props.catageries.map((c,i)=>
        <div key={i} className="card">
        <div className="popup-close-cartitem" onClick={()=>deletefavItems(c._id)} >x</div>
        <div className="row col-12">
        <Link href={itemUrl+c.urlname}>
        <div className="col-lg-3">
        <img className="f-card-img-top" src={ImageUrl+c.images[0]}/>
        </div>
        </Link>
        <div className="col-lg-9">
        <h4 className="card-title font2 topicColor">{c.itemlongname}</h4>
        <div className="meta font6 subtopicColor">
            <a>{c.categery} - {c.subcategery}</a>
            <div className=" float-right"> 
            <a className="Icutprise font6"> <strike>Rs.{c.itemPrice}.00</strike>  </a> 
            <a className="Idiscount font6"> {c.itemdiscount}% </a>
            <a className="Iprise font6">&nbsp;Rs.{c.itemPrice*(100-c.itemdiscount)/100}</a>
            </div>
        </div>
        <div className="card-text font6">
        {c.content1.slice(0,150)}...
         </div>
    
        <div className="card-footer">
        <small className="font3 float-left">2020/25/5</small>
        
        <div className="btn-group float-right" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-danger btn-sm float-right" id={'unitcount-'+c.id} aria-describedby="emailHelp" >{c.qty?c.qty:0}</button>      
        <button type="button" onClick={()=>unitcount(c._id,-1)}  className="btn btn-secondary btn-sm float-right"><img src="https://img.icons8.com/ios/20/ffffff/sort-down.png"/>&nbsp;</button>
        <button type="button" onClick={()=>unitcount(c._id,1)} className="btn btn-secondary btn-sm float-right"><img src="https://img.icons8.com/ios/20/ffffff/sort-up.png"/>&nbsp;</button>
        <button type="button" onClick={()=>unitcount(c._id,10)} className="btn btn-secondary btn-sm float-right">+10</button>
        </div>
        
             </div>
    </div>


</div>    
            </div>
        ):<div className="d-flex justify-content-center"><h4 className="card-title font2 topicColor">Loading...</h4></div>}
            
            
            
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
                    .menu2{
                        margin-bottom : 20px;
                    }
                    .menu2-topic{
                        padding : 20px 10px 10px 10px;
                    }
                    .card {
                        font-size: 1em;
                        overflow: hidden;
                        padding: 20px;
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
                    .popup-close-cartitem{
                        color: white;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: #01567e;
                        cursor: pointer;
                        font-size: 0.6rem;
                        width: 1.2rem;
                        height: 1.2rem;
                        top: 1rem;
                        right: 1rem;
                        position: absolute;
                        border-radius:10%;
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

const OrderSide=(props)=>{
    return(
        <div className="orderside" >
        <h4 className="font4 fontsizeE1-5 fontcolorSkyblue">My Order Bill</h4>

<div className="container fontsizeE-8">
  <div className="row">
    <div className="col-xs-12">
      <div className="table-responsive">
        <table summary="This table shows how to create responsive tables using Bootstrap's default functionality" className="table table-bordered table-hover">
          <caption className="text-center">An example of a responsive table based on </caption>
          <thead >
            <tr className=" fontcolorOrange">
              <th>Item Name</th>
              <th>catagery</th>
              <th>Discount</th>
              <th>Price</th>
              <th>Qty</th>
              <th className="fontcolorpink">Total</th>
            </tr>
          </thead>
          <tbody >
              {props.cartItems.map(c=>
                    (c.qty > 0)?
                  <tr key={c.id}  className="subtopicColor">
                  <td>{c.itemlongname}</td>
                  <td>{c.categery}-{c.subcategery}</td>
                  <td>{c.itemdiscount}%</td>
                  <td> <strike>Rs.{c.itemPrice}</strike> Rs.{c.itemPrice*(100-c.itemdiscount)/100}</td>
                  <td>{c.qty?c.qty:0}</td>
                  <td className="fontcolorpink">Rs.{(c.itemPrice*(100-c.itemdiscount)/100)*(c.qty?c.qty:0)}</td>
                </tr> : null
                )}
          
        </tbody>
          <tfoot>
            <tr>
              <td colSpan="5" className="text-center">Your Total price </td>
              <td className="fontcolorred">Rs.{props.totalprice}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</div>

            <style jsx>
            {`
            .orderside {
                
                overflow: auto;
            }
            `}
            </style>

        </div>
    )
}

class Index extends Component {


    state = {
        name : 'chanaka',
        items : [],
        totalprice : 0,

    }
    componentDidMount(){

     
        fetch(`${Url}itemforfavorite?fav=${Cookie.getJSON('faverite-item')}`)
        .then(res=>{ return res.status==200?res.json():null})
        .then(data=>{this.setState({items:data});})
    }

    updateOrder(id,qty){

        var tempitem = this.state.items;
        var itemsIndex = tempitem.findIndex(function(c) { 
            return c._id == id; 
        });

        tempitem[itemsIndex] = tempitem[itemsIndex].qty?tempitem[itemsIndex]:{...tempitem[itemsIndex],qty:0}
        tempitem[itemsIndex].qty = tempitem[itemsIndex].qty+qty;

        if(tempitem[itemsIndex].qty>=0){
            this.setState({
                items : [...tempitem],
                totalprice : this.gettotal(tempitem)
            })
        }
     
    }

    gettotal(items){
        var temparray = items;
        var total= 0;
        temparray.forEach(e => {
            total = (e.qty?(e.itemPrice*(100-e.itemdiscount)/100)*e.qty:0)+total;
        });
        return total;
    }
    
    render() { 
    
       
          return ( 
            <Layout>
              
                <div className="cart-menu">
                <div>
                    <h2 className="font1 topicColor menu2-topic">{this.props.topic}</h2>
                    
                </div>
                {this.state.items? 
                <div className="row">
                
                    <div className="col-lg-6 col-sm-12">
                  <CartList componentDidMount={()=>this.componentDidMount()} catageries={this.state.items} updateOrder={(id,qty)=>this.updateOrder(id,qty)}/>
                    </div>
                 
                    <div className="col-lg-6 col-sm-12">
                    <OrderSide  cartItems={this.state.items} totalprice={this.state.totalprice} />
                    </div>
                </div>
                 :<div className="d-flex justify-content-center"><h4 className="card-title font2 topicColor">Your cart is empty.</h4></div>}
                

                </div>
                <style jsx>
                {`
                .cart-menu{
                    margin : 20px;
                }
                
                `}</style>
                
                  </Layout>
           );
      }
    
}

export default Index; 
