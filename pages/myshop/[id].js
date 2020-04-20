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
        
        const items = [
            {id:1 , topic: 'topic1', subtopic:'subtopic1',imageUrl:'http://loremflickr.com/320/150?random=1'   ,discount:5,date:'2020/4/5',price:150,topicImageUrl:'https://img.icons8.com/ios/50/000000/contract-job.png',content:'In publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience. Content is "something that is to be expressed through some medium, as speech, writing or any of various arts',qty:0,seller:'idea mart'},
            {id:2 , topic: 'topic2', subtopic:'subtopic1',imageUrl:'http://loremflickr.com/320/150?random=2'   ,discount:5,date:'2020/4/5',price:150,topicImageUrl:'https://img.icons8.com/ios/50/000000/contract-job.png',content:'In publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience. Content is "something that is to be expressed through some medium, as speech, writing or any of various arts',qty:0,seller:'idea mart'},
            {id:3 , topic: 'topic3', subtopic:'subtopic1',imageUrl:'http://loremflickr.com/320/150?random=3'   ,discount:5,date:'2020/4/5',price:150,topicImageUrl:'https://img.icons8.com/ios/50/000000/contract-job.png',content:'In publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience. Content is "something that is to be expressed through some medium, as speech, writing or any of various arts',qty:0,seller:'idea mart'},
            {id:4 , topic: 'topic4', subtopic:'subtopic1',imageUrl:'http://loremflickr.com/320/150?random=4'   ,discount:5,date:'2020/4/5',price:150,topicImageUrl:'https://img.icons8.com/ios/50/000000/contract-job.png',content:'In publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience. Content is "something that is to be expressed through some medium, as speech, writing or any of various arts',qty:0,seller:'idea mart'}

        ];
        //side navbar link
        const sidenavlink = [
            {id:1,link:'/',linkname:'home'},
            {id:1,link:'/menu',linkname:'menu'},
            {id:1,link:'/',linkname:'menu2'},
            {id:1,link:'/',linkname:'menu3'},
            {id:1,link:'/',linkname:'menu4'},
            {id:1,link:'/',linkname:'menu5'},
          ];
          
            const sidenavconst = {topic : 'Categeries',topiclink:'All Categeriess',sidenavlink:sidenavlink};
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

                <Profile shop={this.props.shopanditems.shop} catageries={items} items={this.props.shopanditems.items} topic="My Shops"></Profile>
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

