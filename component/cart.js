import React, { Component } from 'react';
import Link from 'next/link';
import Cookie from "js-cookie";
import {ImageUrl,itemUrl,myshopmUrl} from '../constant/main'

class Index extends Component {

	constructor() {
        super();
		this.state = {
			items:[]
		}
	}
	loaditems=()=>{
		this.setState({
			items:Cookie.getJSON('faverite-item-list')?Cookie.getJSON('faverite-item-list'):null
		})
	}
    componentDidMount(){
		this.loaditems();
	}
	deletefavItems=(itemid)=>{

		var array = Cookie.getJSON('faverite-item');
		var arraylist = Cookie.getJSON('faverite-item-list');
        const index = array.indexOf(itemid);
      
        if (index > -1) {
		  array.splice(index, 1);
		 arraylist.splice(index,1);
		  }
		  Cookie.set('faverite-item-list',arraylist);
          Cookie.set('faverite-item',array);
          this.loaditems();

    }
    render() { 
		
		
        
          return ( 
 
      <div className="wrap-header-cart js-panel-cart">
		<div className="s-full js-hide-cart"></div>

		<div className="header-cart flex-col-l p-l-65 p-r-25">
			<div className="header-cart-title flex-w flex-sb-m p-b-8">
				<span className="mtext-103 cl2">
					My favorites
				</span>

				<div className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart">
					<i className="zmdi zmdi-close"></i>
				</div>
			</div>
			
			<div className="header-cart-content">
				<ul className="header-cart-wrapitem w-full">
					{this.state.items!=null?this.state.items.map((x,i)=>
					<li key={i} className="header-cart-item flex-w flex-t m-b-12">
					<div className="header-cart-item-img" onClick={this.deletefavItems.bind(this,x._id)} >
						<img className="lazyload" src={ImageUrl+x.image} alt="IMG"/>			
					</div>

					<div className="header-cart-item-txt">
						<a href={itemUrl+x.urlname+'?ide='+x._id} className="header-cart-item-name hov-cl1 trans-04 stext-104">
							{x.itemname} <span style={{color:'white'}} className="hov-btn1 bg1 bor1 p-lr-5">view</span>
						</a>
						<span className="header-cart-item-info">
						<p className="font6 m-content-right"><strike className="fontsizeE-9">Rs.{x.itemPrice}.00</strike><span className="fontcolorOrange fontsizeE-9">{x.itemdiscount}%</span><span className="fontcolorred fontsizeE1">&nbsp;Rs.{x.itemPrice*(100-x.itemdiscount)/100}</span></p>
						</span>
						<span >
						</span>
					</div>

				</li>
					):null}
					

				</ul>
				
			{/*	<div className="w-full">
					<div className="header-cart-total w-full p-tb-40">
						
					</div>

					<div className="header-cart-buttons flex-w w-full">
						<a href={myoderUrl} className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10">
							View Cart
						</a>

						<a href={myoderUrl} className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10">
							Check Out
						</a>
					</div>
					</div>*/}
			</div>
		</div>
	</div>

           );
      }
    
}

export default Index; 
