import React, { Component } from 'react';
import Head from 'next/head';
import Layout from '../layouts/MainLayout';
import SubNavBar from '../layouts/SubNavbar';
//import Footer from './../components/Footer';
import fetch from 'isomorphic-unfetch';
import $ from 'jquery';
import Cookie from "js-cookie";
import {Url,web,WebUrl,myProfileUrl,websiteUrl,createshopUrl} from '../constant/main';
import {createShop} from '../constant/page';
import Router from 'next/router';
/** */
import Header from '../component/header';
import Footer from '../component/footer';

class Index extends Component {

    constructor() {
        super();
        this.state = {
            ademail:'',
            adkey:'',
            urlname:'',
            shopName: '',
            shoplongName: '',
            categery :'',
            district:'',
            town:'',
            address:'',
            contact1:'',
            contact2:'',
            content1:'',
            content2:'',
            newshopdetail:'',
            shopDetail:[{name:'open days',value:'all days'},{name:'open hours',value:'7.00am to 7.00pm'},{name:'delivery areas',value:'no'},{name:'keep a order',value:'2 days before'}],
            selectedFilecount : 1,
            defaultfilepath :'https://img.icons8.com/ios/50/01567e/image.png',
            files : [{selectedFile:null,selectedfilepath:'https://img.icons8.com/ios/50/01567e/image.png'}],
            validation : {
                shopName: '',
                categery :'',
                district:'',
                town:'',
                address:'',
                contact1:'',
                contact2:'',
                content1:'',
                content2:''
            }
        };
    }
    componentDidMount(){
       if(!Cookie.getJSON('user')){
        this.signinuser();
       }
        $(document).ready(function() {
            $('.form').find('.inputf1').on('keyup blur focus', function (e) {
  
                var $this = $(this),
                    label = $this.prev('.stext-111 pl-2');
              
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
                $('.form .inputf1').each(
                    function(){
                        var val = $(this).val().trim();
                        if (val != ''){
                            $(this).prev('.stext-111 pl-2').addClass('active highlight');
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
 
    handleChangedetails= evt =>{
        var shopd = this.state.shopDetail;
        shopd.find(function(e){
             if(e.name == evt.target.name){
                 e.value = evt.target.value;
             }
        });

        this.setState({
            shopDetail : shopd
        })
    }
    addnewShopDetails = evt =>{
        if(this.state.newshopdetail != ''){
            var shopd = this.state.shopDetail;
            shopd.push({name:this.state.newshopdetail,value:''});
            this.setState({
                shopDetail : shopd,
                newshopdetail : ''
            })
            
            this.componentDidMount();
        }
     
    }
    deleteDetals = value =>{

        if(confirm('is it sure remove '+value+'?')){

        
       var shopd = this.state.shopDetail;
       shopd.splice(shopd.findIndex(function(e){
        return e.name == value
     
        }),1);

       this.setState({
        shopDetail : shopd,
    });

    
    }

    }

    validationform=(evt)=>{
        this.checkvalidation(evt.target.name)

    }
    checkvalidation = (name)=>{
        var form = this.state;
        var validation = this.state.validation;
        switch(name){
            case ('shopName') : validation.shopName = 
            form.shopName.length < 5 ?  'There are should be atleast 5 charactors.':
            RegExp('[^A-Za-z0-9 ]').test(form.shopName)?'allow only english word only':''
            break;
            case ('district') : validation.district = 
            form.district.length <2 ?  'District cannot be empty.':''
            break;
            case ('town') : validation.town = 
            form.town.length <2 ?  'Town cannot be empty.':''
            break;
            case ('address') : validation.address = 
            form.address.length <1 ?  'Address cannot be empty.':''
            break;
            case ('categery') : validation.categery = 
            form.categery.length <2 ?  'Categery should be select.':''
            break;
            case ('contact1') : validation.contact1 = 
            form.contact1.length !=10 ?  'There are should be 10 character only':
            RegExp('[^0-9]').test(form.contact1)?'wrong format try again':''
            break;
            case ('content1') : validation.content1 = 
            form.content1.length <50 ?  'There should be atleast 50 characters.':''
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
            $('.load').slideDown(200)
            const data = new FormData();
            if(this.state.files!=undefined){
                this.state.files.map((x,i)=>{
                    data.append(`image`,x.selectedFile);   
                    })
            }
        
            var jsonbody = this.state;
            var urlname = this.state.categery+'-'+this.state.shopName+'-in-'+this.state.town;
            jsonbody.urlname = urlname.split(" ").join("-");
           // jsonbody.files = null;
           // jsonbody.defaultfilepath = null;
            data.append('jsonbody', JSON.stringify(jsonbody));
           // data.append('files',this.state.files);
           data.append('user', JSON.stringify(Cookie.getJSON('user')));
    
            fetch('/api/admincreateshop',{
                method: 'POST',
                headers: {
                },
                body:data
            
                }
            )
            .then(response => { return response.json(); } )
            .then(data => {alert(data.msg); if(data.status==200){Router.push(myProfileUrl+'?id='+Cookie.getJSON('user')._id);}$('button').attr("disabled", false); $('.load').hide();})
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
    removeallsetails=()=>{
        this.setState({
            shopDetail:[]
        })
    }
    
    //select town 
    gettows=(district)=>{

        var id = this.props.location.findIndex(e=>e.district==district);
        var index = id>0?id:0;

       return district.length>2?this.props.location[index].town:[];
    }
      

    showsidebar(){
        this.refs.child.showSidebar();
      }
    
    signinuser(){
        this.refs.navbar.showsignup();
    }
    
    render() { 
        

          
            const sidenavconst = {topic : 'Categeries',topiclink:'All Categeriess',sidenavlink:'',visible:false };
        //////////////
          return ( 
            <Layout>

                <Head>
                <title> {web.wetopic}</title>
                <meta property="og:url"           content={websiteUrl+createshopUrl} />
                <meta property="og:type"          content={web.webtypeW} />
                <meta property="og:title"         content={web.webtopicCreateshop} />
                <meta property="og:description"   content={web.webCreateshop} />
                <meta property="og:image"         content={web.webImage}/>
                
                <meta name="keywords" content={web.webKeyword}></meta>
                <meta name="description" content={web.webContent}></meta>
                </Head>

                <Header ref="navbar" sidenavconst={sidenavconst} />
                <div className="ismobile_disable p-t-80"></div>
                <section className="bg0 p-t-20 p-b-116">
		<div className="container">
			<div className="flex-w flex-tr" >
				<div className="bor10 p-lr-70 p-t-55 p-b-70 p-lr-15-lg w-100">
					<form>
						<h4 className="mtext-105 cl2 txt-center p-b-30">
							Let's create shop
						</h4>
                        <div onClick={this.signinuser.bind(this)} className="alert alert-danger pointer col-lg-11 col-11 mx-auto" role="alert">
                        {createShop.signupMsg}
                        </div>
                    <div className="row">

                    <div className="field-wrap  col-lg-6 col-md-6 col-sm-12">
                    <label  className="font2 stext-111 pl-2">Email /Id</label>
                                <div className="bor8 m-b-2 how-pos4-parent">
                                <input  className={'font6 stext-111 cl2 plh3 size-116 p-l-62 p-r-30 '} type="text" required  name="ademail" value={this.state.ademail} onChange={this.handleChange}/>       
                            </div>
                            </div>

                             <div className="field-wrap  col-lg-6 col-md-6 col-sm-12">
                             <label  className="font2 stext-111 pl-2">Key/pass</label>
                                <div className="bor8 m-b-2 how-pos4-parent">
                                <input  className={'font6 stext-111 cl2 plh3 size-116 p-l-62 p-r-30 '} type="password" required  name="adkey" value={this.state.adkey} onChange={this.handleChange}/>       
                            </div>
                            </div>
                
                        <div className="col-lg-6">
                        <label className="stext-111 pl-2">Shop/Business Name</label>
						<div className="bor8 m-b-2 how-pos4-parent">
                            <input placeholder="ex: Robox Lanka"  className={'stext-111 cl2 plh3 size-116 p-l-62 p-r-30'+(this.state.validation.shopName!=''?'input-error':'')} type="text" required  name="shopName" value={this.state.shopName} onChange={this.handleChange} onBlur={this.validationform}/>
                            <i className="zmdi zmdi-store zmdi-hc-lg how-pos4 pointer-none"></i>
						</div>
                        <span className="form-error">{this.state.validation.shopName}</span>
                        </div>

                        <div className="col-lg-6">
                        <label className="stext-111 pl-2">Category Type</label>
						<div className="bor8 m-b-2 how-pos4-parent">
                        <select className={'stext-111 cl2 plh3 size-116 p-l-62 p-r-30 '+(this.state.validation.categery!=''?'input-error':'')} type="text" required  name="categery" value={this.state.categery} onChange={this.handleChange} onBlur={this.validationform}>
                                    <option value="d">Default select</option>
                                    {this.props.error?null:this.props.type.map((x,i)=>
                                    <option key={i} value={x.type}>{x.name}</option>
                                        )}
                                    </select>
                            <i className="zmdi zmdi-store zmdi-hc-lg how-pos4 pointer-none"></i>
						</div>
                        <span className="form-error">{this.state.validation.categery}</span>
                        </div>
                        
                        <div  className=" alert alert-secondary pointer col-lg-11 col-10 mx-auto" role="alert">
                        {createShop.categoryMsg}
                        </div>
                        
                        <div className="field-wrap col-lg-4 col-md-4 col-sm-12">
                                <label  className="stext-111 pl-2">District</label>
                                <div className="bor8 m-b-2 how-pos4-parent">
                                <select className={'stext-111 cl2 plh3 size-116 p-l-62 p-r-30 '+(this.state.validation.district!=''?'input-error':'')} type="text" required  name="district" value={this.state.district} onChange={this.handleChange} onBlur={this.validationform}>
                                <option value="d">Default select</option>
                                    {this.props.error?null:this.props.location.map((x,i)=>
                                    <option key={i} value={x.district}>{x.district}</option>
                                        )}
                                    </select>
                                    <i className="zmdi zmdi-pin zmdi-hc-lg how-pos4 pointer-none"></i>
                                </div>
                                <span className="form-error">{this.state.validation.district}</span>
                            </div>

                            <div className="field-wrap col-lg-4 col-md-4 col-sm-12">
                                <label  className=" stext-111 pl-2">Town</label>
                                <div className="bor8 m-b-2 how-pos4-parent">
                                <select className={'stext-111 cl2 plh3 size-116 p-l-62 p-r-30 '+(this.state.validation.town!=''?'input-error':'')} type="text" required  name="town" value={this.state.town} onChange={this.handleChange} onBlur={this.validationform}>
                                <option value="d">Default select</option>
                                    {this.props.error?null:this.gettows(this.state.district).map((x,i)=>
                                    <option key={i} value={x}>{x}</option>
                                        )}
                                    </select>
                                    <i className="zmdi zmdi-pin zmdi-hc-lg how-pos4 pointer-none"></i>
                                    </div>
                                <span className="form-error">{this.state.validation.town}</span>
                            </div>

                            <div className="field-wrap col-lg-4 col-md-4 col-sm-12">
                                <label  className=" stext-111 pl-2">Address</label>
                                <div className="bor8 m-b-2 how-pos4-parent">
                                <input placeholder="ex: kohuwela" className={'stext-111 cl2 plh3 size-116 p-l-62 p-r-30 '+(this.state.validation.address!=''?'input-error':'')} type="text" required  name="address" value={this.state.address} onChange={this.handleChange} onBlur={this.validationform}/>
                                <i className="zmdi zmdi-pin zmdi-hc-lg how-pos4 pointer-none"></i>
                                </div>
                                <span className="form-error">{this.state.validation.address}</span>
                            </div>

                         <div  className=" alert alert-secondary pointer col-lg-11 col-10 mx-auto" role="alert">
                        {createShop.locationMsg}
                        </div>

                            <div className="field-wrap col-lg-6 col-md-6 col-sm-12">
                                <label  className=" stext-111 pl-2">contact number</label>
                                <div className="bor8 m-b-2 how-pos4-parent">
                                <input placeholder="ex: 07x1234567" className={'stext-111 cl2 plh3 size-116 p-l-62 p-r-30 '+(this.state.validation.contact1!=''?'input-error':'')} type="text" required  name="contact1" value={this.state.contact1} onChange={this.handleChange} onBlur={this.validationform}/>
                                <i className="zmdi zmdi-phone-in-talk zmdi-hc-lg how-pos4 pointer-none"></i>
                                </div>
                                <span className="form-error">{this.state.validation.contact1}</span>
                            </div>
                            <div className="field-wrap col-lg-6 col-md-6 col-sm-12">
                                <label  className=" stext-111 pl-2">contact number 2</label>
                                <div className="bor8 m-b-2 how-pos4-parent">
                                <input placeholder="ex: 07x7654321" className={'stext-111 cl2 plh3 size-116 p-l-62 p-r-30 '+(this.state.validation.contact2!=''?'input-error':'')} type="text" required  name="contact2" value={this.state.contact2} onChange={this.handleChange} onBlur={this.validationform}/>
                                <i className="zmdi zmdi-phone-in-talk zmdi-hc-lg how-pos4 pointer-none"></i>
                                </div>
                                <span className="form-error">{this.state.validation.contact2}</span>
                            </div>
                            <div className="field-wrap col-lg-12 col-sm-12">
                                <label  className=" stext-111 pl-2">content 1</label>
                                <div className="bor8 m-b-2 how-pos4-parent">
                                <textarea className={'stext-111 cl2 plh3 size-116 p-lr-28 p-tb-10'+(this.state.validation.content1!=''?'input-error':'')}  rows="3" required  name="content1" value={this.state.content1} onChange={this.handleChange} onBlur={this.validationform}/>
                               
                                </div>
                                <span className="form-error">{this.state.validation.content1}</span>
                            </div>

                         <div  className=" alert alert-secondary pointer col-lg-11 col-10 mx-auto" role="alert">
                        {createShop.content1Msg}
                        </div>

                            <div className="field-wrap col-lg-12 col-sm-12">
                                <label  className=" stext-111 pl-2">content 2</label>
                                <div className="bor8 m-b">
                                <textarea className={'stext-111 cl2 plh3 size-116 p-lr-28 p-tb-10 '+(this.state.validation.content2!=''?'input-error':'')}  rows="2" required  name="content2" value={this.state.content2} onChange={this.handleChange} onBlur={this.validationform}/>
                                
                                </div>
                                <span className="form-error">{this.state.validation.content2}</span>
                            </div>
                           
                               {/* file upload */}
                               <br/>
                          <div className="content col-12">
                        <h5 className="fontcolorOrange cl2 txt-left p-b-30">cover images for shop</h5>

                        <div  className=" alert alert-secondary pointer col-lg-11 col-10 mx-auto" role="alert">
                        {createShop.imageMsg}
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
                       
                               {/* shop details */}
                               <hr></hr>
                        <div className="content">
                        <h5 className="fontcolorOrange cl2 txt-left p-b-30">point details</h5>
                        <div  className=" alert alert-secondary pointer col-lg-11 col-10 mx-auto" role="alert">
                        {createShop.shopdetailMsg}
                        </div>
                        <div className="col-12">
                        <div className=" field-wrap col-lg-6 col-md-6 col-sm-12">
                                <div className="btn-group" role="group" aria-label="Basic example">
                                <input placeholder="ex: size" type="text" className='stext-111 cl2 plh3 size-116 p-l-62 p-r-30 '  required  name="newshopdetail" value={this.state.newshopdetail} onChange={this.handleChange} onBlur={this.validationform} placeholder="add new point details" />       
                                <button type="button" className="font6  btn btn-addnewshop"  required  name="newshopdetail" onClick={this.addnewShopDetails} > new+ </button>
                                </div>
                        </div>
                        <span>Here are exaple for point details.</span>
                        </div>
                        <div className="row">
                           {this.state.shopDetail?this.state.shopDetail.map((x,i)=>
                            <div className="col-lg-6 col-sm-12" key={i}>
                            <a className="float-left menu2-speca"><img src="https://img.icons8.com/metro/15/000000/collect.png"/>&nbsp; &nbsp; {x.name} &nbsp;: </a> <a className="float-left profile-specb"> &nbsp; {x.value}</a>
                            </div>
                            ):null}
                        </div>
                        <button type="button" className="font6  btn btn-danger " onClick={this.removeallsetails} > clear point details </button>
                        <div className="row">
                        {this.state.shopDetail.map((x,i)=>(
                            <div key={i} className="field-wrap col-lg-4 col-md-4 col-sm-12">
                            <div className="popup-close-1" onClick={()=>this.deleteDetals(x.name)} display='none' >x</div>
                            <label  className=" stext-111 pl-2">{x.name}</label>
                            <input className='stext-111 cl2 plh3 size-116 p-l-62 p-r-30' type="text" required  name={x.name} value={x.value} onChange={this.handleChangedetails} />
                        </div>
                        )

                        )}
                        </div>
                        </div>
                    

                        
                    </div>
						<button className="flex-c-m stext-101 cl0 size-121 bg3 bor1 hov-btn3 p-lr-15 trans-04 pointer mt-10" onClick={this.handleSubmit}>
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
	background: gray;
	cursor: pointer;
	font-size: 0.6rem;
	width: 1.5rem;
	height: 1.5rem;
	top: 2.1rem;
	right: 1rem;
	position: absolute;

}
.form-create-shop {
    background: #8b8b8ba8;
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

    
    const res = await fetch(`${Url}types`);
    const reslocation = await fetch(`${Url}locations`);
    
    var  type = await res.json();
    var  location = await reslocation.json();
    var error = false;
    if(res.status!=200||reslocation.status!=200){
        error = true ;
   }
   var filtertype =  type.filter(function(x){
       return x.type!='special'
   })
  

    return {location,type:filtertype,error}


  }


export default Index; 
