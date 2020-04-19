import React, { Component } from 'react';
import Layout from './../layouts/MainLayout';
import $ from 'jquery';
import SubNavBar from './../layouts/SubNavbar';
import  {Url,ImageUrl,createitemUrl,updateshopUrl,itemUrl,updateitemUrl,myProfileUrl} from './../constant/main';
import Link from 'next/link';
import Cookie from "js-cookie";
import Footer from './../components/Footer';
import ErrorPage from './../layouts/error';
import Router from 'next/router';

const Imageside=(props)=> {
    return(

<div className="col-lg-6 col-sm-12">
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
<ol className="carousel-indicators">
{props.shop.images.map((x,i)=>
    <li key={i} data-target="#carouselExampleIndicators" data-slide-to={i} className={i==0?'active':'c'} ></li> 
    )}
</ol>
<div className="carousel-inner">   
    {props.shop.images.map((x,i)=>
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
            <small className="font3 card-footer-button">{props.shop.createDate}</small>
 
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
            
                <h4 className="card-title font2 topicColor">{props.shop.shopName}</h4>
                <div className="meta font6 subtopicColor">
                    <a>{props.shop.categery}</a>
                    <div className=" float-right"> 
                    <a className="Icutprise font6">{props.shop.district+'/'+props.shop.town} </a> 
                    </div>
                </div>
                
                <div className="meta font6">
                    <div className=" float-right"> 
                    <a className="Icutprise font6">{props.shop.contact1+'/'+props.shop.contact2} </a>
                    </div>
                </div>

                <div className="card-text font6">
                {props.shop.content1}
                </div>
                <div className="card-text font6">
                {props.shop.content2}
                </div>
                <div className="profile-specification">
                <h5 className="profile-subcard-title font2 fontcolorSkyblue"> &nbsp; </h5>
                <div className=" card-text font6">
                    <div className="row">
                        {props.shop.shopDetail?props.shop.shopDetail.map((x,i)=>
                            <div className="col-lg-6 col-sm-12" key={i}>
                            <a className="float-left profile-speca"><img src="https://img.icons8.com/metro/15/000000/external-link.png"/>&nbsp; &nbsp; {x.name} &nbsp;: </a> <a className="float-left profile-specb"> &nbsp; {x.value}</a>
                            </div>
                            ):null}
                        
                    </div>
                </div>
                <hr/>
                <Link href={createitemUrl+'?id='+props.shop._id+'&shopname='+props.shop.shopName+'&shopDistrict='+props.shop.district+'&shopTown='+props.shop.town}><a href="#" className="btn btn-primary float-right btn-sm fontsizeE-9"><img src="https://img.icons8.com/ios/25/ffffff/new-view.png"/> &nbsp;add new item</a></Link>
                <Link href={updateshopUrl+props.shop._id}><a href="#" className="btn btn-danger float-right btn-sm fontsizeE-9"><img src="https://img.icons8.com/ios/25/ffffff/update-tag.png"/> &nbsp;update shop</a></Link>
              
            </div>

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
                .profile{
                    margin-bottom : 20px;
                }
                .profile-topic{
                    padding : 20px 10px 10px 10px;
                }
                .profile-speca{
                    font-size: 1em;
                    color: #CF570E ;
                    
                }
                .profile-specb{
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
                .profile-subcard-title {
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



const CartList=(props)=>{



    return(
        <div className="order-table">
      
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">item</th>
              <th scope="col">state</th>
              <th scope="col">Item Details</th>
              <th scope="col">Price</th>
              <th scope="col">Update</th>
              
            </tr>
          </thead>
          <tbody className="projects">
        
        {props.items.map((x,i)=>
            <tr key={i}>
            <th>
                <div className="pointer">
                    <Link href={itemUrl+x.urlname}><img width="50px" src={ImageUrl+x.images[0]} /></Link>
             <p className="fontsizeE-8">{x.createDate}</p>
             </div></th>
            <td> 
                <div className="item-details font6"> 
                    <p className="topicColor">{x.isvalid?'valid':'removed'} </p>
                    <p >
                    <img onClick={props.updateitem.bind(this,x._id,{isvalid:true})}  src="https://img.icons8.com/cute-clipart/30/000000/save-close.png"/>
                    <img onClick={props.updateitem.bind(this,x._id,{isvalid:false})} src="https://img.icons8.com/color/30/000000/close-window.png"/>
          
                    </p>
                </div> 
            </td>
            <td> 
                <div className="item-details font6"> 
                    <p className="topicColor">{x.itemlongname} </p>
                    <p>{x.categery}/{x.subcategery} </p>
                </div> 
            </td>
            <td>
                <div className="item-details font6"> 
               <p className="topicColor" > <strike className="fontsizeE-8">Rs.{x.itemPrice}.00</strike> <span className="fontcolorOrange fontsizeE-8">{x.itemdiscount}% </span>  Rs.{x.itemPrice*(100-x.itemdiscount)/100} </p>
                </div> 
                <div className="item-details font6 btn-group btn-group-sm">
                <button onClick={props.loadpromt.bind(this,x._id,'price')}  className="btn btn-primary float-left btn-sm fontsizeE-9"> <img src="https://img.icons8.com/ios-glyphs/15/ffffff/update-tag.png"/> &nbsp;price</button>
                <button onClick={props.loadpromt.bind(this,x._id,'discount')}  className="btn btn-dark float-left btn-sm fontsizeE-9"><img src="https://img.icons8.com/ios-glyphs/15/ffffff/update-tag.png"/> &nbsp; discount</button>
               
                </div> 
            </td>
            <td className="user-details font6">
            <div className="item-details font6"> 
            <Link href={updateitemUrl+x._id}><a href="#" className="btn btn-danger float-left btn-sm fontsizeE-9"><img src="https://img.icons8.com/ios-glyphs/20/ffffff/update-tag.png"/> &nbsp;update</a></Link> 
              </div> 
            
            </td>
            </tr>
            )}
        
          </tbody>
        </table>
        <style jsx>
        {`
        .order-table{
          overflow : auto;
        }
        .item-details p{
          margin-top: 0;
          margin-bottom: 0;
        }
        .item-details img{
          cursor: pointer;
        }
        `}
        </style>
        </div>
        
    )
}

const OrderTable=(props)=>{

  return(
    <div className="order-table">

  <div className="btn-group btn-group-sm col-12" role="group" aria-label="Basic example">
    <button onClick={props.getorderbystate.bind(this,'all')} type="button" className="btn btn-secondary"><img src="https://img.icons8.com/ios/20/ffffff/show-all-views.png"/> All</button>
    <button onClick={props.getorderbystate.bind(this,'new')} type="button" className="btn btn-secondary"><img src="https://img.icons8.com/ios/20/ffffff/new.png"/> new</button>
    <button onClick={props.getorderbystate.bind(this,'mail')} type="button" className="btn btn-secondary"><img src="https://img.icons8.com/ios/20/ffffff/upload-mail.png"/> email</button>
    <button onClick={props.getorderbystate.bind(this,'confirm')} type="button" className="btn btn-secondary"><img src="https://img.icons8.com/ios/20/ffffff/checked-checkbox.png"/> confirm</button>
    <button onClick={props.getorderbystate.bind(this,'remove')} type="button" className="btn btn-secondary"> <img src="https://img.icons8.com/ios/20/ffffff/trash.png"/> removes</button>
  </div>

  <table className="table table-striped">
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">state</th>
        <th scope="col">Item Details</th>
        <th scope="col">Price</th>
        <th scope="col">User details</th>
        <th scope="col">Massages</th>
      </tr>
    </thead>
    <tbody className="projects">
  
  {props.orders.map((x,i)=>
      <tr key={i}>
      <th><div><img width="50px" src={ImageUrl+x.item.images[0]} />
       <p className="fontsizeE-8">{x.createDate}</p>
       </div> </th>
      <td> 
          <div className="item-details font6"> 
              <p className="topicColor">{x.state} </p>
              <p>
              <img onClick={props.updateorder.bind(this,x._id,'new')} src="https://img.icons8.com/ios/25/000000/new.png"/> 
              <img onClick={props.updateorder.bind(this,x._id,'mail')} src="https://img.icons8.com/ios/25/000000/upload-mail.png"/> 
              <img onClick={props.updateorder.bind(this,x._id,'confirm')} src="https://img.icons8.com/ios/25/000000/checked-checkbox.png"/>
              <img onClick={props.updateorder.bind(this,x._id,'remove')} src="https://img.icons8.com/ios/25/000000/trash.png"/> </p>
          </div> 
      </td>
      <td> 
          <div className="item-details font6"> 
              <p className="topicColor">{x.item.itemlongname} </p>
              <p>{x.item.categery}/{x.item.subcategery} </p>
          </div> 
      </td>
      <td>
          <div className="item-details font6"> 
          <p className="topicColor">Rs.{x.item.itemPrice*(100-x.item.itemdiscount)/100} x {x.item.qty} = Rs.{x.item.itemPrice*(100-x.item.itemdiscount)/100*x.item.qty} </p>
          <p > <strike className="fontsizeE-8">Rs.{x.item.itemPrice}.00</strike> <span className="fontcolorOrange fontsizeE-8">{x.item.itemdiscount}% </span>  Rs.{x.item.itemPrice*(100-x.item.itemdiscount)/100} </p>
          </div> 
      </td>
      <td className="user-details font6">
      <div className="item-details font6"> 
          <p className="topicColor">{x.user.name}</p>
          <p > {x.user.email} - {x.user.contact} </p>
        </div> 
      
      </td>
      <td className="user-details font6">
      <div className="item-details font6"> 
          <p className="topicColor">cus: {x.userMsg?x.userMsg:'--'}</p>
          <p >you: {x.sellerMsg?x.sellerMsg:'--'}</p>
          <button className="btn btn-sm btn-danger" onClick={props.sellerMassege.bind(this,x._id,x.state)}>send msg</button>
        </div> 
      
      </td>
      </tr>
      )}
  
    </tbody>
  </table>
  <style jsx>
  {`
  .order-table{
    overflow : auto;
  }
  .item-details p{
    margin-top: 0;
    margin-bottom: 0;
  }
  .item-details img{
    cursor: pointer;
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
      totalprice : 0,
      orders:[],
      myshops:[],
      istable:false,
      querys:{}

  }
	}


    //update item
    updateitem=(id,update)=>{

        $('img').attr("disabled", true);
        const data = new FormData();
        
        var jsonbody = update;
        data.append('jsonbody', JSON.stringify(jsonbody));
       data.append('user', JSON.stringify(Cookie.getJSON('user')));

        fetch('/api/updateitemDetails/'+id,{
            method: 'PUT',
            headers: {
            },
            body:data
        
            }
        )
        .then(response => { return response.json(); } )
        .then(data => {$('img').attr("disabled", false); if(data.status==200){Router.push(myProfileUrl+'?id='+this.props.querys.id+'&shopindex='+this.props.querys.shopindex); }else{alert(data.msg);}})
        .catch(error => console.log(error))
    }

    loadpromt=(id,name)=>{
        if(name=='price'){
            var data = parseInt(prompt("eneter new price.", "0"));
            if(data>0){
                
              this.updateitem(id,{itemPrice:data})
            }else{
                alert('wrong format.')
            }
        }
        if(name=='discount'){
            var data = parseInt(prompt("eneter new discount.", "0"));
            if(data>0){
                
              this.updateitem(id,{itemdiscount:data})
            }else{
                alert('wrong format.')
            }
        }
    }


    getorderbystate(state){

      fetch(`${Url}orderbyshopid/${this.props.shop._id}?state=${state}`)
      .then(res=>{ return res.json()})
      .then(data => { this.setState({orders:data})})
    
    }

    updateorder(id,state){

      const data = new FormData();
      var jsonbody = {state:state}
      data.append('jsonbody', JSON.stringify(jsonbody));
      data.append('user', JSON.stringify(Cookie.getJSON('user')));
      fetch('/api/updateorder/'+id,{
          method: 'PUT',
          headers: {
          },
          body:data
      
          }
      )
      .then(response => {this.getorderbystate(state); return response.json(); } )
      .then(data => { if(data!=undefined){alert(data.msg);}})
      .catch(error => console.log(error))
    }

    sellerMassege(id,state){
        var send = prompt("enter your message.", "");
        if(send!=null){
            const data = new FormData();
            var jsonbody = {sellerMsg:send}
            //var jsonbody = {state:'new'}
            data.append('jsonbody', JSON.stringify(jsonbody));
            data.append('user', JSON.stringify(Cookie.getJSON('user')));
            fetch('/api/updateorder/'+id,{
                method: 'PUT',
                headers: {
                },
                body:data
            
                }
            )
            .then(response => {this.getorderbystate(state); return response.json(); } )
            .then(data => { if(data!=undefined){alert(data.msg);}})
            .catch(error => console.log(error))
        }
      
      }


    componentDidMount(){

        if(Cookie.getJSON('user')){
            fetch(`${Url}viewbyusername/${Cookie.getJSON('user')._id}`)
            .then(res=>{return res.json()})
            .then(data=>{this.setState({myshops:data})})
        }
        if(this.props.shop){
            fetch(`${Url}orderbyshopid/${this.props.shop._id}?state=new`)
            .then(res=>{return res.json()})
            .then(data=>{this.setState({orders:data})})
        }
        this.setState({
            querys:this.props.querys
        })

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

    chnagetab=(istable)=>{
        if(istable){
            this.getorderbystate('new')
        }
        this.setState({
            istable:istable
        })
    }
    
    render() { 

      const sidenavconst = {topic : 'Categeries',topiclink:'All Categeriess',sidenavlink:[], visible:false };
 
          return ( 
            <Layout>
             <SubNavBar sidenavconst={sidenavconst}/> 
{this.props.error?<ErrorPage/>:
    <div>
             <div className="col-lg-11 col-sm-12 mx-auto">
             {/*<h3 className="font1 topicColor profile-css-topic">My Shops</h3>*/}
             <br/>
             <ul className="nav nav-tabs nav-tabs-myshop">
             {this.state.myshops.map((x,i)=>
              <li key={i} className="nav-item pointer">
              <Link href={`${myProfileUrl}?id=${Cookie.getJSON('user')._id}&shopindex=${i}`}><a className= {this.props.shop._id==x._id?"nav-link active font1":"nav-link font1"} >{x.shopName}</a></Link>
            </li>   
                )}
        

            </ul>
             </div>
            
            
               <div className="cart-menu col-lg-11 col-sm-12 mx-auto">
                <div>                    
                </div>
                <div className="row col-12">
                <Imageside shop={this.props.shop?this.props.shop:null} ></Imageside>
                <Contentside shop={this.props.shop?this.props.shop:null} ></Contentside>
                </div>
            <ul className="nav nav-tabs">
            <li className="nav-item pointer">
                <a onClick={this.chnagetab.bind(this,false)} className= {this.state.istable?"nav-link":"nav-link active"} >Items List</a>
            </li>
            <li className="nav-item pointer">
                <a onClick={this.chnagetab.bind(this,true)}  className={this.state.istable?"nav-link active":"nav-link"}>Order List</a>
            </li>

            </ul>
                <br/>
                {this.state.istable?<OrderTable orders={this.state.orders} updateorder={(id,state)=>this.updateorder(id,state)} getorderbystate={(state)=>this.getorderbystate(state)} sellerMassege={(id,state)=>this.sellerMassege(id,state)}/>
                :<CartList loadpromt={this.loadpromt} updateitem={this.updateitem} items={this.props.items} catagerytype="Phones"  />}
             </div>
             </div> }
             <Footer/> 
                  </Layout>
           );
      }
    
}

  Index.getInitialProps = async function(context) {
 
    const { id,shopindex } = context.query;

    if(id){
       var index= shopindex>0?shopindex:0;
      const resshop = await fetch(`${Url}viewshopanditemsuserid/${id}?shopindex=${index}`);
   
        var  shopanditems = await resshop.json();

          var error = false;
          if(resshop.status!=200){
              error = true ;
         }
          return {shop:shopanditems.shop,items:shopanditems.items,error,querys:{shopindex:index,id:id}};

    }else{
        return {error:true};
    }
    
  }

export default Index;