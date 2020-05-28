import React, { Component } from 'react';
import Link from 'next/link';
import Cookie from "js-cookie";
import Router from 'next/router';
import Cart from './../component/cart';
import Notfications from './../component/notification';
import $ from 'jquery';
import SignUp from './../component/signup';
import Loading from './../component/loading';
import Layout from './../layouts/MainLayout'


class Index extends Component {
	

    componentDidMount(){



    }

	responsefacebook = (res) => {}
   
    render() { 
        
          return ( 
            <Layout id="header">
				<h1>jfhn</h1>
		<div className="fb-share-button" data-href="https://onshop.lk/shop/Gift-Handmade-items-Roo-Creation--in-Kelaniya" data-layout="button_count" data-size="small">
	</div>




<div className="fb-share-button" data-href="https://onshop.lk" data-layout="button_count" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">Share</a></div>
<script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v7.0&appId=639750616597961&autoLogAppEvents=1"></script>
<script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v7.0&appId=639750616597961&autoLogAppEvents=1"></script>

            </Layout>
           );
      }
    
}

export default Index; 


