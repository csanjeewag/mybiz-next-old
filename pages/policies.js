import React, { Component } from 'react';
import Head from 'next/head';
import Layout from './../layouts/MainLayout';
import Header from './../component/header';
import Footer from './../component/footer';
import {Url,web,WebUrl,websiteUrl,policiesUrl} from './../constant/main';
import {policies} from './../constant/page';

class Index extends Component {



    
    render() { 
        
        const sidenavconst = {topic : 'Categeries',topiclink:'All Categeriess',sidenavlink:'',visible:false };
          return ( 
           <Layout>
                   <Head>
                <title> {web.wetopic}</title>
                <meta property="og:url"           content={websiteUrl+policiesUrl} />
                <meta property="og:type"          content="article" />
                <meta property="og:title"         content={web.wetopic} />
                <meta property="og:description"   content={web.webContent} />
                <meta property="og:image"         content={web.webImage}/>
                
                <meta name="keywords" content={web.webKeyword}></meta>
                <meta name="description" content={web.webContent}></meta>
                </Head>
        <Header />
        <div className="ismobile_disable p-t-80"></div>
        <div className="container">
        <br/>
        <h3>{policies.topic}</h3>
        <p>{policies.para1}</p>
        <p>{policies.para2}</p>
        {policies.condition.map((x,i)=>
        <p key={i}>- {x}</p>
        )}

        <h6> <img src="https://img.icons8.com/material/25/00008b/hand-right.png"/> {policies.AccurateInformation.t1}</h6>
        <p>{policies.AccurateInformation.p1}</p>

         <h6><img src="https://img.icons8.com/material/25/00008b/hand-right.png"/> {policies.Actingfairly.t1}</h6>
        <p>{policies.Actingfairly.p1}</p>
        <p>{policies.Actingfairly.p2}</p>

         <h6><img src="https://img.icons8.com/material/25/00008b/hand-right.png"/> {policies.Communications.t1}</h6>
        <p>{policies.Communications.p1}</p>
        <p>{policies.Communications.p2}</p>

        <h6><img src="https://img.icons8.com/material/25/00008b/hand-right.png"/> {policies.Circumventing .t1}</h6>
        <p>{policies.Circumventing.p1}</p>

       <h5><img src="https://img.icons8.com/ios-filled/25/00008b/acupuncture-point.png"/> {policies.Ratings.t1}</h5>
        <p>{policies.Ratings.p1}</p>
        <p>{policies.Ratings.p2}</p>
        <p>{policies.Ratings.p3}</p>

        <h5 className="violate"><img src="https://img.icons8.com/ios-filled/25/ff3434/acupuncture-point.png"/> {policies.violates.t1}</h5>
        <p>{policies.violates.p1}</p>

    <style jsx>
    {`
    h3{
        margin:1em 1em 1em 0;
        color:darkblue;
        font-family: 'Titillium Web', sans-serif;
    }
    h6{
        margin:0.5em 0.5em 0.5em 0;
        color:darkblue;
        font-family: 'Titillium Web', sans-serif;
    }
    h5{
        margin:0.5em 0.5em 0.5em 0;
        color:darkblue;
        font-family: 'Titillium Web', sans-serif;
    }
    p{
        padding:0px;
        color:#38383a;
        margin:0;
        font-family: 'Acme', sans-serif;
        font-size:0.9em;
    }
    .violate{
        color:#ff3434;
    }

    `}
    </style>
    <br/>
        </div>

     <Footer></Footer>

  
                  </Layout>
           );
      }
    
}



export default Index; 
