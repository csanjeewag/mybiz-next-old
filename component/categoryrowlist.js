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
              <Link href={`${categoryUrl+c.type}?=ide${c._id}`} > 
              <div  className="block1 wrap-pic-w">
                  <img className="imagebackground lazyload" src={ImageUrl+c.mainimage} />

                  <a className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                  <div className="block1-txt-child1 flex-col-l">
                          <span className="block1-name ltext-102 trans-04 p-b-8">
                              
                          </span>

                          <span className="block1-info stext-102 trans-04">
                          
                          </span>
                      </div>

                      <div className="block1-txt-child2 p-b-4 trans-05">
                          <div className="block1-link stext-101 cl0 trans-09">
                              view
                          </div>
                      </div>
                  </a>
                  <div className="card-inner">
                  <h3 className="topicColor fontsizeE-9 p-2 ">{c.name}</h3>  
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
    `}
</style>

            </div>
           );
      }
    
}

export default Index;