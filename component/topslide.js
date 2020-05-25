import React, { Component } from 'react';
import $ from 'jquery';
import Slider from "react-slick";
import {ImageUrl,createshopUrl} from '../constant/main';

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
	  <div
		className={className}
		style={{ ...style, display: "none", background: "red" }}
		onClick={onClick}
	  />
	);
  }
  
  function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
	  <div
		className={className}
		style={{ ...style, display: "none", background: "green" }}
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
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 3000,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />

          };
        
          return ( 
            <div>

	{/** Slider */}
	<section className="section-slide">
		<div className="wrap-slick1">

		<Slider {...settings}>
			<div>
			<div className="item-slick1" style={{backgroundImage: 'url(cover01.jpg)'}}>
					<div className="container h-full">
						<div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
							<div data-appear="fadeInDown" data-delay="0">
								<span className="ltext-101 cl2 respon2 purpleshadow">
									<p className="animate__animated animate__jello animate__delay-1s animate__repeat-2">Hi, You are welcome to</p>	
								</span>
							</div>
								
							<div className="layer-slick1" data-appear="fadeInUp" data-delay="800">
								<h2 className="purpleshadow ltext-101 cl2 p-t-19 p-b-43 respon1  animate__animated animate__heartBeat animate__repeat-2">
									onShop.lk
								</h2>
							</div>
								
							<div className="layer-slick1" data-appear="zoomIn" data-delay="1600">
							<a href={createshopUrl} className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 animate__animated animate__rotateIn animate__delay-1s">
								join with us
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
			<div className="item-slick1" style={{backgroundImage: 'url(cover02.jpg)'}}>
					<div className="container h-full">
						<div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
							<div data-appear="fadeInDown" data-delay="0">
								<span className="ltext-101 cl2 respon2 purpleshadow">
									
									<p className="animate__animated animate__lightSpeedInRight animate__delay-4s ">Sri lanka online store</p>	
								</span>
							</div>
								
							<div className="layer-slick1" data-appear="fadeInUp" data-delay="800">
							<h2 className="purpleshadow ltext-101 cl2 p-t-19 p-b-43 respon1 animate__delay-3s  animate__animated animate__heartBeat animate__repeat-2">
									onShop.lk
								</h2>
							</div>
								
							<div className="layer-slick1" data-appear="zoomIn" data-delay="1600">
							<a href={createshopUrl} className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 animate__animated animate__rotateIn animate__delay-4s">
								join with us
								</a>
							</div>
						</div>
					</div>
				</div>
			
			</div>
			<div>
			<div className="item-slick1" style={{backgroundImage: 'url(cover03.jpg)'}}>
					<div className="container h-full">
						<div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
							<div data-appear="fadeInDown" data-delay="0">
								<span className="ltext-101 cl2 respon2 purpleshadow">
							
								<p className="animate__animated animate__lightSpeedInLeft animate__delay-7s ">you also can join with us</p>	
								</span>
							</div>
								
							<div className="layer-slick1" data-appear="fadeInUp" data-delay="800">
							<h2 className="purpleshadow ltext-101 cl2 p-t-19 p-b-43 respon1 animate__delay-6s  animate__animated animate__heartBeat animate__repeat-2">
									onShop.lk
								</h2>
							</div>
								
							<div className="layer-slick1" data-appear="zoomIn" data-delay="1600">
							<a href={createshopUrl} className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 animate__animated animate__rotateIn animate__delay-7s">
								join with us
								</a>
							</div>
						</div>
					</div>
				</div>
			
			</div>
		</Slider>

		</div>
	</section>

	<style jsx>
		{`
		.purpleshadow{
			color: #190149;
			text-shadow: 1px 2px 2px #efeaea;
		}
		`}
	</style>
     

            </div>
           );
      }
    
}

export default Index;