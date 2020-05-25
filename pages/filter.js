import React, { Component } from 'react';
import Head from 'next/head';
import Layout from '../layouts/MainLayout';
import FilterItem from '../component/filterItem';
//import Footer from '../components/Footer';
import {Url,web,WebUrl,websiteUrl, wesitename,filteritemUrl} from '../constant/main';
import {specialMsg} from '../constant/page';
import fetch from 'isomorphic-unfetch';

import Header from '../component/header';
import Itemlist from '../component/itemlist';
import CategoryRowlist from '../component/categoryrowlist';
import Footer from '../component/footer';

class Index extends Component {
    constructor() {
		super();
		this.state = {
            items:[]

  }
	}



    componentDidMount(){
        //this.showfilter();
        this.setState({items:this.props.items});
        
    }
    showfilter(){
        this.refs.navbar.showfilter();
    }
    
    render() { 
        const sidenavconst = {topic : 'Categeries',topiclink:'All Categeriess',sidenavlink:'',visible:false };
    

          return ( 
           <Layout>
                <Header/>
                <Head>
                <title> {web.wetopic}</title>
                <meta property="og:url"           content={websiteUrl+filteritemUrl+this.props.searchurl} />
                <meta property="og:type"          content={web.webtypeW} />
                <meta property="og:title"         content={web.wetopic} />
                <meta property="og:description"   content={web.webContent +' '+web.webcategories} />
                <meta property="og:image"         content={web.webImage}/>
                
                <meta name="keywords" content={web.webKeyword}></meta>
                <meta name="description" content={web.webContent}></meta>
                </Head>
   <div className="ismobile_disable p-t-80"></div>
    {/*<FilterItem  searchitem={this.props.searchitem}/>*/}
    <Itemlist items={this.props.items} topic={'Serch Items'} selectcatagery={null}/>
 {/*   <Categeryitem  catageries={this.props.items} topic={'search items...'}></Categeryitem>*/}
   {this.props.items.length==0?
   <div className="alert alert-dark col-lg-10 col-sm-12 mx-auto" role="alert">
   {specialMsg.filteremptymsg} 
 </div>:null
}

     <Footer></Footer>
  
                  </Layout>
           );
      }
    
}

Index.getInitialProps = async function(context) {
    const { category,subcategory,upperprice,lowerprice,district,town,search } = context.query;

    var searchitem = {category:category,subcategory:subcategory,upperprice:upperprice,
        lowerprice:lowerprice,district:district,town:town,search:search };

    var searchurl = `?${search?'search='+search:'search='}`+
                `${category?'&category='+category:''}${subcategory?'&subcategory='+subcategory:''}`+
                `${district?'&district='+district:''}${town?'&town='+town:''}`+
                `${lowerprice?'&lowerprice='+lowerprice:''}${upperprice?'&upperprice='+upperprice:''}`;

    const res = await fetch(Url+'itemfilter'+searchurl);
    var  items = await res.json();
    var error = false;
    if(res.status!=200){
        error = true ;
   }
    return {items,error,searchitem,searchurl}


  }

export default Index; 
