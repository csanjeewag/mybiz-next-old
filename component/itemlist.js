import React, { Component } from 'react';
import $ from 'jquery';
import Slider from "react-slick";
import {ImageUrl,itemUrl,myshopmUrl,websiteUrl} from '../constant/main'
import Link from 'next/link';
import Cookie from "js-cookie";
import FilterItems from "./../component/filterItem";


  function Arrow(props) {
	const { className, style, onClick } = props;
	return (
	  <div
		className={className}
		style={{ display: "none", background: "gray" ,color:'purple'}}
		onClick={onClick}
        />
	);
  }

class Index extends Component {

	constructor() {
        super();
        this.state = {
			item:{}
		}
	}

	addtocart(item){
        var data = Cookie.getJSON('faverite-item');
		var jsonarray = [];
		var jsonarrayList=[];
        
        if(data){
            if(!data.includes(item._id))
            {jsonarray = [...data,item._id]
			Cookie.set('faverite-item',jsonarray);

			var datalist = Cookie.getJSON('faverite-item-list');
	
			jsonarrayList = [...datalist,{_id:item._id,itemname:item.itemname,urlname:item.urlname,image:item.images[0],itemdiscount:item.itemdiscount,itemPrice:item.itemPrice}];
	
			Cookie.set('faverite-item-list',jsonarrayList);
			

			$('#cart-yes-'+item._id).show(100);
			$('#cart-no-'+item._id).hide(100);
			swal("Added to favorites",item.itemname+' in favorites now.',"success");
		
            }else{

			swal("Already in favorites",item.itemname+' in favorites now.',"warning");

            }
        }else{
			jsonarray = [item._id];
			Cookie.set('faverite-item',jsonarray);
			jsonarrayList = [{_id:item._id,itemname:item.itemname,urlname:item.urlname,image:item.images[0],itemdiscount:item.itemdiscount,itemPrice:item.itemPrice}]
			Cookie.set('faverite-item-list',JSON.stringify(jsonarrayList));
			$('#cart-yes-'+item._id).show(100);
			$('#cart-no-'+item._id).hide(100);
            swal("Added to favorites",item.itemname+' in favorites now.',"success");

        }
		
     
    }

	loadview=(item)=>{
		this.setState({
			item:item
		});
		$('.js-modal1').addClass('show-modal1');
	}
	componentDidMount(){
		this.setState({
			item:this.props.items&&this.props.items.length>0?this.props.items[0]:{}
		});
		$(document).ready(function() {
			$('.js-hide-modal1').on('click',function(){
				$('.js-modal1').removeClass('show-modal1');
			});
			$('.js-show-filter').on('click',function(){
				$(this).toggleClass('show-filter');
				$('.panel-filter').slideToggle(400);
		
				if($('.js-show-search').hasClass('show-search')) {
					$('.js-show-search').removeClass('show-search');
					$('.panel-search').slideUp(400);
				}    
			});
		
			$('.js-show-search').on('click',function(){
				$(this).toggleClass('show-search');
				$('.panel-search').slideToggle(400);
		
				if($('.js-show-filter').hasClass('show-filter')) {
					$('.js-show-filter').removeClass('show-filter');
					$('.panel-filter').slideUp(400);
				}    
			});
			
			
			//filter item
			var posts = $('.isotope-item');
			posts.show();
			$('.datafilter').click(function() { 
				$('.datafilter').removeClass('how-active1');
				$( this ).addClass('how-active1');
				var customType = $( this ).data('filter');
				if(customType=='*'){
					posts.show();
				}else{
					posts.hide().filter(function () {
						return $(this).data('cat') == customType;
						})
					.show();
				}
				
			});
			
		})
	if(this.props.items&&this.props.items.length>0&&Cookie.getJSON('faverite-item')){

		this.props.items.forEach(element => {
			if(Cookie.getJSON('faverite-item').includes(element._id)){
				$('#cart-yes-'+element._id).show(100);
				$('#cart-no-'+element._id).hide(100);
			}else{
				$('#cart-no-'+element._id).show(100);
				$('#cart-yes-'+element._id).hide(100);
			}
		});
	}else{
		this.props.items.forEach(element => {	
				$('#cart-no-'+element._id).show(100);
				$('#cart-yes-'+element._id).hide(100);
		});
	}
		
	}
   
    render() { 
		var settings = {
            dots: false,
            fade: true,
            infinite: true,
            speed: 2000,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 2000,
			nextArrow: <Arrow />,
			prevArrow: <Arrow />

          };
        
          return ( 
            <div>
                
	{/** Product */}
	<section className="bg0 p-t-23 p-b-140">
		<div className="container">
			<div className="p-b-10">
				<h3 className="ltext-103 fontsizeE2">
					{this.props.topic}
				</h3>
			</div>

			<div className="flex-w flex-sb-m p-b-52">
				<div className="flex-w flex-l-m filter-tope-group m-tb-10">
					<button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1 datafilter" data-filter="*">
						All Products
					</button>

					{this.props.selectcatagery?this.props.selectcatagery.subtype.map((x,i)=>
					<button key={i} className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 datafilter" data-filter={x.type}>
										{x.name}
					</button>
				
					):null}
			
				</div>

				<div className="flex-w flex-c-m m-tb-10">
					<div className="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter">
						<i className="icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list"></i>
						<i style={{display:'none'}} className="icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
						 Filter
					</div>

					<div className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search">
						<i className="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search"></i>
						<i style={{display:'none'}} className="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
						Search
					</div>
				</div>
				
				{/** Search product */}
				<div className="dis-none panel-search w-full p-t-10 p-b-15">
					<div className="bor8 dis-flex p-l-15">
						<button className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
							<i className="zmdi zmdi-search"></i>
						</button>

						<input className="mtext-107 cl2 size-114 plh2 p-r-15" type="text" name="search-product" placeholder="Search" />
					</div>	
				</div>

				{/** Filter */}
				<div className="dis-none panel-filter w-full p-t-10">
					<FilterItems/>
				</div>
			
			</div>

			<div className="row isotope-grid projects">
			
				{this.props.items&&this.props.items.length>0?this.props.items.map((c,i)=>
				<div key={i} className={"col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item "+c.subcategery} data-cat={c.subcategery}>
		
				<div className="block2">
					<div className="block2-pic hov-img0">
					
					<img className="card-img-top pointer lazyload" src={ImageUrl+c.images[0]} height="200px" />
					
						<a className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1 pointer" onClick={this.loadview.bind(this,c)}>
						Quick View
						</a>
					</div>

					<div className="block2-txt flex-w flex-t p-t-14">
						<div className="block2-txt-child1 flex-col-l ">
							<a className="stext-104 cl4 hov-cl1 trans-04 js-name-b2">
							{c.itemname} - {c.subcategery}
							</a>
							<span className="stext-105 cl3">
							<p className="font6 m-content-right"><strike className="fontsizeE-9 stext-104">Rs.{c.itemPrice}.00</strike><span className="fontcolorOrange fontsizeE-9 stext-104">{c.itemdiscount}%</span><span className="fontcolorred fontsizeE1">&nbsp;Rs.{c.itemPrice*(100-c.itemdiscount)/100}</span></p>
							</span>

							<span href={myshopmUrl+c.shop[0].shopurl} className="stext-104 cl4 hov-cl1 trans-04 js-name-b2">

							<span style={{color:'#8283a5',fontSize:'11px'}}> <i className="zmdi zmdi-pin"></i> {c.shop[0].shopName}/{c.shop[0].town}</span>
							</span>

							<div>
							<iframe src={`https://www.facebook.com/plugins/share_button.php?href=${websiteUrl+itemUrl+c.urlname}&layout=button_count&size=small&appId=639750616597961&width=96&height=20`} width="96" height="25"  style={{border:'none',overflow:'hidden'}} scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>		
					
							<a href={myshopmUrl+c.shop[0].shopurl} style={{fontSize:'11px'}} className="flex-c-m cl0 bg1 hov-btn1 stext-104 p-lr-15 bor1 trans-04 float-right pt-1 pb-1">
							<i className="zmdi zmdi-store"></i>&nbsp; Shop
							</a>
							</div>
						</div>

						<div className="block2-txt-child2 flex-r">
							<a className="btn-addwish-b2 dis-block pos-relative">
								<span id={"cart-no-"+c._id} onClick={()=>this.addtocart(c)} style={{color:'gray'}}><i className="zmdi zmdi-favorite-outline zmdi-hc-lg"></i></span>
								<span id={"cart-yes-"+c._id}  onClick={()=>this.addtocart(c)} style={{color:'blue'}}><i className="zmdi zmdi-favorite zmdi-hc-lg"></i></span>
							</a>
							
						</div>
					</div>
				</div>
			</div>
				):null}
						
				</div>

			{/** Load more */}
			<div className="flex-c-m flex-w w-full p-t-45">
				<a href="#" className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04">
					Load More
				</a>
			</div>
		</div>
	</section>

	{/** Modal1 */}
	<div className="wrap-modal1 js-modal1 p-t-60 p-b-20">
		<div className="overlay-modal1 js-hide-modal1"></div>

		<div className="container">
			<div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
				<button className="how-pos3 hov3 trans-04 js-hide-modal1">
					<img className="lazyload" src="../images/icons/icon-close.png" alt="CLOSE"/>
				</button>

				<div className="row">
					
					<div className="col-md-6 col-lg-7 p-b-30">
						<div className="p-l-25 p-r-30 p-lr-0-lg">
							<div className="wrap-slick3 flex-sb flex-w">
								<div className="wrap-slick3-dots">
								{this.state.item.images?this.state.item.images.map((x,i)=>			
									<img className="lazyload" key={i} className="pb-2" src={ImageUrl+x} alt="IMG-PRODUCT" style={{width:'100%'}} />
               				 ):null}	
								</div>
								

								<div className="slick3 gallery-lb">
									<Slider {...settings}>
									{this.state.item.images?this.state.item.images.map((x,i)=>
								<div key={i} className="item-slick3" >
								<div className="wrap-pic-w pos-relative">
								<Link href={itemUrl+this.state.item.urlname}>
									<img className="lazyload" src={ImageUrl+x} alt="IMG-PRODUCT" style={{maxHeight:'600px',height:'auto',width:'100%'}} />
								</Link>
									<a className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href={ImageUrl+x}>
												<i className="fa fa-expand"></i>
											</a>
										</div>
									</div>
								):null}
									</Slider>
								
								</div>
							</div>
						</div>
					</div>
					
					<div className="col-md-6 col-lg-5 p-b-30">
					{this.state.item.itemname?
					<div className="p-r-50 p-t-5 p-lr-0-lg">
						<h4 className="mtext-105 cl2 js-name-detail p-b-14 subtopicColor">
							{this.state.item.itemlongname}
						</h4>
						<div >

						<iframe src={`https://www.facebook.com/plugins/share_button.php?href=${websiteUrl+itemUrl+this.state.item.urlname}&layout=button_count&size=large&appId=639750616597961&width=96&height=20`} width="96" height="30"  style={{border:'none',overflow:'hidden'}} scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>		
					
						<a href={myshopmUrl+this.state.item.shop[0].shopurl} className="flex-c-m stext-104 cl0 bg1 bor1 hov-btn1 p-lr-15 trans-04 float-right py-1">
							07x xxxx
						</a>
						<a href={itemUrl+this.state.item.urlname+'?ide='+this.state.item._id} className="flex-c-m stext-104 cl0 bg1 bor1 hov-btn1 p-lr-15 trans-04 float-right py-1">
							view item
						</a>
						</div>
						<p className="fontsizeE-9" >{this.state.item.categery}/{this.state.item.subcategery}</p>
						<p className="fontsizeE1 fontcolorOrange pointer" >{this.state.item.shop[0].shopName}/{this.state.item.shop[0].town}</p>
	
						
						<span className="mtext-106 cl2 fl">
						{this.state.item.itemdiscount>0?<a className="font6 fontsizeE-7"> <strike>Rs.{this.state.item.itemPrice}.00</strike>  </a>:null}
                    	{this.state.item.itemdiscount>0?<a className="font6 fontsizeE-9"> {this.state.item.itemdiscount}% </a>:null}
                    	<a className="fontsizeE-9 font6"><span className="fontcolorred">&nbsp;Rs.{this.state.item.itemPrice*(100-this.state.item.itemdiscount)/100}</span></a>	</span>

						<p className="stext-102 cl3 ">						
						{this.state.item.content1}
						</p>
						<p className="stext-102 cl3 ">						
						{this.state.item.content2}
						</p>
						
						<div className="menu2-specification">
						{this.state.item.itemSpecification&&this.state.item.itemSpecification.length>0?<h5 className="menu2-subcard-title font2 fontcolorSkyblue fontsizeE1">Specification</h5>:null}
						<div className=" card-text font6">
							<div className="row">
								{this.state.item.itemSpecification?this.state.item.itemSpecification.map((x,i)=>
									<div className="col-lg-6 col-sm-12" key={i}>
									<a className="float-left menu2-speca"><img className="lazyload" src="https://img.icons8.com/metro/15/000000/collect.png"/>&nbsp; &nbsp; {x.name} &nbsp;: </a> <a className="float-left profile-specb"> &nbsp; {x.value}</a>
									</div>
									):null}
                       </div>
                </div></div>
                
						<div className="menu2-stock-details">
						{this.state.item.stockDetail&&this.state.item.stockDetail.length>0?<h5 className="menu2-subcard-title font2 fontcolorSkyblue fontsizeE1">Stock Details</h5>:null}
						<div className=" card-text font6">
							<div className="row">
							{this.state.item.stockDetail?this.state.item.stockDetail.map((x,i)=>
									<div className="col-lg-6 col-sm-12" key={i}>
									<a className="float-left menu2-speca"><img className="lazyload" src="https://img.icons8.com/metro/15/000000/collect.png"/>&nbsp; &nbsp; {x.name} &nbsp;: </a> <a className="float-left profile-specb"> &nbsp; {x.value}</a>
									</div>
									):null}
			
							
						
							</div>
						</div></div>
					
						{/** add to cart */}
						<div className="p-t-5">
							<div className="flex-w flex-r-m p-b-10">
								<div className="size-204 flex-w flex-m respon6-next">
									{/*<div className="wrap-num-product flex-w m-r-20 m-tb-10">
										<div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
											<i className="fs-16 zmdi zmdi-minus"></i>
										</div>

										<button className="mtext-104 cl3 txt-center num-product" type="number" name="num-product">1</button>

										<div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
											<i className="fs-16 zmdi zmdi-plus"></i>
										</div>
									</div>*/}

									<button className="flex-c-m stext-104 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail" onClick={()=>this.addtocart(this.state.item)}>
										Add to Favorites
									</button>
								</div>
							</div>	
						</div>

						{/** links */}
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
					</div>
				:null}
				</div>
			

				</div>
			</div>
		</div>
	</div>

            </div>
           );
      }
    
}

export default Index;