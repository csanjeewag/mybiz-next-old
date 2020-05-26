import React, { Component } from 'react';
import Router from 'next/router';
import Layout from '../layouts/MainLayout';
import Cookie from "js-cookie";
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import {Url,ImageUrl,itemUrl,cartitemMSG,cartUserNotlogin,cartUserdetails,myshopmUrl} from '../constant/main';
import {mycart} from '../constant/page';

const CartList=(props)=>{

   const  unitcount=(id,qty)=>{
      
        props.updateOrder(id,qty)
        
    }
	const deletefavItems=(itemid)=>{

		var array = Cookie.getJSON('faverite-item');
		var arraylist = Cookie.getJSON('faverite-item-list');
        const index = array.indexOf(itemid);
      
        if (index > -1) {
		  array.splice(index, 1);
		 arraylist.splice(index,1);
		  }
		  Cookie.set('faverite-item-list',arraylist);
          Cookie.set('faverite-item',array);
          this.componentDidMount();

    }

    return(
        <div className="menu2 row projects col-12">
        
        {props.catageries.length!=0?props.catageries.map((c,i)=>
        <div className="col-12" key={i}>
        {/**desktop version */}
        <div className="card" >
        <div className="popup-close-cartitem" onClick={()=>deletefavItems(c._id)} >x</div>
        <div className="row">
        <Link href={itemUrl+c.urlname}>
        <div className="col-lg-3 col-4">
        <img className="f-card-img-top lazyload" src={ImageUrl+c.images[0]}/>
        </div>
        </Link>
        <div className="col-lg-9 col-8">
        <h4 className="mtext-105 cl2 txt-center p-b-10 topicColor">{c.itemlongname}</h4>
        <div className="meta mtext-105 cl2 txt-center p-b-10 subtopicColor">
            <a>{c.categery} - {c.subcategery}</a>
            <div className=" float-right"> 
            <a className="Icutprise font6"> {c.itemdiscount>0?<strike>Rs.{c.itemPrice}.00</strike>:null}  </a> 
            <a className="Idiscount font6"> {c.itemdiscount>0?c.itemdiscount+'%':''} </a>
            <a className="Iprise font6" style={{color:'red'}}>&nbsp;Rs.{c.itemPrice*(100-c.itemdiscount)/100}</a>
            </div>
        </div>
        <Link key={i} href={myshopmUrl+c.shop[0].shopurl}><a className=" fontsizeE1 float-left m-content-righ">{c.shop[0].shopName} in {c.shop[0].town} &nbsp;&nbsp;</a>
                </Link>

                            <div className="wrap-num-product flex-w m-r-5 m-tb-10 float-right">
										<div onClick={()=>unitcount(c._id,-1)} className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
											<i className="fs-16 zmdi zmdi-minus"></i>
										</div>

										<input className="mtext-104 cl3 txt-center num-product" type="number" name="num-product" value={c.qty?c.qty:0}/>

										<div onClick={()=>unitcount(c._id,+1)} className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
											<i className="fs-16 zmdi zmdi-plus"></i>
										</div>
									</div>
        {/*<div className="btn-group float-right" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-danger btn-sm float-right" id={'unitcount-'+c.id} aria-describedby="emailHelp" >{c.qty?c.qty:0}</button>      
        <button type="button" onClick={()=>unitcount(c._id,-1)}  className="btn btn-secondary btn-sm float-right"><img src="https://img.icons8.com/ios/18/ffffff/sort-down.png"/>&nbsp;</button>
        <button type="button" onClick={()=>unitcount(c._id,1)} className="btn btn-secondary btn-sm float-right"><img src="https://img.icons8.com/ios/18/ffffff/sort-up.png"/>&nbsp;</button>
        <button type="button" onClick={()=>unitcount(c._id,10)} className="btn btn-secondary btn-sm float-right">+10</button>
        </div>*/}
                
    </div>


</div>    
            </div>
        {/**************** */}
      
    
            
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
                        padding: 5px;
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
                        font-size : 0.9em;
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
          <caption className="text-center">{mycart.ordermsg} </caption>
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
              {props.cartItems.map((c,i)=>
                    (c.qty > 0)?
                  <tr key={i}  className="subtopicColor">
                  <td>{c.itemlongname}</td>
                  <td>{c.categery}-{c.subcategery}</td>
                  <td>{c.itemdiscount>0?c.itemdiscount+'%':'no'}</td>
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

const SendorderSide=(props)=>{

    return(
        <div>
        <h4 className="font4 fontsizeE1-25 fontcolorSkyblue">Your Details</h4>
        {props.user?
        <div className="user">
        <label  className="font2 fontsizeE1 topicColor">Hi {props.user.name}</label>
        <div className="field-wrap col-lg-12 col-sm-12">
         <label  className="font2 labelf1">Contact</label>
         <input className={'font6 inputf1 '} onChange={props.handleChangeUserDetails}  name='contact' value={props.user.contact}  />
         <span className="form-error">{''}</span>
         </div>

         <div className="field-wrap col-lg-12 col-sm-12">
         <label  className="font2 labelf1">Address</label>
         <input className={'font6 inputf1 '}  onChange={props.handleChangeUserDetails}  name='address' value={props.user.address}  />
         <span className="form-error">{''}</span>
         </div> 
         <p className="massage-cart fontsizeE-7">
            {cartUserdetails}
        </p>
        </div>:<p className="massage-cart fontsizeE-7">
            {cartUserNotlogin}
        </p>
        }
         <h4 className="font4 fontsizeE1-25 fontcolorSkyblue">Special massage</h4>
        <p className="massage-cart fontsizeE-7">{cartitemMSG}</p>
        {props.cartItems.map((x,i)=>
        (x.qty > 0)?
        
         <div key={i} className="field-wrap col-lg-12 col-sm-12">
         <label  className="font2 labelf1">{x.itemlongname}</label>
         <textarea className={'font6 inputf1 '}  rows="2" required  name={x._id} value={x.msg} onChange={props.handleChangeSpecialMSG} />
         <span className="form-error">{''}</span>
         </div>:null  
            )}
          
          <div className="d-flex justify-content-end">
            <button type="button" className="font6  btn btn-submit "  required  onClick={props.handleSubmit} > Submit </button>
        </div>
        <style jsx>{
            `
            .labelf1 {
                position: relative;
                transform: translateY(5px);
                left: 5px;
                color: #01567e;
                transition: all 0.25s ease;
                -webkit-backface-visibility: hidden;
                pointer-events: none;
                font-size: 1em;
            }
            .labelf1 .req {
                margin: 2px;
                color: #01567e;
            }
            .labelf1.active {
                left: 13px;
                transform: translateY(10px);
                font-size: 0.9em;
            }
            .labelf1.active .req {
                opacity: 0;
            }
            .labelf1.highlight {
                color: #023957;
            }
            .inputf1 {
                font-size: 0.9em;
                display: block;
                width: 100%;
                padding: 5px 10px;
                background: #e9e9e97d;
                background-image: none;
                border: none;
                border: 1.5px solid #01567e;
                color: darkblue;
                border-radius: 0;
                transition: border-color 0.5s ease;
            }
            .inputf1:focus, textarea:focus {
                outline: 0;
                border-color: #023957;
            }
            textarea {
                resize: vertical;
            }
            .field-wrap {
                position: relative;
            
            }
            .btn-addnewshop{
                background: #01567e;
                color:white; 
            }
            .btn-submit{
                background: #01567e;
                color:white; 
                width:100%;
                margin-top: 3rem;
            }
            .form-error{
                color : red;
                font-size : 0.8rem;
            }
            .input-error{
                border-color: red;
            }
            .massage-cart{
                padding:2px;
                left: 13px;
                font-size : 0.8rem;
                color : #c41b00;

            }
            `
        }</style>
        </div>

    )

}

class Index extends Component {


    state = {
        name : 'chanaka',
        items : [],
        user:{},
        totalprice : 0,


    }

    handleChangeSpecialMSG= evt =>{

        var items = this.state.items;
        items.find(function(e){
             if(e._id == evt.target.name){
                 e.userMsg = evt.target.value;
             }
        });

        this.setState({
            items : items,

        })
  
    }

    handleChangeUserDetails= evt =>{

        var user = this.state.user;
            if(evt.target.name=='contact'){
            user.contact = evt.target.value
            }
            else if(evt.target.name=='address'){
                user.address = evt.target.value 
            }
        this.setState({
            user : user,

        })
  
    }


    componentDidMount(){

     
        fetch(`${Url}itemforfavorite?fav=${Cookie.getJSON('faverite-item')}`)
        .then(res=>{ return res.status==200?res.json():null})
        .then(data=>{this.setState({items:data});})

        this.setState({
            user : Cookie.getJSON('user')
        })
    }

    updateOrder(id,qty){

        var tempitem = this.state.items;
        var itemsIndex = tempitem.findIndex(function(c) { 
            return c._id == id; 
        });

        tempitem[itemsIndex] = tempitem[itemsIndex].qty?tempitem[itemsIndex]:{...tempitem[itemsIndex],qty:0,userMsg:''}
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

    handleSubmit = evt => {
        evt.preventDefault();

        if(!Cookie.getJSON('user')){
            alert('you are not sign in, please sign in.');
           // this.props.signinuser
        }
        else{
        var items = this.state.items.filter(e=>e.qty>0);
        var user  = Cookie.getJSON('user');
        user.contact = this.state.user.contact;
        user.address = this.state.user.address;

        const data = new FormData();
        data.append('jsonbody', JSON.stringify(items));
        data.append('user', JSON.stringify(user));
    
            fetch('/api/createorder',{
                method: 'POST',
                headers: {
                },
                body:data
            
                }
            )
            .then(response => { return response.json(); } )
            .then(data => { if(data!=undefined){alert(data.msg); Router.reload()} })
            .catch(error => console.log(error))
            }
    
    };

    
    render() { 
    
       
          return ( 
            <Layout>
              
              
                <div className="cart-menu">
                <div>
                    <h2 className="font1 menu2-topic fontsizeE2">{this.props.topic}</h2>
                    
                </div>
                {this.state.items? 
                <div className="row">
                
                    <div className="col-lg-6 col-sm-12">
                  <CartList componentDidMount={()=>this.componentDidMount()} catageries={this.state.items} updateOrder={(id,qty)=>this.updateOrder(id,qty)}/>
                    </div>
                 
                    <div className="col-lg-6 col-sm-12">
                    <OrderSide  cartItems={this.state.items} totalprice={this.state.totalprice} />
                    {this.state.totalprice>0?
                    <SendorderSide user={this.state.user} handleChangeUserDetails={this.handleChangeUserDetails} cartItems={this.state.items} handleChangeSpecialMSG={this.handleChangeSpecialMSG} handleSubmit={this.handleSubmit} />:null
                    }
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
