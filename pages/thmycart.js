import React, { Component } from 'react';
import Head from 'next/head';
import Layout from './../layouts/MainLayout';
import Allcatagery from './../components/Allcatagery';
import NavBar from './../layouts/Navbar';
import FilterItem from './../layouts/filterItem';
import {Url,web,WebUrl} from './../constant/main';
import fetch from 'isomorphic-unfetch';
/** */
import Header from './../component/header';
import Mycart from '../component/mycart';
import Homecategory from './../component/homeCategory';
import Footer from './../component/footer';
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
        <Mycart/>
        
        <Footer/>


  
                  </Layout>
           );
      }
    
}



export default Index; 
