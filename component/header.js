import React, { Component } from 'react';
import Link from 'next/link';
import Cookie from "js-cookie";
import Router from 'next/router';
import Cart from './cart';
import Notfications from './notification';
import $ from 'jquery';
import SignUp from './signup';
import Loading from './loading';
import {Url,NavLink,wesitename,logoUrl,myProfileUrl,myshopmUrl,myoderUrl,createshopUrl, helpUrl,filteritemUrl} from './../constant/main';



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
		
			var headerDesktop = $('.container-menu-desktop');
			var wrapMenu = $('.wrap-menu-desktop');
		
			if($('.top-bar').length > 0) {
				var posWrapHeader = $('.top-bar').height();
			}
			else {
				var posWrapHeader = 0;
			}
			
		
			if($(window).scrollTop() > posWrapHeader) {
				$(headerDesktop).addClass('fix-menu-desktop');
				$(wrapMenu).css('top',0); 
			}  
			else {
				$(headerDesktop).removeClass('fix-menu-desktop');
				$(wrapMenu).css('top',posWrapHeader - $(this).scrollTop()); 
			}
		
			$(window).on('scroll',function(){
				if($(this).scrollTop() > posWrapHeader) {
					$(headerDesktop).addClass('fix-menu-desktop');
					$(wrapMenu).css('top',0); 
				}  
				else {
					$(headerDesktop).removeClass('fix-menu-desktop');
					$(wrapMenu).css('top',posWrapHeader - $(this).scrollTop()); 
				} 
			});
          
         
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

	showcart=()=>{
		this.refs.mycart.loaditems();
		
	}
	searchitems=()=>{
		
		var seach= $('#searchitem').val();
		alert('seach')
		//Router.push('/filter?searcha='+seach)
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
						<a href={helpUrl}  className="flex-c-m stext-104 trans-04 p-lr-25">
							Help & FAQs
						</a>

				
							{this.state.isuserlogin&&this.state.user.isseller?
						<Link  href={`${myProfileUrl}?id=${this.state.isuserlogin?this.state.user._id:''}`}><a  onClick={this.show}  className="flex-c-m stext-104 trans-04 p-lr-25 nav-link nav-link-main isuserlogin"  >My Shop</a></Link>
						:<Link  href={`${createshopUrl}`}><a  onClick={this.show}  className="flex-c-m stext-104 trans-04 p-lr-10"  >Create Shop</a></Link>
							}
						
						<a href="#SignUp" className="flex-c-m stext-104 trans-04 p-lr-25 isnotuserlogin" onClick={this.showsignup.bind(this,'seller') }  >Sign Up</a>
                		<a href="#SignIn" className="flex-c-m stext-104 trans-04 p-lr-25 isuserlogin" onClick={this.logout.bind(this,'login')} >Log Out</a>

						{this.state.isuserlogin? <a className="ismobile_disable logo-link nav-link nav-link-main flex-c-m stext-104 trans-04 p-lr-25" href="#">{this.state.user.givenName} </a>:<a href="#SignUp" className="flex-c-m stext-104 trans-04 p-lr-25 isnotuserlogin" onClick={this.showsignup.bind(this,'login') }  >Login</a> }
						{this.state.isuserlogin?<img style={{height:'40px'}} className="lazyload ismobile_disable float-left avatar flex-c-m stext-104 trans-04 p-lr-25" src={this.state.user.imageUrl} />:null}
					</div>
				</div>
			</div>

			<div className="wrap-menu-desktop">
				<nav className="limiter-menu-desktop container">
					
					{/* Logo desktop */}		
					<a href="/" className="logo font7">
					<img className="lazyload" src={logoUrl} alt="onshop.lk" style={{height:'35px'}} />
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
                    <Link key={i} href={x.url} ><a className="nav-link nav-link-main font-weight-bold text-dark font1" onClick={this.show} >{x.urlname}</a></Link>
                    )}

						</ul>
					</div>	

					{/* Icon header */}
					<div className="wrap-icon-header flex-w flex-r-m">
						<div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
							<i className="zmdi zmdi-search"></i>
						</div>

						<div onClick={this.showcart} className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart" data-notify={this.state.cartitemcount}>
							<i className="zmdi zmdi-favorite"></i>
						</div>

						<a className=" icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-notification" data-notify={this.state.notficationcount}>
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
			<Link href="/"><img className="lazyload" src={logoUrl} alt="onshop.lk" style={{height:'30px'}} /></Link>
			</div>

			{/* Icon header */}
			<div className="wrap-icon-header flex-w flex-r-m m-r-15">
				<div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
					<i className="zmdi zmdi-search"></i>
				</div>

				<div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart" data-notify={this.state.cartitemcount}>
					<i className="zmdi zmdi-favorite"></i>
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
					<a href={helpUrl} className="flex-c-m stext-104 trans-04 p-lr-15">
							Help & FAQs
						</a>
				
							{this.state.isuserlogin&&this.state.user.isseller?
						<Link  href={`${myProfileUrl}?id=${this.state.isuserlogin?this.state.user._id:''}`}><a  onClick={this.show}  className="flex-c-m stext-104 trans-04 p-lr-10 isuserlogin"  >My Shop</a></Link>
						:<Link  href={`${createshopUrl}`}><a  onClick={this.show}  className="flex-c-m stext-104 trans-04 p-lr-10 isuserlogin"  >Create Shop</a></Link>
							}
						
						<a href="#SignUp" className="flex-c-m stext-104 trans-04 p-lr-10 isnotuserlogin" onClick={this.showsignup.bind(this,'seller') }  >Sign Up</a>
                		<a href="#SignIn" className="flex-c-m stext-104 trans-04 p-lr-10 isuserlogin" onClick={this.logout.bind(this,'login')} >Log out</a>
						{this.state.isuserlogin?<img style={{height:'30px'}} className="lazyload float-left avatar flex-c-m stext-104 trans-04 p-lr-10 lazyload" src={this.state.user.imageUrl} />:null}
					
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
		<div className="modal-search-header flex-c-m stext-104 trans-04 js-hide-modal-search">
			<div className="container-search-header">
				<button className="flex-c-m stext-104 btn-hide-modal-search trans-04 js-hide-modal-search">
				<i className="zmdi zmdi-close"></i>
				</button>

				<form className="wrap-search-header flex-w p-l-15">
					<button className="flex-c-m stext-104 trans-04" >
						<i className="zmdi zmdi-search"></i>
					</button>
					<input id="searchitem"  type="text" name="search" placeholder="Search..."/>
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
