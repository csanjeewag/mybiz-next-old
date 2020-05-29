import React, { Component } from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';
import Layout from '../../layouts/MainLayout2';
import  {Url,ImageUrl,WebUrl,wesitename, web,websiteUrl,myshopmUrl} from '../../constant/main';
/** */
import Header from '../../component/header';
import Itemlist from '../../component/itemlist';
import ShopDetail from '../../component/shopDetail';
import Footer from '../../component/footer';
import Errorpage from './../../layouts/error';
import Loading2 from './../../component/loading2';


function LoadItems(props) {

  const url = `/api/itemsbyshopid/${props.id}`;
  const fetcheritems = (...args) => fetch(...args).then(res => {if(res.status==200){return res.json()}else{return res.status} });
  const { data, error } = useSWR(url, fetcheritems);


  if(!data)
       {
       return <div className="p-t-150 p-b-150">
                 <Loading2/>
            </div>
     }
     else if(data>200){

       return <div className="alert alert-dark" role="alert">
       Sorry, There are not items in this shop.
     </div>
       
     }
     else{
    
      return <div>
    <Itemlist items={data}/>
     </div>
     }
   

}


class Index extends Component {
    
    render() { 
        

          return ( 
           <Layout>
        <Header/>
        {this.props.error?<Errorpage error={this.props.allshops} />:
        <div>
                     <Head>
                <title> {wesitename+' '+this.props.shop.shopName+' '+this.props.shop.shopName+' '+this.props.shop.town}</title>
                <meta property="og:url"           content={websiteUrl+myshopmUrl+this.props.pathname} />
                <meta property="og:type"          content={web.webtypeA} />
                <meta property="og:title"         content={wesitename+' '+this.props.shop.shopName+' '+this.props.shop.shopName+' '+this.props.shop.town} />
                <meta property="og:description"   content={this.props.shop.content1} />
                <meta property="og:image"         content={ImageUrl+this.props.shop.images[0]}/>
                
                <meta name="keywords" content={this.props.shop.urlname.split('-').join(',')+',sri lanka'}></meta>
                <meta name="description" content={this.props.shop.content1}></meta>
                </Head>
                <div className="ismobile_disable p-t-80"></div>
                <ShopDetail shop={this.props.shop} />
       
        <LoadItems id={this.props.shop._id}/>
        </div>}
        <Footer/>


  
                  </Layout>
           );
      }
    
}

Index.getInitialProps = async function(context) {
    const { id,ide } = context.query;
    var pathname = id+(ide?'?ide='+ide:'');
    const res = await fetch(`${Url}shop/${id}`);
 
     var  shop = await res.json();

     var error = false;
     if(res.status!=200){
      error = true ;
    }

    return {pathname,shop:shop,error}


  }

export default Index; 
