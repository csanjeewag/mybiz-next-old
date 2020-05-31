import React, { Component } from 'react';
import Head from 'next/head';
import Layout from '../../layouts/MainLayout2';
import  {Url,ImageUrl,myshopmUrl,wesitename,WebUrl, web,websiteUrl,itemUrl} from '../../constant/main';
import fetch from 'isomorphic-unfetch';
/** */
import Header from '../../component/header';
import ItemDetail from '../../component/itemDetail';
import Footer from '../../component/footer';
import Errorpage from '../../layouts/error';
class Index extends Component {


    render() { 
        

          return ( 
           <Layout>
        <Header/>
        {this.props.error?<Errorpage error={this.props.item} />:
        <div>
            <Head>
                <title> {wesitename+' '+this.props.item.itemname+' '+this.props.item.shop[0].shopName+' '+this.props.item.shop[0].town}</title>
                <meta property="og:url"           content={websiteUrl+itemUrl+this.props.pathname} />
                <meta property="og:type"          content={web.webtypeA} />
                <meta property="og:title"         content={'('+wesitename+'), '+this.props.item.itemname+', '+this.props.item.shop[0].shopName+' '+this.props.item.shop[0].town} />
                <meta property="og:description"   content={'Rs:'+this.props.item.itemPrice+', '+this.props.item.content1} />
                <meta property="og:image"         content={ImageUrl+this.props.item.images[0]}/>
                
                <meta name="keywords" content={this.props.item.urlname.split('-').join(',')+',sri lanka'}></meta>
                <meta name="description" content={this.props.item.content1}></meta>
                </Head>
                <div className="ismobile_disable p-t-80"></div>
        {this.props.item&&this.props.item._id?<ItemDetail item={this.props.item}/>:null}
        </div>
          }  

        <Footer/>
  
                  </Layout>
           );
      }
    
}

Index.getInitialProps = async function(context) {
  const { id,ide } = context.query;
  var pathname = id+'?ide='+ide;
  const res = await fetch(`${Url}item/${id}?ide=${ide}`);

   var  item = await res.json();
   var error = false;
   if(res.status!=200){
    error = true ;
  }

  return {pathname,item,error}


}

export default Index; 
