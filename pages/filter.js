import React, { Component } from 'react';
import Layout from './../layouts/MainLayout';
import Allcatagery from './../components/Allcatagery';
import SubNavBar from './../layouts/SubNavbar';
import TopSlide from '../components/Topslide';
import FilterItem from './../layouts/filterItem';
import Footer from './../components/Footer';
import Categeryitem from '../components/Categeryitem';
import {Url} from './../constant/main';
import fetch from 'isomorphic-unfetch';


class Index extends Component {
    constructor() {
		super();
		this.state = {
            items:[]

  }
	}



    componentDidMount(){
        this.setState({items:this.props.items})
    }
    
    render() { 
        const sidenavconst = {topic : 'Categeries',topiclink:'All Categeriess',sidenavlink:'',visible:false };
    

          return ( 
           <Layout>
                <SubNavBar sidenavconst={sidenavconst}/>
       
    
    <Categeryitem  catageries={this.props.items} topic={'your choice items'}></Categeryitem>
     <Footer></Footer>
  
                  </Layout>
           );
      }
    
}

Index.getInitialProps = async function(context) {
    const { category,subcategory,upperprice,lowerprice,district,town,search } = context.query;

    var url = ` ${Url}itemfilter?${search?'search='+search:'search='}`+
                `${category?'&category='+category:''}${subcategory?'&subcategory='+subcategory:''}`+
                `${district?'&district='+district:''}${town?'&town='+town:''}`+
                `${lowerprice?'&lowerprice='+lowerprice:''}${upperprice?'&upperprice='+upperprice:''}`;

    const res = await fetch(url);
    var  items = await res.json();
    var error = false;
    if(res.status!=200){
        error = true ;
   }
    return {items,error}


  }

export default Index; 
