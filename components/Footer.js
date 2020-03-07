import React, { Component } from 'react';
import Layout from "./../layouts/MainLayout";

class Index extends Component {

   render(){
	   return(
	<Layout>
			

<section id="footer">
	<div className="container">
		<div className="row text-center text-xs-center text-sm-left text-md-left">
			<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
				<h5>Quick links</h5>
				<ul className="list-unstyled quick-links">
					<li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Home</a></li>
					<li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>About</a></li>
					<li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>FAQ</a></li>
					<li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Get Started</a></li>
					<li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Videos</a></li>
				</ul>
			</div>
			<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
				<h5>Quick links</h5>
				<ul className="list-unstyled quick-links">
					<li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Home</a></li>
					<li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>About</a></li>
					<li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>FAQ</a></li>
					<li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Get Started</a></li>
					<li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Videos</a></li>
				</ul>
			</div>
			<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
				
				<ul className="list-unstyled list-inline social text-center">
					<li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-facebook"></i></a></li>
					<li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-twitter"></i></a></li>
					<li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-instagram"></i></a></li>
					<li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-google-plus"></i></a></li>
					<li className="list-inline-item"><a href="javascript:void();" target="_blank"><i className="fa fa-envelope"></i></a></li>
				</ul>
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
#footer h5{
	padding-left: 10px;
    border-left: 3px solid #eeeeee;
    padding-bottom: 6px;
    margin-bottom: 20px;
    color:#ffffff;
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
	font-size:30px;
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
	font-weight:700;
}
#footer ul.quick-links li a i{
	margin-right: 5px;
}
#footer ul.quick-links li:hover a i {
    font-weight: 700;
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