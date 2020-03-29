import React, { Component } from 'react';
import Layout from './../layouts/MainLayout';
import Profile from './../components/CompanyProfile';
import SubNavBar from './../layouts/SubNavbar';
import Slide from  './../components/Slide1';
import Footer from './../components/Footer';
import fetch from 'isomorphic-unfetch';
class Index extends Component {

    constructor() {
        super();
        this.state = {
            firstName: '',
            selectedFile : null
        };
    }
    handleChange = evt => {
    // This triggers everytime the input is changed
        this.setState({
            [evt.target.name]: evt.target.value,
        });
    };
 
    handleSubmit = evt => {
        evt.preventDefault();
       
        const datas = new FormData();
        var files =  [this.state.selectedFile,this.state.selectedFile]
    datas.append('jsonbody', JSON.stringify(this.state));
      datas.append('file', files);
      datas.append('file2', this.state.selectedFile);
        fetch('/api/createshop',{
            method: 'POST',
            headers: {
            },
            body:datas
        
            }
        )
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        });
   /*     evt.preventDefault();
        //making a post request with the fetch API
        
        const datas = new FormData();
        datas.append('file', this.state.selectedFile);
        datas.append('name', JSON.stringify({firstName:this.state.firstName,lastname:'sanjeewa'}));
      //making a post request with the fetch API
       fetch('/api/createuser', {
        method: 'POST',
        headers: {
              //'Accept': 'application/json',
             // 'Content-Type': 'application/json',
             //'Content-Type': 'multipart/form-data'
        }, 
        body:datas,

        }
        
        )
        .then(response => {response.json(); console.log(response) ;})
        .then(data => {console.log(data);})
        .catch(error => console.log(error))
*/

    };

    onChangeHandler=event=>{


        console.log(event.target.files[0])
        this.setState({
          selectedFile: event.target.files[0],

        })
        
    
    }

    
      

    showsidebar(){
        this.refs.child.showSidebar();
      }
    
    render() { 
        
        const items = [
            {id:1 , topic: 'topic1', subtopic:'subtopic1',imageUrl:'http://loremflickr.com/320/150?random=1'   ,discount:5,date:'2020/4/5',price:150,topicImageUrl:'https://img.icons8.com/ios/50/000000/contract-job.png',content:'In publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience. Content is "something that is to be expressed through some medium, as speech, writing or any of various arts',qty:0,seller:'idea mart'},
            {id:2 , topic: 'topic2', subtopic:'subtopic1',imageUrl:'http://loremflickr.com/320/150?random=2'   ,discount:5,date:'2020/4/5',price:150,topicImageUrl:'https://img.icons8.com/ios/50/000000/contract-job.png',content:'In publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience. Content is "something that is to be expressed through some medium, as speech, writing or any of various arts',qty:0,seller:'idea mart'},
            {id:3 , topic: 'topic3', subtopic:'subtopic1',imageUrl:'http://loremflickr.com/320/150?random=3'   ,discount:5,date:'2020/4/5',price:150,topicImageUrl:'https://img.icons8.com/ios/50/000000/contract-job.png',content:'In publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience. Content is "something that is to be expressed through some medium, as speech, writing or any of various arts',qty:0,seller:'idea mart'},
            {id:4 , topic: 'topic4', subtopic:'subtopic1',imageUrl:'http://loremflickr.com/320/150?random=4'   ,discount:5,date:'2020/4/5',price:150,topicImageUrl:'https://img.icons8.com/ios/50/000000/contract-job.png',content:'In publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience. Content is "something that is to be expressed through some medium, as speech, writing or any of various arts',qty:0,seller:'idea mart'},
            {id:5 , topic: 'topic5', subtopic:'subtopic1',imageUrl:'http://loremflickr.com/320/150?random=5'   ,discount:5,date:'2020/4/5',price:150,topicImageUrl:'https://img.icons8.com/ios/50/000000/contract-job.png',content:'In publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience. Content is "something that is to be expressed through some medium, as speech, writing or any of various arts',qty:0,seller:'idea mart'},
         
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
                 <br></br>
                <form onSubmit={this.handleSubmit} >
                <input 
                    name="firstName" 
                    type="text" 
                    id="name" 
                    value={this.state.firstName} 
                    onChange={this.handleChange}>
                </input>
                <input 
                    name="file" 
                    type="file" 
                    id="name" 
                    value={this.state.file} 
                    onChange={this.onChangeHandler}>
                </input>
                <input type="submit"/>
            </form>
               
            <Footer/>
                   </Layout>
           );
      }
    
}

export default Index; 
