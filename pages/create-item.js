import React, { Component } from 'react';
import Layout from './../layouts/MainLayout';
import SubNavBar from './../layouts/SubNavbar';
import Footer from './../components/Footer';
import fetch from 'isomorphic-unfetch';
import $ from 'jquery';
import Cookie from "js-cookie";
import {Url,itemUrl} from './../constant/main';
import Router from 'next/router';

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
            itemSpecification:[{name:'cash on delivery',value:''}],
            newstockdetail:'',
            stockDetail:[{name:' on delivery',value:''}],
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
            alert(' added new details!');
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
            alert(' added new stock details!');
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
        else if(this.state.files[0].selectedFile==null){
            alert('Sorry, cannot Submit form, add atleast one image.');
        }
        else{
            $('button').attr("disabled", true);
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
            .then(data => {$('button').attr("disabled", false); if(data.status==200){Router.push(itemUrl+jsonbody.urlname) }else{alert(data.msg);}})
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
                <SubNavBar sidenavconst={sidenavconst}/>

            <div className="form-create-shop">

                <div className="container" >
                    <h1 className="font4 fontsizeE2-25 topicColor d-flex justify-content-center">Create new item</h1>
                    <form className="form">

                    <div className="content">
                        <h3 className="font4 fontsizeE1-5 fontcolorOrange">Item Details</h3>
                        <div className="row">
                            <div className="field-wrap  col-lg-4 col-md-4 col-sm-12">
                                <label  className="font2 labelf1">Item Name<span className="req">*</span></label>
                                <input  className={'font6 inputf1 '+(this.state.validation.itemname!=''?'input-error':'')} type="text" required  name="itemname" value={this.state.itemname} onChange={this.handleChange} onBlur={this.validationform}/>
                                <span className="form-error">{this.state.validation.itemname}</span>
                            </div>
                            <div className="field-wrap  col-lg-8 col-md-8 col-sm-12">
                                <label  className="font2 labelf1">Item long Name<span className="req">*</span></label>
                                <input  className={'font6 inputf1 '+(this.state.validation.itemlongname!=''?'input-error':'')} type="text" required  name="itemlongname" value={this.state.itemlongname} onChange={this.handleChange} onBlur={this.validationform}/>
                                <span className="form-error">{this.state.validation.itemlongname}</span>
                            </div>
                            
                            <div className="field-wrap col-lg-3 col-md-3 col-sm-12">
                                <label  className="font2 labelf1">Categery Name<span className="req">*</span></label>
                                <select className={'font6 inputf1 '+(this.state.validation.categery!=''?'input-error':'')} type="text" required  name="categery" value={this.state.categery} onChange={this.handleChange} onBlur={this.validationform}>
                                    <option key='1' value="d">Default select</option>
                                    {this.props.error?null:
                                        <option key='2' value={this.props.type.type}>{this.props.type.name}</option>
                                    }
                    
                                    </select>
                                <span className="form-error">{this.state.validation.categery}</span>
                            </div>

                            <div className="field-wrap col-lg-3 col-md-3 col-sm-12">
                                <label  className="font2 labelf1">Sub Categery Name<span className="req">*</span></label>
                                <select className={'font6 inputf1 '+(this.state.validation.subcategery!=''?'input-error':'')} type="text" required  name="subcategery" value={this.state.subcategery} onChange={this.handleChange} onBlur={this.validationform}>
                                    <option key='100' value="d">Default select</option>
                                    {this.props.error?null:this.props.type.subtype.map((x,i)=>
                                        <option key={i} value={x.type}>{x.name}</option>
                                    )}
                                        
                                    </select>
                                <span className="form-error">{this.state.validation.subcategery}</span>
                            </div>
                            
                            <div className="field-wrap col-lg-3 col-md-3 col-sm-6">
                                <label  className="font2 labelf1">item price<span className="req">*</span></label>
                                <input className={'font6 inputf1 '+(this.state.validation.itemPrice!=''?'input-error':'')} type="number" required  name="itemPrice" value={this.state.itemPrice} onChange={this.handleChange} onBlur={this.validationform}/>
                                <span className="form-error">{this.state.validation.itemPrice}</span>
                            </div>
                            <div className="field-wrap col-lg-3 col-md-3 col-sm-6">
                                <label  className="font2 labelf1">item discount<span className="req">*</span></label>
                                <input className={'font6 inputf1 '+(this.state.validation.itemdiscount!=''?'input-error':'')} type="number" required  name="itemdiscount" value={this.state.itemdiscount} onChange={this.handleChange} onBlur={this.validationform}/>
                                <span className="form-error">{this.state.validation.itemdiscount}</span>
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
                         {/* item details */}
                        <hr></hr>
                        <div className="content">
                        <h3 className="font4 fontsizeE1-5 fontcolorOrange">Item spefication</h3>
                        <div className="col-12">
                        <div className=" field-wrap col-lg-6 col-md-6 col-sm-12">
                                <div className="btn-group" role="group" aria-label="Basic example">
                                <input type="text" className='font6 inputf1 '  required  name="newitemSpecification" value={this.state.newitemSpecification} onChange={this.handleChange} onBlur={this.validationform}/>       
                                <button type="button" className="font6  btn btn-addnewshop"  required  name="newitemSpecification" onClick={this.addnewitemSpecifications} > new+ </button>
                                </div>
                        </div>
                        <span>If you need add more field as your item details </span>
                        </div>
                        <div className="row">
                        {this.state.itemSpecification.map((x,i)=>(
                            <div key={i} className="field-wrap col-lg-4 col-md-4 col-sm-12">
                            <div className="popup-close-1" onClick={()=>this.deleteDetals(x.name)} display='none' >x</div>
                            <label  className="font2 labelf1">{x.name}</label>
                            <input className='font6 inputf1' type="text" required  name={x.name} value={x.value} onChange={this.handleChangedetails} />
                        </div>
                        )

                        )}
                        </div>
                        </div>
                        {/* stock details */}
                                <hr></hr>
                        <div className="content">
                        <h3 className="font4 fontsizeE1-5 fontcolorOrange">Stock Details</h3>
                        <div className="col-12">
                        <div className=" field-wrap col-lg-6 col-md-6 col-sm-12">
                                <div className="btn-group" role="group" aria-label="Basic example">
                                <input type="text" className='font6 inputf1 '  required  name="newstockdetail" value={this.state.newstockdetail} onChange={this.handleChange} onBlur={this.validationform}/>       
                                <button type="button" className="font6  btn btn-addnewshop"  required  name="newstockdetail" onClick={this.addnewstockDetails} > new+ </button>
                                </div>
                        </div>
                        <span>If you need add more field stock details</span>
                        </div>
                        <div className="row">
                        {this.state.stockDetail.map((x,i)=>(
                            <div key={i} className="field-wrap col-lg-4 col-md-4 col-sm-12">
                            <div className="popup-close-1" onClick={()=>this.deletestockDetails(x.name)} display='none' >x</div>
                            <label  className="font2 labelf1">{x.name}</label>
                            <input className='font6 inputf1' type="text" required  name={x.name} value={x.value} onChange={this.handleChangestockdetails} />
                        </div>
                        )

                        )}
                        </div>
                        </div>
                    
                  
                    
                    </div>

                    <div className="d-flex justify-content-end">
                    <button type="button" className="font6  btn btn-submit "  required  name="newitemSpecification" onClick={this.handleSubmit} > Submit </button>
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
`}
</style>
                 
            <Footer/>
                   </Layout>
           );
      }
    
}

Index.getInitialProps = async function(context) {
    const { id,shopname,shopDistrict,shopTown } = context.query;
    var shoplocation= {}
    shoplocation = {shopName:shopname,district:shopDistrict,town:shopTown}
    const res = await fetch(`${Url}typebyshopid/${id}`);
    var  type = await res.json();
    var error = false;
    if(res.status!=200){
        error = true ;
   }

    return {shoplocation,shopid:id,type,error}


  }


export default Index; 
