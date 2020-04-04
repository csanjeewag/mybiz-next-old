import React, { Component } from 'react';
import Layout from '../layouts/MainLayout';
import $ from 'jquery';
import {ImageUrl} from './../constant/main';

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
                {this.props.catagery.images.map((x,i)=>
                <li key={i} data-target="#carouselExampleIndicators" data-slide-to={i} className={i==0?'active':'c'} ></li> 
                )}
            </ol>
            <div className="carousel-inner">
                {this.props.catagery.images.map((x,i)=>
                <div key={i} className={i==0?'carousel-item active':'carousel-item'}>
                <img className="d-block w-100 silde1image" src={ImageUrl+x} alt="first slide" width="100%" />
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
