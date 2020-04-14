import React, { Component } from 'react';
import Layout from '../layouts/MainLayout';
import Cartitem from '../components/Cartitem';
import SubNavBar from '../layouts/SubNavbar';
import Footer from '../components/Footer';
import Cookie from "js-cookie";
import {Url,ImageUrl} from './../constant/main';

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
        <th scope="col">Shop details</th>
        <th scope="col">massage</th>
      </tr>
    </thead>
    <tbody>
  
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
          <p className="topicColor">{x.shop.shopName}</p>
          <p > {x.shop.district} - {x.shop.town} </p>
          <p > {x.shop.contact1} </p>
        </div> 
      
      </td>
      <td className="user-details font6">
      <div className="item-details font6"> 
          <p className="topicColor">you: {x.userMsg?x.userMsg:'--'}</p>
          <p >shop: {x.sellerMsg?x.sellerMsg:'--'}</p>
          <button onClick={props.userMassage.bind(this,x._id,x.state)} className="btn btn-sm btn-danger">send msg</button>
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
      orders:[]

  }
	}


    getorderbystate(state){

      fetch(`${Url}orderbyshopid/5e8889a438747936580d85c8?state=${state}`)
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
   

    showsidebar(){
        this.refs.child.showSidebar();
      }

      userMassage(id,state){
        var send = prompt("enter your message.", "");
        if(send!=null){
        const data = new FormData();
        var jsonbody = {userMsg:send}
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
    this.setState({
        orders:this.props.orders
    })
    }
    
    render() { 
      
          
            const sidenavconst = {topic : 'Categeries',topiclink:'All Categeriess',sidenavlink:'sidenavlink', visible:false };
        //////////////
          return ( 
            <Layout>
                 <SubNavBar sidenavconst={sidenavconst}/> 

                <Cartitem  topic="My favorites"></Cartitem>
                <OrderTable orders={this.state.orders} updateorder={(id,state)=>this.updateorder(id,state)} getorderbystate={(state)=>this.getorderbystate(state)} userMassage={(id,state)=>this.userMassage(id,state)} />
            <Footer/>
                   </Layout>
           );
      }
    
}

Index.getInitialProps = async function(context) {
  const { id } = context.query;

  const res = await fetch(`${Url}orderbyshopid/5e8889a438747936580d85c8?state=new`);

  var  orders = await res.json();

  var error = false;
  if(res.status!=200){
      error = true ;
 }
  return {orders:orders,error}


}


export default Index; 
