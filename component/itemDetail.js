import React, { Component } from 'react';
import Link from 'next/link';
import $ from 'jquery';
import Slider from "react-slick";
import  {Url,ImageUrl,myshopmUrl,categoryUrl, web,websiteUrl,itemUrl} from './../constant/main';
import Cookie from "js-cookie";

/****************************************************QuestionSide******************************************* */
const QuestionSide = (props)=>{
    return(
        <div className="menu2-quations col-12">
        <hr/>
        {props.questiondata?props.questiondata.map((x,i)=>
            <div key={i} className="menu2-question ">
            {(x.answer&&Cookie.getJSON('user')&&Cookie.getJSON('user')._id==props.shopUserid)?<button className="popup-close-question" onClick={props.removeansewer.bind(this,x._id)}>x</button>:null}
            <img className="float-left lazyload" src="https://img.icons8.com/cute-clipart/40/000000/faq.png"/><p href="#" className="font6 fontsizeE-9">&nbsp; {x.question}<br/> <span className="spam-text font3 fontsizeE-8"> -{x.a_user.name}- on {x.a_Date}</span></p>
            <p  className="font3 fontsizeE-9"><img  className="lazyload" src="https://img.icons8.com/windows/25/000000/stack-exchange-answer.png"/> &nbsp;{x.answer?x.answer:'pending answer..'}</p>
            {(!x.answer&&Cookie.getJSON('user')&&Cookie.getJSON('user')._id==props.shopUserid)?<div>
            <input className="inputf2" type="text" name="question" id={'input-'+x._id} /><br/>
            <button onClick={props.handlegiveanswer.bind(this,x._id)} type="button" className="btn btn-primary btn-sm"><i className="fa fa-bullhorn" aria-hidden="true"></i>&nbsp; keep a answer </button>
        
            </div>:null}
            
            <hr/>
            </div>  
            ):null}
      

        <div className="menu2-question">
        <img className="lazyload" className="float-left" src="https://img.icons8.com/cute-clipart/40/000000/faq.png"/>
        <input className="inputf2" type="text" name="question" value={props.question}  onChange={props.handleChange} /><br/>
        <button onClick={props.handleaskquestion} type="button" className="btn btn-primary btn-sm fontsizeE1"><i className="fa fa-quora" aria-hidden="true"></i>&nbsp; Ask a question </button>
        
        <hr/>
        </div>

       <style jsx >
       {`.spam-text{
           color:gray
       }
       .inputf2{
        width: 90%;
		color: darkblue;
		padding:3px;
		border: solid 1px #808080b3;
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
        {props.reviewsdata?props.reviewsdata.map((x,i)=>
           <div key={i} className="menu2-reviews">
           <img className="lazyload" className="float-left avatar" src={x.user.imageUrl} /><p  className="font6 fontsizeE-9">&nbsp; {x.user.name} <br/> <span className="spam-text font3 fontsizeE-8"> -{x.createDate}-</span></p>
           <p  className="font5 fontweight700 fontsizeE-9">&nbsp;&nbsp;&nbsp;{x.review} </p>
           <hr/>
           </div>   
            ):null}
      
      <div className="menu2-question col-12">

	  <div className="flex-w flex-m p-t-50 p-b-23">
			<span className="stext-102 cl3 m-r-16">
													Your Rating
			</span>

				<span className="wrap-rating fs-18 cl11 pointer">
				<i className="item-rating pointer zmdi zmdi-star-outline"></i>
				<i className="item-rating pointer zmdi zmdi-star-outline"></i>
				<i className="item-rating pointer zmdi zmdi-star-outline"></i>
				<i className="item-rating pointer zmdi zmdi-star-outline"></i>
				<i className="item-rating pointer zmdi zmdi-star-outline"></i>
				<input className="dis-none" type="number" name="rating"/>
				</span>
		</div>

        <img className="lazyload" className="float-left" src="https://img.icons8.com/ios/40/000000/edit-chat-history.png"/>
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
		border: solid 1px #808080b3;
		padding:3px;
        width: 90%;
        color: darkblue;
       }
       `}
       </style>
        </div>
    )
}

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
	  <div
		className={className}
		style={{ display: "block", background: "red" }}
		onClick={onClick}
	  />
	);
  }
  
  function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
	  <div
		className={className}
		style={{ display: "block", background: "green" }}
		onClick={onClick}
        />
	);
  }
  function Arrow(props) {
	const { className, style, onClick } = props;
	return (
	  <div
		className={className}
		style={{ display: "none", background: "gray" ,color:'purple'}}
		onClick={onClick}
        />
	);
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
            allitems:[],
            cartcout:1
    }

    
    
    }

	addtocart(item){
        var data = Cookie.getJSON('faverite-item');
		var jsonarray = [];
		var jsonarrayList=[];
        
        if(data){
            if(!data.includes(item._id))
            {jsonarray = [...data,item._id]
			Cookie.set('faverite-item',jsonarray);

			var datalist = Cookie.getJSON('faverite-item-list');
	
			jsonarrayList = [...datalist,{_id:item._id,itemname:item.itemname,urlname:item.urlname,image:item.images[0],itemdiscount:item.itemdiscount,itemPrice:item.itemPrice}];
	
			Cookie.set('faverite-item-list',jsonarrayList);
			

			$('#cart-yes-'+item._id).show(100);
			$('#cart-no-'+item._id).hide(100);
			swal("Added to favorites",item.itemname+' in favorites now.',"success");
		
            }else{

			swal("Already in favorites",item.itemname+' in favorites now.',"warning");

            }
        }else{
			jsonarray = [item._id];
			Cookie.set('faverite-item',jsonarray);
			jsonarrayList = [{_id:item._id,itemname:item.itemname,urlname:item.urlname,image:item.images[0],itemdiscount:item.itemdiscount,itemPrice:item.itemPrice}]
			Cookie.set('faverite-item-list',JSON.stringify(jsonarrayList));
			$('#cart-yes-'+item._id).show(100);
			$('#cart-no-'+item._id).hide(100);
            swal("Added to favorites",item.itemname+' in favorites now.',"success");

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

        var settings = {
            dots: false,
            fade: true,
            infinite: true,
            speed: 5000,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 5000,
            cssEase: "linear",
			pauseOnHover: true,
			nextArrow: <Arrow />,
			prevArrow: <Arrow />

          };
          var setting2 = {
            infinite: true,
            autoplay: true,
            slidesToShow: 3,
            slidesToScroll: 2,
            autoplaySpeed: 1000,
            pauseOnHover: true,
            swipeToSlide: true,
            nextArrow: <Arrow />,
			prevArrow: <Arrow />

          };
        
          return ( 
            <div>
                {/** Product Detail */}
                <section className="sec-product-detail bg0 p-b-60">
		<div className="container">
			<div className="row">
				<div className="col-md-6 col-lg-7 p-b-30">
					<div className="p-l-25 p-r-30 p-lr-0-lg">
						<div className="wrap-slick3 flex-sb flex-w">
							<div className="wrap-slick3-dots">
							{this.props.item.images.map((x,i)=>			
									<img className="lazyload" key={i} className="pb-2" src={ImageUrl+x} alt="IMG-PRODUCT" style={{width:'100%'}} />
               				 )}	
							</div>
							<div className="wrap-slick3-arrows flex-sb-m flex-w">
							
							</div>

							<div className="slick3 gallery-lb">
                            <Slider {...settings}>
							{this.props.item.images.map((x,i)=>
								<div key={i} className="item-slick3" >
								<div className="wrap-pic-w pos-relative">
									<img className="lazyload" src={ImageUrl+x} alt="IMG-PRODUCT" style={{maxHeight:'600px',height:'auto',width:'100%'}} />

									<a className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href={ImageUrl+x}>
										<i className="fa fa-expand"></i>
									</a>
								</div>
							</div>
               			 )}
								
									</Slider>
								
                            </div>
						</div>
					</div>
				</div>
					
				<div className="col-md-6 col-lg-5 p-b-30">
					<div className="p-r-50 p-t-5 p-lr-0-lg">
						<h4 className="mtext-105 cl2 js-name-detail p-b-14 subtopicColor">
							{this.props.item.itemlongname}
						</h4>
                        <div >
                        
						<a href={myshopmUrl+this.props.item.shop[0].shopurl} className="flex-c-m stext-104 cl0 bg1 bor1 hov-btn1 p-lr-15 trans-04 float-right py-1">
							07x xxxx
						</a>
						<a href={categoryUrl+this.props.item.categery} className="flex-c-m stext-104 cl0 bg1 bor1 hov-btn1 p-lr-15 trans-04 float-right py-1">
							All Items
						</a>
                        <div className="fb-share-button" data-href={websiteUrl+itemUrl+this.props.item.urlname} data-layout="button_count" data-size="large"><a  target="_blank" href={websiteUrl+itemUrl+this.props.item.urlname} className="fb-xfbml-parse-ignore">Share</a></div>
						</div>

                       

					<p className="fontsizeE-9" >{this.props.item.categery}/{this.props.item.subcategery}</p>
                    <p className="fontsizeE-9 fontcolorOrange" >{this.props.item.shop[0].shopName}/{this.props.item.shop[0].town}</p>
						
						<span className="mtext-106 cl2">
						{this.props.item.itemdiscount>0?<a className="font6 fontsizeE-7"> <strike>Rs.{this.props.item.itemPrice}.00</strike>  </a>:null}
                    	{this.props.item.itemdiscount>0?<a className="font6 fontsizeE-9"> {this.props.item.itemdiscount}% </a>:null}
                    	<a className="fontsizeE-9 font6"><span className="fontcolorred">&nbsp;Rs.{this.props.item.itemPrice*(100-this.props.item.itemdiscount)/100}</span></a>
                        </span>

						<p className="stext-102 cl3">						
						{this.props.item.content1}
						</p>
						<p className="stext-102 cl3">						
						{this.props.item.content2}
						</p>
						
						<div className="menu2-specification">
						{this.props.item.itemSpecification&&this.props.item.itemSpecification.length>0?<h5 className="menu2-subcard-title font2 fontcolorSkyblue fontsizeE1">Specification</h5>:null}
						<div className=" card-text font6">
							<div className="row">
								{this.props.item.itemSpecification?this.props.item.itemSpecification.map((x,i)=>
									<div className="col-lg-6 col-sm-12" key={i}>
									<a className="float-left menu2-speca"><img className="lazyload" src="https://img.icons8.com/metro/15/000000/collect.png"/>&nbsp; &nbsp; {x.name} &nbsp;: </a> <a className="float-left profile-specb"> &nbsp; {x.value}</a>
									</div>
									):null}
                       </div>
                </div></div>
                
						<div className="menu2-stock-details">
						{this.props.item.stockDetail&&this.props.item.stockDetail.length>0?<h5 className="menu2-subcard-title font2 fontcolorSkyblue fontsizeE1">Stock Details</h5>:null}
						<div className=" card-text font6">
							<div className="row">
							{this.props.item.stockDetail?this.props.item.stockDetail.map((x,i)=>
									<div className="col-lg-6 col-sm-12" key={i}>
									<a className="float-left menu2-speca"><img className="lazyload" className="lazyload" src="https://img.icons8.com/metro/15/000000/collect.png"/>&nbsp; &nbsp; {x.name} &nbsp;: </a> <a className="float-left profile-specb"> &nbsp; {x.value}</a>
									</div>
									):null}
			
							
						
							</div>
						</div></div>
                
						{/** add to cart */}
						<div className="p-t-33">
							<div className="flex-w flex-r-m p-b-10">
								<div className="size-204 flex-w flex-m respon6-next">
								{/*	<div className="wrap-num-product flex-w m-r-20 m-tb-10">
										<div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
											<i className="fs-16 zmdi zmdi-minus"></i>
										</div>

										<button className="mtext-104 cl3 txt-center num-product" type="number" name="num-product">1</button>

										<div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
											<i className="fs-16 zmdi zmdi-plus"></i>
										</div>
									</div>*/}

									<button className="flex-c-m stext-104 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail" onClick={()=>this.addtocart(this.props.item)}>
										Add to Favorites
									</button>
								</div>
							</div>	
						</div>

						{/** links */}
						<div className="flex-w flex-m p-l-100 p-t-40 respon7">
							<div className="flex-m bor9 p-r-10 m-r-11">
								<a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100" data-tooltip="Add to Wishlist">
									<i className="zmdi zmdi-favorite"></i>
								</a>
							</div>

							<a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Facebook">
								<i className="fa fa-facebook"></i>
							</a>

							<a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Twitter">
								<i className="fa fa-twitter"></i>
							</a>

							<a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Google Plus">
								<i className="fa fa-google-plus"></i>
							</a>
						</div>
					</div>
				</div>
			</div>


			<div className="bor10 m-t-50 p-t-43 p-b-40">
				{/** Tab01 */}
				<div className="tab01">
					{/** Nav tabs */}
					<ul className="nav nav-tabs" role="tablist">
						<li className="nav-item p-b-10">
							<a className="nav-link active" data-toggle="tab" href="#description" role="tab">Reviews</a>
						</li>

						<li className="nav-item p-b-10">
							<a className="nav-link" data-toggle="tab" href="#information" role="tab">Question & Answer</a>
						</li>
					</ul>

					{/** Tab panes */}
					<div className="tab-content p-t-43">
						{/** - */}
						<div className="tab-pane fade show active" id="description" role="tabpanel">
						<ReviewSide reviewsdata={this.state.reviewsdata} review={this.state.review} handleChange={this.handleChange} handlereviews={this.handlereviews} />
						
						</div>

						{/** - */}
						<div className="tab-pane fade" id="information" role="tabpanel">
						<QuestionSide shopUserid={this.props.item.user._id} removeansewer={(id)=>this.removeansewer(id)} questiondata={this.state.questiondata} question={this.state.question} answer={this.state.answer} handleaskquestion={this.handleaskquestion} handleChange={this.handleChange} handlegiveanswer={(id)=>this.handlegiveanswer(id)}></QuestionSide>
						
						</div>

					</div>
				</div>
			</div>
		</div>

		<div className="bg6 flex-c-m flex-w size-302 m-t-73 p-tb-15">
			<span className="stext-107 cl6 p-lr-25">
			{this.props.item.shop[0].shopName}
			</span>

			<span className="stext-107 cl6 p-lr-25">
				{this.props.item.shop[0].district} \ {this.props.item.shop[0].town}
			</span>
		</div>
	</section>
    <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v7.0&appId=639750616597961&autoLogAppEvents=1"></script>

            </div>
           );
      }
    
}

export default Index;