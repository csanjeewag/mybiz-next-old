import React, { Component } from 'react';
import Link from 'next/link';
import {footer} from './../constant/page';
import {aboutusUrl,policiesUrl,helpUrl} from './../constant/main';

class Index extends Component {

    componentDidMount(){

    }
    render() { 

        
          return ( 
           
      <footer className="bg3 p-t-75 p-b-32">
		<div className="container">
			<div className="row">
				<div className="col-sm-6 col-lg-3 p-b-50">
					<h4 className="stext-301 cl0 p-b-30">
					{footer.contactUs}
					</h4>

					<ul>
						<li className="p-b-10">
							<a href="#" className="stext-107 cl7 hov-cl1 trans-04">
							{footer.a1.t1}<br/>
							{footer.a1.t2}<br/>
						{footer.a1.t3}
							</a>
						</li>

						<li className="p-b-10">
							<a href="#" className="stext-107 cl7 hov-cl1 trans-04">
							{footer.a2.t1},<br/>{footer.a1.t2}
							</a>
						</li>

						<li className="p-b-10">
							<a className="stext-107 cl7 hov-cl1 trans-04" href={footer.a3.t1}> {footer.a3.t2}</a>						
						</li>

						<li className="p-b-10">
							<a className="stext-107 cl7 hov-cl1 trans-04" href={footer.a4.t1}> {footer.a4.t2}</a>
						</li>
					</ul>
				</div>

				<div className="col-sm-6 col-lg-3 p-b-50">
					<h4 className="stext-301 cl0 p-b-30">
					{footer.information}
					</h4>

					<ul>
					<li className="p-b-10">
							<a href={aboutusUrl}className="stext-107 cl7 hov-cl1 trans-04">
							{footer.b1}
							</a>
						</li>
						<li className="p-b-10">
							<a href={policiesUrl} className="stext-107 cl7 hov-cl1 trans-04">
							{footer.b2}
							</a>
						</li>

						<li className="p-b-10">
							<a href={policiesUrl} className="stext-107 cl7 hov-cl1 trans-04">
							{footer.b3} 
							</a>
						</li>

						<li className="p-b-10">
							<a href={helpUrl} className="stext-107 cl7 hov-cl1 trans-04">
							{footer.b4}
							</a>
						</li>

					</ul>
				</div>

				<div className="col-sm-6 col-lg-3 p-b-50">
					<h4 className="stext-301 cl0 p-b-30">
						GET IN TOUCH
					</h4>

					<p className="stext-107 cl7 size-201">
						Any questions? Let us know from facebook or whatsapp
					</p>

					<div className="p-t-27">
						<a href="https://www.facebook.com/Onshoplk-113469750349042" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
							<i className="fa fa-facebook"></i>
						</a>

						<a href="https://www.facebook.com/Onshoplk-113469750349042" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
							<i className="fa fa-instagram"></i>
						</a>

						<a href="https://www.pinterest.com/onshoplk/pins" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
							<i className="fa fa-pinterest-p"></i>
						</a>
					</div>
				</div>

				<div className="col-sm-6 col-lg-3 p-b-50">
					<h4 className="stext-301 cl0 p-b-30">
						Create Shop
					</h4>

					<form>
						<div className="wrap-input1 w-full p-b-4">
							<input className="input1 bg-none plh1 stext-107 cl7" type="text" name="email" placeholder="email@example.com"/>
							<div className="focus-input1 trans-04"></div>
						</div>

						<div className="p-t-18">
							<button href={footer.a3.t1} className="flex-c-m stext-101 cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04">
								send email
							</button>
						</div>
					</form>
				</div>
			</div>

			<div className="p-t-5">
				{/*<div className="flex-c-m flex-w p-b-18">
					<a href="#" className="m-all-1">
						<img src="images/icons/icon-pay-01.png" alt="ICON-PAY"/>
					</a>

					<a href="#" className="m-all-1">
						<img src="images/icons/icon-pay-02.png" alt="ICON-PAY"/>
					</a>

					<a href="#" className="m-all-1">
						<img src="images/icons/icon-pay-03.png" alt="ICON-PAY"/>
					</a>

					<a href="#" className="m-all-1">
						<img src="images/icons/icon-pay-04.png" alt="ICON-PAY"/>
					</a>

					<a href="#" className="m-all-1">
						<img src="images/icons/icon-pay-05.png" alt="ICON-PAY"/>
					</a>
		  </div>*/}

				<p className="stext-107 cl6 txt-center">
					{/** Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
Copyright &copy;All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
{/** Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}

				</p>
			</div>
		</div>
	</footer>


           
           );
      }
    
}

export default Index;