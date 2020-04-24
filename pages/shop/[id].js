import React, { Component } from 'react';
import Head from 'next/head';
import Layout from './../../layouts/MainLayout';
import AllShops from '../../components/Allshops';
import SubNavBar from './../../layouts/SubNavbar';
import Slide from  './../../components/Slide1';
import Footer from './../../components/Footer';
import {Url,wesitename,WebUrl,web} from './../../constant/main';
import Link from 'next/link';
import Errorpage from './../../layouts/error';
import $ from 'jquery';

class Index extends Component {

    constructor() {
        super();
        this.state = {
            catageries : [],
            allshops : [],
        }

    }
    componentDidMount(){

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
                <SubNavBar sidenavconst={sidenavconst}/>
                {this.props.error?<Errorpage error={this.props.allshops} />:
                <div>

                <Head>
                <title> {wesitename+', All shop in '+this.props.district+', sri lanka'}</title>
                <meta property="og:url"           content={WebUrl} />
                <meta property="og:type"          content="article" />
                <meta property="og:title"         content={wesitename+', All shop in '+this.props.district+', sri lanka'} />
                <meta property="og:description"   content={web.webContent} />
                <meta property="og:image"         content={WebUrl+'special/back1.jpg'}/>
                
                <meta name="keywords" content={web.webKeyword}></meta>
                <meta name="description" content={wesitename+', All shop in'+this.props.district+', sri lanka'}></meta>
                </Head>


                <br/>
        <button onClick={this.showCategory} type="button" className="font6  btn btn-category category btn-sm catagoryname fontsizeE1"  required  name="newsubtype" data-toggle="collapse" > catageries </button>
        <div id="panel" className="ismobile_disable">
        <div className="catagoryname row" >
                {this.props.allcatagery.map((c,i)=> 

                <div key={i} className="col-lg-1 col-md-2 col-sm-6 category"><Link href={'#'+c.type+'-catogery'} ><p className="font1 fontsizeE-9" > {/*i!=0?'||':null*/} {c.name}</p></Link></div>
                
                  )}
            
        </div> 

        </div>

                {this.props.allcatagery.map((c,i)=>
                 this.filterarray(c.type).length>0?<div key={i} id={c.type+'-catogery'} >{i!=0?<div><br/><br/><br/><br/></div>:null}<AllShops  allshops={this.filterarray(c.type)} topic={c.name} type={c.type}></AllShops></div>:null
                    )}
                
        </div>}

            <Footer/>
            <style>
                {`
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
