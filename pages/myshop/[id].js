import React, { Component } from 'react';
import Head from 'next/head';
import Router from "next/router";
import Layout from './../../layouts/MainLayout';
import Profile from './../../components/CompanyProfile';
import SubNavBar from './../../layouts/SubNavbar';
import Footer from './../../components/Footer';
import Errorpage from './../../layouts/error';
import  {Url,ImageUrl,WebUrl,wesitename} from './../../constant/main';
class Index extends Component {


    showsidebar(){
        this.refs.child.showSidebar();
      }
    
    render() { 
          
            const sidenavconst = {topic : 'Categeries',topiclink:'All Categeriess',sidenavlink:[],visible:false};
        //////////////
          return ( 
              
            <Layout>
                <SubNavBar sidenavconst={sidenavconst}/>
               
                {this.props.error?<Errorpage error={this.props.shop} />:<div>

                  <Head>
                <title> {wesitename+' '+this.props.shopanditems.shop.shopName+' '+this.props.shopanditems.shop.shopName+' '+this.props.shopanditems.shop.town}</title>
                <meta property="og:url"           content={WebUrl} />
                <meta property="og:type"          content="article" />
                <meta property="og:title"         content={wesitename+' '+this.props.shopanditems.shop.shopName+' in '+this.props.shopanditems.shop.town} />
                <meta property="og:description"   content={this.props.shopanditems.shop.content1} />
                <meta property="og:image"         content={ImageUrl+this.props.shopanditems.shop.images[0]}/>
                
                <meta name="keywords" content={this.props.shopanditems.shop.urlname.split('-').join(',')+',sri lanka'}></meta>
                <meta name="description" content={this.props.shopanditems.shop.content1}></meta>
                </Head>

                <Profile shop={this.props.shopanditems.shop} items={this.props.shopanditems.items} topic="My Shops"></Profile>
                </div>
                }
             
            <Footer/>
                   </Layout>
           );
      }
    
}
 
Index.getInitialProps = async function(context) {
    const { id,ide } = context.query;
    const res = await fetch(`${Url}shopanditems/${id}?ide=${ide}`);
 
     var  shopanditems = await res.json();

     var error = false;
     if(res.status!=200){
      error = true ;
    }

    return {shopanditems,error}


  }

  export default Index;

