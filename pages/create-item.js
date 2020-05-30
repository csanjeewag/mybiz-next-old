import React, { Component } from 'react';
import Head from 'next/head';
import Layout from '../layouts/MainLayout';
//import Footer from './../components/Footer';
import fetch from 'isomorphic-unfetch';
import $ from 'jquery';
import Cookie from "js-cookie";
import {Url,itemUrl,web} from '../constant/main';
import {createItem} from '../constant/page';
import Router from 'next/router';

import Header from '../component/header';
import Footer from '../component/footer';

class Index extends Component {

    constructor() {
        super();
        this.state = {
            shopid:'',
            shopname:'',
            urlname:'',
            itemname: '',
            itemlongname: '',
            categery :'',
            subcategery:'',
            itemPrice:'',
            itemdiscount:'',
            content1:'',
            shoplocation:'',
            newitemSpecification:'',
            itemSpecification:[{name:'color of product',value:'white, red'},{name:'ex:warrenty (remove this)',value:'yes, 1 year'},{name:'ex:customize (remove this)',value:'yes we do'}],
            newstockdetail:'',
            stockDetail:[{name:'stock amount',value:'50'},{name:'open days',value:'all days'},{name:'open hours',value:'7.00am to 7.00pm'},{name:'delivery areas',value:'no'},{name:'keep a order',value:'2 days before'}],
            selectedFilecount : 1,
            defaultfilepath :'https://img.icons8.com/ios/50/01567e/image.png',
            files : [{selectedFile:null,selectedfilepath:'https://img.icons8.com/ios/50/01567e/image.png'}],
            validation : {
                itemname: '',
                itemlongname:'',
                categery :'',
                subcategery:'',
                itemPrice:'',
                itemdiscount:'',
                content1:'',
                content2:''

            }
        };
    }
    componentDidMount(){
        this.setState({
            shoplocation : this.props.shoplocation,
            shopid : this.props.shopid
        })
        $(document).ready(function() {
            $('.form').find('.stext-111 cl2 plh3 size-116 p-l-62 p-r-30').on('keyup blur focus', function (e) {
  
                var $this = $(this),
                    label = $this.prev(' stext-111 pl-2');
              
                    if (e.type === 'keyup') {
                          if ($this.val() === '') {
                        label.removeClass('active highlight');
                      } else {
                        label.addClass('active highlight');
                      }
                  } else if (e.type === 'blur') {
                      if( $this.val() === '' ) {
                          label.removeClass('active highlight'); 
                          } else {
                          label.removeClass('highlight');   
                          }   
                  } else if (e.type === 'focus') {
                    
                    if( $this.val() === '' ) {
                          label.removeClass('highlight'); 
                          } 
                    else if( $this.val() !== '' ) {
                          label.addClass('highlight');
                          }
                  }
              
              });
              
              function loadingform1(){
                $('.form .stext-111 cl2 plh3 size-116 p-l-62 p-r-30').each(
                    function(){
                        var val = $(this).val().trim();
                        if (val != ''){
                            $(this).prev(' stext-111 pl-2').addClass('active highlight');
                        }
                    });
              }
         
            loadingform1();
              
        })
    }


    handleChange = evt => {
    // This triggers everytime the input is changed
        this.setState({
            [evt.target.name]: evt.target.value,
        });
        this.checkvalidation(evt.target.name)
    };
 

    ///new spefication
    handleChangedetails= evt =>{
        var shopd = this.state.itemSpecification;
        shopd.find(function(e){
             if(e.name == evt.target.name){
                 e.value = evt.target.value;
             }
        });

        this.setState({
            itemSpecification : shopd
        })
    }
    addnewitemSpecifications = evt =>{
        if(this.state.newitemSpecification != ''){
            var shopd = this.state.itemSpecification;
            shopd.push({name:this.state.newitemSpecification,value:''});
            this.setState({
                itemSpecification : shopd,
                newitemSpecification : ''
            })
         
            this.componentDidMount();
        }
     
    }
    deleteDetals = value =>{

        if(confirm('is it sure remove '+value+'?')){

        
       var shopd = this.state.itemSpecification;
       shopd.splice(shopd.findIndex(function(e){
        return e.name == value
     
        }),1);

       this.setState({
        itemSpecification : shopd,
    })
    this.componentDidMount();
    }

    }

    /*********************end specifation */

    /**** new stock details */
    handleChangestockdetails= evt =>{
        var shopd = this.state.stockDetail;
        shopd.find(function(e){
             if(e.name == evt.target.name){
                 e.value = evt.target.value;
             }
        });

        this.setState({
            stockDetail : shopd
        })
    }
    addnewstockDetails = evt =>{
        if(this.state.newstockdetail != ''){
            var shopd = this.state.stockDetail;
            shopd.push({name:this.state.newstockdetail,value:''});
            this.setState({
                stockDetail : shopd,
                newstockdetail : ''
            })
          
            this.componentDidMount();
        }
     
    }
    deletestockDetails = value =>{

        if(confirm('is it sure remove '+value+'?')){

        
       var shopd = this.state.stockDetail;
       shopd.splice(shopd.findIndex(function(e){
        return e.name == value
     
        }),1);

       this.setState({
        stockDetail : shopd,
    })
    this.componentDidMount();
    }

    }

    /*********************end specifation */



    validationform=(evt)=>{
        this.checkvalidation(evt.target.name)

    }
    checkvalidation = (name)=>{
        var form = this.state;
        var validation = this.state.validation;
        switch(name){
            case ('itemname') : validation.itemname = 
            form.itemname.length < 5 ?  'There are should be atleast 5 charactors.':''
            break;
            case ('itemlongname') : validation.itemlongname = 
            form.itemlongname.length < 5 ?  'There are should be atleast 5 charactors.':
            RegExp('[^A-Za-z0-9 ]').test(form.itemlongname)?'allow only english word only':''
            break;
            case ('itemPrice') : validation.itemPrice = 
            form.itemPrice.length <1 ?  'itemPrice cannot be empty.':''
            break;
            case ('categery') : validation.categery = 
            form.categery.length <2 ?  'Categery should be select.':''
            break;
            case ('subcategery') : validation.subcategery = 
            form.subcategery.length <2 ?  'sub categery should be select.':''
            break;
            case ('content1') : validation.content1 = 
            form.content1.length <30 ?  'There should be atleast 30 characters.':''
            break;

        }
        this.setState({
            validation:validation
        })
    }
    beforesubmit=()=>{
        var count = 0;
        Object.entries(this.state.validation).forEach(([key, value]) => {
            
            this.checkvalidation(key);
         });
         Object.entries(this.state.validation).forEach(([key, value]) => {
             if(value!=''){
                 count = count+1;
                 return 1;
             }
          });
          return count;
    }
    handleSubmit = evt => {

        evt.preventDefault();
       //check validations
        if(this.beforesubmit()>0)
        {
            swal("Sorry, Check the form", "check the form, there is a some mistake and try again", "warning");
        }
        else if (!Cookie.getJSON('user')){
            swal("Please sign up.", "You not sign up as seller, so you can not create a shop. So sign up as seller.", "warning");
        }
        else if(this.state.files[0].selectedFile==null){
            swal("Add Image", "You should add atleast one image for shop.", "warning");
        }
        else{
            $('button').attr("disabled", true);
            $('.load').show();
            const data = new FormData();
            if(this.state.files!=undefined){
                this.state.files.map((x,i)=>{
                    data.append(`image`,x.selectedFile);   
                    })
            }
            
            var jsonbody = this.state;
            var urlname = this.state.categery+'-'+this.state.subcategery+'-'+this.state.itemlongname+'-by-'+this.state.shoplocation.shopName+'-in-'+this.state.shoplocation.town;
            jsonbody.urlname = urlname.split(" ").join("-");
            data.append('jsonbody', JSON.stringify(jsonbody));
            data.append('shop', JSON.stringify({shopid:this.props.shopid,userid:Cookie.getJSON('user')._id,...this.state.shoplocation}));
           // data.append('files',this.state.files);
           data.append('user', JSON.stringify(Cookie.getJSON('user')));
    
            fetch('/api/createitem',{
                method: 'POST',
                headers: {
                },
                body:data
            
                }
            )
            .then(response => { return response.json(); } )
            .then(data => {$('button').attr("disabled", false); if(data.status==200){swal("Item added", "New item added to your shop. you can new item now. Thank you.", "success");Router.push(itemUrl+jsonbody.urlname) }else{swal("Sorry", data.msg, "error");}$('.load').hide();})
            .catch(error => console.log(error))
    
        }

    
    };

    fileChangeHandler=event=>{

        if(this.state.selectedFilecount>2){

            var files = this.state.files;
            files.splice(files.findIndex(function(e){
             return e.selectedfilepath == 'https://img.icons8.com/ios/50/01567e/image.png'
          
             }),1);
     
            this.setState({
             files : files,
             selectedFilecount : this.state.selectedFilecount-1
         })

        }
        
        if(event.target.files[0]!=null){
            var files = this.state.files;
            files.unshift({selectedFile:event.target.files[0],selectedfilepath:URL.createObjectURL(event.target.files[0])});
          
            this.setState({
              files : files,
              selectedFilecount : (this.state.selectedFilecount<3)?this.state.selectedFilecount+1:3
    
            });
            
        }

     
    }
    deleteFiles = selectedfilepath =>{

        if(confirm('is it sure remove ?')){

            if(this.state.selectedFilecount==1){
       
                var files = [{selectedFile:null,selectedfilepath:this.state.defaultfilepath}];
              
                this.setState({
                  files : files,
                  selectedFilecount : 1
        
                });
             }
             else{
                var files = this.state.files;
                files.splice(files.findIndex(function(e){
                 return e.selectedfilepath == selectedfilepath
              
                 }),1);
                 
                this.setState({
                 files : files,
                 selectedFilecount : this.state.selectedFilecount-1
             })
             }

         }
     

    }
    

    showsidebar(){
        this.refs.child.showSidebar();
      }
    
    render() { 
        
 
        //side navbar link
        const sidenavlink = [
            {id:1,link:'/',linkname:'home'},
            {id:1,link:'/menu',linkname:'menu'},
            {id:1,link:'/',linkname:'menu2'},
            {id:1,link:'/',linkname:'menu3'},
            {id:1,link:'/',linkname:'menu4'},
            {id:1,link:'/',linkname:'menu5'},
          ];
          
            const sidenavconst = {topic : 'Categeries',topiclink:'All Categeriess',sidenavlink:sidenavlink,visible:false };
        //////////////
          return ( 
            <Layout>
                      <Head>
                <title> {web.wetopic}</title>
    
                </Head>
                <Header sidenavconst={sidenavconst}/>
                <div className="ismobile_disable p-t-80"></div>
                <section className="bg0 p-t-20 p-b-116">
		<div className="container">
			<div className="flex-w flex-tr" >
				<div className="bor10 p-lr-70 p-t-55 p-b-70 p-lr-15-lg w-100">
					<form>
						<h4 className="mtext-105 cl2 txt-center p-b-30">
							Let's create items
						</h4>
                    <div className="row">

                    <div className="field-wrap  col-lg-4 col-md-4 col-sm-12">
                                <label  className="font2 stext-111 pl-2">Item Name</label>
                                <div className="bor8 m-b-2 how-pos4-parent">
                                <input placeholder="ex: Robox Mix Powvder" className={'font6 stext-111 cl2 plh3 size-116 p-l-62 p-r-30 '+(this.state.validation.itemname!=''?'input-error':'')} type="text" required  name="itemname" value={this.state.itemname} onChange={this.handleChange} onBlur={this.validationform}/>
                                <i className="zmdi zmdi-collection-item-1 zmdi-hc-lg how-pos4 pointer-none"></i>
                                </div>  
                                <span className="form-error">{this.state.validation.itemname}</span>
                            </div>
                            <div className="field-wrap  col-lg-8 col-md-8 col-sm-12">
                                <label  className="font2 stext-111 pl-2">Item long Name(add item name in english)</label>
                                <div className="bor8 m-b-2 how-pos4-parent">
                                <input placeholder="ex: robox mix powder s6" className={'font6 stext-111 cl2 plh3 size-116 p-l-62 p-r-30 '+(this.state.validation.itemlongname!=''?'input-error':'')} type="text" required  name="itemlongname" value={this.state.itemlongname} onChange={this.handleChange} onBlur={this.validationform}/>
                                <i className="zmdi zmdi-collection-item-1 zmdi-hc-lg how-pos4 pointer-none"></i>
                                </div>
                                <span className="form-error">{this.state.validation.itemlongname}</span>
                            </div>

                            <div  className=" alert alert-secondary pointer col-lg-11 col-10 mx-auto" role="alert">
                        {createItem.itemNameMsg}
                        </div>
                            
                            <div className="field-wrap col-lg-3 col-md-3 col-sm-12">
                                <label  className="font2 stext-111 pl-2">Categery Name</label>
                                <div className="bor8 m-b-2 how-pos4-parent">
                                <select className={'font6 stext-111 cl2 plh3 size-116 p-l-62 p-r-30 '+(this.state.validation.categery!=''?'input-error':'')} type="text" required  name="categery" value={this.state.categery} onChange={this.handleChange} onBlur={this.validationform}>
                                    <option key='1' value="d">Default select</option>
                                    {this.props.error?null:
                                        <option key='2' value={this.props.type.type}>{this.props.type.name}</option>
                                    }
                    
                                    </select>
                                    <i className="zmdi zmdi-filter-list zmdi-hc-lg how-pos4 pointer-none"></i>
                                    </div>
                                <span className="form-error">{this.state.validation.categery}</span>
                            </div>

                            <div className="field-wrap col-lg-3 col-md-3 col-sm-12">
                                <label  className="font2 stext-111 pl-2">Sub Categery Name</label>
                                <div className="bor8 m-b-2 how-pos4-parent">
                                <select className={'font6 stext-111 cl2 plh3 size-116 p-l-62 p-r-30 '+(this.state.validation.subcategery!=''?'input-error':'')} type="text" required  name="subcategery" value={this.state.subcategery} onChange={this.handleChange} onBlur={this.validationform}>
                                    <option key='100' value="d">Default select</option>
                                    {this.props.error?null:this.props.type.subtype.map((x,i)=>
                                        <option key={i} value={x.type}>{x.name}</option>
                                    )}
                                        
                                    </select>
                                    <i className="zmdi zmdi-filter-list zmdi-hc-lg how-pos4 pointer-none"></i>
                                </div>
                                <span className="form-error">{this.state.validation.subcategery}</span>
                            </div>
                            
                            <div className="field-wrap col-lg-3 col-md-3 col-sm-6">
                                <label  className="font2 stext-111 pl-2">item price</label>
                                <div className="bor8 m-b-2 how-pos4-parent">
                                <input placeholder="ex: 1500" className={'font6 stext-111 cl2 plh3 size-116 p-l-62 p-r-30 '+(this.state.validation.itemPrice!=''?'input-error':'')} type="number" required  name="itemPrice" value={this.state.itemPrice} onChange={this.handleChange} onBlur={this.validationform}/>
                                <i className="zmdi zmdi-money zmdi-hc-lg how-pos4 pointer-none"></i>
                                </div>
                                <span className="form-error">{this.state.validation.itemPrice}</span>
                            </div>
                            <div className="field-wrap col-lg-3 col-md-3 col-sm-6">
                                <label  className="font2 stext-111 pl-2">item discount (%)</label>
                                <div className="bor8 m-b-2 how-pos4-parent">
                                <input placeholder="ex: 50" className={'font6 stext-111 cl2 plh3 size-116 p-l-62 p-r-30 '+(this.state.validation.itemdiscount!=''?'input-error':'')} type="number" required  name="itemdiscount" value={this.state.itemdiscount} onChange={this.handleChange} onBlur={this.validationform}/>
                                <i className="zmdi zmdi-money-box zmdi-hc-lg how-pos4 pointer-none"></i>
                                </div>
                                <span className="form-error">{this.state.validation.itemdiscount}</span>
                            </div>

                        <div className="row">
                        <div  className=" alert alert-secondary pointer col-lg-5 col-10 mx-auto" role="alert">
                        {createItem.subcategoryMsg}
                        </div>
                        <div  className=" alert alert-secondary pointer col-lg-5 col-10 mx-auto" role="alert">
                        {createItem.priceMsg}
                        </div>
                        </div>

                            <div className="field-wrap col-lg-12 col-sm-12">
                                <label  className="font2 stext-111 pl-2">content 1</label>
                                <div className="bor8 m-b-2">
                                <textarea className={'font6 stext-111 cl2 plh3 size-116 p-l-62 p-r-30 '+(this.state.validation.content1!=''?'input-error':'')}  rows="3" required  name="content1" value={this.state.content1} onChange={this.handleChange} onBlur={this.validationform}/>
                                </div>
                                <span className="form-error">{this.state.validation.content1}</span>
                            </div>

                            <div  className=" alert alert-secondary pointer col-lg-11 col-10 mx-auto" role="alert">
                        {createItem.contentMsg}
                        </div>
                            <div className="field-wrap col-lg-12 col-sm-12">
                                <label  className="font2 stext-111 pl-2">content 2</label>
                                <div className="bor8 m-b-2">
                                <textarea className={'font6 stext-111 cl2 plh3 size-116 p-l-62 p-r-30 '+(this.state.validation.content2!=''?'input-error':'')}  rows="3" required  name="content2" value={this.state.content2} onChange={this.handleChange} onBlur={this.validationform}/>
                               </div>
                                <span className="form-error">{this.state.validation.content2}</span>
                            </div>
                           
                        


                     
                          {/* file upload */}
                          <hr/>
                          <div className="content col-12">
                        <h5 className="fontcolorOrange cl2 txt-left p-b-30">images for item</h5>
                        <div  className=" alert alert-secondary pointer col-lg-11 col-10 mx-auto" role="alert">
                        {createItem.imageMsg}
                        </div>
                        <div className=" row col-12">
                        {this.state.files.map((x,i)=>(
                          <div key={i} className=" field-wrap col-lg-4 col-md-4 col-sm-12">
                          <div className="imageupload d-flex justify-content-center">
                          <div className="popup-close-2" onClick={()=>this.deleteFiles(x.selectedfilepath)}>x</div>
                          <img className="align-self-center" width={x.selectedfilepath!=this.state.defaultfilepath?'100%':null} src={x.selectedfilepath}/>
                          <input className="imageupload-input" type="file" required  value={x.file} onChange={this.fileChangeHandler} />
                          </div>
                        </div>  
                        ))}
                        </div>
    
                        </div>
                         {/* item details */}
                        <hr></hr>
                        <div className="content">
                        <h5 className="fontcolorOrange cl2 txt-left p-b-30">Item spefication</h5>
                        <div  className=" alert alert-secondary pointer col-lg-11 col-10 mx-auto" role="alert">
                        {createItem.itemdetailMsg}
                        </div>
                        <div className="col-12">
                        <div className=" field-wrap col-lg-6 col-md-6 col-sm-12">
                                <div className="btn-group" role="group" aria-label="Basic example">
                                <input type="text" className='font6 stext-111 cl2 plh3 size-116 p-l-62 p-r-30 '  required  name="newitemSpecification" value={this.state.newitemSpecification} onChange={this.handleChange} onBlur={this.validationform}/>       
                                <button type="button" className="font6  btn btn-addnewshop"  required  name="newitemSpecification" onClick={this.addnewitemSpecifications} > new+ </button>
                                </div>
                        </div>
                        <span>If you need add more field to your item details </span>
                        </div>
                        <div className="row">
                        {this.state.itemSpecification.map((x,i)=>(
                            <div key={i} className="field-wrap col-lg-4 col-md-4 col-sm-12">
                            <div className="popup-close-1" onClick={()=>this.deleteDetals(x.name)} display='none' >x</div>
                            <label  className="font2 stext-111 pl-2">{x.name}</label>
                            <input className='font6 stext-111 cl2 plh3 size-116 p-l-62 p-r-30' type="text" required  name={x.name} value={x.value} onChange={this.handleChangedetails} />
                        </div>
                        )

                        )}
                        </div>
                        </div>
                        {/* stock details */}
                                <hr></hr>
                        <div className="content">
                        <h5 className="fontcolorOrange cl2 txt-left p-b-30">Stock Details</h5>
                        <div  className=" alert alert-secondary pointer col-lg-11 col-10 mx-auto" role="alert">
                        {createItem.stockdetailMsg}
                        </div>
                        <div className="col-12">
                        <div className=" field-wrap col-lg-6 col-md-6 col-sm-12">
                                <div className="btn-group" role="group" aria-label="Basic example">
                                <input type="text" className='font6 stext-111 cl2 plh3 size-116 p-l-62 p-r-30 '  required  name="newstockdetail" value={this.state.newstockdetail} onChange={this.handleChange} onBlur={this.validationform}/>       
                                <button type="button" className="font6  btn btn-addnewshop"  required  name="newstockdetail" onClick={this.addnewstockDetails} > new+ </button>
                                </div>
                        </div>
                        <span>If you need add more field to stock details</span>
                        </div>
                        <div className="row">
                        {this.state.stockDetail.map((x,i)=>(
                            <div key={i} className="field-wrap col-lg-4 col-md-4 col-sm-12">
                            <div className="popup-close-1" onClick={()=>this.deletestockDetails(x.name)} display='none' >x</div>
                            <label  className="font2 stext-111 pl-2">{x.name}</label>
                            <input className='font6 stext-111 cl2 plh3 size-116 p-l-62 p-r-30' type="text" required  name={x.name} value={x.value} onChange={this.handleChangestockdetails} />
                        </div>
                        )

                        )}
                        </div>
                        </div>
                    
                  

                    </div>
						<button className="flex-c-m stext-101 cl0 size-121 bg3 bor1 hov-btn3 p-lr-15 trans-04 pointer" onClick={this.handleSubmit} >
							Submit
						</button>
					</form>
				</div>

			</div>
		</div>
	</section>	
 

<style jsx>
{`
.imageupload{
    background: #c2d1e17d;
    height:200px;
    border: 1.5px solid gray;
    overflow: hidden;
    margin-top:2rem;
}
.imageupload-input{
    position: absolute;
    font-size: 1px;
    cursor: pointer;
    opacity: 0;
    height:100%;
    width:80%;
}
.popup-close-1 {
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	background: gray;
	cursor: pointer;
	font-size: 0.6rem;
	width: 1.2rem;
	height: 1.2rem;
	top: 2rem;
	right: 1rem;
	position: absolute;
    border-radious:100%;
}
.popup-close-2 {
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	background: gary;
	cursor: pointer;
	font-size: 0.6rem;
	width: 1.5rem;
	height: 1.5rem;
	top: 2.1rem;
	right: 1rem;
	position: absolute;

}
.form-create-shop {
    background: gray;
}
.container{
    
    background: #dde1ffbf  ;
    /*background-image: url("/form1.jpg");*/
    background-repeat: no-repeat; /* Do not repeat the image */
    padding : 20px 10px;
    opacity:1.1;
    height: 100%;
    background-position: center;
     background-repeat: no-repeat;
     background-size: cover;
   
}

textarea {
    resize: vertical;
}
.field-wrap {
    position: relative;

}
.btn-addnewshop{
    background: gray;
    color:white; 
}
.btn-submit{
    background: #01567e;
    color:white; 
    width:100%;
    margin-top: 3rem;
}
.form-error{
    color : red;
    font-size : 0.8rem;
}
.input-error{
    border-color: red;
}
`}
</style>
                 
            <Footer/>
                   </Layout>
           );
      }
    
}

Index.getInitialProps = async function(context) {
    const { id,shopname,shopDistrict,shopTown,shopurl } = context.query;
    var shoplocation= {}
    shoplocation = {shopName:shopname,district:shopDistrict,town:shopTown,shopurl:shopurl}
    const res = await fetch(`${Url}typebyshopid/${id}`);
    var  type = await res.json();
    var error = false;
    if(res.status!=200){
        error = true ;
   }

    return {shoplocation,shopid:id,type,error}


  }


export default Index; 
