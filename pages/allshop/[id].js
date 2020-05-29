import React, { Component } from 'react';
import Head from 'next/head';
import useSWR from 'swr';
import { useRouter } from "next/router";
import Layout from './../../layouts/MainLayout2';
import AllShops from '../../component/Allshops';
import Header from './../../component/header';
import Footer from './../../component/footer';
import {wesitename,WebUrl,web,shopmUrl,websiteUrl} from './../../constant/main';
import Errorpage from './../../layouts/error';
import Loading2 from '../../component/loading2';



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

    const url = `/api/allshop/${id}`;
    const fetcheritems = (...args) => fetch(...args).then(res => {if(res.status==200){return res.json()}else{return res.status} });
    const { data, error } = useSWR(url, fetcheritems);
  
    var filterarray=(type)=>{
        var array = data;
       var x=  array.filter(x=>
            x.categery == type
            )
        return x;
    }

    if(!data)
         {
         return <div className="p-t-150 p-b-150">
                   <Loading2/>
              </div>
       }
       else if(data>200){
         return <div>
                   <Errorpage error={{msg:'Sorry, there are no shops ',errormsg:"We adding shop for this website, keep your mind with us."}} />
              </div>
         
       }
       else{

        return <div>
         <Head>
                <title> {wesitename+', All shop in '+data.district+', sri lanka'}</title>
                <meta property="og:url"           content={websiteUrl+shopmUrl+data.district} />
                <meta property="og:type"          content={web.webtypeA} />
                <meta property="og:title"         content={wesitename+', All shop '+data.district+', in  sri lanka. '+web.webcategories} />
                <meta property="og:description"   content={web.webContent} />
                <meta property="og:image"         content={WebUrl+'special/back1.jpg'}/>
                
                <meta name="keywords" content={web.webKeyword}></meta>
                <meta name="description" content={wesitename+', All shop in'+data.district+', sri lanka'}></meta>
                </Head>

                <div className="flex-w flex-sb-m p-b-52 col-lg-11 col-sm-12 mx-auto ismobile_disable">
				<div className="flex-w flex-l-m filter-tope-group m-tb-10">

					{categories.map((x,i)=>
					<button key={i} className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" >
					<a href={'#'+x.type+'-catogery'} style={{color:'black'}} >{x.name}</a>	
					</button>
				
					)}
			
				</div></div>

        {categories.map((c,i)=>
                 filterarray(c.type).length>0?<div key={i} id={c.type+'-catogery'} ><AllShops className={'isotope-item '+c.type}  allshops={filterarray(c.type)} topic={c.name} type={c.type}></AllShops></div>:null
                )}
        </div>
       
       }
     
  
  }


class Index extends Component {



    render() { 
        
          return ( 
            <Layout>
                <Header />
                <div className="ismobile_disable p-t-80"></div>
                <LoadComponent />
           
            <Footer/>

        
                   </Layout>
           );
      }
    
}

export default Index; 
