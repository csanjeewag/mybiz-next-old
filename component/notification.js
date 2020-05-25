import React, { Component } from 'react';
import Link from 'next/link';
import Cookie from "js-cookie";
import {ImageUrl,itemUrl,myoderUrl,Url} from '../constant/main'
import $ from 'jquery';
class Index extends Component {

	constructor() {
        super();
		this.state = {
			notfication:[]
		}
    }
    

    componentDidMount(){
	
        
    }
    render() { 
        
    	const deletenotification=(id)=>{
			fetch(`${Url}deletenotification/${id}`);
			this.props.loadnotification();
            }
		const close=()=>{
            $('.notification-side-bar').hide(100)
        }
        
        
          return ( 
    <div className="notification-side-bar" style={{display:'none'}}>
      <div className="show-header-cart">
        
		<div className="s-full show-header-cart"></div>

		<div className="header-cart flex-col-l p-l-65 p-r-25">
			<div className="header-cart-title flex-w flex-sb-m p-b-8">
				<span className="mtext-103 cl2">
					Notification
				</span>

				<div onClick={close} className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 ">
					<i className="zmdi zmdi-close"></i>
				</div>
			</div>
			
			<div className="header-cart-content">
				<ul className="header-cart-wrapitem w-full">

                {this.props.notfication.map((x,i)=>
                
                <li key={i} className="header-cart-item flex-w flex-t m-b-12">
					<div onClick={deletenotification.bind(this,x._id)} className="header-cart-item-img">
					
                    {x.imageUrl?<img src={x.imageUrl} alt="Avatar" className="avatar float-left"/>:null}
					
					</div>

					<div className="header-cart-item-txt">
						<a onClick={deletenotification.bind(this,x._id)} href={x.link?x.link:'#'} className="header-cart-item-name m-b-18 hov-cl1 trans-04">
                        {x.content} 
						</a>

						<span className="header-cart-item-info">
                        {x.name}
                        <span onClick={deletenotification.bind(this,x._id)}><i data-dismiss="alert" aria-label="Close">x</i> </span>
						</span>
					</div>
				</li>

               
                )}
					

				</ul>
				
				<div className="w-full">
					<div className="header-cart-total w-full p-tb-40">
						
					</div>

					<div className="header-cart-buttons flex-w w-full">
						<a href={myoderUrl} className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10">
							create shop
						</a>

						<a href={myoderUrl} className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10">
							contact
						</a>
					</div>
				</div>
			</div>
		</div>
   
	</div>
    <style jsx >
            {`
            .notification-side-bar{
                background:black;
            }
            `}
        </style>
    </div>
           );
      }
    
}

export default Index; 
