import React, { Component } from 'react';
import Head from 'next/head'
import Layout from './../../layouts/MainLayout';
import Categeryitem from '../../components/Categeryitem';
import SubNavBar from './../../layouts/SubNavbar';
import Slide from  './../../components/Slide1';
import Footer from './../../components/Footer';
import {Url,ImageUrl,wesitename,WebUrl} from './../../constant/main';
import Errorpage from './../../layouts/error';

class Index extends Component {

    constructor() {
        super();
        this.state = {
            catageries : []
        }

    }
    componentDidMount(){
        this.setState({
            catageries:this.props.allcatagery
        })
    }

    showsidebar(){
        this.refs.child.showSidebar();
      }
    
    render() { 
        
            const sidenavconst = {topic : 'Categeries',topiclink:'all categories',suburl:'/catagery/', sidenavlink:this.props.allcatagery,visible:this.props.error?false:true};
        //////////////
          return ( 
            <Layout>
                
                <SubNavBar sidenavconst={sidenavconst}/>
                {this.props.error?<Errorpage error={this.props.item} />:
            <div>
                <Head>
                <title> {wesitename+' '+this.props.itemname}</title>
                <meta property="og:url"           content={WebUrl} />
                <meta property="og:type"          content="article" />
                <meta property="og:title"         content={wesitename+' '+this.props.itemname} />
                <meta property="og:description"   content={this.props.catagery[0].content1} />
                <meta property="og:image"         content={ImageUrl+this.props.catagery[0].images[0]}/>
                
                <meta name="keywords" content={this.props.itemname.split('-').join(',')+',sri lanka'}></meta>
                <meta name="description" content={this.props.catagery[0].content1}></meta>
                </Head>

             <Slide catagery={this.props.catagery[0]} ></Slide>
                <Categeryitem  catageries={this.props.items} topic={this.props.itemname}></Categeryitem>
            </div>}
            <Footer/>
                   </Layout>
           );
      }
    
}

Index.getInitialProps = async function(context) {
    const { id } = context.query;
    
    const res = await fetch(`${Url}catagerybyname/${id}`);
    const rescatagery = await fetch(`${Url}typebyname/${id}`);
    const resallcatageries = await fetch(`${Url}types`);

    var  items = await res.json();
    var catagery = await rescatagery.json();
    var allcatagery = await resallcatageries.json();

    var error = false;
    if(res.status!=200||rescatagery.status!=200 ){
        error = true ;
   }

    return {itemname:id,items,catagery,allcatagery,error}


  }

export default Index; 
