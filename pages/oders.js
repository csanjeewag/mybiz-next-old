import React, { Component } from 'react';
import Layout from './../layouts/MainLayout';
import $ from 'jquery';
import {Url} from './../constant/main'
import fetch from 'isomorphic-unfetch';

class Index extends Component {

  constructor() {
    super();
    this.state = {

    }

  }

  componentDidMount= ()=> {
    $(document).ready(function () {

        $('.star').on('click', function () {
          $(this).toggleClass('star-checked');
        });
    
        $('.ckbox label').on('click', function () {
          $(this).parents('tr').toggleClass('selected');
        });
    
        $('.btn-filter').on('click', function () {
          var $target = $(this).data('target');
          if ($target != 'all') {
            $('.table tr').css('display', 'none');
            $('.table tr[data-status="' + $target + '"]').fadeIn('slow');
          } else {
            $('.table tr').css('display', 'none').fadeIn('slow');
          }
        });
    
     });

  }


  
render(){

  return(
<Layout>
<div className="container col-12">
	<div className="row">

		<section className="content col-12">
			<h1>Table Filter</h1>
			<div className="col-md-8 col-md-offset-2">
				<div className="panel panel-default">
					<div className="panel-body">
						<div className="pull-right">
							<div className="btn-group">
								<button type="button" className="btn btn-success btn-filter" data-target="pagado">Pagado</button>
								<button type="button" className="btn btn-warning btn-filter" data-target="pendiente">Pendiente</button>
								<button type="button" className="btn btn-danger btn-filter" data-target="cancelado">Cancelado</button>
								<button type="button" className="btn btn-default btn-filter" data-target="all">Todos</button>
							</div>
						</div>
						<div className="table-container">
							<table className="table table-filter">
								<tbody>
									<tr data-status="pagado">
										<td>
											<div className="ckbox">
												<input type="checkbox" id="checkbox1"/>
												
											</div>
										</td>
										<td>
											<a href="javascript:;" className="star">
												<i className="glyphicon glyphicon-star"></i>
											</a>
										</td>
										<td>
											<div className="media">
												<a href="#" className="pull-left">
													<img src="https://s3.amazonaws.com/uifaces/faces/twitter/fffabs/128.jpg" className="media-photo"/>
												</a>
												<div className="media-body">
													<span className="media-meta pull-right">Febrero 13, 2016</span>
													<h4 className="title">
														Lorem Impsum
														<span className="pull-right pagado">(Pagado)</span>
													</h4>
													<p className="summary">Ut enim ad minim veniam, quis nostrud exercitation...</p>
												</div>
											</div>
										</td>
									</tr>
									<tr data-status="pendiente">
										<td>
											<div className="ckbox">
												<input type="checkbox" id="checkbox3"/>
												
											</div>
										</td>
										<td>
											<a href="javascript:;" className="star">
												<i className="glyphicon glyphicon-star"></i>
											</a>
										</td>
										<td>
											<div className="media">
												<a href="#" className="pull-left">
													<img src="https://s3.amazonaws.com/uifaces/faces/twitter/fffabs/128.jpg" className="media-photo"/>
												</a>
												<div className="media-body">
													<span className="media-meta pull-right">Febrero 13, 2016</span>
													<h4 className="title">
														Lorem Impsum
														<span className="pull-right pendiente">(Pendiente)</span>
													</h4>
													<p className="summary">Ut enim ad minim veniam, quis nostrud exercitation...</p>
												</div>
											</div>
										</td>
									</tr>
									<tr data-status="cancelado">
										<td>
											<div className="ckbox">
												<input type="checkbox" id="checkbox2"/>
												
											</div>
										</td>
										<td>
											<a href="javascript:;" className="star">
												<i className="glyphicon glyphicon-star"></i>
											</a>
										</td>
										<td>
											<div className="media">
												<a href="#" className="pull-left">
													<img src="https://s3.amazonaws.com/uifaces/faces/twitter/fffabs/128.jpg" className="media-photo"/>
												</a>
												<div className="media-body">
													<span className="media-meta pull-right">Febrero 13, 2016</span>
													<h4 className="title">
														Lorem Impsum
														<span className="pull-right cancelado">(Cancelado)</span>
													</h4>
													<p className="summary">Ut enim ad minim veniam, quis nostrud exercitation...</p>
												</div>
											</div>
										</td>
									</tr>
									<tr data-status="pagado" className="selected">
										<td>
											<div className="ckbox">
												<input type="checkbox" id="checkbox4" checked/>
												
											</div>
										</td>
										<td>
											<a href="javascript:;" className="star star-checked">
												<i className="glyphicon glyphicon-star"></i>
											</a>
										</td>
										<td>
											<div className="media">
												<a href="#" className="pull-left">
													<img src="https://s3.amazonaws.com/uifaces/faces/twitter/fffabs/128.jpg" className="media-photo"/>
												</a>
												<div className="media-body">
													<span className="media-meta pull-right">Febrero 13, 2016</span>
													<h4 className="title">
														Lorem Impsum
														<span className="pull-right pagado">(Pagado)</span>
													</h4>
													<p className="summary">Ut enim ad minim veniam, quis nostrud exercitation...</p>
												</div>
											</div>
										</td>
									</tr>
									<tr data-status="pendiente">
										<td>
											<div className="ckbox">
												<input type="checkbox" id="checkbox5"/>
												
											</div>
										</td>
										<td>
											<a href="javascript:;" className="star">
												<i className="glyphicon glyphicon-star"></i>
											</a>
										</td>
										<td>
											<div className="media">
												<a href="#" className="pull-left">
													<img src="https://s3.amazonaws.com/uifaces/faces/twitter/fffabs/128.jpg" className="media-photo"/>
												</a>
												<div className="media-body">
													<span className="media-meta pull-right">Febrero 13, 2016</span>
													<h4 className="title">
														Lorem Impsum
														<span className="pull-right pendiente">(Pendiente)</span>
													</h4>
													<p className="summary">Ut enim ad minim veniam, quis nostrud exercitation...</p>
												</div>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<div className="content-footer">
					<p>
						Page © - 2016 <br/>
						Powered By <a href="https://www.facebook.com/tavo.qiqe.lucero" target="_blank">TavoQiqe</a>
					</p>
				</div>
			</div>
		</section>
		
	</div>
</div>
<style>
    {`
    body {
        font-family: 'Open Sans', sans-serif;
        color: #353535;
    }
    .content h1 {
        text-align: center;
    }
    .content .content-footer p {
        color: #6d6d6d;
        font-size: 12px;
        text-align: center;
    }
    .content .content-footer p a {
        color: inherit;
        font-weight: bold;
    }
    
    /*	--------------------------------------------------
        :: Table Filter
        -------------------------------------------------- */
    .panel {
        border: 1px solid #ddd;
        background-color: #fcfcfc;
    }
    .panel .btn-group {
        margin: 15px 0 30px;
    }
    .panel .btn-group .btn {
        transition: background-color .3s ease;
    }
    .table-filter {
        background-color: #fff;
        border-bottom: 1px solid #eee;
    }
    .table-filter tbody tr:hover {
        cursor: pointer;
        background-color: #eee;
    }
    .table-filter tbody tr td {
        padding: 10px;
        vertical-align: middle;
        border-top-color: #eee;
    }
    .table-filter tbody tr.selected td {
        background-color: #eee;
    }
    .table-filter tr td:first-child {
        width: 38px;
    }
    .table-filter tr td:nth-child(2) {
        width: 35px;
    }
    .ckbox {
        position: relative;
    }
    .ckbox input[type="checkbox"] {
        opacity: 0;
    }
    .ckbox label {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .ckbox label:before {
        content: '';
        top: 1px;
        left: 0;
        width: 18px;
        height: 18px;
        display: block;
        position: absolute;
        border-radius: 2px;
        border: 1px solid #bbb;
        background-color: #fff;
    }
    .ckbox input[type="checkbox"]:checked + label:before {
        border-color: #2BBCDE;
        background-color: #2BBCDE;
    }
    .ckbox input[type="checkbox"]:checked + label:after {
        top: 3px;
        left: 3.5px;
        content: '\e013';
        color: #fff;
        font-size: 11px;
        font-family: 'Glyphicons Halflings';
        position: absolute;
    }
    .table-filter .star {
        color: #ccc;
        text-align: center;
        display: block;
    }
    .table-filter .star.star-checked {
        color: #F0AD4E;
    }
    .table-filter .star:hover {
        color: #ccc;
    }
    .table-filter .star.star-checked:hover {
        color: #F0AD4E;
    }
    .table-filter .media-photo {
        width: 35px;
    }
    .table-filter .media-body {
        display: block;
        /* Had to use this style to force the div to expand (wasn't necessary with my bootstrap version 3.3.6) */
    }
    .table-filter .media-meta {
        font-size: 11px;
        color: #999;
    }
    .table-filter .media .title {
        color: #2BBCDE;
        font-size: 14px;
        font-weight: bold;
        line-height: normal;
        margin: 0;
    }
    .table-filter .media .title span {
        font-size: .8em;
        margin-right: 20px;
    }
    .table-filter .media .title span.pagado {
        color: #5cb85c;
    }
    .table-filter .media .title span.pendiente {
        color: #f0ad4e;
    }
    .table-filter .media .title span.cancelado {
        color: #d9534f;
    }
    .table-filter .media .summary {
        font-size: 14px;
    }
    `}
</style>
</Layout>
  )
}
 
}

Index.getInitialProps = async function(context) {

    const res = await fetch(`${Url}catagerybyname/Electronic-Devices`);
    

    var  items = await res.json();

    var error = false;
    if(res.status!=200){
        error = true ;
   }

    return {items,error}


  }

export default Index;