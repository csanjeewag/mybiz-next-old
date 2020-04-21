import React, { Component } from 'react';
import Layout from '../layouts/MainLayout';
import NavBar from '../layouts/Navbar';
import $ from 'jquery';
import {wesitename} from './../constant/main';


class Index extends Component {

    componentDidMount(){
        $(document).ready(function() {
           
          
            function checkWidth() {
                var windowwidth = $(window).width();
                var windowheight = $(window).height();
                  if(windowwidth>600){
                    $('div.div1').css({'background-color':'lightblue','height':windowheight/2,'width':windowwidth});
                    $('.topic').css({'font-size' : windowwidth/10});
                  }else{
                    $('div.div1').css({'background-color':'lightblue','height':windowheight/3,'width':windowwidth});
                    $('.topic').css({'font-size' : windowwidth/8});
                  }
                 
               
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
         <h1 className="topic font7"  >{wesitename}.lk</h1>
         
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
