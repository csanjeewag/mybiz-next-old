import React, { Component, lazy, Suspense } from 'react';

import Layout from './../layouts/MainLayout'

const AvatarComponent = lazy(() => import('./../component/loading'));


class Index extends Component {
	

    constructor(props) {
        super(props);
    
        this.state = {
          details: false
        }
      }
      
      showDetails() {
        this.setState({ details: true });
      }
      
      renderLoader = () => <div className="loader"></div>;
      

	responsefacebook = (res) => {}
   
    render() { 

        const { details } = this.state;
        
          return ( 
            <Layout id="header">
				<h1>jfhn</h1>
		<div className="fb-share-button" data-href="https://onshop.lk/shop/Gift-Handmade-items-Roo-Creation--in-Kelaniya" data-layout="button_count" data-size="small">
	</div>




<div className="fb-share-button" data-href="https://onshop.lk" data-layout="button_count" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https://onshop.lk&layout=button_count" className="fb-xfbml-parse-ignore">Share</a></div>
<h1>gk</h1>
<iframe src="https://www.facebook.com/plugins/share_button.php?href=https://onshop.lk/shop/Gift-Handmade-items-Roo-Creation--in-Kelaniya" width="96" height="20" style={{border:'none',overflow:'hidden'}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
<iframe src="https://www.facebook.com/plugins/share_button.php?href=https://onshop.lk&layout=button_count&size=small&appId=639750616597961&width=96&height=20" width="96" height="20"  style={{border:'none',overflow:'hidden'}} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
          

<div className="App">
        { !details && <button onClick={() => this.showDetails()}>CLICK ME</button> }
        { details &&   
          <Suspense fallback={this.renderLoader()}>
            <AvatarComponent />
          </Suspense> 
        }
         
      </div>
            </Layout>
           );
      }
    
}

export default Index; 


