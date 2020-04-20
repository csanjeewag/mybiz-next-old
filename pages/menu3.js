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
<div className="row">

<div className="col-4 m-image">
<img className="card-img-top" src={'./form2.jpg'} />
</div>

<div className="col-4 m-content">

<div>
<h4 className="font1 subtopicColor fontsizeE1-5 m-content">Idea mart</h4>
<p className="font1 subtopicColor fontsizeE-9 m-content">Samsung</p>
<p className="font1 subtopicColor fontsizeE-9 m-content">Electronic-device</p>
</div>
                        
</div>


</div>

</div>


<span className=" float-right fontsizeE-9">
<p className="Iprise font6 float-right">&nbsp;Rs.2250.00</p>
<a className="Icutprise font6 float-right"> <strike>Rs 2500.00</strike>  </a> 
<a className="Idiscount font6 float-right"> 10% </a>
</span>
        
         



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

                    
                    `
                }</style>
                  
              
             

</Layout>
  )
}
 
}



export default Index;