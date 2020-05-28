import React, { Component } from 'react';
import Head from 'next/head';
import Layout from '../layouts/MainLayout';
import Allcatagery from '../components/Allcatagery';
import NavBar from '../layouts/Navbar';
import FilterItem from '../layouts/filterItem';
import {Url,web,WebUrl} from '../constant/main';
import fetch from 'isomorphic-unfetch';
/** */
import Header from '../component/header';
import TopSlide from '../component/topslide';
import Homecategory from '../component/homeCategory';
import Footer from '../component/footer';
class Index extends Component {


componentDidMount(){
  (function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
		fjs.parentNode.insertBefore(js, fjs);
	  }(document, 'script', 'facebook-jssdk'))	
}
    
    render() { 
        

          return ( 
           <Layout>
                   <Head>
                <title> {web.wetopic}</title>
                <meta property="og:url"           content={WebUrl} />
                <meta property="og:type"          content={web.webtypeW} />
                <meta property="og:title"         content={web.wetopic} />
                <meta property="og:description"   content={web.webContent} />
                <meta property="og:image"         content={web.webImage}/>
                
                <meta name="keywords" content={web.webKeyword}></meta>
                <meta name="description" content={web.webContent}></meta>
                </Head>
        <Header/>
       <TopSlide/>
    	<div className="fb-share-button" 
    data-href="https://onshop.lk/shop/Gift-Handmade-items-Roo-Creation--in-Kelaniya" 
    data-layout="button_count">
  </div>
        <Homecategory catageries={this.props.types} topic="categories" />
        
        <Footer/>

        <style jsx>{
			  `.fb{
				  background:black;
			  }
			  `
		  }</style>
  
                  </Layout>
           );
      }
    
}

Index.getInitialProps = async function(context) {
    const { id } = context.query;
    
    const res = await fetch(`${Url}types`);
    var  types = await res.json();
    var error = false;
    if(res.status!=200){
        error = true ;
   }
    return {itemname:id,types,error}


  }

export default Index; 
