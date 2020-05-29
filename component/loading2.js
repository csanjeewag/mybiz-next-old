import React, { Component } from 'react';

class Index extends Component {



    
    render() { 
        

          return ( 
           <div>
               <div className="load-div-full">
               <div className="load-div">
            <div className="d-flex justify-content-center">

            <span className="align-self-center load-svg">       
                <img className="align-self-center" src="./../loading3.svg" />
                
                <br/>
            </span>
            </div>
            </div>
            
            </div>
         <style jsx>
         {`
         .load-div-full{
           # background-image: radial-gradient(circle, white, rgba(255,255,255,0.5), rgba(255,255,255,0));
            background : rgba(255,255,255,0.3);
            position: relative;
            width: 100%;
            height :100%;
            
           

         }
         .load-div{
           # background-image: radial-gradient(circle, white, rgba(255,255,255,0.3), rgba(255,255,255,0));
            position: relative;
            width: 100%;
            bottom: 45%;
           

         }
         .load-svg{ 
             padding : 0px;
         }
         `}
         </style>
                  </div>
           );
      }
    
}


export default Index; 
