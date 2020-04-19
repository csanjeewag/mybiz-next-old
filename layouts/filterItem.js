import React, { Component } from 'react';
import Layout from './../layouts/MainLayout';
import Link from 'next/link';
import $ from 'jquery';
import {Url,filteritemUrl} from './../constant/main';
import Router from 'next/router';


import Cookie from "js-cookie";

class Index extends Component {

    constructor() {
		super();
		this.state = {
            types:[],
            location:[],
            search:'',
            categery:'',
            subcategery:'',
            district:'',
            town:'',
            upperprice:'',
            lowerprice:''

  }

    }
    
    handlesubmit=()=>{
        var url = `${filteritemUrl}?${this.state.search?'search='+this.state.search:'search='}`+
        `${this.state.categery?'&category='+this.state.categery:''}${this.state.subcategery?'&subcategory='+this.state.subcategery:''}`+
        `${this.state.district?'&district='+this.state.district:''}${this.state.town?'&town='+this.state.town:''}`+
        `${this.state.lowerprice?'&lowerprice='+this.state.lowerprice:''}${this.state.upperprice?'&upperprice='+this.state.upperprice:''}`;
        Router.push(url);
  
    }
        //show signup
    handleChange = evt => {
            
        this.setState({
            [evt.target.name]: evt.target.value,
        });
        
    };

    gettows=(district)=>{

        var id = this.state.location.findIndex(e=>e.district==district);
        var index = id>0?id:0;

       return district.length>2?this.state.location[index].town:[];
    }
    getsubcategory=(categery)=>{

        var id = this.state.types.findIndex(e=>e.type==categery);
        var index = id>0?id:0;

       return categery.length>1?this.state.types[index].subtype:[];
    }

    gettypeandlocation=()=>{
        fetch(`${Url}types`)
        .then(res=>{return res.json()})
        .then(data=>{this.setState({types:data});})
        fetch(`${Url}locations`)
        .then(res=>{return res.json()})
        .then(data=>{this.setState({location:data});})
    }

    componentDidMount(){
        this.gettypeandlocation();
       
        $(document).ready(function() {
            
            function checkMobile() {
                var windowwidth = $(window).width();

                if(windowwidth<990){
                 
                    $(window).scroll(function() {
                     
                        
                      });
                }
                  
               
            }
            checkMobile();
            $(window).resize(checkMobile);
    });
    }
    render() { 
        
          return ( 
            <Layout>
                <div  className=" filter-section">
            <div className="row col-lg-11 col-sm-12 mx-auto" >

            
                <div className="field-wrap  col-lg-3 col-md-3 col-sm-5 col-xs-12">
                <label  className="font1 labelf1">Category</label>
                <select className={'font1 inputf1'} type="text" required  name="categery" value={this.state.categery} onChange={this.handleChange}>
                <option key='1' value="d">all categories</option>
                {this.state.types.map((x,i)=><option key={i} value={x.type}>{x.name}</option>)}                      
                </select>
                <select className={'font1 inputf1'} type="text" required  name="subcategery" value={this.state.subcategery} onChange={this.handleChange}>
                <option key='1' value="d">all subcategories</option>
                {this.getsubcategory(this.state.categery).map((x,i)=><option key={i} value={x.type}>{x.name}</option>)}                      
                </select>
               
                </div>

                <div className="field-wrap  col-lg-2 col-md-2 col-sm-4 col-xs-7">
                <label  className="font1 labelf1">location</label>
                <select className={'font1 inputf1'} type="text" required  name="district" value={this.state.district} onChange={this.handleChange}>
                <option key='1' value="d">all district</option>
                {this.state.location.map((x,i)=><option key={i} value={x.district}>{x.district}</option>)}                      
                </select>
                <select className={'font1 inputf1'} type="text" required  name="town" value={this.state.town} onChange={this.handleChange}>
                <option key='1' value="d">all cities</option>
                {this.gettows(this.state.district).map((x,i)=><option key={i} value={x}>{x}</option>)}                      
                </select>
               
                </div>

                <div className="field-wrap  col-lg-2 col-md-2 col-sm-3 col-xs-5">
                <label  className="font1 labelf1">Price</label>
                <input  className={'font1 inputf1 '} type="number" required  name="upperprice" value={this.state.upperprice} onChange={this.handleChange} placeholder="upper price" />
                <input  className={'font1 inputf1 '} type="number" required  name="lowerprice" value={this.state.lowerprice} onChange={this.handleChange} placeholder="lower price?"/>
                </div>

                <div className="field-wrap  col-lg-5 col-md-5 col-sm-12">
                <label  className="font1 labelf1">Search</label>
                <input  className={'font1 inputf1 '} type="text" required  name="search" value={this.state.search} onChange={this.handleChange} placeholder="what do you find?" />
                <button onClick={this.handlesubmit.bind(this)} className="btn btn-sm btn-submit">search</button>
                </div>
                </div>
                <br></br>
            </div>
           
            <style jsx>
            {`
            .filter-section{
                background:#c2d1e17d;
            }
            .labelf1 {
                position: relative;
                transform: translateY(10px);
                left: 5px;
                color: #01567e;
                transition: all 0.25s ease;
                -webkit-backface-visibility: hidden;
                pointer-events: none;
                font-size: 0.9em;
            }
            .inputf1 {
                font-size: 0.9em;
                display: block;
                width: 100%;
                padding: 5px 5px;
                background: white;
                background-image: none;
                border: none;
                border: 1px solid #01567e;
                color: darkblue;
                border-radius: 0;
                transition: border-color 0.5s ease;
            }
            .inputf1:focus, textarea:focus {
                outline: 0;
                border-color: #023957;
            }
            .btn-submit{
                border-radius: 0;
                background: #01567e;
                color:white; 
                width:100%;
                font-size: 0.9em;
            }
            `}
            </style>
                 </Layout>
           );
      }
    
}



export default Index; 
