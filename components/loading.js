import React, { Component } from 'react';
import Layout from '../layouts/MainLayout';
class Index extends Component {



    
    render() { 
        

          return ( 
           <Layout>
               <div className="load-div">
            <div className="d-flex justify-content-center">

            <span className="align-self-center load-svg">       
                <img className="align-self-center" src="./../loading1.svg" />
                <h6> wait for while...</h6>
            </span>
            
            </div>
            </div>
         <style jsx>
         {`
         .load-div{
            background-image: radial-gradient(circle, white, rgba(255,255,255,0.3), rgba(255,255,255,0));
            position: fixed;
            width: 100%;
            bottom: 50%;
            z-index:99;

         }
         .load-svg{   
         }
         `}
         </style>
                  </Layout>
           );
      }
    
}


export default Index; 
