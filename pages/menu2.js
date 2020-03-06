import React, { Component } from 'react';
import Layout from './../layouts/MainLayout';
import Menu1 from './../components/menu1';
import NavBar from './../layouts/Navbar';
import TopSlide from '../components/Topslide';
import Footer from './../components/Footer';


class Index extends Component {



    
    render() { 
        
        const Catageries = [
            {id:1 , topic: 'topic1', subtopic:'subtopic1',imageUrl:'http://loremflickr.com/320/150?random=1'},
            {id:2 , topic: 'topic2', subtopic:'subtopic1',imageUrl:'http://loremflickr.com/320/150?random=2'},
            {id:3 , topic: 'topic3', subtopic:'subtopic1',imageUrl:'http://loremflickr.com/320/150?random=3'},
            {id:4 , topic: 'topic4', subtopic:'subtopic1',imageUrl:'http://loremflickr.com/320/150?random=4'},
            {id:5 , topic: 'topic5', subtopic:'subtopic1',imageUrl:'http://loremflickr.com/320/150?random=5'},
            {id:6 , topic: 'topic6', subtopic:'subtopic1',imageUrl:'http://loremflickr.com/320/150?random=6'},
            {id:7 , topic: 'topic7', subtopic:'subtopic1',imageUrl:'http://loremflickr.com/320/150?random=7'},
            {id:8 , topic: 'topic8', subtopic:'subtopic1',imageUrl:'http://loremflickr.com/320/150?random=8'},
            {id:9 , topic: 'topic9', subtopic:'subtopic1',imageUrl:'http://loremflickr.com/320/150?random=9'},
            {id:10 , topic: 'topic10', subtopic:'subtopic1',imageUrl:'http://loremflickr.com/320/150?random=10'},
            {id:11 , topic: 'topic11', subtopic:'subtopic1',imageUrl:'http://loremflickr.com/320/150?random=11'}
            
        ]
          return ( 
            <Layout>
         <NavBar></NavBar>
        <TopSlide></TopSlide>
        
              <Menu1 catageries={Catageries} topic="Categories" ></Menu1>
            <Footer></Footer>
  
                  </Layout>
           );
      }
    
}

export default Index; 
