import React, { Component } from 'react';
import Layout from './../layouts/MainLayout';
import Menu2 from './../components/menu2';
import NavBar from './../layouts/SubNavbar';

class Index extends Component {



    
    render() { 
        
        const catageries = [
            {id:1 , topic: 'topic1', subtopic:'subtopic1',imageUrl:'http://loremflickr.com/320/150?random=1'   ,discount:5,date:'2020/4/5',price:150,topicImageUrl:'https://img.icons8.com/ios/50/000000/contract-job.png',content:'In publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience. Content is "something that is to be expressed through some medium, as speech, writing or any of various arts'},
            {id:2 , topic: 'topic2', subtopic:'subtopic1',imageUrl:'http://loremflickr.com/320/150?random=2'   ,discount:5,date:'2020/4/5',price:150,topicImageUrl:'https://img.icons8.com/ios/50/000000/contract-job.png',content:'In publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience. Content is "something that is to be expressed through some medium, as speech, writing or any of various arts'},
            {id:3 , topic: 'topic3', subtopic:'subtopic1',imageUrl:'http://loremflickr.com/320/150?random=3'   ,discount:5,date:'2020/4/5',price:150,topicImageUrl:'https://img.icons8.com/ios/50/000000/contract-job.png',content:'In publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience. Content is "something that is to be expressed through some medium, as speech, writing or any of various arts'},
            {id:4 , topic: 'topic4', subtopic:'subtopic1',imageUrl:'http://loremflickr.com/320/150?random=4'   ,discount:5,date:'2020/4/5',price:150,topicImageUrl:'https://img.icons8.com/ios/50/000000/contract-job.png',content:'In publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience. Content is "something that is to be expressed through some medium, as speech, writing or any of various arts'},
            {id:5 , topic: 'topic5', subtopic:'subtopic1',imageUrl:'http://loremflickr.com/320/150?random=5'   ,discount:5,date:'2020/4/5',price:150,topicImageUrl:'https://img.icons8.com/ios/50/000000/contract-job.png',content:'In publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience. Content is "something that is to be expressed through some medium, as speech, writing or any of various arts'},
            {id:6 , topic: 'topic6', subtopic:'subtopic1',imageUrl:'http://loremflickr.com/320/150?random=6'   ,discount:5,date:'2020/4/5',price:150,topicImageUrl:'https://img.icons8.com/ios/50/000000/contract-job.png',content:'In publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience. Content is "something that is to be expressed through some medium, as speech, writing or any of various arts'},
            {id:7 , topic: 'topic7', subtopic:'subtopic1',imageUrl:'http://loremflickr.com/320/150?random=7'   ,discount:5,date:'2020/4/5',price:150,topicImageUrl:'https://img.icons8.com/ios/50/000000/contract-job.png',content:'In publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience. Content is "something that is to be expressed through some medium, as speech, writing or any of various arts'},
            {id:8 , topic: 'topic8', subtopic:'subtopic1',imageUrl:'http://loremflickr.com/320/150?random=8'   ,discount:5,date:'2020/4/5',price:150,topicImageUrl:'https://img.icons8.com/ios/50/000000/contract-job.png',content:'In publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience. Content is "something that is to be expressed through some medium, as speech, writing or any of various arts'},
            {id:9 , topic: 'topic9', subtopic:'subtopic1',imageUrl:'http://loremflickr.com/320/150?random=9'   ,discount:5,date:'2020/4/5',price:150,topicImageUrl:'https://img.icons8.com/ios/50/000000/contract-job.png',content:'In publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience. Content is "something that is to be expressed through some medium, as speech, writing or any of various arts'},
            {id:10 , topic: 'topic10', subtopic:'subtopic1',imageUrl:'http://loremflickr.com/320/150?random=10',discount:5,date:'2020/4/5',price:150,topicImageUrl:'https://img.icons8.com/ios/50/000000/contract-job.png',content:'In publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience. Content is "something that is to be expressed through some medium, as speech, writing or any of various arts'},
            {id:11 , topic: 'topic11', subtopic:'subtopic1',imageUrl:'http://loremflickr.com/320/150?random=11',discount:5,date:'2020/4/5',price:150,topicImageUrl:'https://img.icons8.com/ios/50/000000/contract-job.png',content:'In publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience. Content is "something that is to be expressed through some medium, as speech, writing or any of various arts'}
            
        ]
          return ( 
            <Layout>
               <NavBar></NavBar>
                <Menu2 catageries={catageries} topic="Catageries"></Menu2>
                   </Layout>
           );
      }
    
}

export default Index; 
