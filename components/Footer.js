import React, { Component } from 'react';
import Layout from "./../layouts/MainLayout";
import {footer} from './../constant/page';

class Index extends Component {

   render(){
	   return(
	<Layout>
			

<section id="footer">
	<div className="container">
		<div className="row fontsizeE1">
			<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 ">
				<h5 className="info-topic fontsizeE1-25">{footer.contactUs}</h5>
				<table className="contact-info">
					<tbody >
						<tr>
						<td><i className="fa fa-map-marker icon"></i></td>
						<td > {footer.a1.t1}<br/>
						{footer.a1.t2}<br/>
						{footer.a1.t3}</td>
					</tr>
					<tr>
						<td><i className="fa fa-phone icon"></i></td>
						<td>{footer.a2.t1},<br/>{footer.a1.t2} </td>
					</tr>
					<tr>
						<td><i className="fa fa-envelope-o icon"></i></td>
						<td><a href={footer.a2.t1}>{footer.a2.t2}</a></td>
					</tr>
					<tr>
						<td><i className="fa fa-globe icon"></i></td>
						<td><a href={footer.a3.t1}> {footer.a3.t2}</a></td>
					</tr>
					</tbody></table>
			</div>
			<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
				<h5 className="info-topic fontsizeE1-25">{footer.information}</h5>
				<table className="contact-info">
					<tbody >
						<tr>
						<td><i className="fa fa-info icon"></i></td>
						<td > {footer.b1}</td>
					</tr>
					<tr>
						<td><i className="fa fa-info icon"></i></td>
						<td>{footer.b2}</td>
					</tr>
					<tr>
						<td><i className="fa fa-info icon"></i></td>
						<td>{footer.b3} </td>
					</tr>
					<tr>
						<td><i className="fa fa-info icon"></i></td>
						<td>{footer.b4}</td>
					</tr>
					</tbody></table>
			</div>
			<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
				<h5 className="info-topic fontsizeE1-25">{footer.followus}</h5>
				<table className="contact-info">
					<tbody >
						<tr>
						<td><i className="fa fa-facebook icon"></i></td>
						<td > {footer.c1}</td>
					</tr>
					<tr>
						<td><i className="fa fa-twitter icon"></i></td>
						<td>{footer.c2} </td>
					</tr>
					<tr>
						<td><i className="fa fa-instagram icon"></i></td>
						<td>{footer.c3} </td>
					</tr>
					<tr>
						<td><i className="fa fa-google-plus icon"></i></td>
						<td>{footer.c4}</td>
					</tr>
					</tbody></table>
			</div>
		</div>
			
			
	</div>
</section>



<div className="footer">This footer will always be positioned at the bottom of the page, but <strong>not fixed</strong>.</div>
<style jsx>
{  `
.footer {
position: relative;
right: 0;
bottom: 0;
left: 0;
padding: 1rem;
background-color: black;
text-align: center;
}

@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
section {
    padding: 60px 0;
}

section .section-title {
    text-align: center;
    color: #007b5e;
    margin-bottom: 50px;
    text-transform: uppercase;
}
#footer {
    background: darkblue !important;
}

#footer a {
    color: #ffffff;
    text-decoration: none !important;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
}
#footer ul.social li{
	padding: 3px 0;
}
#footer ul.social li a i {
    margin-right: 5px;
	font-size:25px;
	-webkit-transition: .5s all ease;
	-moz-transition: .5s all ease;
	transition: .5s all ease;
}
#footer ul.social li:hover a i {
	margin-top:-10px;
}
#footer ul.social li a,
#footer ul.quick-links li a{
	color:#ffffff;
}
#footer ul.social li a:hover{
	color:#eeeeee;
}
#footer ul.quick-links li{
	padding: 3px 0;
	-webkit-transition: .5s all ease;
	-moz-transition: .5s all ease;
	transition: .5s all ease;
}
#footer ul.quick-links li:hover{
	padding: 3px 0;
	margin-left:5px;
}
#footer ul.quick-links li a i{
	margin-right: 5px;
}
.info-topic {
	color:white;
	margin: 20px 0;
}
.contact-info{
	color:white;
	font-family: 'Titillium Web', sans-serif;
}
.contact-info .icon{
	color:yellow;
	padding-right:20px;
   
}
tr {
	vertical-align: top;
	padding-bottom:200px;
	font-family: 'Titillium Web', sans-serif;
  }

@media (max-width:767px){
	#footer h5 {
    padding-left: 0;
    border-left: transparent;
    padding-bottom: 0px;
    margin-bottom: 10px;
}





}
`}
</style>

</Layout>
	   )
	   }
}

export default Index; 