import React, { Component } from 'react';
import Head from 'next/head';
import Layout from './../layouts/MainLayout';
import Allcatagery from './../components/Allcatagery';
import NavBar from './../layouts/Navbar';
import FilterItem from './../layouts/filterItem';
import {Url,web,WebUrl} from './../constant/main';
import fetch from 'isomorphic-unfetch';
/** */
import Header from './../component/header';
import Footer from './../component/footer';

const Form=()=>{
    return(
        <div>
            {/**  Content page */}
	<section className="bg0 p-t-104 p-b-116">
		<div className="container">
			<div className="flex-w flex-tr" >
				<div className="bor10 p-lr-70 p-t-55 p-b-70 p-lr-15-lg w-100">
					<form>
						<h4 className="mtext-105 cl2 txt-center p-b-30">
							Send Us A Message
						</h4>
                    <div className="row">
                        <div className="col-lg-6">
                        <label className="stext-111 pl-2">Your email</label>
						<div className="bor8 m-b-20 how-pos4-parent">
							<input className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" type="text" name="email" placeholder="Your Email Address"/>
							<img className="how-pos4 pointer-none" src="images/icons/icon-email.png" alt="ICON"/>
						</div>
                        </div>

                        <div className="col-lg-6">
                        <label className="stext-111 pl-2">Your email</label>
						<div className="bor8 m-b-20 how-pos4-parent">
							<input className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" type="text" name="email" placeholder="Your Email Address"/>
							<img className="how-pos4 pointer-none" src="images/icons/icon-email.png" alt="ICON"/>
						</div>
                        </div>

                        <div className="col-lg-12">
                        <label className="stext-111 pl-2">massage</label>
						<div className="bor8 m-b-30">
							<textarea className="stext-111 cl2 plh3 size-120 p-lr-28 p-tb-25" name="msg" placeholder="How Can We Help?"></textarea>
						</div>
                        </div>

                    </div>
						<button className="flex-c-m stext-101 cl0 size-121 bg3 bor1 hov-btn3 p-lr-15 trans-04 pointer">
							Submit
						</button>
					</form>
				</div>

			</div>
		</div>
	</section>	
        </div>
    )
}

class Index extends Component {

    
    render() { 
        

          return ( 
           <Layout>
                   <Head>
                <title> {web.wetopic}</title>
                <meta property="og:url"           content={WebUrl} />
                <meta property="og:type"          content={web.webtypeW} />
                <meta property="og:title"         content={web.wetopic} />
                <meta property="og:description"   content={web.webContent} />
                <meta property="og:image"         content={web.webImage}/>
                
                <meta name="keywords" content={web.webKeyword}></meta>
                <meta name="description" content={web.webContent}></meta>
                </Head>
        <Header/>
        <Form/>
        
        <Footer/>


  
                  </Layout>
           );
      }
    
}


export default Index; 
