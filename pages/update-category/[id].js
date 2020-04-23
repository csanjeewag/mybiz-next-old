import React, { Component } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import Layout from './../../layouts/MainLayout';
import SubNavBar from './../../layouts/SubNavbar';
import Footer from './../../components/Footer';
import fetch from 'isomorphic-unfetch';
import $ from 'jquery';
import Cookie from "js-cookie";
import {Url,web,WebUrl,ImageUrl} from './../../constant/main';
class Index extends Component {

    constructor() {
        super();
        this.state = {
            name:'',
            type:'',
            content1:'',
            newsubtype:'',
            mainfile:null,
            images:[],
            mainimage:'',
            deleteimages:[],
            mainfilepath:'https://img.icons8.com/ios/50/01567e/image.png',
            subtype:[],
            selectedFilecount : 1,
            defaultfilepath :'https://img.icons8.com/ios/50/01567e/image.png',
            files : [{selectedFile:null,selectedfilepath:'https://img.icons8.com/ios/50/01567e/image.png'}],
            validation : {
                name: '',
                type :'',
                content1:'',
            }
        };
    }
    componentDidMount(){
        if(this.props.type){
            this.setState({
                ...this.props.type
            })
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
    };
 
    handleChangedetails= evt =>{
        var shopd = this.state.subtype;
        shopd.find(function(e){
             if(e.name == evt.target.name){
                 e.type = evt.target.value;
             }
        });

        this.setState({
            subtype : shopd
        })
    }
    addnewSubtypes = evt =>{
        if(this.state.newsubtype != ''){
            var shopd = this.state.subtype;
            shopd.push({name:this.state.newsubtype,type:''});
            this.setState({
                subtype : shopd,
                newsubtype : ''
            })
            this.componentDidMount();
        }
     
    }
    deleteDetals = type =>{

        if(confirm('is it sure remove '+type+'?')){

        
       var shopd = this.state.subtype;
       shopd.splice(shopd.findIndex(function(e){
        return e.name == type
     
        }),1);

       this.setState({
        subtype : shopd,
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
            case ('name') : validation.name = 
            form.name.length <1 ?  'name cannot be empty.':''
            break;
            case ('type') : validation.type = 
            form.type.length <1 ?  'type cannot be empty.':''
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
        else if (!Cookie.getJSON('user')){
            alert('Sorry, you are not sign in.');
        }
        else{
            const data = new FormData();
            if(this.state.files!=undefined){
                this.state.files.map((x,i)=>{
                    data.append(`image`,x.selectedFile);   
                    })
            }
        
            var jsonbody = this.state;
           // jsonbody.files = null;
           // jsonbody.defaultfilepath = null;
            data.append('jsonbody', JSON.stringify(jsonbody));
            data.append('mainfile',this.state.mainfile);
           data.append('user', JSON.stringify(Cookie.getJSON('user')));
    
            fetch('/api/updateCatagery/'+this.props.typeid,{
                method: 'PUT',
                headers: {
                },
                body:data
            
                }
            )
            .then(response => { return response.json(); } )
            .then(data => { if(data!=undefined){alert(data.msg);Router.reload(); }})
            .catch(error => console.log(error))
    
        }

    
    };

    mainfileChangeHandler=event=>{
        if(event.target.files[0]){
            this.setState({
                mainfile : event.target.files[0],
                mainfilepath : URL.createObjectURL(event.target.files[0])
            })
        }


    }

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
    
    deleteImagesinDB = x =>{

        var deleteimages = this.state.deleteimages;
        if(!deleteimages.includes(x))
        { deleteimages.push(x);
            this.setState({
                deleteimages:deleteimages
            })
        }
      
    }
    addImagesinDB = x =>{
        
        var deleteimages = this.state.deleteimages;
        if(deleteimages.includes(x))
        { 
            deleteimages.splice(deleteimages.findIndex(e=>e==x),1);
            this.setState({
                deleteimages:deleteimages
            })
        }

    }
      

    showsidebar(){
        this.refs.child.showSidebar();
      }
    
    render() { 
        

        //side navbar link
        const sidenavlink = [
            {id:1,link:'/',linkname:'home'},
          ];
          
            const sidenavconst = {topic : 'Categeries',topiclink:'All Categeriess',sidenavlink:sidenavlink,visible:false };
        //////////////
          return ( 
            <Layout>
                      <Head>
                <title> {web.wetopic}</title>
          
                </Head>
                <SubNavBar sidenavconst={sidenavconst}/>

            <div className="form-create-shop">

                <div className="container" >
                    <h1 className="font4 fontsizeE2-25 topicColor d-flex justify-content-center">Create new Categery</h1>
                    <form className="form">

                    <div className="content">
                        <h3 className="font4 fontsizeE1-5 fontcolorOrange">new type</h3>
                        <div className="row">
                            <div className="field-wrap col-lg-4 col-md-4 col-sm-12">
                                <label  className="font2 labelf1">name<span className="req">*</span></label>
                                <input className={'font6 inputf1 '+(this.state.validation.name!=''?'input-error':'')} type="text" required  name="name" value={this.state.name} onChange={this.handleChange} onBlur={this.validationform}/>
                                <span className="form-error">{this.state.validation.name}</span>
                            </div>
                            <div className="field-wrap col-lg-4 col-md-4 col-sm-12">
                                <label  className="font2 labelf1">type<span className="req">*</span></label>
                                <input className={'font6 inputf1 '+(this.state.validation.type!=''?'input-error':'')} type="text" required  name="type" value={this.state.type} onChange={this.handleChange} onBlur={this.validationform}/>
                                <span className="form-error">{this.state.validation.type}</span>
                            </div>
                            <div className="field-wrap col-lg-12 col-sm-12">
                                <label  className="font2 labelf1">details<span className="req">*</span></label>
                                <textarea className={'font6 inputf1 '+(this.state.validation.content1!=''?'input-error':'')}  rows="3" required  name="content1" value={this.state.content1} onChange={this.handleChange} onBlur={this.validationform}/>
                                <span className="form-error">{this.state.validation.content1}</span>
                            </div>
                           
                        </div>
           
                    
        
                         {/* sub items details */}
                        <hr></hr>
                        <div className="content">
                        <h3 className="font4 fontsizeE1-5 fontcolorOrange">Sub type</h3>
                        <div className="col-12">
                        <div className=" field-wrap col-lg-6 col-md-6 col-sm-12">
                                <div className="btn-group" role="group" aria-label="Basic example">
                                <input type="text" className='font6 inputf1 '  required  name="newsubtype" value={this.state.newsubtype} onChange={this.handleChange} onBlur={this.validationform}/>       
                                <button type="button" className="font6  btn btn-addnewshop"  required  name="newsubtype" onClick={this.addnewSubtypes} > new+ </button>
                                </div>
                        </div>
                        <span>If you need add more field as your details of subtype</span>
                        </div>
                        <div className="row">
                        {this.state.subtype.map((x,i)=>(
                            <div key={i} className="field-wrap col-lg-4 col-md-4 col-sm-12">
                            <div className="popup-close-1" onClick={()=>this.deleteDetals(x.name)} display='none' >x</div>
                            <label  className="font2 labelf1">{x.name}</label>
                            <input className='font6 inputf1' type="text" required  name={x.name} value={x.type} onChange={this.handleChangedetails} />
                        </div>
                        )

                        )}
                        </div>

                        </div>
                        {/***main image */}
                        <hr/>
                        <div className="content">
                        <h3 className="font4 fontsizeE1-5 fontcolorOrange">Main images for category</h3>
                        <div className=" row col-12">
                     
                          <div  className=" field-wrap col-lg-4 col-md-4 col-sm-12">
                          <div className="imageupload d-flex justify-content-center">
                          <div className="popup-close-2">x</div>
                          <img className="align-self-center" width='100%' src={ImageUrl +this.state.mainimage}/>
                          <input className="imageupload-input" type="file" required   onChange={this.mainfileChangeHandler} />
                          </div>
                        </div>  

                        <div  className=" field-wrap col-lg-4 col-md-4 col-sm-12">
                          <div className="imageupload d-flex justify-content-center">
                          <div className="popup-close-2">x</div>
                          <img className="align-self-center" width={this.state.mainfilepath!=this.state.defaultfilepath?'100%':null} src={this.state.mainfilepath}/>
                          <input className="imageupload-input" type="file" required   onChange={this.mainfileChangeHandler} />
                          </div>
                        </div>  
                   
                        </div>
    
                        </div>

                              {/* file upload */}
                              <hr/>
                          <div className="content">
                        <h3 className="font4 fontsizeE1-5 fontcolorOrange">cover images for category</h3>
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
                  
                    
                    </div>

                        {/* file remove */}
                        <hr/>
                          <div className="content">
                        <h3 className="font4 fontsizeE1-5 fontcolorOrange">what should be removed</h3>
                        <div className=" row col-12">
                        {this.state.images.map((x,i)=>(
                          <div key={i} className={'field-wrap col-lg-4 col-md-4 col-sm-12'}>
                          <div  className={this.state.deleteimages.includes(x)?'imageupload d-flex justify-content-center remove-image':'imageupload d-flex justify-content-center'}>

                          {!this.state.deleteimages.includes(x)?
                          <div className="popup-close-3" onClick={()=>this.deleteImagesinDB(x)}> remove</div>:
                        <div className="popup-close-3" onClick={()=>this.addImagesinDB(x)}> add</div>
                          }            

                          <img className="align-self-center" width={x!=this.state.defaultfilepath?'100%':null} src={ImageUrl+x}/>
                         </div>
                        </div>  
                        ))}
                        </div>
    
                        </div>

                    <div className="d-flex justify-content-end">
                    <button type="button" className="font6  btn btn-submit "  required  name="newsubtype" onClick={this.handleSubmit} > Submit </button>
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
.remove-image{
    border-color: red;
}
.popup-close-3{
    color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #01567e;
	cursor: pointer;
	font-size: 0.6rem;
	width: 5rem;
	height: 1.5rem;
	top: 2.1rem;
	right: 1rem;
	position: absolute;
}
`}
</style>
                   
            <Footer/>
                   </Layout>
           );
      }
    
}


Index.getInitialProps = async function(context) {
    const { id } = context.query;
    
    const res = await fetch(`${Url}typebyid/${id}`);
    var  types = await res.json();
    var error = false;
    if(res.status!=200){
        error = true ;
   }   

    return {typeid:id,type:types[0],error}


  }

export default Index; 
