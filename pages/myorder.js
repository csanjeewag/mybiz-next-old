import React, { Component } from 'react';
import Layout from '../layouts/MainLayout';
import Cartitem from '../components/Cartitem';
import SubNavBar from '../layouts/SubNavbar';
import Footer from '../components/Footer';
import {Url} from './../constant/main';



class Index extends Component {

   

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
          
            const sidenavconst = {topic : 'Categeries',topiclink:'All Categeriess',sidenavlink:sidenavlink, visible:false };
        //////////////
          return ( 
            <Layout>
                 <SubNavBar sidenavconst={sidenavconst}/> 
                

                <Cartitem  topic="My favorites"></Cartitem>
            <Footer/>
                   </Layout>
           );
      }
    
}




export default Index; 
