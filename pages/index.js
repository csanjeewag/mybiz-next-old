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
    
        <Homecategory catageries={this.props.types} topic="categories" />
        
        <Footer/>


  
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
