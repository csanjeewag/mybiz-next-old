import React, { Component } from 'react';
import Layout from './../layouts/MainLayout';
import $ from 'jquery';

const CartList=(props)=>{

   const  unitcount=(id,qty)=>{

        props.updateOrder(id,qty)
        
    }

    return(
        <div className="menu2 row projects">
        {props.catageries.map(c=>
        
        <div key={c.id} className="card">
        <div className="row col-12">
        <div className="col-lg-3">
        <img className="f-card-img-top" src={c.imageUrl}/>
        </div>
        <div className="col-lg-9">
        <h4 className="card-title font2 topicColor">{c.topic}</h4>
        <div className="meta font6 subtopicColor">
            <a>{c.topic} - {c.id}</a>
            <div className=" float-right"> 
            <a className="Icutprise font6"> <strike>Rs.{c.price}.00</strike>  </a> 
            <a className="Idiscount font6"> {c.discount}% </a>
            <a className="Iprise font6">&nbsp;Rs.{c.price*(100-c.discount)/100}</a>
            </div>
        </div>
        <div className="card-text font6">
        {c.content.slice(0,150)}...
         </div>
        <div className="card-footer">
        <small className="font3 float-left">2020/25/5</small>
        
        <div class="btn-group float-right" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-danger btn-sm float-right" id={'unitcount-'+c.id} aria-describedby="emailHelp" >{c.qty}</button>      
        <button type="button" onClick={()=>unitcount(c.id,-1)}  class="btn btn-secondary btn-sm float-right"><img src="https://img.icons8.com/ios/20/000000/sort-down.png"/>&nbsp;</button>
        <button type="button" onClick={()=>unitcount(c.id,1)} class="btn btn-secondary btn-sm float-right"><img src="https://img.icons8.com/ios/20/000000/sort-up.png"/>&nbsp;</button>
        <button type="button" onClick={()=>unitcount(c.id,10)} class="btn btn-secondary btn-sm float-right">+10</button>
        </div>
        
             </div>
    </div>


</div>    
            </div>
        )}
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

<div class="container fontsizeE-8">
  <div class="row">
    <div class="col-xs-12">
      <div class="table-responsive">
        <table summary="This table shows how to create responsive tables using Bootstrap's default functionality" class="table table-bordered table-hover">
          <caption class="text-center">An example of a responsive table based on </caption>
          <thead >
            <tr className=" fontcolorOrange">
              <th>Item code</th>
              <th>Name</th>
              <th>Seller</th>
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
                  <td>{c.id}</td>
                  <td>{c.topic}</td>
                  <td>{c.seller}</td>
                  <td>{c.discount}%</td>
                  <td> <strike>Rs.{c.price}</strike> Rs.{c.price*(100-c.discount)/100}</td>
                  <td>{c.qty}</td>
                  <td className="fontcolorpink">Rs.{(c.price*(100-c.discount)/100)*c.qty}</td>
                </tr> : null
                )}
          
        </tbody>
          <tfoot>
            <tr>
              <td colspan="6" class="text-center">Your Total price </td>
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
        this.setState({
            items : this.props.catageries
        })
    }

    updateOrder(id,qty){
        var tempitem = this.state.items;
        var itemsIndex = tempitem.findIndex(function(c) { 
            return c.id == id; 
        });

        tempitem[itemsIndex].qty = tempitem[itemsIndex].qty+qty;
        if(tempitem[itemsIndex].qty>=0){
            this.setState({
                items : [...tempitem],
                totalprice : this.gettotal()
            })
        }
     
    }

    gettotal(){
        var temparray = this.state.items;
        var total= 0;
        temparray.forEach(e => {
            total = ((e.price*(100-e.discount)/100)*e.qty)+total;
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
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                    <CartList catageries={this.state.items} updateOrder={(id,qty)=>this.updateOrder(id,qty)}/>
                    </div>
                 
                    <div className="col-lg-6 col-sm-12">
                    <OrderSide  cartItems={this.state.items} totalprice={this.state.totalprice} />
                    </div>
                </div>
                

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
