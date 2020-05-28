import React, { Component } from 'react';
import Link from 'next/link';
import Layout from '../layouts/MainLayout';
import $ from 'jquery';
import Slider from "react-slick";
import {ImageUrl,websiteUrl,myshopmUrl} from '../constant/main';


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
		style={{ display: "none", background: "green" }}
		onClick={onClick}
        />
	);
  }
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

    componentDidMount(){

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
			pauseOnHover: true,
			nextArrow: <Arrow />,
			prevArrow: <Arrow />

          };
          var setting2 = {
            infinite: true,
            autoplay: true,
            slidesToShow: 5,
            slidesToScroll: 2,
            autoplaySpeed: 1000,
            pauseOnHover: true,
            swipeToSlide: true,
            nextArrow: <Arrow />,
			prevArrow: <Arrow />

          };
        
          return ( 
            <div>
                {/** Product Detail */}
                <section className="sec-product-detail bg0 p-b-0">
		<div className="container">
			<div className="row">
			<div className="col-md-6 col-lg-7 p-b-30">
					<div className="p-l-25 p-r-30 p-lr-0-lg">
						<div className="wrap-slick3 flex-sb flex-w">
							<div className="wrap-slick3-dots">
							{this.props.shop.images.map((x,i)=>
							<img key={i} className="d-block w-100 silde2image pb-3 lazyload" src={ImageUrl+x} alt="first slide" width="100%" />
							)}
							</div>
							<div className="wrap-slick3-arrows flex-sb-m flex-w"></div>

							<div className="slick3 gallery-lb">
                            <Slider {...settings}>
							{this.props.shop.images.map((x,i)=>
							<div key={i} className="item-slick3">
							<div className="wrap-pic-w pos-relative">
							<img className="d-block w-100 silde2image lazyload" src={ImageUrl+x} alt="first slide" style={{maxHeight:'600px',height:'auto',width:'100%'}}/>

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
						{this.props.shop.shopName}
						</h4>
						<a className=" font6 float-right">{this.props.shop.contact1+(this.props.shop.contact2?'/'+this.props.shop.contact2:'')} </a> 
					
						<span className="mtext-106 cl2">
						<a className="font6">{this.props.shop.district+'/'+this.props.shop.town} </a>
						</span>
						
						<p className="stext-102 cl3 p-t-23">
						{this.props.shop.content1}
						</p>
						<p className="stext-102 cl3 p-t-23">
						{this.props.shop.content2}
						</p>
						<iframe src={`https://www.facebook.com/plugins/share_button.php?href=${websiteUrl+myshopmUrl+this.props.shop.urlname}&layout=button_count&size=large&appId=639750616597961&width=96&height=20`} width="96" height="30"  style={{border:'none',overflow:'hidden'}} scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>		
						
						<div className="menu2-specification">
						{this.props.shop.shopDetail&&this.props.shop.shopDetail.length>0?<h5 className="menu2-subcard-title font2 fontcolorSkyblue fontsizeE1">Specification</h5>:null}
						<div className=" card-text font6">
							<div className="row">
								{this.props.shop.shopDetail?this.props.shop.shopDetail.map((x,i)=>
									<div className="col-lg-6 col-sm-12" key={i}>
									<a className="float-left menu2-speca"><img className="lazyload" src="https://img.icons8.com/metro/15/000000/collect.png"/>&nbsp; &nbsp; {x.name} &nbsp;: </a> <a className="float-left profile-specb"> &nbsp; {x.value}</a>
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
					</div>
				</div>
			</div>

		</div>

	</section>
	<script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v7.0&appId=639750616597961&autoLogAppEvents=1"></script>


            </div>
           );
      }
    
}

export default Index;