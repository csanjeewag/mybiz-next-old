import React, { Component } from 'react';
import Router from 'next/router';
import Layout from './../layouts/MainLayout';
import {Url} from './../constant/main';
import $ from 'jquery';
class Index extends Component {

    constructor(){
        super();
        this.state={
            name:'sanjeewa',
            selecttype:'',
            types:[],
            location:[]
        }
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



    }
    handleHover=(id)=>{
        Router.push('/?signIn=true')
        this.setState({
            selecttype:id
        })
        $('.sub-list').slideUp(100)
        $('#sublist-'+id).slideDown(100) 
    }
    handleHover_list=(name)=>{
        $('.'+name).slideDown(100) ;
    }
    handleHoverout_list=(name)=>{
        $('.'+name).slideUp(100) ;
    }

    
    render() { 
        

          return ( 
           <Layout>
               <button onMouseEnter={this.handleHover_list.bind(this,'category-hover')} >All</button>
             
                {/***category list */}
                <div className="category-hover" onMouseLeave={this.handleHoverout_list.bind(this,'category-hover')}>
               <div className="d-flex flex-row ">
               <div className="drop">
                {this.state.types.map((x,i)=>
                  <li key={i}   className={this.state.selecttype==x.type?'font1 sublist-item':'font1 list-item'} onMouseEnter={this.handleHover.bind(this,x.type)} id={x.type}>{x.name} {this.state.selecttype==x.type?<i className="fa fa-angle-double-right float-right" aria-hidden="true"></i>:<i className="fa fa-angle-double-down float-right" aria-hidden="true"></i>} </li>  
                    )}
                </div>
                <div >
                {this.state.types.map((x,i)=>
                <div key={i}>
                <ul className="list-group sub-list" id={'sublist-'+x.type} >
                  <li className="font6 sublist-item" >{x.name}</li>
                  {x.subtype.map((y,i)=>
                   <li key={i} className=" font6 sublist-item" id={y.type}>{y.name}</li> 
                    )}
                    </ul>
                  </div>
                    )}
                
                </div>
   
                </div>
                </div>
                {/***category list */}


                <h1>bjf</h1>
               <button  >hlk</button>
                <style jsx>
                {`
                @import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
                .category-hover{       
                    display: none;
                    position: absolute;
                    background-color: #f1f1f1;
                    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                    z-index: 1;
                }
                .drop{
                   width:220px 
                }
                .list-group-item{

                }
                .list-item :hover{
                    border: 1px 0 1px 1px;
                    background: lightgray;
                    color : black;
                }
                .sublist-item :hover{
                    border: 1px 0 1px 1px;
                    background: gray;
                    color : black;
                }
                .sub-list{
                    display:none;
                }
                .list-item {
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
                .sublist-item {
                    font-size: 0.9em;
                    display: block;
                    width: 100%;
                    padding: 5px 5px;
                    background: lightgray;
                    background-image: none;
                    border: none;
                    border: 1px solid #01567e;
                    color: darkblue;
                    border-radius: 0;
                    transition: border-color 0.5s ease;
                }
                `}</style>
                  </Layout>
           );
      }
    
}


export default Index; 
