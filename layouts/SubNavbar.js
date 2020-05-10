import React, { Component } from 'react';
import Layout from './../layouts/MainLayout';
import Loading from './../components/loading';
import Link from 'next/link';
import $ from 'jquery';
import SideNav from './../layouts/SideNav';
import SignUp from './../components/signup';
import {Url,NavLink,wesitename,filteritemUrl,myProfileUrl,myshopmUrl,myoderUrl,createshopUrl} from './../constant/main';
import Cookie from "js-cookie";
import Filter from './filterItem'
import Router from 'next/router';



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
             <span className=" topicColor fontsizeE-8 font1 float-left p-0 content pointer" onClick={deletenotification.bind(this,x._id)}> {x.content}</span>
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
                         width:230px;
                         border-radius:  0 0 10px 10px;
                         background : #b5c6d9f0;
                         overflow: auto;
                         margin-left : -130px;
                         
                     }
                     .rownotication{
                         margin : 0;
                     }
                     .notificationmsg{
                         width:230px;
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
 

const NavBar=(props)=>{

    const shownotification=()=>{
        if($('.dropdown-menu-notification').is(":visible")){
            $('.dropdown-menu-notification').slideUp(500) 
        }
        else{
          
            $('.dropdown-menu-notification').slideDown(500)  
        }
    }


    

    return(
        <div>
        <nav className="navbar navbar-expand-md">
       
        { props.sidenavconst.visible?<button onClick={props.showsidebar.bind(this)} type="button" className="btn btn-sm btn-primary font1">{props.sidenavconst.topiclink}</button>:<a className="navbar-brand font7 fontsizeE1" href="/">{wesitename}</a>}
  
        
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            {NavLink.map((x,i)=>
                <Link key={i} href={x.url}><a className="nav-link nav-link-main active font1 fontsizeE-9 pointer" >{x.urlname}</a></Link>
                )}
            {props.state.isuserlogin&&props.state.user.isseller?
             <Link  href={`${myProfileUrl}?id=${props.state.isuserlogin?props.state.user._id:''}`}><a className="nav-link nav-link-main active font1"  >my-shops</a></Link>
               :null
                }
                <Link  href={`${myoderUrl}`}><a className="nav-link nav-link-main active font1 fontsizeE-9 pointer"  >my-cart-<img src="https://img.icons8.com/pastel-glyph/20/ffffff/shopping-cart--v2.png"/></a></Link>
                
                <a  className="nav-link nav-link-main active font1 pointer fontsizeE-9 search-icon fontsizeE-9 pointer" onClick={props.showfilter.bind(this)} >search-<img src="https://img.icons8.com/pastel-glyph/20/ffffff/search--v2.png"/></a>
                
                <a className="nav-link nav-link-main active font1 fontsizeE-9 pointer isnotuserlogin" onClick={props.showsignup.bind(this)} >log-in</a>
                <a className="nav-link nav-link-main active font1 fontsizeE-9 pointer isuserlogin" onClick={props.logout.bind(this)} >log-out</a>
        
          {/**notification */}
          <div className="btn-group">
                <a className="nav-link font1 isuserlogin" onClick={shownotification}>
                <img src="https://img.icons8.com/ios-filled/15/ffffff/appointment-reminders.png"/>
                {props.notficationcount>0?<span className="notificationCount"> {props.notficationcount}</span>:null}

                </a>
                {props.notficationcount>0?<Notfication notfication={props.notfication} />:null}
               </div>
                {/**notfication end */}
               
            
                
         </div>
                
          </div>
          {props.state.isuserlogin? <a className="logo-link nav-link nav-link-main active font1" href="#">{props.state.user.givenName} </a>:
        <a className="navbar-brand font7 all-link fontsizeE1" href="#">{wesitename}</a>
            }
            {props.state.isuserlogin?<img className="float-left avatar" src={props.state.user.imageUrl} />:null}    
        </nav>
        <div className="load" >
            <Loading />
            </div>

        <style jsx>
                {`
                 .notificationCount{
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #ce0c0c;
                    cursor: pointer;
                    font-size: 0.5rem;
                    width: 1.1rem;
                    height: 1.1rem;
                    top: 0rem;
                    right: -0.5rem;
                    position: absolute;
                    border-radius: 50%;
                }
                  .avatar {
                    vertical-align: middle;
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                  }
                .subnav {
                    z-index : 100;
                  
                }
                .navbar-nav{
                    padding-left : 100px;
                }
              
                .navbar-nav a {
                    color : white;
                    
                }
                .navbar-nav a:hover {
                    color : gray;
                    
                }
               
                .navbar {
                    z-index : 50;
                    height: 50px;
                    background-color: darkblue;
                    border: none;
                    color: white;
                    transition: background-color 2s ease 0s;
                    
               }
            
               .togglemenuC{
                display:none
               }
               .sticky {
                position: -webkit-sticky;
                width :100%;
                position: fixed;
                top: 0;
              }
               .all-link{
                   display:none;
               }
               
                `}
            </style>
           
    </div>
    )
}


const MobileNavBar=(props)=>{

    const show=()=>{
        if($('#collapsibleNavbar').is(":visible")){
            $('#collapsibleNavbar').slideUp(500);
        }else{
            $('#collapsibleNavbar').slideDown(500);
        }
    }

    const shownotification=()=>{
        if($('.dropdown-menu-notification').is(":visible")){
            $('.dropdown-menu-notification').slideUp(500) 
        }
        else{
          
            $('.dropdown-menu-notification').slideDown(500)  
        }
    }

    return(
        <div>
            <div className="mobile-nav">
            <nav className="navbar navbar-expand-lg ">
            <span className="navbar-brand">
            {props.state.isuserlogin?<img className="float-left avatar" src={props.state.user.imageUrl} />:null} 
            &nbsp;{ props.sidenavconst.visible?<button onClick={props.showsidebar.bind(this)} type="button" className="btn btn-sm btn-primary font1 fontsizeE-7">{props.sidenavconst.topiclink}</button>:<a className="font7 fontsizeE-8" href="/">{wesitename}</a>}
            &nbsp; <a className=" font1 pointer" onClick={props.showfilter.bind(this)} ><img src="https://img.icons8.com/pastel-glyph/22/ffffff/search--v2.png"/></a>
            
            {props.state.isuserlogin&&props.state.user.isseller?
             <Link  href={`${myProfileUrl}?id=${props.state.isuserlogin?props.state.user._id:''}`}><a className="font1 fontsizeE-7 isuserlogin"  >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://img.icons8.com/material-rounded/25/ffffff/shop.png"/></a></Link>
               :<Link  href={`${createshopUrl}`}><a className="font1 fontsizeE-7 "  >&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<img src="https://img.icons8.com/windows/23/ffffff/add-user-group-man-man.png"/></a></Link>
                }
                {/**notification */}
          <div className="btn-group">
                <a className=" font1 isuserlogin" onClick={shownotification}>&nbsp;&nbsp;&nbsp;
                <img src="https://img.icons8.com/ios-filled/20/ffffff/appointment-reminders.png"/>
                {props.notficationcount>0?<span className="notificationCount"> {props.notficationcount}</span>:null}

                </a>
                {props.notficationcount>0?<Notfication notfication={props.notfication} />:null}
               </div>
                {/**notfication end */}

            </span>
           
            <button className="navbar-toggler" type="button"  onClick={show} >
                <img src="https://img.icons8.com/ios/20/ffffff/menu.png"/>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                {NavLink.map((x,i)=>
                <Link key={i} href={x.url}><a className="nav-link  active font1 fontsizeE-9 pointer" onClick={show} >{x.urlname}</a></Link>
                )}
               
                <Link  href={`${myoderUrl}`}><a className="nav-link nav-link-main active font1" onClick={show} >my-cart-<img src="https://img.icons8.com/pastel-glyph/20/ffffff/shopping-cart--v2.png"/></a></Link>

                <a className="nav-link nav-link-main active font1 fontsizeE-9 pointer isnotuserlogin" onClick={props.showsignup.bind(this)} >log-in</a>
                <a className="nav-link nav-link-main active font1 fontsizeE-9 pointer isuserlogin" onClick={props.logout.bind(this)} >log-out</a>


                {props.state.isuserlogin&&props.state.user.isseller?
             <Link  href={`${myProfileUrl}?id=${props.state.isuserlogin?props.state.user._id:''}`}><a className="nav-link nav-link-main active font1 isuserlogin" onClick={show} >my-shops</a></Link>
               :null
                }
                </ul>
            </div>  
            </nav>
            <div className="load" >
            <Loading />
            </div>
            </div>
         <style jsx>
         {`
           .notificationCount{
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #ce0c0c;
            cursor: pointer;
            font-size: 0.5rem;
            width: 1rem;
            height: 1rem;
            top: 0rem;
            right: -0.5rem;
            position: absolute;
            border-radius: 50%;
        }
         .avatar {
            vertical-align: middle;
            width: 30px;
            height: 30px;
            border-radius: 50%;
          }
         .navbar{
            background-color: darkblue;
            background-image: linear-gradient( darkblue,transparent);
         }
         .nav-link{
             color:white;
             padding-left : 10px;
             background-image: linear-gradient( #0b4286,darkblue);
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
        notficationcount:''

  }
	}

    //side nav bar open
    showsidebar(){
        this.refs.sidenav.showSidebar();
      }
    //show signup
      showsignup(){
          $('.filter-item').hide()  
        this.refs.signup.showsignup();
      }

    //showfilter
    showfilter(){
        if($('.filter-item').is(":visible")){
            $('.filter-item').slideUp(1000) 
        }
        else{
          
            $('.filter-item').slideDown(1000)  
        }
    }
    //log out 
    logout(){
        $('#collapsibleNavbar').slideUp(500);
        if(confirm('do you need, log out from onshop.lk.')){           
            Cookie.remove('user');
            Router.reload();
        }
    }
    loadnotifications=()=>{

        fetch(`${Url}notifications/${Cookie.getJSON('user')._id}`)
        .then(res=>{ return res.json()})
        .then(data => { this.setState({notfication:data,notficationcount:data.length});})
    }
    
    componentDidMount(){
        $('.filter-item').hide();
        $('.load').hide();
        $('.show-fixed-bar').hide();

        if(Router.query.signin=='true'){
            this.showsignup();
            }

            if(Cookie.getJSON('user')){
                this.loadnotifications()
            }

        this.setState({
            user : Cookie.getJSON('user'),
            isuserlogin : Cookie.getJSON('user')?true:false
        })

        $(document).ready(function() {

            //nav-bar
            $('.search-icon').hover(function () {
     
                $('.filter-item').slideDown(1000);
            }, function () {
               // $('.filter-item').slideUp(1000);
            });
           
          
            // Transition effect for navbar 
            $(window).scroll(function() {
              // checks if window is scrolled more than 500px, adds/removes solid class
              if($(window).width()>600 && $(this).scrollTop() >  $(window).width()/6) { 
                  $('.sub1nav').removeClass('sticky-top');
                  $('.show-fixed-bar').slideDown(200);
              }
              else {
                  $('.sub1nav').addClass('sticky-top');
                  $('.show-fixed-bar').slideUp(100);
              }
             
            });
        
    });
    }

    
    

    render() { 
        
          return ( 
            <Layout>
            {this.props.sidenavconst.visible ?<SideNav ref="sidenav"  sidenavconst={this.props.sidenavconst}/>:null}

            <SignUp ref="signup" showsignup={this.props.showsignup} />
            <div className="subnav" >
         
            <div className="ismobile_disable fixed show-fixed-bar">
            <NavBar state={this.state} showsignup={this.showsignup.bind(this)} showfilter={this.showfilter} showsidebar={this.showsidebar.bind(this)} sidenavconst={this.props.sidenavconst} logout={this.logout}  notfication={this.state.notfication} notficationcount={this.state.notficationcount} />        
            </div>

            <div className="ismobile_disable">
            <NavBar state={this.state} showsignup={this.showsignup.bind(this)} showfilter={this.showfilter} showsidebar={this.showsidebar.bind(this)} sidenavconst={this.props.sidenavconst} logout={this.logout} notfication={this.state.notfication} notficationcount={this.state.notficationcount} />
        
            </div>

            <div className="isdesktop_disable">
            <MobileNavBar state={this.state} showsignup={this.showsignup.bind(this)} showfilter={this.showfilter} showsidebar={this.showsidebar.bind(this)} sidenavconst={this.props.sidenavconst} logout={this.logout} notfication={this.state.notfication} notficationcount={this.state.notficationcount}  />
            </div>

            <div className="filter-item" >
            <Filter searchitem={this.props.searchitem}/>

            </div>
            </div>
            <style jsx>{
                `.subnav {
                    z-index : 100;
                  
                }
                .fixed {
                    position: -webkit-sticky;
                    width :100%;
                    position: fixed;
                    top: 0;
                    z-index:50;
                  }
                `
            }</style>
           </Layout>
           );
      }
    
}

export default Index; 
