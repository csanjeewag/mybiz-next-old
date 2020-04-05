import React, { Component } from 'react';
import Layout from '../../layouts/MainLayout';
import SubNavbar from '../../layouts/SubNavbar';
import Footer from '../../components/Footer';
import Errorpage from './../../layouts/error';
import $ from 'jquery';
import  {Url,ImageUrl} from './../../constant/main';
import Link from 'next/link';

const Imageside=(props)=> {
    return(
<div className="col-lg-6 col-sm-12">
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
<ol className="carousel-indicators">
{props.item.images.map((x,i)=>
    <li key={i} data-target="#carouselExampleIndicators" data-slide-to={i} className={i==0?'active':'c'} ></li> 
    )}

</ol>
<div className="carousel-inner">
{props.item.images.map((x,i)=>
                <div key={i} className={i==0?'carousel-item active':'carousel-item'}>
                <img className="d-block w-100 silde2image" src={ImageUrl+x} alt="first slide" width="100%" />
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

        <div className="card-footer">
            <small className="font3 card-footer-button">{props.item.createDate}</small>
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


const Contentside=(props)=>{
    return (
        <div className="col-lg-6 col-sm-12">

        <div className="card">
            <div className="card-block">
            
                <h4 className="card-title font2 topicColor">{props.item.itemlongname}</h4>
                <div className="meta font6 subtopicColor">
                    <a>{props.item.categery}</a>
                    <div className=" float-right"> 
                    <a className="Icutprise font6"> <strike>{props.item.itemPrice}</strike>  </a> 
                    <a className="Idiscount font6"> 33% </a>
                    <a className="Iprise font6">&nbsp;Rs.451.25</a>
                    </div>
                </div>
                <div className="card-text font6">
               {props.item.content1}
               </div>
                <div className="card-text font6">
                {props.item.content2}
                </div>
                <div className="menu2-specification">
                <h5 className="menu2-subcard-title font2 fontcolorSkyblue">Specification</h5>
                <div className=" card-text font6">
                    <div className="row">
                        {props.item.itemSpecification?props.item.itemSpecification.map((x,i)=>
                            <div className="col-lg-6 col-sm-12" key={i}>
                            <a className="float-left menu2-speca"><img src="https://img.icons8.com/metro/15/000000/external-link.png"/>&nbsp; &nbsp; {x.name} &nbsp;: </a> <a className="float-left profile-specb"> &nbsp; {x.value}</a>
                            </div>
                            ):null}
                      
                
                    </div>
                </div></div>
                <div className="menu2-stock-details">
                <h5 className="menu2-subcard-title font2 fontcolorSkyblue">Stock Details</h5>
                <div className=" card-text font6">
                    <div className="row">
                    {props.item.stockDetail?props.item.stockDetail.map((x,i)=>
                            <div className="col-lg-6 col-sm-12" key={i}>
                            <a className="float-left menu2-speca"><img src="https://img.icons8.com/metro/15/000000/external-link.png"/>&nbsp; &nbsp; {x.name} &nbsp;: </a> <a className="float-left profile-specb"> &nbsp; {x.value}</a>
                            </div>
                            ):null}
    
                      
                
                    </div>
                </div></div>
                <hr/>
                <Link href={'/myshop/'+props.item.shop[0].shopid}><a href="#" className="btn btn-primary float-right btn-sm"><img src="https://img.icons8.com/ios/25/ffffff/online-shop.png"/> &nbsp;go to shop</a></Link>
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
                {this.props.error?<Errorpage error={this.props.item} />:
                
                
                <div className="container">
                <div className="row">
                <Imageside item={this.props.item}></Imageside>
                <Contentside item={this.props.item} ></Contentside>
                <QuestionSide></QuestionSide>
                <ReviewSide/>
                
                </div></div>}
                

                <Footer/>
                   </Layout>
           );
      }
    
}

Index.getInitialProps = async function(context) {
    const { id,ide } = context.query;
    const res = await fetch(`${Url}item/${id}?ide=${ide}`);
   
     var  item = await res.json();
     var error = false;
     if(res.status!=200){
      error = true ;
    }

    return {item,error}


  }

  export default Index;
