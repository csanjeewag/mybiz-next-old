import React, { Component } from 'react';
import Router from 'next/router';
import {ImageUrl,myshopmUrl,websiteUrl,shopmUrl} from '../constant/main'
import Link from 'next/link';

class Index extends Component {

    loadview(name){
        Router.push(myshopmUrl+name)
    }

    
    render() { 
        
        
          return ( 
            <div>
                
                <div className="col-lg-11 col-sm-12 mx-auto">
                <div>
                    <h2 className="stext-104  subtopicColor menu2-topic fontsizeE1-5">{this.props.topic}</h2>
                    
                </div>
                <div className="menu2 row projects">

                {this.props.allshops.map((c,i)=>
				<div key={i} className={"col-sm-6 col-md-4 col-lg-3 p-b-35 "+c.categery}>
		
				<div className="block2">
					<div className="block2-pic hov-img0">
					<Link key={i} href={myshopmUrl+c.urlname+'?ide='+c._id}>
					<img className="card-img-top pointer lazyload" src={ImageUrl+c.images[0]} height="200px" />
					</Link>
						<a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1" onClick={this.loadview.bind(this,c.urlname)}>
                        shop items
						</a>
					</div>

					<div className="block2-txt flex-w flex-t p-t-14">
						<div className="block2-txt-child1 flex-col-l ">
                            <a style={{color:'orange'}} className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-1">
							{c.shopName} 
							</a>
							<a className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-1">
							{c.categery} 
							</a>

							<span className="stext-105 cl3">
                            <p className="stext-104 m-content-right">{c.district}/{c.town}</p>
							</span>
						</div>

                        <div className="block2-txt-child2 flex-r">
                        <iframe src={`https://www.facebook.com/plugins/share_button.php?href=${websiteUrl+myshopmUrl+c.urlname}&layout=button_count&size=large&appId=639750616597961&width=96&height=20`} width="96" height="30"  style={{border:'none',overflow:'hidden'}} scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>		
						</div>
                        
					</div>
				</div>

                
			</div>
				)}
                    
                </div>
                </div>

               </div>
           );
      }
    
}

export default Index; 
