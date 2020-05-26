import React, { Component } from 'react';
import Link from 'next/link';
import Cookie from "js-cookie";
import Router from 'next/router';
import Cart from './cart';
import Notfications from './notification';
import $ from 'jquery';
import SignUp from './signup';
import Loading from './loading';
import {Url,NavLink,wesitename,logoUrl,myProfileUrl,myshopmUrl,myoderUrl,createshopUrl, helpUrl} from './../constant/main';



const Notfication=(props)=>{

	const deletenotification=(id)=>{
	 fetch(`${Url}deletenotification/${id}`);
   //  props.loadnotifications.bind(this);
	 }
   
	 return(
		 <div className="dropdown-menu dropdown-menu-notification notification">
		 
		 {props.notfication.map((x,i)=>
   
		 <div key={i} className="row rownotication col-12 notificationmsg alert">
			 <div className="d-flex bd-highlight">
			 <div className="p-1 bd-highlight"> {x.imageUrl?<img src={x.imageUrl} alt="Avatar" className="avatar float-left"/>:null}</div>
			 <div className="p-1 flex-grow-1 bd-highlight">
			 <Link href={x.link?x.link:'#'}>
			 <a className=" topicColor fontsizeE-8 font1 float-left p-0 content pointer" onClick={deletenotification.bind(this,x._id)}> {x.content}</a>
			 </Link>
			 <span className=" fontsizeE-6 float-right footercontent"> {x.name} </span>
			 </div>
			 <div onClick={deletenotification.bind(this,x._id)} className="py-1 px-0 bd-highlight pointer"><span aria-hidden="true" className="fontsizeE-8 font1 float-right"><i data-dismiss="alert" aria-label="Close">x</i></span></div>
		 </div>
		 </div>
		 )}
 
	   <style jsx>
		   {`
					 .notification{
						 width:250px;
						 border-radius:  0 0 10px 10px;
						 background : #b5c6d9f0;
						 overflow: auto;
						 margin-left : -100px;
						 
					 }
					 .rownotication{
						 margin : 0;
					 }
					 .notificationmsg{
						 width:248px;
						 padding: 0 5px 0 5px;;
						 marging:0;
						 border-bottom: 1px solid #ececec;
					 }
					 .avatar {
						 vertical-align: middle;
						 width: 30px;
						 height: 30px;
						 border-radius: 50%;
					   }
					 .content{
						 padding:0;
						 marging:0;
					 }
					 .footercontent{
						 padding:0;
						 marging:0;
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
        isuserlogin:false,
        user:{},
        notfication:[],
		notficationcount :0,
		cartitemcount:0

  }
	}
        //show signup
        showsignup(name){
            this.refs.signup.showsignup(name?name:'seller');
          }

    loadnotifications=()=>{

        fetch(`${Url}notifications/${Cookie.getJSON('user')._id}`)
        .then(res=>{ return res.json()})
        .then(data => { this.setState({notfication:data,notficationcount:data.length});})
    }
    

    componentDidMount(){
		$('.load').hide();
        if(Cookie.getJSON('user')){
            this.loadnotifications()
        }

        if(Router.query.signin=='true'){
        this.showsignup();
        }
        if(Cookie.getJSON('faverite-item')){
			var count = Cookie.getJSON('faverite-item').length;
			this.setState({
				cartitemcount:count
			})
		}

        this.setState({
            user : Cookie.getJSON('user'),
            isuserlogin : Cookie.getJSON('user')?true:false
        })
        $(document).ready(function() {
		
			//notification
			$('.js-show-notification').click(function(){
				$('.notification-side-bar').slideDown(1000)
			})

            $('.togglemenuC').click(function(){
                    $('div.navbar-collapse').removeClass('show');
                    $('.menuClose').fadeOut(10);
                    $('.menuOpen').fadeIn(100);
                 
            });
            $('.togglemenuO').click(function(){
                $('.menuOpen').fadeOut(10);
                $('.menuClose').fadeIn(100);
             
            });
          
            // Transition effect for navbar 
            $(window).scroll(function() {
              // checks if window is scrolled more than 500px, adds/removes solid class
              if($(this).scrollTop() > $(window).height()/3) { 
                  $('.navbar').addClass('SolidNav').removeClass('navbar-bar');
              }
              else {
                  $('.navbar').removeClass('SolidNav').addClass('navbar-bar');
              }
             
            });
            
            function checkMobile() {
                var windowwidth = $(window).width();

                if(windowwidth<600){
                    $('.nav-link-main').css({'background-color':'#03468f','opacity':'0.9','padding-left':'20px'});

                    $(window).scroll(function() {
                        if($(this).scrollTop() > $(window).height()/4) { 
                            $('.nav-link-main').css({'background-color':'darkblue','opacity':'0.9','padding-left':'20px'});
                        }else{
                            $('.nav-link-main').css({'background-color':'#03468f','opacity':'0.9','padding-left':'20px'});
                        }
                        
                      });
                }
                  
               
            }
            checkMobile();
            $(window).resize(checkMobile);
    });
    }

    show(){
        if($('#collapsibleNavbar').is(":visible")){
            $('#collapsibleNavbar').slideUp(500);
        }else{
            $('#collapsibleNavbar').slideDown(500);
        }
    }
    logout(){
		swal({
			title: "Are you sure?",
			text: "do you need log out from onshop.lk.",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		  })
		  .then((willDelete) => {
			if (willDelete) {
				Cookie.remove('user');
            	Router.reload();
			  swal("You are log out from onshop.lk", {
				icon: "success",
			  });
			} else {
			  swal("Ok, you are still login with onshop.lk");
			}
		  });
        
    }

     shownotification=()=>{
        if($('.dropdown-menu-notification').is(":visible")){
            $('.dropdown-menu-notification').slideUp(500) 
        }
        else{
          
            $('.dropdown-menu-notification').slideDown(500)  
        }
	}
	showcart=()=>{
		this.refs.mycart.loaditems();
		
	}
    render() { 
        
          return ( 
            <div id="header">
   <SignUp ref="signup" showsignup={this.props.showsignup} />

                 {/**header */}
                 <header>
		{/* Header desktop */}
		<div className="container-menu-desktop">
			{/* Topbar */}
			<div className="top-bar">
				<div className="content-topbar flex-sb-m h-full container">
					<div className="left-top-bar">
						onshop.lk, online shopping store
					</div>

					<div className="right-top-bar flex-w h-full">
						<a href={helpUrl}  className="flex-c-m trans-04 p-lr-25">
							Help & FAQs
						</a>

				
							{this.state.isuserlogin&&this.state.user.isseller?
						<Link  href={`${myProfileUrl}?id=${this.state.isuserlogin?this.state.user._id:''}`}><a  onClick={this.show}  className="flex-c-m trans-04 p-lr-25 nav-link nav-link-main isuserlogin"  >My Shop</a></Link>
						:<Link  href={`${createshopUrl}`}><a  onClick={this.show}  className="flex-c-m trans-04 p-lr-10"  >Create Shop</a></Link>
							}
						
						<a href="#SignUp" className="flex-c-m trans-04 p-lr-25 isnotuserlogin" onClick={this.showsignup.bind(this,'seller') }  >Sign Up</a>
                		<a href="#SignIn" className="flex-c-m trans-04 p-lr-25 isuserlogin" onClick={this.logout.bind(this,'login')} >Log Out</a>

						{this.state.isuserlogin? <a className="ismobile_disable logo-link nav-link nav-link-main flex-c-m trans-04 p-lr-25" href="#">{this.state.user.givenName} </a>:<a href="#SignUp" className="flex-c-m trans-04 p-lr-25 isnotuserlogin" onClick={this.showsignup.bind(this,'login') }  >Login</a> }
						{this.state.isuserlogin?<img style={{height:'40px'}} className="ismobile_disable float-left avatar flex-c-m trans-04 p-lr-25" src={this.state.user.imageUrl} />:null}
					</div>
				</div>
			</div>

			<div className="wrap-menu-desktop">
				<nav className="limiter-menu-desktop container">
					
					{/* Logo desktop */}		
					<a href="#" className="logo font7">
					<img src={logoUrl} alt="onshop.lk" style={{height:'40px'}} />
					</a>

					{/* Menu desktop */}
					<div className="menu-desktop">
						<ul className="main-menu">
							{/*<li className="active-menu">
								<a href="index.html">Home</a>
								<ul className="sub-menu">
									<li><a href="index.html">Homepage 1</a></li>
									<li><a href="home-02.html">Homepage 2</a></li>
									<li><a href="home-03.html">Homepage 3</a></li>
		  						</ul>
							</li>*/}
							{NavLink.map((x,i)=>
                    <Link key={i} href={x.url} ><a className="nav-link nav-link-main text-dark font1" onClick={this.show} >{x.urlname}</a></Link>
                    )}

						</ul>
					</div>	

					{/* Icon header */}
					<div className="wrap-icon-header flex-w flex-r-m">
						<div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
							<i className="zmdi zmdi-search"></i>
						</div>

						<div onClick={this.showcart} className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart" data-notify={this.state.cartitemcount}>
							<i className="zmdi zmdi-shopping-cart"></i>
						</div>

						<a className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-notification" data-notify={this.state.notficationcount}>
						<i className="zmdi zmdi-notifications"></i>
						</a>
					</div>
				</nav>
			</div>	
		</div>

		{/* Header Mobile */}
		<div className="wrap-header-mobile">
			{/* Logo moblie */}		
			<div className="logo-mobile">
			<img src={logoUrl} alt="onshop.lk" style={{height:'40px'}} />
			</div>

			{/* Icon header */}
			<div className="wrap-icon-header flex-w flex-r-m m-r-15">
				<div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
					<i className="zmdi zmdi-search"></i>
				</div>

				<div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart" data-notify={this.state.cartitemcount}>
					<i className="zmdi zmdi-shopping-cart"></i>
				</div>

				<a className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-notification" data-notify={this.state.notficationcount}>
					<i className="zmdi zmdi-notifications"></i>
				</a>
			</div>

			{/* Button show menu */}
			<div className="btn-show-menu-mobile hamburger hamburger--squeeze">
				<span className="hamburger-box">
					<span className="hamburger-inner"></span>
				</span>
			</div>
		</div>


		{/* Menu Mobile */}
		<div className="menu-mobile">
			<ul className="topbar-mobile">
				<li>
					<div className="left-top-bar">
						onShop.lk, online shopping store
					</div>
				</li>

				<li>
					<div className="right-top-bar flex-w h-full">
					<a href={helpUrl} className="flex-c-m trans-04 p-lr-15">
							Help & FAQs
						</a>
				
							{this.state.isuserlogin&&this.state.user.isseller?
						<Link  href={`${myProfileUrl}?id=${this.state.isuserlogin?this.state.user._id:''}`}><a  onClick={this.show}  className="flex-c-m trans-04 p-lr-10 isuserlogin"  >My Shop</a></Link>
						:<Link  href={`${createshopUrl}`}><a  onClick={this.show}  className="flex-c-m trans-04 p-lr-10 isuserlogin"  >Create Shop</a></Link>
							}
						
						<a href="#SignUp" className="flex-c-m trans-04 p-lr-10 isnotuserlogin" onClick={this.showsignup.bind(this,'seller') }  >Sign Up</a>
                		<a href="#SignIn" className="flex-c-m trans-04 p-lr-10 isuserlogin" onClick={this.logout.bind(this,'login')} >Log out</a>
						{this.state.isuserlogin?<img style={{height:'30px'}} className="float-left avatar flex-c-m trans-04 p-lr-10" src={this.state.user.imageUrl} />:null}
					
					</div>
				</li>
			</ul>

			<ul className="main-menu-m">
				{/*<li>
					<a href="index.html">Home</a>
					<ul className="sub-menu-m">
						<li><a href="index.html">Homepage 1</a></li>
						<li><a href="home-02.html">Homepage 2</a></li>
						<li><a href="home-03.html">Homepage 3</a></li>
					</ul>
					<span className="arrow-main-menu-m">
						<i className="fa fa-angle-right" aria-hidden="true"></i>
					</span>
				</li>*/}

				{NavLink.map((x,i)=>
                    <Link key={i} href={x.url} ><a className="nav-link text-light font1" onClick={this.show} >{x.urlname}</a></Link>
                    )}
			</ul>
		</div>

		{/* Modal Search */}
		<div className="modal-search-header flex-c-m trans-04 js-hide-modal-search">
			<div className="container-search-header">
				<button className="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
					<img src="images/icons/icon-close2.png" alt="CLOSE"/>
				</button>

				<form className="wrap-search-header flex-w p-l-15">
					<button className="flex-c-m trans-04">
						<i className="zmdi zmdi-search"></i>
					</button>
					<input className="plh3" type="text" name="search" placeholder="Search..."/>
				</form>
			</div>
		</div>
	</header>
	<div className="load" >
            <Loading />
            </div>
    <Cart ref="mycart"/>
	<Notfications notfication={this.state.notfication} loadnotification={this.loadnotifications}/>


            </div>
           );
      }
    
}

export default Index; 
