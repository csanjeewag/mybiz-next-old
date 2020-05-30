import React, { Component } from 'react';
import Head from 'next/head';
import Layout from './../layouts/MainLayout';
import Footer from './../component/footer';
import {Url,web,WebUrl} from './../constant/main';
import fetch from 'isomorphic-unfetch';
import Cookie from "js-cookie";
import Headers from "./../component/header";

const UserList=(props)=>{



    return(
        <div className="order-table p-t-80">
      
        <table className="table table-striped">
          <thead>
            <tr>
            <th scope="col">Image</th>
              <th scope="col">Email</th>
              <th scope="col">Contact</th>
              <th scope="col">name</th>
              <th scope="col">createDate</th>
              <th scope="col">seller</th>
              <th scope="col">isvalid</th>
              <th scope="col">Notification</th>
        
              
            </tr>
          </thead>
          <tbody className="projects">
        
        {props.users.map((x,i)=>
            <tr key={i}>
             <td> 
                <div className="item-details font6"> 
                <img className="ismobile_disable float-left avatar" src={props.imageUrl} />
               
                </div> 
            </td>
            <th>
                <div className="pointer">
             <p className="fontsizeE-8">{x.email}</p>
             </div></th>
             <td> 
                <div className="item-details font6"> 
                <p className="fontsizeE-8">{x.contact}</p>
                </div> 
            </td>
            <td> 
                <div className="item-details font6"> 
                <p className="fontsizeE-8">{x.name}</p>
                </div> 
            </td>
            <td> 
                <div className="item-details font6"> 
                <p className="fontsizeE-8">{x.createDate}</p>
                    

                </div> 
            </td>
        
            <td> 
                <div className="item-details font6"> 
                    <p className="topicColor">{x.isseller?'seller':'user'} </p>
                </div> 
            </td>

                 <td> 
                <div className="item-details font6"> 
                    <p className="topicColor">{x.isvalid?'valid':'removed'} </p>
                </div> 
            </td>

              <td> 
                <div className="item-details font6"> 
                <button className="btn btn-sm btn-danger" onClick={props.sendmsg.bind(this,x._id,x.name,x.imageUrl)}>send msg</button>
       
                </div> 
            </td>



            </tr>
            )}
        
          </tbody>
        </table>
        <style jsx>
        {`
        
        .avatar {
            vertical-align: middle;
            width: 30px;
            height: 30px;
            border-radius: 50%;
          }
        .order-table{
          overflow : auto;
        }
        .item-details p{
          margin-top: 0;
          margin-bottom: 0;
        }
        .item-details img{
          cursor: pointer;
        }
        `}
        </style>
        </div>
        
    )
}


class Index extends Component {


    sendmsg=(id,name,imageUrl)=>{
        var msg = prompt("enter msg","Hi, ");
        var link = prompt("enter sub link (onshop.lk)","");
        if(msg&&msg.length>20&&Cookie.getJSON('user')){
            var notification = {
                type: 'admin',
                content:msg,
                name:'admin of onshop.lk',
                imageUrl : imageUrl,
                userId : Cookie.getJSON('user')._id,
                link : link,
                senderId: id
            }
    
            this.sendnotification(notification)
        }else{
    
            swal("sorry", "did not send", "warning");
        }
    

    }

    sendnotification=(notification)=>{
        $('.load').show();
        $('img').attr("disabled", true);
        const data = new FormData();

        data.append('jsonbody', JSON.stringify(notification));
       data.append('user', JSON.stringify(Cookie.getJSON('user')));

        fetch('/api/createnotification',{
            method: 'POST',
            headers: {
            },
            body:data
        
            }
        )
        .then(response => { return response.json(); } )
        .then(data => {$('btn').attr("disabled", false);if(data.status==200){swal("Good job!", "You clicked the button!", "success");} $('.load').hide();})
        .catch(error => console.log(error))
    }


    
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

         <Headers />

    <UserList users ={this.props.users} sendmsg={this.sendmsg} />
     <Footer></Footer>
  
                  </Layout>
           );
      }
    
}

Index.getInitialProps = async function(context) {
    const { id } = context.query;
    
    const res = await fetch(`${Url}users`);
    var  users = await res.json();
    var error = false;
    if(res.status!=200){
        error = true ;
   }
    return {itemname:id,users,error}


  }

export default Index; 
