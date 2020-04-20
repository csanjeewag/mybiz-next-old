import React, { Component } from 'react';
import Link from 'next/link';
import Layout from './../layouts/MainLayout';
import SubNavBar from './../layouts/SubNavbar';
import Footer from './../components/Footer';
import {WebUrl,web,createshopUrl} from './../constant/main';
import {about} from './../constant/page';

const About = ()=>{
  return(
    <div className="aboutus-section">
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="aboutus">
                        <h2 className="aboutus-title">{about.aboutUs}</h2>
                        <p className="aboutus-text">{about.p1}</p>
                        <p className="aboutus-text">{about.p2}</p>
                       
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="aboutus-banner">
                        <img src="./about2.png" alt=""/>
                    </div>
                </div>
                <div className="col-md-5 col-sm-6 col-xs-12">
                    <div className="feature">
                        <div className="feature-box">
                            <div className="clearfix">
                                <div className="iconset">
                                <img src="https://img.icons8.com/color/50/000000/star.png"/>
                                </div>
                                <div className="feature-content">
                                    <h4>{about.topic1}</h4>
                                    <p>{about.content1}</p>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="feature-box">
                            <div className="clearfix">
                                <div className="iconset">
                                    <img src="https://img.icons8.com/color/50/000000/star.png"/>
                                </div>
                                <div className="feature-content">
                                    <h4>{about.topic2}</h4>
                                    <p>{about.content2}</p></div>
                              </div>
                        </div>
                        <div className="feature-box">
                            <div className="clearfix">
                                <div className="iconset">
                                   <img src="https://img.icons8.com/color/50/000000/star.png"/>
                                </div>
                                <div className="feature-content">
                                    <h4>{about.topic3}</h4>
                                    <p>{about.content3}</p>
                                    <Link href={about.link3}><a className="aboutus-more">{about.btn3}</a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`
        body {
          font-family: 'Roboto';font-size: 1.1em;
      }
      
      .aboutus-section {
          padding: 90px 0;
      }
      .aboutus-title {
          font-size: 2em;
          letter-spacing: 0;
          line-height: 32px;
          margin: 0 0 39px;
          padding: 0 0 11px;
          position: relative;
          text-transform: uppercase;
          color: #000;
      }
      .aboutus-title::after {
          background: #fdb801 none repeat scroll 0 0;
          bottom: 0;
          content: "";
          height: 2px;
          left: 0;
          position: absolute;
          width: 54px;
      }
      .aboutus-text {
          color: #606060;
          font-size: 1em;
          line-height: 22px;
          margin: 0 0 35px;
      }
      
      a:hover, a:active {
          color: #ffb901;
          text-decoration: none;
          outline: 0;
      }
      .aboutus-more {
          border: 1px solid darkblue;
          border-radius: 25px;
          color: darkblue;
          display: inline-block;
          font-size: 1em;
          font-weight: 700;
          letter-spacing: 0;
          padding: 7px 20px;
          text-transform: uppercase;
      }
      .feature .feature-box .iconset {
          background: linear-gradient(to left, rgba(255,255,255,0.8),  rgba(255,255,255,0.2) );
          float: left;
          position: relative;
          width: 18%;
      }
      .feature .feature-box .iconset::after {
          background: #fdb801 none repeat scroll 0 0;
          content: "";
          height: 150%;
          left: 43%;
          position: absolute;
          top: 100%;
          width: 1px;
      }
      
      .feature .feature-box .feature-content h4 {
          color: #0f0f0f;
          font-size: 1.1em;
          letter-spacing: 0;
          line-height: 22px;
          margin: 0 0 5px;
      }
      
      
      .feature .feature-box .feature-content {
          float: left;
          padding-left: 28px;
          width: 78%;
      }
      .feature .feature-box .feature-content h4 {
          color: #0f0f0f;
          font-size: 1.1em;
          letter-spacing: 0;
          line-height: 22px;
          margin: 0 0 5px;
      }
      .feature .feature-box .feature-content p {
          color: #606060;
          font-size: 1em;
          line-height: 22px;
      }
      .icon {
          color : #f4b841;
          padding:0px;
          font-size:2em;
          border: 1px solid #fdb801;
          border-radius: 100px;
          color: #fdb801;
          font-size: 1.5em;
          height: 70px;
          line-height: 70px;
          text-align: center;
          width: 70px;
      }
      }
        `}</style>
    </div>
  )
}

class Index extends Component {
  
    render() { 
        
      const sidenavconst = {topic : 'Categeries',topiclink:'All Categeriess',sidenavlink:[], visible:false };
 
      return ( 
        <Layout>

                <Head>
                <title> {web.wetopic}</title>
                <meta property="og:url"           content={WebUrl} />
                <meta property="og:type"          content="article" />
                <meta property="og:title"         content={web.wetopic} />
                <meta property="og:description"   content={web.webContent} />
                <meta property="og:image"         content={web.webImage}/>
                
                <meta name="keywords" content={web.webKeyword}></meta>
                <meta name="description" content={web.webContent}></meta>
                </Head>

         <SubNavBar sidenavconst={sidenavconst}/> 
      <About/>

     <Footer></Footer>
  
                  </Layout>
           );
      }
    
}


export default Index; 
