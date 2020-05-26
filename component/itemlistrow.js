import React, { Component } from 'react';
import Link from 'next/link';
import Slider from "react-slick";
import {ImageUrl,categoryUrl} from '../constant/main';

function Arrow(props) {
	const { className, style, onClick } = props;
	return (
	  <div
		className={className}
		style={{ display: "none", background: "gray" }}
		onClick={onClick}
        />
	);
  }

class Index extends Component {

    componentDidMount(){

    }
    render() { 

        var setting2 = {
            infinite: true,
            autoplay: true,
            slidesToShow: 7,
            slidesToScroll: 1,
            autoplaySpeed: 1500,
            pauseOnHover: true,
            swipeToSlide: true,
            nextArrow: <Arrow />,
			prevArrow: <Arrow />

          };
        
          return ( 
            <div>
       
{/** Related Products */}
<section className="sec-relate-product bg0 p-t-45 p-b-105">
		<div className="container">
			<div className="p-b-45">
				<h3 className="ltext-106 cl5 txt-center">
					Related Products
				</h3>
			</div>

			{/** Slide2 */}
			<div className="wrap-slick2">
				<Slider {...setting2} >
					<div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
						{/** Block2 */}
						<div className="block2">
							<div className="block2-pic hov-img0">
								<img className="lazyload" src="images/product-01.jpg" alt="IMG-PRODUCT"/>

								<a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
									View
								</a>
							</div>

							<div className="block2-txt flex-w flex-t p-t-14">
								<div className="block2-txt-child1 flex-col-l ">
								<span className="stext-105 cl3">
										$16.64
									</span>
								</div>

								<div className="block2-txt-child2 flex-r p-t-3">
									<a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
										<img className="lazyload icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON"/>
										<img className="lazyload icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON"/>
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
						{/** Block2 */}
						<div className="block2">
							<div className="block2-pic hov-img0">
								<img src="images/product-02.jpg" alt="IMG-PRODUCT"/>

								<a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
									Quick View
								</a>
							</div>

							<div className="block2-txt flex-w flex-t p-t-14">
								<div className="block2-txt-child1 flex-col-l ">
									<a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
										Herschel supply
									</a>

									<span className="stext-105 cl3">
										$35.31
									</span>
								</div>

								<div className="block2-txt-child2 flex-r p-t-3">
									<a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
										<img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON"/>
										<img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON"/>
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
						{/** Block2 */}
						<div className="block2">
							<div className="block2-pic hov-img0">
								<img className="lazyload" src="images/product-03.jpg" alt="IMG-PRODUCT"/>

								<a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
									Quick View
								</a>
							</div>

							<div className="block2-txt flex-w flex-t p-t-14">
								<div className="block2-txt-child1 flex-col-l ">
									<a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
										Only Check Trouser
									</a>

									<span className="stext-105 cl3">
										$25.50
									</span>
								</div>

								<div className="block2-txt-child2 flex-r p-t-3">
									<a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
										<img className="lazyload icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON"/>
										<img className="lazyload icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON"/>
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
						{/** Block2 */}
						<div className="block2">
							<div className="block2-pic hov-img0">
								<img  src="images/product-04.jpg" alt="IMG-PRODUCT"/>

								<a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
									Quick View
								</a>
							</div>

							<div className="block2-txt flex-w flex-t p-t-14">
								<div className="block2-txt-child1 flex-col-l ">
									<a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
										Classic Trench Coat
									</a>

									<span className="stext-105 cl3">
										$75.00
									</span>
								</div>

								<div className="block2-txt-child2 flex-r p-t-3">
									<a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
										<img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON"/>
										<img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON"/>
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
						{/** Block2 */}
						<div className="block2">
							<div className="block2-pic hov-img0">
								<img src="images/product-05.jpg" alt="IMG-PRODUCT"/>

								<a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
									Quick View
								</a>
							</div>

							<div className="block2-txt flex-w flex-t p-t-14">
								<div className="block2-txt-child1 flex-col-l ">
									<a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
										Front Pocket Jumper
									</a>

									<span className="stext-105 cl3">
										$34.75
									</span>
								</div>

								<div className="block2-txt-child2 flex-r p-t-3">
									<a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
										<img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON"/>
										<img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON"/>
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
						{/** Block2 */}
						<div className="block2">
							<div className="block2-pic hov-img0">
								<img src="images/product-06.jpg" alt="IMG-PRODUCT"/>

								<a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
									Quick View
								</a>
							</div>

							<div className="block2-txt flex-w flex-t p-t-14">
								<div className="block2-txt-child1 flex-col-l ">
									<a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
										Vintage Inspired Classic 
									</a>

									<span className="stext-105 cl3">
										$93.20
									</span>
								</div>

								<div className="block2-txt-child2 flex-r p-t-3">
									<a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
										<img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON"/>
										<img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON"/>
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
						{/** Block2 */}
						<div className="block2">
							<div className="block2-pic hov-img0">
								<img src="images/product-07.jpg" alt="IMG-PRODUCT"/>

								<a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
									Quick View
								</a>
							</div>

							<div className="block2-txt flex-w flex-t p-t-14">
								<div className="block2-txt-child1 flex-col-l ">
									<a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
										Shirt in Stretch Cotton
									</a>

									<span className="stext-105 cl3">
										$52.66
									</span>
								</div>

								<div className="block2-txt-child2 flex-r p-t-3">
									<a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
										<img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON"/>
										<img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON"/>
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
						{/** Block2 */}
						<div className="block2">
							<div className="block2-pic hov-img0">
								<img src="images/product-08.jpg" alt="IMG-PRODUCT"/>

								<a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
									Quick View
								</a>
							</div>

							<div className="block2-txt flex-w flex-t p-t-14">
								<div className="block2-txt-child1 flex-col-l ">
									<a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
										Pieces Metallic Printed
									</a>

									<span className="stext-105 cl3">
										$18.96
									</span>
								</div>

								<div className="block2-txt-child2 flex-r p-t-3">
									<a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
										<img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON"/>
										<img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON"/>
									</a>
								</div>
							</div>
						</div>
					</div>
                </Slider>
			</div>
		</div>
	</section>

<style jsx>
    {`
    .imagebackground{
        #background: #efededad;
        opacity: 1;
    }
    `}
</style>

            </div>
           );
      }
    
}

export default Index;