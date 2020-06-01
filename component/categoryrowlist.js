import React, { Component } from 'react';
import Link from 'next/link';
import Slider from "react-slick";
import $ from 'jquery';
import {ImageUrl,categoryUrl} from '../constant/main';

function Arrow(props) {
	const { className, style, onClick } = props;
	return (
	  <div
		className={className}
		style={{background: "gray" ,display:'none'}}
		onClick={onClick}
        />
	);
  }

class Index extends Component {

    constructor() {
        super();
        this.state = {
            widthcount:4,
            windowwidth:900
        }
    }

    componentDidMount(){
        var windowwidth = $(window).width();
        this.setState({
            widthcount: Math.ceil(windowwidth/200),
            windowwidth:windowwidth
        })
    }
    render() { 

        var setting2 = {
            infinite: true,
            autoplay: true,
            slidesToShow: this.state.widthcount,
            slidesToScroll: 1,
            autoplaySpeed: 1500,
            pauseOnHover: true,
            swipeToSlide: true,
            nextArrow: <Arrow />,
			prevArrow: <Arrow />

          };
        
          return ( 
            <div>
       
	{/** Banner */}
	<div className={this.state.windowwidth>1000?'sec-banner bg0 p-b-5':'sec-banner bg0 p-t-5 p-b-5'}>
		<div className="col-lg-11 col-sm-12 mx-auto">

        <Slider {...setting2}>
            {this.props.catageries.map((c,i) => 
              <div key={i}>
              <div className="col-12 p-b-30 m-lr-auto">
              <Link href={`${categoryUrl+c.type}`} > 
              <div>
					<div  className="block1 wrap-pic-w">
						<img className="imagebackground lazyload" src={ImageUrl+c.mainimage}  width="100%" height="120px" />
					</div>
					<div  className="block1 wrap-pic-w upperlayer">
						<div className="secondlayer">
						<div className="thirdlayer">
						<h6 className="topic">{c.name}</h6>
				
						</div>
						
						</div>
						
					</div>
					 
				   </div>
              </Link>
          </div>
          </div> )}
            </Slider>


		</div>
	</div>

<style jsx>
    {`
      .imagebackground{
        #background: #efededad;
        opacity: 1;
	}
	.upperlayer{		
		position: absolute;
		top: 0;
		left: 0;
		height: 120px;
		width: 100%;
		padding-right: 15px;
		padding-left: 15px;
		border: none;
	}
	.secondlayer{
		background: #00000099;
		height: 120px;
		border: solid 1px #ffffff00;
	}
	.secondlayer:hover{
		background: #000000bf;
		height: 120px;
		border: solid 1px #ffffff00;
	}
	.thirdlayer{
		margin:15px;
		border: solid 1px #ffffff00;
		height:130px;
	}
	.topic{
		color: #fff;
		position: relative;
		padding: 30px 0 0 0;
		text-align : center;
		font-weight: 800;
		font-size: 12px;
		text-shadow: 3px 6px 3px black;
	}
    `}
</style>

            </div>
           );
      }
    
}

export default Index;