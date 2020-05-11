import React, { Component } from 'react';
import Head from 'next/head';
import Layout from './../layouts/MainLayout';
import SubNavBar from './../layouts/SubNavbar';
import Footer from './../components/Footer';
import fetch from 'isomorphic-unfetch';
import $ from 'jquery';
import Cookie from "js-cookie";
import {Url,web,WebUrl,myProfileUrl,websiteUrl,createshopUrl} from './../constant/main';
import {createShop} from './../constant/page';
import Router from 'next/router';
class Index extends Component {

    constructor() {
        super();
        this.state = {
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
                    label = $this.prev('.labelf1');
              
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
                            $(this).prev('.labelf1').addClass('active highlight');
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
            alert('Sorry, cannot Submit form, check again form!.');
        }
        else if (!Cookie.getJSON('user')){
            alert('Sorry, you are not sign in.');
        }
        else if(this.state.files[0].selectedFile==null){
            alert('Sorry, cannot Submit form, add atleast one image.');
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
    
            fetch('/api/createshop',{
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

                <SubNavBar ref="navbar" sidenavconst={sidenavconst} />
           
   
            <div className="form-create-shop">

                <div className="container" >
                    <h1 className="font4 fontsizeE2-25 topicColor d-flex justify-content-center">Create new shop</h1>

                    <div onClick={this.signinuser.bind(this)} className="alert alert-danger pointer col-lg-11 col-11 mx-auto" role="alert">
                        {createShop.signupMsg}
                        </div>

                    <form className="form">

                    <div className="content">
                        <h3 className="font4 fontsizeE1-5 fontcolorOrange">Business Details</h3>
                        <div className="row">
                            <div className="field-wrap  col-lg-6 col-md-6 col-sm-12">
                                <label  className="font2 labelf1">Shop/Business Name<span className="req">*</span></label>
                                <input  className={'font6 inputf1 '+(this.state.validation.shopName!=''?'input-error':'')} type="text" required  name="shopName" value={this.state.shopName} onChange={this.handleChange} onBlur={this.validationform}/>
                                <span className="form-error">{this.state.validation.shopName}</span>
                            </div>
                            <div className="field-wrap col-lg-6 col-md-6 col-sm-12">
                                <label  className="font2 labelf1">Category Name<span className="req">*</span></label>
                                <select className={'font6 inputf1 '+(this.state.validation.categery!=''?'input-error':'')} type="text" required  name="categery" value={this.state.categery} onChange={this.handleChange} onBlur={this.validationform}>
                                    <option value="d">Default select</option>
                                    {this.props.error?null:this.props.type.map((x,i)=>
                                    <option key={i} value={x.type}>{x.name}</option>
                                        )}
                                    </select>
                                <span className="form-error">{this.state.validation.categery}</span>
                            </div>

                        <div  className=" alert alert-secondary pointer col-lg-11 col-10 mx-auto" role="alert">
                        {createShop.categoryMsg}
                        </div>
                        
                            <div className="field-wrap col-lg-4 col-md-4 col-sm-12">
                                <label  className="font2 labelf1">District<span className="req">*</span></label>
                                <select className={'font6 inputf1 '+(this.state.validation.district!=''?'input-error':'')} type="text" required  name="district" value={this.state.district} onChange={this.handleChange} onBlur={this.validationform}>
                                <option value="d">Default select</option>
                                    {this.props.error?null:this.props.location.map((x,i)=>
                                    <option key={i} value={x.district}>{x.district}</option>
                                        )}
                                    </select>
                                <span className="form-error">{this.state.validation.district}</span>
                            </div>

                            <div className="field-wrap col-lg-4 col-md-4 col-sm-12">
                                <label  className="font2 labelf1">Town<span className="req">*</span></label>
                                <select className={'font6 inputf1 '+(this.state.validation.town!=''?'input-error':'')} type="text" required  name="town" value={this.state.town} onChange={this.handleChange} onBlur={this.validationform}>
                                <option value="d">Default select</option>
                                    {this.props.error?null:this.gettows(this.state.district).map((x,i)=>
                                    <option key={i} value={x}>{x}</option>
                                        )}
                                    </select>
                                <span className="form-error">{this.state.validation.town}</span>
                            </div>
                            <div className="field-wrap col-lg-4 col-md-4 col-sm-12">
                                <label  className="font2 labelf1">Address<span className="req">*</span></label>
                                <input className={'font6 inputf1 '+(this.state.validation.address!=''?'input-error':'')} type="text" required  name="address" value={this.state.address} onChange={this.handleChange} onBlur={this.validationform}/>
                                <span className="form-error">{this.state.validation.address}</span>
                            </div>

                         <div  className=" alert alert-secondary pointer col-lg-11 col-10 mx-auto" role="alert">
                        {createShop.locationMsg}
                        </div>

                            <div className="field-wrap col-lg-6 col-md-6 col-sm-12">
                                <label  className="font2 labelf1">contact number<span className="req">*</span></label>
                                <input className={'font6 inputf1 '+(this.state.validation.contact1!=''?'input-error':'')} type="text" required  name="contact1" value={this.state.contact1} onChange={this.handleChange} onBlur={this.validationform}/>
                                <span className="form-error">{this.state.validation.contact1}</span>
                            </div>
                            <div className="field-wrap col-lg-6 col-md-6 col-sm-12">
                                <label  className="font2 labelf1">contact number 2<span className="req">*</span></label>
                                <input className={'font6 inputf1 '+(this.state.validation.contact2!=''?'input-error':'')} type="text" required  name="contact2" value={this.state.contact2} onChange={this.handleChange} onBlur={this.validationform}/>
                                <span className="form-error">{this.state.validation.contact2}</span>
                            </div>
                            <div className="field-wrap col-lg-12 col-sm-12">
                                <label  className="font2 labelf1">content 1<span className="req">*</span></label>
                                <textarea className={'font6 inputf1 '+(this.state.validation.content1!=''?'input-error':'')}  rows="3" required  name="content1" value={this.state.content1} onChange={this.handleChange} onBlur={this.validationform}/>
                                <span className="form-error">{this.state.validation.content1}</span>
                            </div>

                         <div  className=" alert alert-secondary pointer col-lg-11 col-10 mx-auto" role="alert">
                        {createShop.content1Msg}
                        </div>

                            <div className="field-wrap col-lg-12 col-sm-12">
                                <label  className="font2 labelf1">content 2<span className="req">*</span></label>
                                <textarea className={'font6 inputf1 '+(this.state.validation.content2!=''?'input-error':'')}  rows="3" required  name="content2" value={this.state.content2} onChange={this.handleChange} onBlur={this.validationform}/>
                                <span className="form-error">{this.state.validation.content2}</span>
                            </div>
                           
                        </div>

                          {/* file upload */}
                            <hr/>
                          <div className="content">
                        <h3 className="font4 fontsizeE1-5 fontcolorOrange">cover images for shop</h3>

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
                        <h3 className="font4 fontsizeE1-5 fontcolorOrange">Business point details</h3>
                        <div  className=" alert alert-secondary pointer col-lg-11 col-10 mx-auto" role="alert">
                        {createShop.shopdetailMsg}
                        </div>
                        <div className="col-12">
                        <div className=" field-wrap col-lg-6 col-md-6 col-sm-12">
                                <div className="btn-group" role="group" aria-label="Basic example">
                                <input type="text" className='font6 inputf1 '  required  name="newshopdetail" value={this.state.newshopdetail} onChange={this.handleChange} onBlur={this.validationform} placeholder="add new point details" />       
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
                            <label  className="font2 labelf1">{x.name}</label>
                            <input className='font6 inputf1' type="text" required  name={x.name} value={x.value} onChange={this.handleChangedetails} />
                        </div>
                        )

                        )}
                        </div>
                        </div>
                    
                  
                    
                    </div>

                    <div className="d-flex justify-content-end">
                    <button type="button" className="font6  btn btn-submit "  required  name="newshopdetail" onClick={this.handleSubmit} > Submit </button>
                    </div>
                    </form>
                </div>

            </div>

<style jsx>
{`
.imageupload{
    background: #c2d1e17d;
    height:200px;
    border: 1.5px solid #01567e;
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
	background: #01567e;
	cursor: pointer;
	font-size: 0.6rem;
	width: 1.2rem;
	height: 1.2rem;
	top: 2.2rem;
	right: 1rem;
	position: absolute;
    border-radious:100%;
}
.popup-close-2 {
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #01567e;
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
    
    /*background: #dde1ffbf  ;*/
    background-image: url("/form1.jpg");
    background-repeat: no-repeat; /* Do not repeat the image */
    padding : 20px 10px;
    opacity:1.1;
    height: 100%;
    background-position: center;
     background-repeat: no-repeat;
     background-size: cover;
   
}
.labelf1 {
    position: relative;
    transform: translateY(40px);
    left: 1em;
    color: #01567e;
    transition: all 0.25s ease;
    -webkit-backface-visibility: hidden;
    pointer-events: none;
    font-size: 1.1em;
}
.labelf1 .req {
    margin: 2px;
    color: #01567e;
}
.labelf1.active {
    left: 1em;
    transform: translateY(0.5em);
    font-size: 1em;
}
.labelf1.active .req {
    opacity: 0;
}
.labelf1.highlight {
    color: #023957;
}
.inputf1 {
    font-size: 1.1em;
    display: block;
    width: 100%;
    padding: 0.5em 0.7em;
    background: #c2d1e17d;
    background-image: none;
    border: none;
    border: 1.5px solid #01567e;
    color: darkblue;
    border-radius: 0;
    transition: border-color 0.5s ease;
}
.inputf1:focus, textarea:focus {
    outline: 0;
    border-color: #023957;
}
textarea {
    resize: vertical;
}
.field-wrap {
    position: relative;

}
.btn-addnewshop{
    background: #01567e;
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
