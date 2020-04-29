import React, { Component } from 'react';
import Head from 'next/head';
import Layout from './../layouts/MainLayout';
import SubNavBar from './../layouts/SubNavbar';
import Footer from './../components/Footer';
import {Url,web,WebUrl} from './../constant/main';
import {help} from './../constant/page';

class Index extends Component {



    
    render() { 
        
        const sidenavconst = {topic : 'Categeries',topiclink:'All Categeriess',sidenavlink:'',visible:false };
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
        <SubNavBar ref="navbar" sidenavconst={sidenavconst} />

        <div className="container">
        <br/>
        <h3>{help.topic}</h3>
        <p className="p">{help.para1}</p>
        <p className="p">{help.para2}</p>

        <h5>{help.customer}</h5>
        {help.Customerproblem.map((x,i)=>
        <div key={i}>
        <p  className="font6 fontsizeE1 question"><img src="https://img.icons8.com/cute-clipart/30/000000/faq.png" /> &nbsp; {x.q}</p>
         <p  className="font3 fontsizeE-9 answer"><img src="https://img.icons8.com/windows/25/000000/stack-exchange-answer.png"/> &nbsp;{x.a}</p>
         <hr/>
        </div>
        
        )}

        <h5>{help.seller}</h5>
        {help.Sellerproblem.map((x,i)=>
        <div key={i}>
        <p  className="font6 fontsizeE1 question"><img src="https://img.icons8.com/cute-clipart/30/000000/faq.png" /> &nbsp; {x.q}</p>
         <p  className="font3 fontsizeE-9 answer"><img src="https://img.icons8.com/windows/25/000000/stack-exchange-answer.png"/> &nbsp;{x.a}</p>
         <hr/>
        </div>
        
        )}




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
    .p{
        padding:0px;
        color:#38383a;
        margin:0;
        font-family: 'Acme', sans-serif;
        font-size:0.9em;
    }
    p{
        padding:0px;
        color:#38383a;
        margin:0;
    }
    .question{
        padding:0px;
        marigin:0px;
    }
    .answer:{
        padding:0px;
        marigin:0 0 10px 0;
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
