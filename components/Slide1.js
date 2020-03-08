import React, { Component } from 'react';
import Layout from '../layouts/MainLayout';
import $ from 'jquery';


class Index extends Component {

    componentDidMount(){
        $(document).ready(function() {
           
          
            function checkWidth() {
                var windowwidth = $(window).width();
                var windowheight = $(window).height();
                    //if the window is greater than 440px wide then turn on jScrollPane..
                  //  $('.div1').addClass('desktop')
                  $('.silde1image').css({'height':windowwidth/3,'width':windowwidth});
                  $('.topic').css({'font-size' : windowwidth/10});
               
            }
            // Execute on load
            checkWidth();
            // Bind event listener
            $(window).resize(checkWidth);
    });
    }
    render() { 
        
          return ( 
            <Layout>
     

        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img className="d-block w-100 silde1image" src="./add1.jpg" alt="First slide" width="100%"/>
                </div>
                <div className="carousel-item ">
                <img className="d-block w-100 silde1image" src="./add2.webp" alt="Second slide" width="100%" />
                </div>
                <div className="carousel-item ">
                <img className="d-block w-100 silde1image" src="./add3.webp" alt="Third slide" width="100%" />
                </div>
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
             
     
            <style jsx>
                {`
              div.div1 {
                background-image: url("./mainimage.jpg");
                background-position: center;
                background-repeat: no-repeat; 
                background-size: cover; 
                
              }
              .topic {
                position: relative;
                top: 45%;
                text-align:center;
                color: lightgray;
                
              }
             
            
           
                `}
            </style>
                  </Layout>
           );
      }
    
}

export default Index; 
