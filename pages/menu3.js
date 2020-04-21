import React, { Component } from 'react';
import Layout from './../layouts/MainLayout';
import $ from 'jquery';
import SideNav from './../layouts/SideNav';
import GoogleSign from './../components/GoogleSign';
import ReactCrop from 'react-image-crop';
import Router from 'next/router';

class Index extends Component {

  constructor() {
    super();
    this.state = {
      crop: {
        unit: 'px', // default, can be 'px' or '%'
        x: 130,
        y: 50,
        width: 200,
        height: 200
      }
    }

  }

  componentDidMount= ()=> {

  }
  showsidebar(){
    this.refs.child.showSidebar();
  }

  onClickhh=()=>{
alert('ghh');

  $('button').attr("disabled", true);


   //Router.push('/hello-nextjs')


  }

  
  
render(){

  const sidenavlink = [
    {id:1,link:'/',linkname:'home'},
    {id:1,link:'/menu',linkname:'menu'},
    {id:1,link:'/',linkname:'menu2'},
    {id:1,link:'/',linkname:'menu3'},
    {id:1,link:'/',linkname:'menu4'},
    {id:1,link:'/',linkname:'menu5'},
  ];
  const topic = 'Categeries';
  return(
<Layout>


<h1 className="font1">Catageries</h1>
<h1 className="font2">Catageries</h1>
<h1 className="font3">Catageries</h1>
<h1 className="font4">Catageries</h1>
<h1 className="font5">Catageries</h1>
<h1 className="font6">Catageries</h1>
<h1 className="font1 topicColor">Catageries</h1>
<h1 className="font1 subtopicColor">Catageries</h1>


<GoogleSign></GoogleSign>

<div className="col-3">
<button onClick={this.onClickhh} >click</button>
</div>


<div className="col-sm-6 col-md-4 col-lg-3 mt-4">

<div className="row m-card">

<div className="col-4 m-image">
<img className="card-img-top" src={'./form2.jpg'} />
</div>

<div className="col-8 m-content">

<h4 className="font1 topicColor fontsizeE1-25 m-content-left">Samsung As hosty 5</h4>

<p className="font6 subtopicColor fontsizeE-9 m-content-left ">Electronic-device/Samsung</p>
<p className="font6 m-content-right"><strike className="fontsizeE-8">Rs 2500.00</strike><span className="fontcolorOrange fontsizeE-8">10% </span><span className="fontcolorred fontsizeE-9">Rs.25000</span></p>

<div className="float-right">
<a className="btn btn-danger fontsizeE-9 float-right btn-sm m-content-righ"><img src="https://img.icons8.com/ios/20/ffffff/favorite-cart.png"/></a>
<a className="font6 fontsizeE-9 float-right m-content-righ">Idea mart/Nugeggoda</a>
</div>                
</div>


</div>

</div>

<div className="col-sm-6 col-md-4 col-lg-3 mt-4">

<div className="row m-card">

<div className="col-4 m-image">
<img className="card-img-top" src={'./form2.jpg'} />
</div>

<div className="col-8 m-content">

<h4 className="font1 topicColor fontsizeE1-25 m-content-left">Samsung As hosty 5</h4>

<p className="font6 subtopicColor fontsizeE-9 m-content-left ">Electronic-device/Samsung</p>
<p className="font6 m-content-right"><strike className="fontsizeE-8">Rs 2500.00</strike><span className="fontcolorOrange fontsizeE-8">10% </span><span className="fontcolorred fontsizeE-9">Rs.25000</span></p>

<div className="float-right">
<a className="btn btn-danger fontsizeE-9 float-right btn-sm m-content-righ"><img src="https://img.icons8.com/ios/20/ffffff/favorite-cart.png"/></a>
<a className="font6 fontsizeE-9 float-right m-content-righ">Idea mart/Nugeggoda</a>
</div>                
</div>


</div>

</div>
         



<br/><br/>
        <style jsx>{
                    `

                    .m-image{
                      width: 100%;
                      padding: 2px;

                    }
                    .m-content{
                      padding: 2px;
                    
                    }
                    .m-content-left{
                      padding: 0;
                      margin:0px;
                      text-align: left;
                    }
                    .m-content-right{
                      padding: 0;
                      margin:0px;
                      text-align: right;
                    }
                    .m-card{
                      background:lightblue;
                      padding:5px 0;
                    
                    }
                    
                    `
                }</style>
                  
              
             

</Layout>
  )
}
 
}



export default Index;