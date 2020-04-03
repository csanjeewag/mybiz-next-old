import React, { Component } from 'react';
import Layout from './../../layouts/MainLayout';
import Menu2 from './../../components/menu2';
import SubNavBar from './../../layouts/SubNavbar';
import Slide from  './../../components/Slide1';
import Footer from './../../components/Footer';
import {Url} from './../../constant/main';
class Index extends Component {

    constructor() {
        super();
        this.state = {
            catageries : []
        }
    }

    showsidebar(){
        this.refs.child.showSidebar();
      }
    
    render() { 
        
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
                

             <Slide></Slide>
                <Menu2  catageries={this.props.items} topic={this.props.itemname}></Menu2>
            <Footer/>
                   </Layout>
           );
      }
    
}

Index.getInitialProps = async function(context) {
    const { id } = context.query;
    
    const res = await fetch(`${Url}catagerybyname/${id}`);
    var  items = await res.json();
    var error = false;
    if(res.status!=200){
        error = true ;
   }
    console.log(items)
    return {itemname:id,items,error}


  }

export default Index; 
