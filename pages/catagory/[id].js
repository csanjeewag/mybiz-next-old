import React, { Component } from 'react';
import Head from 'next/head';
import useSWR from 'swr';
import { useRouter } from "next/router";
import {Url,ImageUrl,wesitename, web,websiteUrl,categoryUrl} from '../../constant/main';
import Layout from '../../layouts/MainLayout2';
import Header from '../../component/header';
import Footer from '../../component/footer';
import Itemlist from '../../component/itemlist';
import CategoryRowlist from '../../component/categoryrowlist';
import Loading2 from '../../component/loading2';
import Errorpage from './../../layouts/error';

function loadtypes() {

     const url = `/api/types`;
     const fetcher = (...args) => fetch(...args).then(res => {if(res.status==200){return res.json()}else{return res.status} });
     const { data, error } = useSWR(url, fetcher);

   
     if(data){
          return data
        }
        else{
         return null
        }
   }


   function LoadComponent() {

     const categories = loadtypes();

     const { query: { id }} = useRouter();

     const urlitems = `/api/catagerybyname/${id}`;
     const fetcheritems = (...args) => fetch(...args).then(res => {if(res.status==200){return res.json()}else{return res.status} });
     const { data, error } = useSWR(urlitems, fetcheritems);
   
     if(!data)
          {
          return <div>{categories?<CategoryRowlist catageries={categories} topic="categories" />:null}
                    <Loading2/>
               </div>
        }
        else if(data>200){
          return <div>{categories?<CategoryRowlist catageries={categories} topic="categories" />:null}
                    <Errorpage error={{msg:'Sorry, there are no shops ',errormsg:"We adding shop for this website, keep your mind with us."}} />
               </div>
          
        }
        else{

          var selectcatagery = categories.filter(function(e){
               return e.type==id;
          })

         return <div>
              <Head>
                <title> {wesitename+' '+id}</title>
                <meta property="og:url"           content={websiteUrl+categoryUrl+id} />
                <meta property="og:type"          content={web.webtypeA}/>
                <meta property="og:title"         content={wesitename+', online shop in sri lanka. '+id} />
                <meta property="og:description"   content={selectcatagery[0].content1} />
                <meta property="og:image"         content={ImageUrl+selectcatagery[0].images[0]}/>
                
                <meta name="keywords" content={id.split('-').join(' ')+',sri lanka'}></meta>
                <meta name="description" content={selectcatagery[0].content1}></meta>
                </Head>
              <CategoryRowlist catageries={categories} topic="categories" />
              <Itemlist items={data} topic={id} selectcatagery={selectcatagery[0]}/>
         </div>
        
        }
      
   
   }
   

class Index extends Component {


  
    render() { 
        
          return ( 
           <Layout>
        <Header/>
        <div className="ismobile_disable p-t-80"></div>
       
          <LoadComponent/>
        <Footer/>


  
                  </Layout>
           );
      }
    
}

export default Index; 
