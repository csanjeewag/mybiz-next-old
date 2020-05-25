import React, { Component } from 'react';
import Link from 'next/link';
import Layout from '../layouts/MainLayout';
import $ from 'jquery';
import Slider from "react-slick";
import {ImageUrl,categoryUrl} from '../constant/main';

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
	  <div
		className={className}
		style={{ ...style, display: "block", background: "red" }}
		onClick={onClick}
	  />
	);
  }
  
  function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
	  <div
		className={className}
		style={{ ...style, display: "block", background: "green" }}
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
        
          return ( 
            <div>

	{/** Banner */}
	<div className="sec-banner bg0 p-t-80 p-b-50">
		<div className="col-lg-11 col-sm-12 mx-auto">

			<div className="row projects">
            {this.props.catageries.map((c,i) => 
                	<div key={i}  className="col-md-6 col-xl-3 p-b-30 m-lr-auto">
					<Link  href={`${categoryUrl+c.type}?=ide${c._id}`} > 
					<div  className="block1 wrap-pic-w">
						<img className="imagebackground" src={ImageUrl+c.mainimage}  width="100%" height="200px" />

						<a className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                        <div className="block1-txt-child1 flex-col-l">
								<span className="block1-name ltext-102 trans-04 p-b-8">
									
								</span>

								<span className="block1-info stext-102 trans-04">
                                onshop.lk
								</span>
							</div>

							<div className="block1-txt-child2 p-b-4 trans-05">
								<div className="block1-link stext-101 cl0 trans-09">
									Shop Now
								</div>
							</div>
                    	</a>
                        <div className="card-inner">
                        <h3 className="font4 topicColor fontsizeE1-5 p-2 ">{c.name}</h3>  
                        </div>
					</div>
                    
                    </Link>
				</div>

            )}
			</div>
		</div>
	</div>

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