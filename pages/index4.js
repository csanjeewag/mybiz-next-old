import React, { Component } from 'react';
import Layout from './../layouts/MainLayout';
import Profile from './../components/CompanyProfile';
import SubNavBar from './../layouts/SubNavbar';
import Footer from './../components/Footer';
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
                <Profile shop={this.props.shop} catageries={items} topic="My Shops"></Profile> 
            <Footer/>
                   </Layout>
           );
      }
    
}
 
Index.getInitialProps = async function(context) {
    const { id } = context.query;
    const res = await fetch(`http://localhost:8000/api/shop/idea-mart`)
    const shop = await res.json();
    console.log(shop)
  
    return { shop }
  }

  export default Index;

