import React, { Component } from 'react';
import Head from 'next/head';
import Layout from '../../layouts/MainLayout2';
import fetch from 'isomorphic-unfetch';
/** */
import Header from '../../component/header';
import Itemlist from '../../component/itemlist';
import CategoryRowlist from '../../component/categoryrowlist';
import Footer from '../../component/footer';
import Errorpage from './../../layouts/error';
import {Url,ImageUrl,wesitename,WebUrl, web,websiteUrl,categoryUrl} from '../../constant/main';
class Index extends Component {



    
    render() { 
        

          return ( 
           <Layout>
        <Header/>
        {this.props.error?<Errorpage error={this.props.items} />:
        <div>
             <Head>
                <title> {wesitename+' '+this.props.itemname}</title>
                <meta property="og:url"           content={websiteUrl+categoryUrl+this.props.itemname} />
                <meta property="og:type"          content={web.webtypeA}/>
                <meta property="og:title"         content={wesitename+', online shop in sri lanka. '+this.props.itemname} />
                <meta property="og:description"   content={this.props.catagery[0].content1} />
                <meta property="og:image"         content={ImageUrl+this.props.catagery[0].images[0]}/>
                
                <meta name="keywords" content={this.props.itemname.split('-').join(',')+',sri lanka'}></meta>
                <meta name="description" content={this.props.catagery[0].content1}></meta>
                </Head>
                <div className="ismobile_disable p-t-80"></div>
        <CategoryRowlist catageries={this.props.allcatagery} topic="categories" />
        <Itemlist items={this.props.items} topic={this.props.itemname} selectcatagery={this.props.catagery[0]}/>
        </div>}
        <Footer/>


  
                  </Layout>
           );
      }
    
}

Index.getInitialProps = async function(context) {
  const { id } = context.query;
  
  const res = await fetch(`${Url}catagerybyname/${id}`);
  const resallcatageries = await fetch(`${Url}types`);

  var  items = await res.json();

  var allcatagery = await resallcatageries.json();
  var selectcatagery = allcatagery.filter(function(e){
       return e.type==id;
  })

  var error = false;
  if(res.status!=200||resallcatageries.status!=200 ){
      error = true ;
 }

  return {itemname:id,items,catagery:selectcatagery,allcatagery,error}


}

export default Index; 
