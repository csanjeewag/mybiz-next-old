import React, { Component } from 'react';
import Layout from './../layouts/MainLayout';
import $ from 'jquery';
import SubNavBar from './../layouts/SubNavbar';
import {Url,ImageUrl} from './../constant/main'

class Index extends Component {

  constructor() {
    super();
    this.state = {
        orders:[]
    }

  }

  componentDidMount= ()=> {

    this.setState({
        orders:this.props.orders
    })
  }

  
render(){

    const sidenavconst = {topic : 'Categeries',topiclink:'All Categeriess',sidenavlink:[], visible:false };
  return(
<Layout>
<SubNavBar sidenavconst={sidenavconst}/> 
<br/>              
<div className="order-table">
<table className="table table-striped container">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Item Details</th>
      <th scope="col">Price</th>
      <th scope="col">User details</th>
    </tr>
  </thead>
  <tbody>

{this.state.orders.map((x,i)=>
    <tr key={i}>
    <th> <img width="50px" src={ImageUrl+x.item.images[0]} /></th>
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
        <p > {x.user.email} </p>
      </div> 
    
    </td>
    </tr>
    )}

  </tbody>
</table>
</div>
<style jsx>
{`
.order-table{
  overflow : auto;
}
.item-details p{
  margin-top: 0;
  margin-bottom: 0;
}
`}
</style>
</Layout>
  )
}
 
}


  Index.getInitialProps = async function(context) {
    const { id } = context.query;

    const res = await fetch(`${Url}orderbyshopid/5e8889a438747936580d85c8`);
    var  orders = await res.json();
    var error = false;
 //   if(res.status!=200){
        error = true ;
  // }

    return {orders:orders,error}


  }

export default Index;