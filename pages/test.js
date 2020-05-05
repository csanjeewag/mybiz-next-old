import React, { Component } from 'react';
import Router from 'next/router';
import Layout from './../layouts/MainLayout';
import {Url} from './../constant/main';
import $ from 'jquery';
import FacebookLogin from 'react-facebook-login';
class Index extends Component {

    constructor(){
        super();
        this.state={
 
        }
    }



    componentDidMount(){

    }

    
    render() { 
        const responseFacebook = (response) => {
            console.log(response);
          }

          return ( 
           <Layout>
             <FacebookLogin
    appId="639750616597961"
    autoLoad={true}
    fields="name,email,picture"
    callback={responseFacebook}
    cssClass="my-facebook-button-class"
    icon="fa-facebook"
  />

         
                </Layout>
           );
      }
    
}


export default Index; 
