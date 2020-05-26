import React, { Component } from 'react';
import Link from 'next/link';
import $ from 'jquery';
import Slider from "react-slick";
import  {Url,ImageUrl,myshopmUrl,wesitename,WebUrl, web,websiteUrl,itemUrl} from './../constant/main';
import Cookie from "js-cookie";


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

class Index extends Component {

    constructor() {
        super();
        this.state = {
            item:{},
            itemid:'',
            question: '',
            answer: '',
            questiondata:[],
            review:'',
            reviewsdata:[],
            allitems:[]
    }

    
    
    }

    addtocart=(itemid,name)=>{
        var data = Cookie.getJSON('faverite-item');
        var jsonarray = []
        
        if(data){
            if(!data.includes(itemid))
            {jsonarray = [...data,itemid]
            Cookie.set('faverite-item',jsonarray);
            alert(`add ${name} to cart, you can change count, go to my-cart.`)
            }else{
            alert(`already added ${name} to cart.`) 
            }
        }else{
            jsonarray = [itemid]
            Cookie.set('faverite-item',jsonarray);
            alert(`add ${name} to cart. you can change count, go to my-cart.`)
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
        
    }
    

    render() { 

        var settings = {
            dots: false,
            fade: true,
            infinite: true,
            speed: 5000,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 5000,
            cssEase: "linear",
			pauseOnHover: true,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />

          };
          var setting2 = {
            infinite: true,
            autoplay: true,
            slidesToShow: 3,
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
                <section className="sec-product-detail bg0 p-t-65 p-b-60">
		<div className="container">
			<div className="row">
				<div className="col-md-6 col-lg-7 p-b-30">
					<div className="p-l-25 p-r-30 p-lr-0-lg">
						<div className="wrap-slick3 flex-sb flex-w">
							<div className="wrap-slick3-dots">
							{this.props.item.images.map((x,i)=>			
									<img className="lazyload" key={i} className="pb-2" src={ImageUrl+x} alt="IMG-PRODUCT" style={{width:'100%'}} />
               				 )}	
							</div>
							<div className="wrap-slick3-arrows flex-sb-m flex-w">
							
							</div>

							<div className="slick3 gallery-lb">
                            <Slider {...settings}>
							{this.props.item.images.map((x,i)=>
								<div key={i} className="item-slick3" >
								<div className="wrap-pic-w pos-relative">
									<img className="lazyload" src={ImageUrl+x} alt="IMG-PRODUCT" style={{maxHeight:'600px',height:'auto',width:'100%'}} />

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
							{this.props.item.itemlongname}
						</h4>
						<p className="fontsizeE-9 float-right fontcolorOrange" >{this.props.item.shop[0].shopName}/{this.props.item.shop[0].town}</p>
						<p className="fontsizeE-9" >{this.props.item.categery}/{this.props.item.subcategery}</p>
						<span className="mtext-106 cl2">
						{this.props.item.itemdiscount>0?<a className="font6 fontsizeE-7"> <strike>Rs.{this.props.item.itemPrice}.00</strike>  </a>:null}
                    	{this.props.item.itemdiscount>0?<a className="font6 fontsizeE-9"> {this.props.item.itemdiscount}% </a>:null}
                    	<a className="fontsizeE-9 font6"><span className="fontcolorred">&nbsp;Rs.{this.props.item.itemPrice*(100-this.props.item.itemdiscount)/100}</span></a>	</span>

						<p className="stext-102 cl3 p-t-23">						
						{this.props.item.content1}
						</p>
						<p className="stext-102 cl3 p-t-23">						
						{this.props.item.content2}
						</p>
						
						<div className="menu2-specification">
						{this.props.item.itemSpecification&&this.props.item.itemSpecification.length>0?<h5 className="menu2-subcard-title font2 fontcolorSkyblue fontsizeE1">Specification</h5>:null}
						<div className=" card-text font6">
							<div className="row">
								{this.props.item.itemSpecification?this.props.item.itemSpecification.map((x,i)=>
									<div className="col-lg-6 col-sm-12" key={i}>
									<a className="float-left menu2-speca"><img className="lazyload" src="https://img.icons8.com/metro/15/000000/collect.png"/>&nbsp; &nbsp; {x.name} &nbsp;: </a> <a className="float-left profile-specb"> &nbsp; {x.value}</a>
									</div>
									):null}
                       </div>
                </div></div>
                
						<div className="menu2-stock-details">
						{this.props.item.stockDetail&&this.props.item.stockDetail.length>0?<h5 className="menu2-subcard-title font2 fontcolorSkyblue fontsizeE1">Stock Details</h5>:null}
						<div className=" card-text font6">
							<div className="row">
							{this.props.item.stockDetail?this.props.item.stockDetail.map((x,i)=>
									<div className="col-lg-6 col-sm-12" key={i}>
									<a className="float-left menu2-speca"><img className="lazyload" src="https://img.icons8.com/metro/15/000000/collect.png"/>&nbsp; &nbsp; {x.name} &nbsp;: </a> <a className="float-left profile-specb"> &nbsp; {x.value}</a>
									</div>
									):null}
			
							
						
							</div>
						</div></div>
                
						{/** add to cart */}
						<div className="p-t-33">
							<div className="flex-w flex-r-m p-b-10">
								<div className="size-204 flex-w flex-m respon6-next">
									<div className="wrap-num-product flex-w m-r-20 m-tb-10">
										<div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
											<i className="fs-16 zmdi zmdi-minus"></i>
										</div>

										<input className="mtext-104 cl3 txt-center num-product" type="number" name="num-product" value="1"/>

										<div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
											<i className="fs-16 zmdi zmdi-plus"></i>
										</div>
									</div>

									<button className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
										Add to cart
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
				</div>
			
            </div>


		</div>

	</section>

            </div>
           );
      }
    
}

export default Index;