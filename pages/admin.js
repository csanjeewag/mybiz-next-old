import React, { Component } from 'react';
import Head from 'next/head';
import Layout from './../layouts/MainLayout';
import $ from 'jquery';
import SubNavBar from './../layouts/SubNavbar';
import  {Url,ImageUrl,adcreateitemUrl,adupdateshopUrl,itemUrl,adupdateitemUrl, myshopmUrl,adminUrl,createcategorUrl,updatecategoryUrl,web} from './../constant/main';
import Link from 'next/link';
import Cookie from "js-cookie";
//import Footer from './../components/Footer';
import ErrorPage from './../layouts/error';
import Router from 'next/router';
import Slider from "react-slick";
/** */
import Header from '../component/header';
import Footer from '../component/footer';

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
	  <div
		className={className}
		style={{ display: "block", background: "red" }}
		onClick={onClick}
	  />
	);
  }
  
  function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
	  <div
		className={className}
		style={{ display: "block", background: "green" }}
		onClick={onClick}
        />
	);
  }
  function Arrow(props) {
	const { className, style, onClick } = props;
	return (
	  <div
		className={className}
		style={{ display: "block", background: "gray" ,color:'purple'}}
		onClick={onClick}
        />
	);
  }
const TypeSlide=(props)=>{

    return(
        
        <div>  
        <h4 className="font1 p-10">All Category</h4>
          <div>

            <ul className="list-group">
            <li>
            <Link href={createcategorUrl}><button className="btn btn-success float-left btn-sm fontsizeE-9"> &nbsp;Create-Category</button></Link> 
            </li>
            {props.types.map((x,i)=>
                <li key={i} className="list-group-item"> 
                <Link href={updatecategoryUrl+x._id}><a className="float-left btn-sm fontsizeE-9"> <img src="https://img.icons8.com/ios-glyphs/15/ffffff/update-tag.png"/> {x.index}&nbsp;- {x.type}&nbsp;</a></Link> 
             

                    {x.subtype.map((s,y)=><a key={y}>&nbsp;{s.name}, </a>)}
                </li>
                )}
        
            </ul>
            </div>
          <br/>
        </div>
        
    )
}

const ShopList=(props)=>{



  return(
      <div className="order-table">
      <div className="item-details font6">
      <br/>
      <h4 className="font1 p-10">All shop</h4>
      <br/>
      
      </div>
           
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">image</th>
            <th scope="col">validity Admin</th>
            <th scope="col">validity</th>
            <th scope="col">shop Details</th>
            <th scope="col">Location</th>
            <th scope="col">User</th>
            <th scope="col">Index</th>
            <th scope="col">Go</th>
 
            
          </tr>
        </thead>
        <tbody className="projects">
      
      {props.allshop.map((x,i)=>
          <tr key={i}>
          <th>
              <div className="pointer">
                  <Link href={myshopmUrl+x.urlname}><img width="50px" src={ImageUrl+x.images[0]} /></Link>
           <p className="fontsizeE-8">{x.createDate}</p>
           </div></th>
          <td> 
              <div className="item-details font6"> 
                  <p className="topicColor">{x.isvalidA?'valid':'removed'} </p>
                  <p >
                  <img onClick={props.updateshop.bind(this,x._id,{isvalidA:true})}  src="https://img.icons8.com/cute-clipart/30/000000/save-close.png"/>
                  <img onClick={props.updateshop.bind(this,x._id,{isvalidA:false})} src="https://img.icons8.com/color/30/000000/close-window.png"/>
        
                  </p>
              </div> 
          </td>
          <td> 
              <div className="item-details font6"> 
                  <p className="topicColor">{x.isvalid?'valid':'removed'} </p>
                  <p >
                  <img onClick={props.updateshop.bind(this,x._id,{isvalid:true})}  src="https://img.icons8.com/cute-clipart/30/000000/save-close.png"/>
                  <img onClick={props.updateshop.bind(this,x._id,{isvalid:false})} src="https://img.icons8.com/color/30/000000/close-window.png"/>
        
                  </p>
              </div> 
          </td>
          <td> 
              <div className="item-details font6"> 
                  <p className="topicColor">{x.shopName} </p>
                  <p>{x.categery} </p>
              </div> 
          </td>
          <td> 
              <div className="item-details font6"> 
                  <p className="topicColor">{x.district} </p>
                  <p>{x.town} </p>
              </div> 
          </td>

          <td> 
              <div className="item-details font6"> 
                  <p className="topicColor">{x.user.email} </p>
                  <p>{x.user.name} </p>
              </div> 
          </td>

          <td>
              <div className="item-details font6"> 
              <p className="topicColor" >m:{x.mIndex} &nbsp; s:{x.sIndex} </p>
              </div> 
              <div className="item-details font6 btn-group btn-group-sm">
              <button onClick={props.loadpromt.bind(this,x._id,'shopmIndex')}  className="btn btn-primary float-left btn-sm fontsizeE-9"> <img src="https://img.icons8.com/ios-glyphs/15/ffffff/update-tag.png"/> &nbsp;M</button>
              <button onClick={props.loadpromt.bind(this,x._id,'shopsIndex')}  className="btn btn-primary float-left btn-sm fontsizeE-9"> <img src="https://img.icons8.com/ios-glyphs/15/ffffff/update-tag.png"/> &nbsp;S</button>
              </div> 
          </td>
          <td className="user-details font6">
          <div className="item-details font6"> 
          <Link href={adupdateshopUrl+x._id}><a href="#" className="btn btn-danger float-left btn-sm fontsizeE-9"> &nbsp;update</a></Link> 
            </div> 
            <div className="item-details font6"> 
            <Link href={adminUrl+'?id='+x.user._id}><a href="#" className="btn btn-success float-left btn-sm fontsizeE-9"> &nbsp;items  &nbsp;</a></Link> 
            </div>
          
          </td>

          </tr>
          )}
      
        </tbody>
      </table>
      <style jsx>
      {`
      .order-table{
        overflow : auto;
      }
      .item-details p{
        margin-top: 0;
        margin-bottom: 0;
      }
      .item-details img{
        cursor: pointer;
      }
      `}
      </style>
      </div>
      
  )
}

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

    var settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 2000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />

      };

    return (
        <section className="sec-product-detail bg0 p-t-65 p-b-0">
		<div className="container">
			<div className="row">
			<div className="col-md-6 col-lg-7 p-b-30">
					<div className="p-l-25 p-r-30 p-lr-0-lg">
						<div className="wrap-slick3 flex-sb flex-w">
							<div className="wrap-slick3-dots">
							{/*props.shop.images.map((x,i)=>
							<img className="d-block w-100 silde2image pb-3" src={ImageUrl+x} alt="first slide" width="100%" />
							)*/}
							</div>
							<div className="wrap-slick3-arrows flex-sb-m flex-w"></div>

							<div className="slick3 gallery-lb">
                            <Slider {...settings}>
							{props.shop.images.map((x,i)=>
							<div key={i} className="item-slick3">
							<div className="wrap-pic-w pos-relative">
							<img className="d-block w-100 silde2image" src={ImageUrl+x} alt="first slide" style={{maxHeight:'600px',height:'auto',width:'100%'}}/>

								<a className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href={ImageUrl+x}>
									<i className="fa fa-expand"></i>
								</a>
							</div>
						</div>
							)}
	
									</Slider>
								
                            </div>
						</div>
					</div>
				</div>
					
				<div className="col-md-6 col-lg-5 p-b-30">
					<div className="p-r-50 p-t-5 p-lr-0-lg">
						<h4 className="mtext-105 cl2 js-name-detail p-b-14 subtopicColor">
						{props.shop.shopName}
						</h4>
						<a className=" font6 float-right">{props.shop.contact1+(props.shop.contact2?'/'+props.shop.contact2:'')} </a> 
						<span className="mtext-106 cl2">
						<a className="font6">{props.shop.district+'/'+props.shop.town} </a>
						</span>

						<p className="stext-102 cl3 p-t-23">
						{props.shop.content1}
						</p>
						<p className="stext-102 cl3 p-t-23">
						{props.shop.content2}
						</p>
						
						<div className="menu2-specification">
						{props.shop.shopDetail&&props.shop.shopDetail.length>0?<h5 className="menu2-subcard-title font2 fontcolorSkyblue fontsizeE1">Specification</h5>:null}
						<div className=" card-text font6">
							<div className="row">
								{props.shop.shopDetail?props.shop.shopDetail.map((x,i)=>
									<div className="col-lg-6 col-sm-12" key={i}>
									<a className="float-left menu2-speca"><img src="https://img.icons8.com/metro/15/000000/collect.png"/>&nbsp; &nbsp; {x.name} &nbsp;: </a> <a className="float-left profile-specb"> &nbsp; {x.value}</a>
									</div>
									):null}
								</div>
                       		</div>
					   </div>
					
						{/**  */}
						<div className="flex-w flex-m p-l-100 p-t-40 respon7">
							<div className="flex-m bor9 p-r-10 m-r-11">
								<a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100" data-tooltip="Add to Wishlist">
									<i className="zmdi zmdi-favorite"></i>
								</a>
							</div>

							<a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Facebook">
								<i className="fa fa-facebook"></i>
							</a>

							<a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Twitter">
								<i className="fa fa-twitter"></i>
							</a>

							<a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Google Plus">
								<i className="fa fa-google-plus"></i>
							</a>
						</div>
                        <div>
                        <Link href={adcreateitemUrl+'?id='+props.shop._id+'&shopname='+props.shop.shopName+'&shopDistrict='+props.shop.district+'&shopTown='+props.shop.town+'&shopurl='+props.shop.urlname}><a data-tooltip="Add new items to your shop" href="#" className="btn btn-outline-primary btn-sm fontsizeE-9"><i className="zmdi zmdi-collection-plus"></i> &nbsp;add new item</a></Link>
                        <Link href={adupdateshopUrl+props.shop._id}><a data-tooltip="you can update your shop details" href="#" className="btn btn-outline-danger btn-sm fontsizeE-9"><i className="zmdi zmdi-edit"></i> &nbsp;update shop</a></Link>
                        </div>
					</div>
				</div>
			</div>

		</div>

	</section>

        
    )
}



const CartList=(props)=>{



    return(
        <div className="order-table">
      
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">item</th>
              <th scope="col">state Admin</th>
              <th scope="col">state</th>
              <th scope="col">Item Details</th>
              <th scope="col">M Index</th>
              <th scope="col">S Index</th>
              <th scope="col">Price</th>
              <th scope="col">Update</th>
              
            </tr>
          </thead>
          <tbody className="projects">
        
        {props.items.map((x,i)=>
            <tr key={i}>
            <th>
                <div className="pointer">
                    <Link href={itemUrl+x.urlname}><img width="50px" src={ImageUrl+x.images[0]} /></Link>
             <p className="fontsizeE-8">{x.createDate}</p>
             </div></th>
            <td> 
                <div className="item-details font6"> 
                    <p className="topicColor">{x.isvalidA?'valid':'removed'} </p>
                    <p >
                    <img onClick={props.updateitem.bind(this,x._id,{isvalidA:true})}  src="https://img.icons8.com/cute-clipart/30/000000/save-close.png"/>
                    <img onClick={props.updateitem.bind(this,x._id,{isvalidA:false})} src="https://img.icons8.com/color/30/000000/close-window.png"/>
          
                    </p>
                </div> 
            </td>
            <td> 
                <div className="item-details font6"> 
                    <p className="topicColor">{x.isvalid?'valid':'removed'} </p>
                    <p >
                    <img onClick={props.updateitem.bind(this,x._id,{isvalid:true})}  src="https://img.icons8.com/cute-clipart/30/000000/save-close.png"/>
                    <img onClick={props.updateitem.bind(this,x._id,{isvalid:false})} src="https://img.icons8.com/color/30/000000/close-window.png"/>
          
                    </p>
                </div> 
            </td>
            <td> 
                <div className="item-details font6"> 
                    <p className="topicColor">{x.itemlongname} </p>
                    <p>{x.categery}/{x.subcategery} </p>
                </div> 
            </td>
            <td>
                <div className="item-details font6"> 
               <p className="topicColor" >{x.mIndex} </p>
                </div> 
                <div className="item-details font6 btn-group btn-group-sm">
                <button onClick={props.loadpromt.bind(this,x._id,'mIndex')}  className="btn btn-primary float-left btn-sm fontsizeE-9"> <img src="https://img.icons8.com/ios-glyphs/15/ffffff/update-tag.png"/> &nbsp;Index</button>
               
                </div> 
            </td>
            <td>
                <div className="item-details font6"> 
               <p className="topicColor" >{x.sIndex} </p>
                </div> 
                <div className="item-details font6 btn-group btn-group-sm">
                <button onClick={props.loadpromt.bind(this,x._id,'sIndex')}  className="btn btn-primary float-left btn-sm fontsizeE-9"> <img src="https://img.icons8.com/ios-glyphs/15/ffffff/update-tag.png"/> &nbsp;Index</button>
               
                </div> 
            </td>
          
            <td>
                <div className="item-details font6"> 
               <p className="topicColor" > <strike className="fontsizeE-8">Rs.{x.itemPrice}.00</strike> <span className="fontcolorOrange fontsizeE-8">{x.itemdiscount}% </span>  Rs.{x.itemPrice*(100-x.itemdiscount)/100} </p>
                </div> 
                <div className="item-details font6 btn-group btn-group-sm">
                <button onClick={props.loadpromt.bind(this,x._id,'price')}  className="btn btn-primary float-left btn-sm fontsizeE-9"> <img src="https://img.icons8.com/ios-glyphs/15/ffffff/update-tag.png"/> &nbsp;price</button>
                <button onClick={props.loadpromt.bind(this,x._id,'discount')}  className="btn btn-dark float-left btn-sm fontsizeE-9"><img src="https://img.icons8.com/ios-glyphs/15/ffffff/update-tag.png"/> &nbsp; discount</button>
               
                </div> 
            </td>
            <td className="user-details font6">
            <div className="item-details font6"> 
            <Link href={adupdateitemUrl+x._id}><a href="#" className="btn btn-danger float-left btn-sm fontsizeE-9"><img src="https://img.icons8.com/ios-glyphs/20/ffffff/update-tag.png"/> &nbsp;update</a></Link> 
              </div> 
            
            </td>
            </tr>
            )}
        
          </tbody>
        </table>
        <style jsx>
        {`
        .order-table{
          overflow : auto;
        }
        .item-details p{
          margin-top: 0;
          margin-bottom: 0;
        }
        .item-details img{
          cursor: pointer;
        }
        `}
        </style>
        </div>
        
    )
}

const OrderTable=(props)=>{

  return(
    <div className="order-table">

  <div className="btn-group btn-group-sm col-12" role="group" aria-label="Basic example">
    <button onClick={props.getorderbystate.bind(this,'all')} type="button" className="btn btn-secondary"><img src="https://img.icons8.com/ios/20/ffffff/show-all-views.png"/> All</button>
    <button onClick={props.getorderbystate.bind(this,'new')} type="button" className="btn btn-secondary"><img src="https://img.icons8.com/ios/20/ffffff/new.png"/> new</button>
    <button onClick={props.getorderbystate.bind(this,'mail')} type="button" className="btn btn-secondary"><img src="https://img.icons8.com/ios/20/ffffff/upload-mail.png"/> email</button>
    <button onClick={props.getorderbystate.bind(this,'confirm')} type="button" className="btn btn-secondary"><img src="https://img.icons8.com/ios/20/ffffff/checked-checkbox.png"/> confirm</button>
    <button onClick={props.getorderbystate.bind(this,'remove')} type="button" className="btn btn-secondary"> <img src="https://img.icons8.com/ios/20/ffffff/trash.png"/> removes</button>
  </div>

  <table className="table table-striped">
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">state</th>
        <th scope="col">Item Details</th>
        <th scope="col">Price</th>
        <th scope="col">User details</th>
        <th scope="col">Massages</th>
      </tr>
    </thead>
    <tbody className="projects">
  
  {props.orders.map((x,i)=>
      <tr key={i}>
      <th><div><img width="50px" src={ImageUrl+x.item.images[0]} />
       <p className="fontsizeE-8">{x.createDate}</p>
       </div> </th>
      <td> 
          <div className="item-details font6"> 
              <p className="topicColor">{x.state} </p>
              <p>
              <img onClick={props.updateorder.bind(this,x._id,'new')} src="https://img.icons8.com/ios/25/000000/new.png"/> 
              <img onClick={props.updateorder.bind(this,x._id,'mail')} src="https://img.icons8.com/ios/25/000000/upload-mail.png"/> 
              <img onClick={props.updateorder.bind(this,x._id,'confirm')} src="https://img.icons8.com/ios/25/000000/checked-checkbox.png"/>
              <img onClick={props.updateorder.bind(this,x._id,'remove')} src="https://img.icons8.com/ios/25/000000/trash.png"/> </p>
          </div> 
      </td>
      <td> 
          <div className="item-details font6"> 
              <p className="topicColor">{x.item.itemlongname} </p>
              <p>{x.item.categery}/{x.item.subcategery} </p>
          </div> 
      </td>
      <td>
          <div className="item-details font6"> 
          <p className="topicColor">Rs.{x.item.itemPrice*(100-x.item.itemdiscount)/100} x {x.item.qty} = Rs.{x.item.itemPrice*(100-x.item.itemdiscount)/100*x.item.qty} </p>
          <p > <strike className="fontsizeE-8">Rs.{x.item.itemPrice}.00</strike> <span className="fontcolorOrange fontsizeE-8">{x.item.itemdiscount}% </span>  Rs.{x.item.itemPrice*(100-x.item.itemdiscount)/100} </p>
          </div> 
      </td>
      <td className="user-details font6">
      <div className="item-details font6"> 
          <p className="topicColor">{x.user.name}</p>
          <p > {x.user.email} - {x.user.contact} </p>
        </div> 
      
      </td>
      <td className="user-details font6">
      <div className="item-details font6"> 
          <p className="topicColor">cus: {x.userMsg?x.userMsg:'--'}</p>
          <p >you: {x.sellerMsg?x.sellerMsg:'--'}</p>
          <button className="btn btn-sm btn-danger" onClick={props.sellerMassege.bind(this,x._id,x.state)}>send msg</button>
        </div> 
      
      </td>
      </tr>
      )}
  
    </tbody>
  </table>
  <style jsx>
  {`
  .order-table{
    overflow : auto;
  }
  .item-details p{
    margin-top: 0;
    margin-bottom: 0;
  }
  .item-details img{
    cursor: pointer;
  }
  `}
  </style>
  </div>
  
  )
  }
  

class Index extends Component {

  constructor() {
		super();
		this.state = {
      totalprice : 0,
      orders:[],
      myshops:[],
      types:[],
      istable:false,
      querys:{}

  }
	}


    //update item
    updateitem=(id,update)=>{
        $('.load').show();
        $('img').attr("disabled", true);
        const data = new FormData();
        
        var jsonbody = update;
        data.append('jsonbody', JSON.stringify(jsonbody));
       data.append('user', JSON.stringify(Cookie.getJSON('user')));

        fetch('/api/adminupdateitemDetails/'+id,{
            method: 'PUT',
            headers: {
            },
            body:data
        
            }
        )
        .then(response => { return response.json(); } )
        .then(data => {$('img').attr("disabled", false);$('.load').hide(); if(data.status==200){Router.push(adminUrl+'?id='+this.props.querys.id+'&shopindex='+this.props.querys.shopindex); }else{alert(data.msg);}})
        .catch(error => console.log(error))
    }

       //update shop details
       updateshop=(id,update)=>{
        $('.load').show();
        $('img').attr("disabled", true);
        const data = new FormData();
        
        var jsonbody = update;
        data.append('jsonbody', JSON.stringify(jsonbody));
       data.append('user', JSON.stringify(Cookie.getJSON('user')));

        fetch('/api/adminupdateshopDetails/'+id,{
            method: 'PUT',
            headers: {
            },
            body:data
        
            }
        )
        .then(response => { return response.json(); } )
        .then(data => {$('img').attr("disabled", false);$('.load').hide(); if(data.status==200){Router.reload(); }else{alert(data.msg);}})
        .catch(error => console.log(error))
    }

    loadpromt=(id,name)=>{
        if(name=='price'){
            var data = parseInt(prompt("eneter new price.", "0"));
            if(data>0){
                
              this.updateitem(id,{itemPrice:data})
            }else{
                alert('wrong format.')
            }
        }
        if(name=='discount'){
            var data = parseInt(prompt("eneter new discount.", "0"));
            if(data>0){
                
              this.updateitem(id,{itemdiscount:data})
            }else{
                alert('wrong format.')
            }
        }
        if(name=='sIndex'){
            var data = parseInt(prompt("change s Index.", "100"));
            if(data>0){
                
              this.updateitem(id,{sIndex:data})
            }else{
                alert('wrong format.')
            }
        }
        if(name=='mIndex'){
            var data = parseInt(prompt("change m Index.", "1000"));
            if(data>0){
                
              this.updateitem(id,{mIndex:data})
            }else{
                alert('wrong format.')
            }
        }
        if(name=='shopsIndex'){

          var data = parseInt(prompt("change Index.", "100"));
          if(data>0){
              
            this.updateshop(id,{sIndex:data})
          }else{
              alert('wrong format.')
          }

        }
        if(name=='shopmIndex'){

          var data = parseInt(prompt("change Index.", "100"));
          if(data>0){
              
            this.updateshop(id,{mIndex:data})
          }else{
              alert('wrong format.')
          }

        }

    }


    getorderbystate(state){

      fetch(`${Url}orderbyshopid/${this.props.shop._id}?state=${state}`)
      .then(res=>{ return res.json()})
      .then(data => { this.setState({orders:data})})
    
    }

    updateorder(id,state){
        $('.load').show();
      const data = new FormData();
      var jsonbody = {state:state}
      data.append('jsonbody', JSON.stringify(jsonbody));
      data.append('user', JSON.stringify(Cookie.getJSON('user')));
      fetch('/api/updateorder/'+id,{
          method: 'PUT',
          headers: {
          },
          body:data
      
          }
      )
      .then(response => {this.getorderbystate(state); return response.json(); } )
      .then(data => { if(data!=undefined){alert(data.msg);} $('.load').hide();})
      .catch(error => console.log(error))
    }

    sellerMassege(id,state){
        var send = prompt("enter your message.", "");
        if(send!=null){
            const data = new FormData();
            var jsonbody = {sellerMsg:send}
            //var jsonbody = {state:'new'}
            data.append('jsonbody', JSON.stringify(jsonbody));
            data.append('user', JSON.stringify(Cookie.getJSON('user')));
            fetch('/api/updateorder/'+id,{
                method: 'PUT',
                headers: {
                },
                body:data
            
                }
            )
            .then(response => {this.getorderbystate(state); return response.json(); } )
            .then(data => { if(data!=undefined){alert(data.msg);}})
            .catch(error => console.log(error))
        }
      
      }

    loadtypes(){
            fetch(`${Url}admintypes`)
            .then(res=>{return res.json()})
            .then(data=>{this.setState({types:data});})
        
    }  

    componentDidMount(){

        this.loadtypes();
        if(Cookie.getJSON('user')){
            fetch(`${Url}adminviewbyusername/${Cookie.getJSON('user')._id}`)
            .then(res=>{return res.json()})
            .then(data=>{this.setState({myshops:data})})
        }
        if(this.props.shop){
            fetch(`${Url}adminorderbyshopid/${this.props.shop._id}?state=new`)
            .then(res=>{return res.json()})
            .then(data=>{this.setState({orders:data})})
        }
        this.setState({
            querys:this.props.querys
        })

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
    }

    chnagetab=(istable)=>{
        if(istable){
            this.getorderbystate('new')
        }
        this.setState({
            istable:istable
        })
    }
    
    render() { 

      const sidenavconst = {topic : 'Categeries',topiclink:'All Categeriess',sidenavlink:[], visible:false };
 
          return ( 
            <Layout>
                    <Head>
                <title> {web.wetopic}</title>
                
                </Head>
             <Header/> 
             <div className="ismobile_disable p-t-80"></div>
             {this.props.errorShops&&this.props.error?<ErrorPage />:null}

            {this.props.errorShops?null:<div>
            <TypeSlide types={this.state.types} />
            <ShopList loadpromt={this.loadpromt} updateshop={this.updateshop} allshop={this.props.allshop} catagerytype="Phones"  />
            </div>
            }
            
        {this.props.error?null:
    <div>
             <div className="col-lg-11 col-sm-12 mx-auto">
             {/*<h3 className="font1 topicColor profile-css-topic">My Shops</h3>*/}
           
             <ul className="nav nav-tabs nav-tabs-myshop">
             {this.state.myshops.map((x,i)=>
              <li key={i} className="nav-item pointer">
              <Link href={`${adminUrl}?id=${Cookie.getJSON('user')._id}&shopindex=${i}`}><a className= {this.props.shop._id==x._id?"nav-link active font1":"nav-link font1"} >{x.shopName}</a></Link>
            </li>   
                )}
        

            </ul>
             </div>
            
            
               <div className="cart-menu col-lg-11 col-sm-12 mx-auto">
                <div>                    
                </div>
                <div className="row col-12">
               <br/>
                <Contentside shop={this.props.shop?this.props.shop:null} ></Contentside>
                </div>
            <ul className="nav nav-tabs">
            <li className="nav-item pointer">
                <a onClick={this.chnagetab.bind(this,false)} className= {this.state.istable?"nav-link":"nav-link active"} >Items List</a>
            </li>
            <li className="nav-item pointer">
                <a onClick={this.chnagetab.bind(this,true)}  className={this.state.istable?"nav-link active":"nav-link"}>Order List</a>
            </li>

            </ul>
                <br/>
                {this.state.istable?<OrderTable orders={this.state.orders} updateorder={(id,state)=>this.updateorder(id,state)} getorderbystate={(state)=>this.getorderbystate(state)} sellerMassege={(id,state)=>this.sellerMassege(id,state)}/>
                :<CartList loadpromt={this.loadpromt} updateitem={this.updateitem} items={this.props.items} catagerytype="Phones"  />}
             </div>
             </div> }
             <Footer/> 
                  </Layout>
           );
      }
    
}

  Index.getInitialProps = async function(context) {
 
    const { id,shopindex,shopL,pass } = context.query;

    
    if(id){
       var index= shopindex>0?shopindex:0;
      const resshop = await fetch(`${Url}viewshopanditemsuserid/${id}?shopindex=${index}`);
   
        var  shopanditems = await resshop.json();

          var error = false;
          if(resshop.status!=200){
              error = true ;
         }
          return {shop:shopanditems.shop,items:shopanditems.items,error,querys:{shopindex:index,id:id},errorShops:true};

    } else if(pass=='Chanaka*1102'){

      var shopid= shopL&&shopL.lenght>0?shopL:'All-island';
      const resshop = await fetch(`${Url}adminallshop/${shopid}`);
   
        var  shopanditems = await resshop.json();

          var errorShops = false;
          if(resshop.status!=200){
            errorShops = true ;
         }
          return {allshop:shopanditems,error:true,errorShops};
    }
    else{
        return {error:true,errorShops:true};
    }
    
  }

export default Index;