import React, { Component } from 'react';
import Head from 'next/head';
import useSWR from 'swr';
import Layout from '../layouts/MainLayout';
import {Url,web,WebUrl} from '../constant/main';
import Header from '../component/header';
import TopSlide from '../component/topslide';
import Loading2 from './../component/loading2';
import Homecategory from '../component/homeCategory';
import Footer from '../component/footer';

function HomeSwr() {
  const url = `/api/types`;
  const fetcher = (...args) => fetch(...args).then(res => {if(res.status==200){return res.json()}else{return res.status} });
  const { data, error } = useSWR(url, fetcher);

  if(!data){
    return <Loading2/>
  }
  else if(data>200){
    return null
  }
  else{
   return <Homecategory catageries={data} topic="categories" />
  }

}

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
        <HomeSwr/>
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
/*
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
  <Homecategory catageries={types} topic="categories" />
*/
export default Index; 
