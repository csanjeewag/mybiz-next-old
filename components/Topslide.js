import React, { Component } from 'react';
import Layout from '../layouts/MainLayout';
import NavBar from '../layouts/Navbar';
import $ from 'jquery';


class Index extends Component {

    componentDidMount(){
        $(document).ready(function() {
           
          
            function checkWidth() {
                var windowwidth = $(window).width();
                var windowheight = $(window).height();
                    //if the window is greater than 440px wide then turn on jScrollPane..
                  //  $('.div1').addClass('desktop')
                  $('div.div1').css({'background-color':'lightblue','height':windowheight/2,'width':windowwidth});
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
         <div className="div1"  >
         <h1 className="topic font7"  >MYBIZ.COM</h1>
         
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
