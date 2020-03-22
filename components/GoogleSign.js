import React, { Component } from 'react';
import Head from 'next/head';
import Layout from '../layouts/MainLayout';
import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

class Index extends Component {

    responseGoogle = (response) => {
        console.log(response);
      }

    responseFacebook = (response) => {
        console.log(response);
      }
      componentClicked = (re) => {
          console.log('r= '+re)
      }

    render(){

        return(
            <Layout>
            <Head>
                    <title>google </title>
                    <meta name="google-signin-scope" content="profile email" />
                    <meta name="google-signin-client_id" content="511880674901-gfn6v2n1ej65rrlnnv29odgbjkpkhpcj.apps.googleusercontent.com"></meta>
                    <script src="https://apis.google.com/js/platform.js" async defer></script>
            </Head>
            <GoogleLogin
             clientId="511880674901-gfn6v2n1ej65rrlnnv29odgbjkpkhpcj.apps.googleusercontent.com"
             buttonText="Sign In"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={'single_host_origin'}
            cssClass="btn btn-outline-primary"
            isSignedIn={false}
            />
             <FacebookLogin
            appId="639750616597961"
            autoLoad={true}
            fields="name,email,picture"
            onClick={this.componentClicked}
            callback={this.responseFacebook} />
     
            <img src="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2828808290560434&height=50&width=50&ext=1587395689&hash=AeS-p4-QSJ3AJVvl"/>
            </Layout>
        )
    }
}

export default Index;