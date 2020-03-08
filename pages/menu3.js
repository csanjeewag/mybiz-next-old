import React, { Component } from 'react';
import Layout from './../layouts/MainLayout';
import Link from 'next/link';
import $ from 'jquery';
import SideNav from './../layouts/SideNav';


class Index extends Component {

  componentDidMount= ()=> {

  }
  showsidebar(){
    this.refs.child.showSidebar();
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
<SideNav ref="child" sidenavlink={sidenavlink} topic={topic} />

<h1 className="font1">Catageries</h1>
<h1 className="font2">Catageries</h1>
<h1 className="font3">Catageries</h1>
<h1 className="font4">Catageries</h1>
<h1 className="font5">Catageries</h1>
<h1 className="font6">Catageries</h1>
<h1 className="font1 topicColor">Catageries</h1>
<h1 className="font1 subtopicColor">Catageries</h1>

<button onClick={this.showsidebar.bind(this)} > side </button>

  <style jsx>
  {`


  `}
  </style>
</Layout>
  )
}
 
}



export default Index;