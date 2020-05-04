import React, { Component } from 'react';
import Head from 'next/head';
import Layout from '../../layouts/MainLayout';
import SubNavbar from '../../layouts/SubNavbar';
import Footer from '../../components/Footer';
import Errorpage from './../../layouts/error';
import $ from 'jquery';
import  {Url,ImageUrl,myshopmUrl,wesitename,WebUrl, web,websiteUrl,itemUrl} from './../../constant/main';
import Link from 'next/link';
import Cookie from "js-cookie";

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
             <button onClick={props.addtocart.bind(this,props.item._id,props.item.itemname)} className="btn btn-danger float-right btn-sm fontsizeE-9"><img src="https://img.icons8.com/ios/25/ffffff/favorite-cart.png"/> &nbsp; Add to Cart</button>
            {/* <button onClick={props.addtocart.bind(this,props.item._id,props.item.itemname)} className="btn btn-primary float-right btn-sm fontsizeE-9"><img src="https://img.icons8.com/ios/25/ffffff/in-transit.png"/> &nbsp;Order Now</button> */}
           
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

/*****************************************Content side********************************************** */
const Contentside=(props)=>{
    return (
        <div className="col-lg-6 col-sm-12">

        <div className="card">
            <div className="card-block">
            
                <h4 className="card-title font2 topicColor fontsizeE2-25">{props.item.itemlongname}</h4>
                <div className="meta font6 subtopicColor">
                    <a className="fontsizeE-9" >{props.item.categery}/{props.item.subcategery}</a>
                    <div className=" float-right fontsizeE-9"> 
                    <a className="Icutprise font6"> <strike>Rs.{props.item.itemPrice}.00</strike>  </a> 
                    <a className="Idiscount font6"> {props.item.itemdiscount}% </a>
                    <a className="Iprise font6">&nbsp;Rs.{props.item.itemPrice*(100-props.item.itemdiscount)/100}</a>
                    
                    </div>
                </div>
                <div className="card-text font6">
               {props.item.content1}
               </div>
                <div className="card-text font6">
                {props.item.content2}
                </div>
                <div className="menu2-specification">
                <h5 className="menu2-subcard-title font2 fontcolorSkyblue fontsizeE1">Specification</h5>
                <div className=" card-text font6">
                    <div className="row">
                        {props.item.itemSpecification?props.item.itemSpecification.map((x,i)=>
                            <div className="col-lg-6 col-sm-12" key={i}>
                            <a className="float-left menu2-speca"><img src="https://img.icons8.com/metro/15/000000/collect.png"/>&nbsp; &nbsp; {x.name} &nbsp;: </a> <a className="float-left profile-specb"> &nbsp; {x.value}</a>
                            </div>
                            ):null}
                      
                
                    </div>
                </div></div>
                <div className="menu2-stock-details">
                <h5 className="menu2-subcard-title font2 fontcolorSkyblue fontsizeE1">Stock Details</h5>
                <div className=" card-text font6">
                    <div className="row">
                    {props.item.stockDetail?props.item.stockDetail.map((x,i)=>
                            <div className="col-lg-6 col-sm-12" key={i}>
                            <a className="float-left menu2-speca"><img src="https://img.icons8.com/metro/15/000000/collect.png"/>&nbsp; &nbsp; {x.name} &nbsp;: </a> <a className="float-left profile-specb"> &nbsp; {x.value}</a>
                            </div>
                            ):null}
    
                      
                
                    </div>
                </div></div>
                <hr/>
          
                <Link href={myshopmUrl+props.item.shop[0].shopurl}><a href="#" className="btn btn-primary float-right btn-sm fontsizeE1"><img src="https://img.icons8.com/ios/25/ffffff/online-shop.png"/> {props.item.shop[0].shopName}&nbsp;in&nbsp;{props.item.shop[0].town} </a></Link>
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
                    font-size : 0.9em;
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
/****************************************************QuestionSide******************************************* */
const QuestionSide = (props)=>{
    return(
        <div className="menu2-quations col-12">
        <hr/>
        {props.questiondata.map((x,i)=>
            <div key={i} className="menu2-question ">
            {(x.answer&&Cookie.getJSON('user')&&Cookie.getJSON('user')._id==props.shopUserid)?<button className="popup-close-question" onClick={props.removeansewer.bind(this,x._id)}>x</button>:null}
            <img className="float-left" src="https://img.icons8.com/cute-clipart/40/000000/faq.png"/><p href="#" className="font6 fontsizeE-9">&nbsp; {x.question}<br/> <span className="spam-text font3 fontsizeE-8"> -{x.a_user.name}- on {x.a_Date}</span></p>
            <p  className="font3 fontsizeE-9"><img src="https://img.icons8.com/windows/25/000000/stack-exchange-answer.png"/> &nbsp;{x.answer?x.answer:'pending answer..'}</p>
            {(!x.answer&&Cookie.getJSON('user')&&Cookie.getJSON('user')._id==props.shopUserid)?<div>
            <input className="inputf2" type="text" name="question" id={'input-'+x._id} /><br/>
            <button onClick={props.handlegiveanswer.bind(this,x._id)} type="button" className="btn btn-primary btn-sm"><i className="fa fa-bullhorn" aria-hidden="true"></i>&nbsp; keep a answer </button>
        
            </div>:null}
            
            <hr/>
            </div>  
            )}
      

        <div className="menu2-question">
        <img className="float-left" src="https://img.icons8.com/cute-clipart/40/000000/faq.png"/>
        <input className="inputf2" type="text" name="question" value={props.question}  onChange={props.handleChange} /><br/>
        <button onClick={props.handleaskquestion} type="button" className="btn btn-primary btn-sm fontsizeE1"><i className="fa fa-quora" aria-hidden="true"></i>&nbsp; Ask a question </button>
        
        <hr/>
        </div>

       <style jsx >
       {`.spam-text{
           color:gray
       }
       .inputf2{
        width: 80%;
        color: darkblue;
       }
       .popup-close-question {
        position: relative;
        top: -1rem;
        right: 0rem;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #01567e;
        cursor: pointer;
        font-size: 0.6rem;
        width: 1.2rem;
        height: 1.2rem;
        border:none;
       `}
       </style>
        </div>
    )
}
/*************************************************************Review side************************************************** */
const ReviewSide = (props)=>{
    return(
        <div className="menu2-reviews col-12">
        <h5 className="menu2-subcard-title font2 fontcolorOrange fontsizeE1">Reviews from customer</h5>
        <hr/>
        {props.reviewsdata.map((x,i)=>
           <div key={i} className="menu2-reviews">
           <img className="float-left avatar" src={x.user.imageUrl} /><p  className="font6 fontsizeE-9">&nbsp; {x.user.name} <br/> <span className="spam-text font3 fontsizeE-8"> -{x.createDate}-</span></p>
           <p  className="font5 fontweight700 fontsizeE-9">&nbsp;&nbsp;&nbsp;{x.review} </p>
           <hr/>
           </div>   
            )}
      
      <div className="menu2-question col-12">
        <img className="float-left" src="https://img.icons8.com/ios/40/000000/edit-chat-history.png"/>
        <input className="inputf2" type="text" name="review" value={props.review}  onChange={props.handleChange} /><br/>
        <button onClick={props.handlereviews} type="button" className="btn btn-danger btn-sm fontsizeE-9"><i className="fa fa-comments" aria-hidden="true"></i>&nbsp; keep a review </button>
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
      .inputf2{
        width: 80%;
        color: darkblue;
       }
       `}
       </style>
        </div>
    )
}
class Index extends Component {
    constructor() {
        super();
        this.state = {
            item:{},
            itemid:'',
            question: '',
            answer: '',
            questiondata:[],
            review:'',
            reviewsdata:[],
            allitems:[]
    }

    
    
    }

    addtocart=(itemid,name)=>{
        var data = Cookie.getJSON('faverite-item');
        var jsonarray = []
        
        if(data){
            if(!data.includes(itemid))
            {jsonarray = [...data,itemid]
            Cookie.set('faverite-item',jsonarray);
            alert(`add ${name} to cart, you can change count, go to my-cart.`)
            }else{
            alert(`already added ${name} to cart.`) 
            }
        }else{
            jsonarray = [itemid]
            Cookie.set('faverite-item',jsonarray);
            alert(`add ${name} to cart. you can change count, go to my-cart.`)
        }
    
     
    }

    handleChange = evt => {
        // This triggers everytime the input is changed
            this.setState({
                [evt.target.name]: evt.target.value,
            });
            
        };

    
    handlereviews=()=>{
        const data = new FormData();
        data.append('user', JSON.stringify(Cookie.getJSON('user')));
        data.append('jsonbody', JSON.stringify(this.state));
  
        fetch('/api/reviewcreate',{
            method: 'POST',
            headers: {
            },
            body:data
        
            }
        )
        .then(response => {this.loadreviews(); return response.json(); } )
        .then(data => { if(data!=undefined){this.setState({review:''});alert(data.msg);}})
        .catch(error => console.log(error))
    }
     //ask question
    handleaskquestion=()=>{
        const data = new FormData();
        data.append('user', JSON.stringify(Cookie.getJSON('user')));
        data.append('jsonbody', JSON.stringify(this.state));
  
        fetch('/api/questioncreate',{
            method: 'POST',
            headers: {
            },
            body:data
        
            }
        )
        .then(response => {this.loadquestions(); return response.json(); } )
        .then(data => { if(data!=undefined){ this.setState({question:''}); alert(data.msg);}})
        .catch(error => console.log(error))

       
    }
    //delete answer
    removeansewer=(id)=>{
        const data = new FormData();
  
        fetch('/api/removeansewer/'+id,{
            method: 'PUT',
            headers: {
            },
            body:data
        
            }
        )
        .then(response => {this.loadquestions(); return response.json(); } )
        .then(data => { if(data!=undefined){this.setState({review:''});alert(data.msg);}})
        .catch(error => console.log(error))
    }
    //give answer
    handlegiveanswer=(id)=>{
        var state =  {
            answer: $(`#input-${id}`).val(),
        }
            const data = new FormData();
            data.append('user', JSON.stringify(Cookie.getJSON('user')));
            data.append('jsonbody', JSON.stringify(state));
    
            fetch(`/api/answertoqestion/${id}`,{
                method: 'POST',
                headers: {
                },
                body:data
            
                }
            )
            .then(response => {this.loadquestions(); return response.json(); } )
            .then(data => {if(data!=undefined){this.setState({review:''});alert(data.msg);}})
            .catch(error => console.log(error))

       
    }
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
        
        this.loadquestions();
        this.loadreviews();
        this.loadCatagorybyname();

    }
    
    loadquestions(){
        fetch(`${Url}questions/${this.props.item._id}`)
        .then(res=>{ return res.json();})
        .then(data=>{
            this.setState({
                item:this.props.item,
                itemid:this.props.item._id?this.props.item._id:'',
                questiondata : data
            })
        })
    }
    loadreviews(){
        fetch(`${Url}reviews/${this.props.item._id}`)
        .then(res=>{ return res.json();})
        .then(data=>{
            this.setState({
                reviewsdata : data
            })
        })
    }
    loadCatagorybyname(){
        fetch(`${Url}catagerybyname/${this.props.item.categery}`)
        .then(res=>{ return res.json();})
        .then(data=>{
            this.setState({
                allitems : data
            });
        })
    }
   
    render() { 

  
    const sidenavconst = {topic : 'Items',topiclink:'All Items',sidenavlink:this.state.allitems,visible:this.props.error?false:true, suburl:'item'};
//////////////

          return ( 
            <Layout> 

        

                 <SubNavbar sidenavconst={sidenavconst}/>
                <br/>
                {this.props.error?<Errorpage error={this.props.item} />: 
                <div className="container">

                <Head>
                <title> {wesitename+' '+this.props.item.itemname+' '+this.props.item.shop[0].shopName+' '+this.props.item.shop[0].town}</title>
                <meta property="og:url"           content={websiteUrl+itemUrl+this.props.pathname} />
                <meta property="og:type"          content={web.webtypeA} />
                <meta property="og:title"         content={wesitename+' online shop in sri lanka. '+this.props.item.itemname} />
                <meta property="og:description"   content={this.props.item.content1} />
                <meta property="og:image"         content={ImageUrl+this.props.item.images[0]}/>
                
                <meta name="keywords" content={this.props.item.urlname.split('-').join(',')+',sri lanka'}></meta>
                <meta name="description" content={this.props.item.content1}></meta>
                </Head>

                <div className="row">
                <Imageside item={this.props.item} addtocart={(itemid,name)=>this.addtocart(itemid,name)}></Imageside>
                <Contentside item={this.props.item} ></Contentside>
                <QuestionSide shopUserid={this.props.item.user._id} removeansewer={(id)=>this.removeansewer(id)} questiondata={this.state.questiondata} question={this.state.question} answer={this.state.answer} handleaskquestion={this.handleaskquestion} handleChange={this.handleChange} handlegiveanswer={(id)=>this.handlegiveanswer(id)}></QuestionSide>
                <ReviewSide reviewsdata={this.state.reviewsdata} review={this.state.review} handleChange={this.handleChange} handlereviews={this.handlereviews} />
                
                </div></div>}
                
                <br/>
                <Footer/>
                   </Layout>
           );
      }
    
}

Index.getInitialProps = async function(context) {
    const { id,ide } = context.query;
    var pathname = id+'?ide='+ide;
    const res = await fetch(`${Url}item/${id}?ide=${ide}`);

     var  item = await res.json();
     var error = false;
     if(res.status!=200){
      error = true ;
    }

    return {pathname,item,error}


  }

  export default Index;
