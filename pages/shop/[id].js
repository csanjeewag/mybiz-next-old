import React, { Component } from 'react';
import Layout from './../../layouts/MainLayout';
import Allcatagery from '../../components/Allshops';
import SubNavBar from './../../layouts/SubNavbar';
import Slide from  './../../components/Slide1';
import Footer from './../../components/Footer';
import {Url} from './../../constant/main';
import Link from 'next/link';
import Errorpage from './../../layouts/error';

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

    render() { 
        
        const sidenavconst = {topic : 'location',topiclink:'All Location',sidenavlink:this.props.alllocations,visible:true, suburl:'shop'};  
        //////////////
          return ( 
            <Layout>
                <SubNavBar sidenavconst={sidenavconst}/>
                {this.props.error?<Errorpage error={this.props.allshops} />:
                
                <div>
                <br/>
                <div className="d-flex flex-wrap justify-content-around bd-highlight catagoryname">
                {this.props.allcatagery.map((c,i)=> 
                <div key={i} className="p-2 bd-highlight "><Link href={'#'+c.type+'-catogery'} ><p className="font1" > {/*i!=0?'||':null*/} {c.name}</p></Link></div>
                
                  )}
                </div>
                
              
               
               
                {this.props.allcatagery.map((c,i)=>
                 this.filterarray(c.type).length>0?<div key={i} id={c.type+'-catogery'} >{i!=0?<div><br/><br/><br/><br/></div>:null}<Allcatagery  allshops={this.filterarray(c.type)} topic={c.name} type={c.type}></Allcatagery></div>:null
                    )}
                
        </div>}

            <Footer/>
            <style>
                {`
                .catagoryname{
                    color:#ffa445;
                    background-image: linear-gradient(darkblue, #4084d9);
                    cursor: pointer;
                    padding:0;
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
    return {itemname:id,allcatagery,allshops,alllocations,error}


  }

export default Index; 
