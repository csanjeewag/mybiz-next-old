import React, { Component } from 'react';
import Head from 'next/head';
import Layout from './../../layouts/MainLayout2';
import AllShops from '../../component/Allshops';
import Header from './../../component/header';
import Footer from './../../component/footer';
import {Url,wesitename,WebUrl,web,shopmUrl,websiteUrl} from './../../constant/main';
import Link from 'next/link';
import Errorpage from './../../layouts/error';
import $ from 'jquery';
import Router from 'next/router';

class Index extends Component {

    constructor() {
        super();
        this.state = {
            catageries : [],
            allshops : [],
        }

    }
    componentDidMount(){
        $(document).ready(function() {

            $('.category-hover').hover(function () {
     
                $('#panel').slideDown(500);
            }, function () {
                $('#panel').hover(function(){

                },function(){
                    $('#panel').slideUp(500);
                })
            });
         
        });

        this.setState({
            catageries:this.props.allcatagery,
            allshops: this.props.allshops
        })
    }

    showsidebar(){
        this.refs.child.showSidebar();
      }
    
    filterarray(type){
        var array = this.props.allshops;
       var x=  array.filter(x=>
            x.categery == type
            )
        return x;
    }

    showCategory(){
        
        if($('#panel').is(":visible")){
            $('#panel').slideUp(500);
        }else{
            $('#panel').slideDown(500);
        }
  
    }

    render() { 
        
        const sidenavconst = {topic : 'location',topiclink:'All Location',sidenavlink:this.props.alllocations,visible:true, suburl:'shop'};  
        //////////////
          return ( 
            <Layout>
                <Header />
                {this.props.error?<Errorpage error={this.props.allshops} />:
                <div>

                <Head>
                <title> {wesitename+', All shop in '+this.props.district+', sri lanka'}</title>
                <meta property="og:url"           content={websiteUrl+shopmUrl+this.props.district} />
                <meta property="og:type"          content={web.webtypeA} />
                <meta property="og:title"         content={wesitename+', All shop '+this.props.district+', in  sri lanka. '+web.webcategories} />
                <meta property="og:description"   content={web.webContent} />
                <meta property="og:image"         content={WebUrl+'special/back1.jpg'}/>
                
                <meta name="keywords" content={web.webKeyword}></meta>
                <meta name="description" content={wesitename+', All shop in'+this.props.district+', sri lanka'}></meta>
                </Head>

                <div className="ismobile_disable p-t-80"></div>

        <div className="flex-w flex-sb-m p-b-52 col-lg-11 col-sm-12 mx-auto">
				<div className="flex-w flex-l-m filter-tope-group m-tb-10">

					{this.props.allcatagery?this.props.allcatagery.map((x,i)=>
					<button key={i} className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" >
					<a href={'#'+x.type+'-catogery'} style={{color:'black'}} >{x.name}</a>	
					</button>
				
					):null}
			
				</div>
        </div>

                
                {this.props.allcatagery.map((c,i)=>
                 this.filterarray(c.type).length>0?<div key={i} id={c.type+'-catogery'} ><AllShops className={'isotope-item '+c.type}  allshops={this.filterarray(c.type)} topic={c.name} type={c.type}></AllShops></div>:null
                    )}
                
        </div>}

            <Footer/>
            <style>
                {`
                #panel{
                    display:none;
                }
                .catagoryname{
                    color:#ffa445;
                    background-image: linear-gradient(#01489f, #296fc6);
                    cursor: pointer;
                    padding: 0.5em;
                }
                .btn-category{
                    width:100%;
                }
                .category:hover{
                    color:white;
                }
                `}
            </style>
                   </Layout>
           );
      }
    
}

Index.getInitialProps = async function(context) {
    const { id } = context.query;
    const resallshop = await fetch(`${Url}allshop/${id}`);
    const resallcatageries = await fetch(`${Url}types`);
    const resalllocations = await fetch(`${Url}locations`);

    var allshops = await resallshop.json();
    var allcatagery = await resallcatageries.json();
    var alllocations = await resalllocations.json();

    var error = false;
    if(resallshop.status!=200){
        error = true ;
   }
    return {district:id,allcatagery,allshops,alllocations,error}


  }

export default Index; 
