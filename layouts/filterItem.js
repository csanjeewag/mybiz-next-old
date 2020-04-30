import React, { Component } from 'react';
import Layout from './../layouts/MainLayout';
import Link from 'next/link';
import $ from 'jquery';
import {Url,filteritemUrl} from './../constant/main';
import Router from 'next/router';


import Cookie from "js-cookie";

const HoverCategory = (props)=>{
    return(
 
       
       <div className="category-hover" onMouseLeave={props.handleHoverout_list.bind(this,'category-hover')}>
       {/***category list */}
       <div className="d-flex flex-row ">
       <div className="drop">
        {props.types.map((x,i)=>
          <li key={i} onClick={props.submitcategory.bind(this,props.selecttype,'')}   className={props.selecttype==x.type?'font1 sublist-item':'font1 list-item'} onMouseEnter={props.handleHover.bind(this,x.type,'category')} id={x.type}>{x.name} {props.selecttype==x.type?<i className="fa fa-angle-double-right float-right" aria-hidden="true"></i>:<i className="fa fa-angle-double-down float-right" aria-hidden="true"></i>} </li>  
            )}
        </div>
        <div className="drop" >
        {props.types.map((x,i)=>
        <div key={i}>
        <ul className="list-group sub-list " id={'sublist-'+x.type} >
          <li className="font1 topic-sub" >{x.name}</li>
          {x.subtype.map((y,i)=>
           <li key={i} className=" font6 sublist-item" id={y.type} onClick={props.submitcategory.bind(this,props.selecttype,y.type)}>{y.name}</li> 
            )}
            </ul>
          </div>
            )}
        
        </div>

        </div>
        <style jsx>
                {`
                @import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
                .topic-sub{
                    font-size: 0.9em;
                    display: block;
                    width: 100%;
                    padding: 5px 5px;
                    background: darkgray;
                    background-image: none;
                    border: none;
                    border: 1px solid #01567e;
                    color: darkblue;
                    border-radius: 0;
                    transition: border-color 0.5s ease;
                }
                .category-hover{       
                    display: none;
                    position: absolute;
                    z-index: 1;
                }
                .drop{
                   width:220px;
                   
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
          {/***category list */}     
        </div>
        
    )
}

const HoverLocation = (props)=>{
    return(
 
       
       <div className="location-hover" onMouseLeave={props.handleHoverout_list.bind(this,'location-hover')}>
       {/***category list */}
       <div className="d-flex flex-row ">
       <div className="drop">
        {props.location.map((x,i)=>
          <li key={i} onClick={props.submitlocation.bind(this,props.selectlocation,'')}  
           className={props.selectlocation==x.district?'font1 sublist-item':'font1 list-item'} 
           onMouseEnter={props.handleHover.bind(this,x.district,'location')} id={x.district}>{x.district} 
           {props.selectlocation==x.district?<i className="fa fa-angle-double-right float-right" aria-hidden="true"></i>:<i className="fa fa-angle-double-down float-right" aria-hidden="true"></i>} </li>  
            )}
        </div>
        <div className="drop" >
        {props.location.map((x,i)=>
        <div key={i}>
        <ul className="list-group sub-list" id={'sublist-'+x.district} >
          <li className="font1 topic-sub " >{x.district}</li>
          {x.town.map((y,i)=>
           <li onClick={props.submitlocation.bind(this,props.selectlocation,y)}  key={i} className=" font6 sublist-item" id={y} >{y}</li> 
          )}
            </ul>
          </div>
          )}
        
        </div>

        </div>
        <style jsx>
                {`
                @import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
                .topic-sub{
                    font-size: 0.9em;
                    display: block;
                    width: 100%;
                    padding: 5px 5px;
                    background: darkgray;
                    background-image: none;
                    border: none;
                    border: 1px solid #01567e;
                    color: darkblue;
                    border-radius: 0;
                    transition: border-color 0.5s ease;
                }
                .location-hover{       
                    display: none;
                    position: absolute;
                    z-index: 1;
                }
                .drop{
                   width:220px;
                   
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
          {/***category list */}     
        </div>
        
    )
}


class Index extends Component {

    constructor() {
		super();
		this.state = {
            types:[],
            location:[],
            search:'',
            categery:'',
            selecttype:'',
            subcategery:'',
            selectlocation:'',
            district:'',
            town:'',
            upperprice:'',
            lowerprice:'',
            

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
        this.setState({
            search:this.props.searchitem?this.props.searchitem.search:'',
            upperprice:this.props.searchitem?this.props.searchitem.upperprice:'',
            lowerprice:this.props.searchitem?this.props.searchitem.lowerprice:'',
        })

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

    //hover drop down
    handleHover_list=(name)=>{
        $('.'+name).slideDown(100) ;
    }
    handleHoverout_list=(name)=>{
        $('.'+name).slideUp(100) ;
    }
    handleHover=(id,what)=>{
        if(what=='category'){
            this.setState({
                selecttype:id
            })
        }else if(what=='location'){
            this.setState({
                selectlocation:id
            })
        }
        
        $('.sub-list').slideUp(100)
        $('#sublist-'+id).slideDown(100) 
    }
    submitcategory=(category,subcategory)=>{
        this.handleHoverout_list('category-hover')
        this.setState({
            categery : category,
            subcategery :  subcategory
        })
    }
    submitlocation=(district,town)=>{
   
        this.handleHoverout_list('location-hover')
        this.setState({
            district : district,
            town :  town
        })
    }

    render() { 
        
          return ( 
            <Layout>
                <div  className=" filter-section">
            <div className="row col-lg-11 col-sm-12 mx-auto" >

            
                <div className="field-wrap  col-lg-3 col-md-3 col-sm-5 col-xs-12">
                <label   className="font1 labelf1">Category</label>
                <select onClick={this.handleHoverout_list.bind(this,'category-hover')}  className={'font1 inputf1'} type="text" required  name="categery" value={this.state.categery} onChange={this.handleChange} onMouseEnter={this.handleHover_list.bind(this,'category-hover')} >
                <option value="d">all categories</option>
                {this.state.types.map((x,i)=><option key={i} value={x.type}>{x.name}</option>)}                      
                </select>
                <HoverCategory handleHover_list={this.handleHover_list} handleHoverout_list={this.handleHoverout_list} selecttype={this.state.selecttype} types={this.state.types} handleHover={this.handleHover} submitcategory={this.submitcategory} />
                <select className={'font1 inputf1'} type="text" required  name="subcategery" value={this.state.subcategery} onChange={this.handleChange}>
                <option value="d">all subcategories</option>
                {this.getsubcategory(this.state.categery).map((x,i)=><option key={i} value={x.type}>{x.name}</option>)}                      
                </select>
               
                </div>

                <div className="field-wrap  col-lg-2 col-md-2 col-sm-4 col-xs-7">
                <label  className="font1 labelf1">location</label>
                <select onClick={this.handleHoverout_list.bind(this,'location-hover')} onMouseEnter={this.handleHover_list.bind(this,'location-hover')} className={'font1 inputf1'} type="text" required  name="district" value={this.state.district} onChange={this.handleChange}>
                <option value="d">all district</option>
                {this.state.location.map((x,i)=><option key={i} value={x.district}>{x.district}</option>)}                      
                </select>
                <HoverLocation gettown ={(district)=>this.gettows(district)} handleHover_list={this.handleHover_list} handleHoverout_list={this.handleHoverout_list} selectlocation={this.state.selectlocation} location={this.state.location} handleHover={this.handleHover} submitlocation={this.submitlocation} />
               
                <select className={'font1 inputf1'} type="text" required  name="town" value={this.state.town} onChange={this.handleChange}>
                <option value="d">all cities</option>
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
