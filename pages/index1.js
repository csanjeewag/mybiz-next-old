import React, { Component } from 'react';
import Layout from './../layouts/MainLayout';
import Menu2 from './../components/menu2';
import SubNavbar from './../layouts/SubNavbar';
import Slide from  './../components/Slide1';
import Footer from './../components/Footer';
import $ from 'jquery';

const Imageside=()=> {
    return(
<div className="col-lg-6 col-sm-12">
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
<ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
</ol>
<div className="carousel-inner">
    <div className="carousel-item active">
    <img className="d-block w-100 silde2image" src="./item1.jpg" alt="First slide" width="100%"/>
    </div>
    <div className="carousel-item ">
    <img className="d-block w-100 silde2image" src="./item2.jpg" alt="Second slide" width="100%" />
    </div>
    <div className="carousel-item ">
    <img className="d-block w-100 silde2image" src="./item3.jpg" alt="Third slide" width="100%" />
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

        <div className="card-footer">
            <small className="font3 card-footer-button">2020/7/05</small>
              <a href="#" className="btn btn-danger float-right btn-sm"><img src="https://img.icons8.com/ios/25/ffffff/favorite-cart.png"/> &nbsp; Add to Cart</a>
             <a href="#" className="btn btn-primary float-right btn-sm"><img src="https://img.icons8.com/ios/25/ffffff/in-transit.png"/> &nbsp;Order Now</a>
           
        </div>

        <style jsx >
        {`  .card-footer {
            font-size: 1em;
            position: static;
            top: 0;
            left: 0;
            max-width: 100%;
            padding: 1em 0.75em;
            
        }
        .card-footer-button{
            padding: 0.5em 0.1em;
        }
        `}
        </style>
    </div>
    )
}


const Contentside=()=>{
    return (
        <div className="col-lg-6 col-sm-12">

        <div className="card">
            <div className="card-block">
            
                <h4 className="card-title font2 topicColor">topic in sri lanaka</h4>
                <div className="meta font6 subtopicColor">
                    <a>head phone</a>
                    <div className=" float-right"> 
                    <a className="Icutprise font6"> <strike>Rs.7500.00</strike>  </a> 
                    <a className="Idiscount font6"> 33% </a>
                    <a className="Iprise font6">&nbsp;Rs.451.25</a>
                    </div>
                </div>
                <div className="card-text font6">
                The . slide class adds a CSS transition and animation effect, which makes the items slide when showing a new item. Omit this class if you do not want this effect. The data-ride="carousel" attribute tells Bootstrap to begin animating the carousel immediately when the page loads.
                </div>
                <div className="card-text font6">
                The . slide class adds a CSS transition and animation effect, which makes the items slide when showing a new item. Omit this class if you do not want this effect. The data-ride="carousel" attribute tells Bootstrap to begin animating the carousel immediately when the page loads.
                </div>
                <div className="menu2-specification">
                <h5 className="menu2-subcard-title font2 fontcolorSkyblue">Specification</h5>
                <div className=" card-text font6">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                        <a className="float-left menu2-speca"><img src="https://img.icons8.com/metro/15/000000/external-link.png"/>&nbsp; &nbsp; Mic type &nbsp;: </a> <a className="float-left menu2-specb"> &nbsp; head phone</a>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                        <a className="float-left menu2-speca"><img src="https://img.icons8.com/metro/15/000000/external-link.png"/>&nbsp; &nbsp; Brand &nbsp;: </a> <a className="float-left menu2-specb"> &nbsp; MI</a>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                        <a className="float-left menu2-speca"><img src="https://img.icons8.com/metro/15/000000/external-link.png"/>&nbsp; &nbsp; Fast charging &nbsp;: </a> <a className="float-left menu2-specb"> &nbsp; Yes</a>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                        <a className="float-left menu2-speca"><img src="https://img.icons8.com/metro/15/000000/external-link.png"/>&nbsp; &nbsp; Protection &nbsp;: </a> <a className="float-left menu2-specb"> &nbsp; Plastic</a>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                        <a className="float-left menu2-speca"><img src="https://img.icons8.com/metro/15/000000/external-link.png"/>&nbsp; &nbsp; Body Type &nbsp;: </a> <a className="float-left menu2-specb"> &nbsp; Metel</a>
                        </div>
                        
                      
                
                    </div>
                </div></div>
                <div className="menu2-stock-details">
                <h5 className="menu2-subcard-title font2 fontcolorSkyblue">Stock Details</h5>
                <div className=" card-text font6">
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                        <a className="float-left menu2-speca"><img src="https://img.icons8.com/metro/15/000000/external-link.png"/>&nbsp; &nbsp; Stock Qty &nbsp;: </a> <a className="float-left menu2-specb"> &nbsp; 6</a>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                        <a className="float-left menu2-speca"><img src="https://img.icons8.com/metro/15/000000/external-link.png"/>&nbsp; &nbsp; Delivary type &nbsp;: </a> <a className="float-left menu2-specb"> &nbsp; cash on</a>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                        <a className="float-left menu2-speca"><img src="https://img.icons8.com/metro/15/000000/external-link.png"/>&nbsp; &nbsp; 100qty &nbsp;: </a> <a className="float-left menu2-specb"> &nbsp; 40% discount</a>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                        <a className="float-left menu2-speca"><img src="https://img.icons8.com/metro/15/000000/external-link.png"/>&nbsp; &nbsp; Mic type &nbsp;: </a> <a className="float-left menu2-specb"> &nbsp; head phone</a>
                        </div>
                      
    
                      
                
                    </div>
                </div></div>
                </div>
           
        </div>
        <style jsx>
                {`
                h5 {
                    font-size: 1.5em;
                    font-weight: 700;
                    line-height: 1.2857em;
                    margin-bottom: 20px;
                }
                .menu2{
                    margin-bottom : 20px;
                }
                .menu2-topic{
                    padding : 20px 10px 10px 10px;
                }
                .menu2-speca{
                    font-size: 1em;
                    color: #CF570E ;
                    
                }
                .menu2-specb{
                    font-size: 1em;
                    color: #3E1903;
                }
                .card {
                    font-size: 1em;
                    overflow: hidden;
                    padding: 0;
                    transition: 0.5s;
                    border : none;
                }
              
                .card-block {
                    font-size: 1em;
                    position: relative;
                    margin: 0;
                    padding: 0.5em;
                    box-shadow: none;
                }
                
                .card-img-top {
                    display: block;
                    width: 100%;
                    height: 200;
                }
                
                .card-title {
                    font-size: 1.28571429em;
                    font-weight: 700;
                    line-height: 1.2857em;
                    margin-bottom: 0px;
                    
                }
                .menu2-subcard-title {
                    font-size: 1em;
                    font-weight: 700;
                    line-height: 1.2857em;
                    margin-bottom: 0px;
                    
                }
                
                .card-text {
                    clear: both;
                    margin-top: .5em;
                    color: rgba(0, 0, 0, .68);
                    font-size : 15px;
                }
                
                .card-footer {
                    font-size: 1em;
                    position: static;
                    top: 0;
                    left: 0;
                    max-width: 100%;
                    padding: .5em 0.75em;
                    
                }
                
                
                .profile {
                    position: absolute;
                    top: -12px;
                    display: inline-block;
                    overflow: hidden;
                    width: 25px;
                    height: 25px;
                    margin: 0;

                }
                
                .profile-avatar {
                    display: block;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
                
                .profile-inline {
                    position: relative;
                    top: 0;
                    display: inline-block;
                }
                
                .profile-inline ~ .card-title {
                    display: inline-block;
                    margin-left: 4px;
                    vertical-align: top;
                }
                
                .text-bold {
                    font-weight: 700;
                }
                
                .meta {
                    font-size: 1.3em;
                    
                }
                
                .meta a {
                    text-decoration: none;
                    
                }
                .Icutprise{
                    text-decoration: line-through;
                    color: rgba(0, 0, 0, .8);
                    font-size: 0.75em;
                }
                .Idiscount{
                    color: darkorange;
                    font-size: 0.8em;
                }
                .Iprise{
                    color: red;
                    font-size: 1em;
                }
                `}
                </style>
           
            </div>
        
    )
}

const QuestionSide = ()=>{
    return(
        <div className="menu2-quations">
        <hr/>
        <div className="menu2-quaction">
        <img className="float-left" src="https://img.icons8.com/cute-clipart/40/000000/faq.png"/><p href="#" className="font6 fontsizeE-9">&nbsp; What is this? <br/> <spam className="spam-text font3 fontsizeE-8"> -Chanaka Sampath- on 25/02/2020</spam></p>
        <p href="#" className="font3 fontsizeE-9"><img src="https://img.icons8.com/windows/25/000000/stack-exchange-answer.png"/> &nbsp;How to add/update an attribute to an HTML element using JavaScript? How to create a pop-up to print dialog box using JavaScript?  ES6 | Animation · How to ...</p>
        <hr/>
        </div>

       <div className="menu2-quaction">
        <img className="float-left" src="https://img.icons8.com/cute-clipart/40/000000/faq.png"/><p href="#" className="font6 fontsizeE-9">&nbsp; How to add/update an attribute to an HTML element using JavaScript?  <br/> <spam className="spam-text font3 fontsizeE-8"> -Chanaka Sampath- on 25/02/2020</spam></p>
        <p href="#" className="font3 fontsizeE-9"><img src="https://img.icons8.com/windows/25/000000/stack-exchange-answer.png"/> &nbsp; How to create a pop-up to print dialog box using JavaScript?  ES6 | Animation · How to ...</p>
        <hr/>
        </div>
       <style jsx >
       {`.spam-text{
           color:gray
       }
       `}
       </style>
        </div>
    )
}

const ReviewSide = ()=>{
    return(
        <div className="menu2-reviews">
        <h5 className="menu2-subcard-title font2 fontcolorOrange">Reviews from customer</h5>
        <hr/>
        <div className="menu2-reviews">
        <img className="float-left avatar" src="./item1.jpg"/><p href="#" className="font6 fontsizeE-9">&nbsp; Chanaka Sanjeewa <br/> <spam className="spam-text font3 fontsizeE-8"> -25/02/2020-</spam></p>
        <p href="#" className="font5 fontweight700 fontsizeE-9">&nbsp;&nbsp;&nbsp;How to add/update an attribute to an HTML element using JavaScript? How to create a pop-up to print dialog box using JavaScript?  ES6  Animation · How to </p>
        <hr/>
        </div>

         <div className="menu2-reviews">
        <img className="float-left avatar" src="./item1.jpg"/><p href="#" className="font6 fontsizeE-9">&nbsp; Mayuni Achinthika <br/> <spam className="spam-text font3 fontsizeE-8"> -25/02/2020-</spam></p>
        <p href="#" className="font5 fontweight700 fontsizeE-9">&nbsp;&nbsp;&nbsp;How to add/update an attribute to an HTML element using JavaScript? How to create a pop-up to print dialog box using JavaScript?  ES6  Animation · How to How to add/update an attribute to an HTML element using JavaScript? How to create a pop-up to print dialog box using JavaScript?  ES6  Animation · How to </p>
        <hr/>
        </div>

       
       <style jsx >
       {`.spam-text{
           color:gray
       }
       .avatar {
        vertical-align: middle;
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
       `}
       </style>
        </div>
    )
}
class Index extends Component {

    /**side navbar */
    showsidebar(){
        this.refs.child.showSidebar();
      }

    componentDidMount(){
        $(document).ready(function() {
           
          
            function checkWidth() {
                var windowwidth = $('.silde2image').width();
                var windowheight = $(window).height();
                    //if the window is greater than 440px wide then turn on jScrollPane..
                  //  $('.div1').addClass('desktop')
                  $('.silde2image').css({'max-height':windowwidth/3*2,'width':'100%'});
                  $('.silde2image').parent().css({'height':windowwidth/3*2,'width':'100%','background': '#ffffff'});
               
            }
            // Execute on load
            checkWidth();
            // Bind event listener
            $(window).resize(checkWidth);
    });
    }
    
   
    render() { 

  //side navbar link
  const sidenavlink = [
    {id:1,link:'/',linkname:'home'},
    {id:1,link:'/menu',linkname:'menu'},
    {id:1,link:'/',linkname:'newmenu2'},
    {id:1,link:'/',linkname:'newmenu3'},
    {id:1,link:'/',linkname:'newmenu4'},
    {id:1,link:'/',linkname:'newmenu5'},
  ];
  
    const sidenavconst = {topic : 'Items',topiclink:'All Items',sidenavlink:sidenavlink};
//////////////

          return ( 
            <Layout> 
                <SubNavbar sidenavconst={sidenavconst}/>
                <br/>
                <div className="container">
                <div className="row">
                <Imageside></Imageside>
                <Contentside></Contentside>
                <QuestionSide></QuestionSide>
                <ReviewSide/>
                
                </div>

       

                </div>
                

                <Footer/>
                   </Layout>
           );
      }
    
}

export default Index; 
