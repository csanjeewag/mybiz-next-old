import React, { Component } from 'react';
import Head from 'next/head';
import useSWR from 'swr';
import { useRouter } from "next/router";
import Layout from '../../layouts/MainLayout2';
import  {Url,ImageUrl,myshopmUrl,wesitename, web,websiteUrl,itemUrl} from '../../constant/main';
import Header from '../../component/header';
import ItemDetail from '../../component/itemDetail';
import Footer from '../../component/footer';
import Errorpage from '../../layouts/error';
import Loading2 from './../../component/loading2';

function Loadtitem() {

  const { query: { id,ide }} = useRouter();
  const url = `/api/item/${id}?ide=${ide}`;
  const fetcher = (...args) => fetch(...args).then(res => {if(res.status==200){return res.json()}else{return res.status} });
  const { data, error } = useSWR(url, fetcher);


  if(!data)
  {
      return <div className="p-t-150 p-b-150">
                <Loading2/>
          </div>
    }
    else if(data>200){
      return <div>
                <Errorpage error={{msg:'Sorry, there are no item ',errormsg:"there is a some mistake, please try again."}} />
          </div>
      
    }else{
      return <div>
        <Head>
                <title> {wesitename+' '+data.itemname+' '+data.shop[0].shopName+' '+data.shop[0].town}</title>
                <meta property="og:url"           content={websiteUrl+itemUrl+id} />
                <meta property="og:type"          content={web.webtypeA} />
                <meta property="og:title"         content={wesitename+' '+data.itemname+' '+data.shop[0].shopName+' '+data.shop[0].town} />
                <meta property="og:description"   content={data.content1} />
                <meta property="og:image"         content={ImageUrl+data.images[0]}/>
                
                <meta name="keywords" content={data.urlname.split('-').join(',')+',sri lanka'}></meta>
                <meta name="description" content={data.itemname+' from '+data.shop[0].shopName+', '+data.content1}></meta>
                </Head>
        <ItemDetail item={data}/>
      </div>
     }
}

class Index extends Component {


    render() { 
        

          return ( 
           <Layout>
        <Header/>
        <div className="ismobile_disable p-t-80"></div>
        {/*this.props.error?<Errorpage error={this.props.item} />:
        <div>
            <Head>
                <title> {wesitename+' '+this.props.item.itemname+' '+this.props.item.shop[0].shopName+' '+this.props.item.shop[0].town}</title>
                <meta property="og:url"           content={websiteUrl+itemUrl+this.props.pathname} />
                <meta property="og:type"          content={web.webtypeA} />
                <meta property="og:title"         content={wesitename+' online shop in sri lanka. '+this.props.item.itemname} />
                <meta property="og:description"   content={this.props.item.content1} />
                <meta property="og:image"         content={ImageUrl+this.props.item.images[0]}/>
                
                <meta name="keywords" content={this.props.item.urlname.split('-').join(',')+',sri lanka'}></meta>
                <meta name="description" content={this.props.item.content1}></meta>
                </Head>
                <div className="ismobile_disable p-t-80"></div>
        {this.props.item&&this.props.item._id?<ItemDetail item={this.props.item}/>:null}
        </div>
          */}  
        <Loadtitem/>
        <Footer/>
  
                  </Layout>
           );
      }
    
}
/*
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
*/
export default Index; 
