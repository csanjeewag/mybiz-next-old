import React, { Component } from 'react';
import Layout from './../layouts/MainLayout';
import Allcatagery from './../components/Allcatagery';
import NavBar from './../layouts/Navbar';
import TopSlide from '../components/Topslide';
import Footer from './../components/Footer';
import {Url} from './../constant/main';
import fetch from 'isomorphic-unfetch';
class Index extends Component {



    
    render() { 
        

          return ( 
           <Layout>
         <NavBar ></NavBar>
        <TopSlide></TopSlide>
        
              <Allcatagery catageries={this.props.types} topic="categories" ></Allcatagery>


     <Footer></Footer>
  
                  </Layout>
           );
      }
    
}

Index.getInitialProps = async function(context) {
    const { id } = context.query;
    
    const res = await fetch(`${Url}types`);
    var  types = await res.json();
    var error = false;
    if(res.status!=200){
        error = true ;
   }
    return {itemname:id,types,error}


  }

export default Index; 
