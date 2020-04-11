import React, { Component } from 'react';
import Layout from './../layouts/MainLayout';
import SubNavBar from './../layouts/SubNavbar';
import Footer from './../components/Footer';
import fetch from 'isomorphic-unfetch';
import $ from 'jquery';
import Cookie from "js-cookie";
import {Url} from './../constant/main';
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
            shopDetail:[{name:'cash on delivery',value:''}],
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
            alert(' added new details!');
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
    })
    this.componentDidMount();
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
            form.shopName.length < 5 ?  'There are should be atleast 5 charactors.'
            :''
            break;
            case ('district') : validation.district = 
            form.district.length <1 ?  'District cannot be empty.':''
            break;
            case ('town') : validation.town = 
            form.town.length <1 ?  'Town cannot be empty.':''
            break;
            case ('address') : validation.address = 
            form.address.length <1 ?  'Address cannot be empty.':''
            break;
            case ('categery') : validation.categery = 
            form.categery.length <2 ?  'Categery should be select.':''
            break;
            case ('contact1') : validation.contact1 = 
            form.contact1.length <1 ?  'Contact cannot be empty.':''
            break;
            case ('content1') : validation.content1 = 
            form.content1.length <1 ?  'Content cannot be empty.':''
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
        else{
            const data = new FormData();
            if(this.state.files!=undefined){
                this.state.files.map((x,i)=>{
                    data.append(`image`,x.selectedFile);   
                    })
            }
        
            var jsonbody = this.state;
            jsonbody.urlname = this.state.shopName+' in '+this.state.town;
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
            .then(data => { if(data!=undefined){alert(data.msg);}})
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
        
        const items = [
            {id:1 , topic: 'topic1', subtopic:'subtopic1',imageUrl:'http://loremflickr.com/320/150?random=1'   ,discount:5,date:'2020/4/5',price:150,topicImageUrl:'https://img.icons8.com/ios/50/000000/contract-job.png',content:'In publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience. Content is "something that is to be expressed through some medium, as speech, writing or any of various arts',qty:0,seller:'idea mart'},
            {id:2 , topic: 'topic2', subtopic:'subtopic1',imageUrl:'http://loremflickr.com/320/150?random=2'   ,discount:5,date:'2020/4/5',price:150,topicImageUrl:'https://img.icons8.com/ios/50/000000/contract-job.png',content:'In publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience. Content is "something that is to be expressed through some medium, as speech, writing or any of various arts',qty:0,seller:'idea mart'},
            {id:3 , topic: 'topic3', subtopic:'subtopic1',imageUrl:'http://loremflickr.com/320/150?random=3'   ,discount:5,date:'2020/4/5',price:150,topicImageUrl:'https://img.icons8.com/ios/50/000000/contract-job.png',content:'In publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience. Content is "something that is to be expressed through some medium, as speech, writing or any of various arts',qty:0,seller:'idea mart'},
            {id:4 , topic: 'topic4', subtopic:'subtopic1',imageUrl:'http://loremflickr.com/320/150?random=4'   ,discount:5,date:'2020/4/5',price:150,topicImageUrl:'https://img.icons8.com/ios/50/000000/contract-job.png',content:'In publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience. Content is "something that is to be expressed through some medium, as speech, writing or any of various arts',qty:0,seller:'idea mart'},
            {id:5 , topic: 'topic5', subtopic:'subtopic1',imageUrl:'http://loremflickr.com/320/150?random=5'   ,discount:5,date:'2020/4/5',price:150,topicImageUrl:'https://img.icons8.com/ios/50/000000/contract-job.png',content:'In publishing, art, and communication, content is the information and experiences that are directed toward an end-user or audience. Content is "something that is to be expressed through some medium, as speech, writing or any of various arts',qty:0,seller:'idea mart'},
         
        ];
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
                <SubNavBar sidenavconst={sidenavconst}/>

            <div className="form-create-shop">

                <div className="container" >
                    <h1 className="font4 fontsizeE2-25 topicColor d-flex justify-content-center">Create new shop</h1>
                    <form className="form">

                    <div className="content">
                        <h3 className="font4 fontsizeE1-5 fontcolorOrange">Shop Details</h3>
                        <div className="row">
                            <div className="field-wrap  col-lg-6 col-md-6 col-sm-12">
                                <label  className="font2 labelf1">Shop Name<span className="req">*</span></label>
                                <input  className={'font6 inputf1 '+(this.state.validation.shopName!=''?'input-error':'')} type="text" required  name="shopName" value={this.state.shopName} onChange={this.handleChange} onBlur={this.validationform}/>
                                <span className="form-error">{this.state.validation.shopName}</span>
                            </div>
                            <div className="field-wrap col-lg-6 col-md-6 col-sm-12">
                                <label  className="font2 labelf1">Categery Name<span className="req">*</span></label>
                                <select className={'font6 inputf1 '+(this.state.validation.categery!=''?'input-error':'')} type="text" required  name="categery" value={this.state.categery} onChange={this.handleChange} onBlur={this.validationform}>
                                    <option value="d">Default select</option>
                                    {this.props.error?null:this.props.type.map((x,i)=>
                                    <option value={x.type}>{x.name}</option>
                                        )}
                                    </select>
                                <span className="form-error">{this.state.validation.categery}</span>
                            </div>
                            <div className="field-wrap col-lg-4 col-md-4 col-sm-12">
                                <label  className="font2 labelf1">District<span className="req">*</span></label>
                                <input className={'font6 inputf1 '+(this.state.validation.district!=''?'input-error':'')} type="text" required  name="district" value={this.state.district} onChange={this.handleChange} onBlur={this.validationform}/>
                                <span className="form-error">{this.state.validation.district}</span>
                            </div>
                            <div className="field-wrap col-lg-4 col-md-4 col-sm-12">
                                <label  className="font2 labelf1">Town<span className="req">*</span></label>
                                <input className={'font6 inputf1 '+(this.state.validation.town!=''?'input-error':'')} type="text" required  name="town" value={this.state.town} onChange={this.handleChange} onBlur={this.validationform}/>
                                <span className="form-error">{this.state.validation.town}</span>
                            </div>
                            <div className="field-wrap col-lg-4 col-md-4 col-sm-12">
                                <label  className="font2 labelf1">Address<span className="req">*</span></label>
                                <input className={'font6 inputf1 '+(this.state.validation.address!=''?'input-error':'')} type="text" required  name="address" value={this.state.address} onChange={this.handleChange} onBlur={this.validationform}/>
                                <span className="form-error">{this.state.validation.address}</span>
                            </div>
                            <div className="field-wrap col-lg-6 col-md-6 col-sm-12">
                                <label  className="font2 labelf1">contact 1<span className="req">*</span></label>
                                <input className={'font6 inputf1 '+(this.state.validation.contact1!=''?'input-error':'')} type="text" required  name="contact1" value={this.state.contact1} onChange={this.handleChange} onBlur={this.validationform}/>
                                <span className="form-error">{this.state.validation.contact1}</span>
                            </div>
                            <div className="field-wrap col-lg-6 col-md-6 col-sm-12">
                                <label  className="font2 labelf1">contact 2<span className="req">*</span></label>
                                <input className={'font6 inputf1 '+(this.state.validation.contact2!=''?'input-error':'')} type="text" required  name="contact2" value={this.state.contact2} onChange={this.handleChange} onBlur={this.validationform}/>
                                <span className="form-error">{this.state.validation.contact2}</span>
                            </div>
                            <div className="field-wrap col-lg-12 col-sm-12">
                                <label  className="font2 labelf1">content 1<span className="req">*</span></label>
                                <textarea className={'font6 inputf1 '+(this.state.validation.content1!=''?'input-error':'')}  rows="3" required  name="content1" value={this.state.content1} onChange={this.handleChange} onBlur={this.validationform}/>
                                <span className="form-error">{this.state.validation.content1}</span>
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
                        <h3 className="font4 fontsizeE1-5 fontcolorOrange">Shop Details</h3>
                        <div className="col-12">
                        <div className=" field-wrap col-lg-6 col-md-6 col-sm-12">
                                <div className="btn-group" role="group" aria-label="Basic example">
                                <input type="text" className='font6 inputf1 '  required  name="newshopdetail" value={this.state.newshopdetail} onChange={this.handleChange} onBlur={this.validationform}/>       
                                <button type="button" className="font6  btn btn-addnewshop"  required  name="newshopdetail" onClick={this.addnewShopDetails} > new+ </button>
                                </div>
                        </div>
                        <span>If you need add more field as your details of shop</span>
                        </div>
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
   
}
.labelf1 {
    position: relative;
    transform: translateY(40px);
    left: 13px;
    color: #01567e;
    transition: all 0.25s ease;
    -webkit-backface-visibility: hidden;
    pointer-events: none;
    font-size: 18px;
}
.labelf1 .req {
    margin: 2px;
    color: #01567e;
}
.labelf1.active {
    left: 13px;
    transform: translateY(10px);
    font-size: 15px;
}
.labelf1.active .req {
    opacity: 0;
}
.labelf1.highlight {
    color: #023957;
}
.inputf1 {
    font-size: 18px;
    display: block;
    width: 100%;
    padding: 5px 10px;
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
    var  type = await res.json();
    var error = false;
    if(res.status!=200){
        error = true ;
   }
    return {type,error}


  }


export default Index; 
