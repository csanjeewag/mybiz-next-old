import React, { Component } from 'react';

class Index extends Component {

    componentDidMount(){

    }
    render() { 
        
          return ( 
            <div>
                {/** Shoping Cart */}
	<form className="bg0 p-t-75 p-b-85">
		<div className="container">
			<div className="row">
				<div className="col-lg-10 col-xl-7 m-lr-auto m-b-50">
					<div className="m-l-25 m-r--38 m-lr-0-xl">
						<div className="wrap-table-shopping-cart">
							<table className="table-shopping-cart">
								<tr className="table_head">
									<th className="column-1">Product</th>
									<th className="column-2"></th>
									<th className="column-3">Price</th>
									<th className="column-4">Quantity</th>
									<th className="column-5">Total</th>
								</tr>

								<tr className="table_row">
									<td className="column-1">
										<div className="how-itemcart1">
											<img className="lazyload" src="images/item-cart-04.jpg" alt="IMG"/>
										</div>
									</td>
									<td className="column-2">Fresh Strawberries</td>
									<td className="column-3">$ 36.00</td>
									<td className="column-4">
										<div className="wrap-num-product flex-w m-l-auto m-r-0">
											<div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
												<i className="fs-16 zmdi zmdi-minus"></i>
											</div>

											<input className="mtext-104 cl3 txt-center num-product" type="number" name="num-product1" value="1"/>

											<div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
												<i className="fs-16 zmdi zmdi-plus"></i>
											</div>
										</div>
									</td>
									<td className="column-5">$ 36.00</td>
								</tr>

								<tr className="table_row">
									<td className="column-1">
										<div className="how-itemcart1">
											<img className="lazyload" src="images/item-cart-05.jpg" alt="IMG"/>
										</div>
									</td>
									<td className="column-2">Lightweight Jacket</td>
									<td className="column-3">$ 16.00</td>
									<td className="column-4">
										<div className="wrap-num-product flex-w m-l-auto m-r-0">
											<div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
												<i className="fs-16 zmdi zmdi-minus"></i>
											</div>

											<input className="mtext-104 cl3 txt-center num-product" type="number" name="num-product2" value="1"/>

											<div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
												<i className="fs-16 zmdi zmdi-plus"></i>
											</div>
										</div>
									</td>
									<td className="column-5">$ 16.00</td>
								</tr>
							</table>
						</div>

						<div className="flex-w flex-sb-m bor15 p-t-18 p-b-15 p-lr-40 p-lr-15-sm">
							<div className="flex-w flex-m m-r-20 m-tb-5">
								<input className="stext-104 cl2 plh4 size-117 bor13 p-lr-20 m-r-10 m-tb-5" type="text" name="coupon" placeholder="Coupon Code"/>
									
								<div className="flex-c-m stext-101 cl2 size-118 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-5">
									Apply coupon
								</div>
							</div>

							<div className="flex-c-m stext-101 cl2 size-119 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-10">
								Update Cart
							</div>
						</div>
					</div>
				</div>

				<div className="col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50">
					<div className="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm">
						<h4 className="mtext-109 cl2 p-b-30">
							Cart Totals
						</h4>

						<div className="flex-w flex-t bor12 p-b-13">
							<div className="size-208">
								<span className="stext-110 cl2">
									Subtotal:
								</span>
							</div>

							<div className="size-209">
								<span className="mtext-110 cl2">
									$79.65
								</span>
							</div>
						</div>

						<div className="flex-w flex-t bor12 p-t-15 p-b-30">
							<div className="size-208 w-full-ssm">
								<span className="stext-110 cl2">
									Shipping:
								</span>
							</div>

							<div className="size-209 p-r-18 p-r-0-sm w-full-ssm">
								<p className="stext-111 cl6 p-t-2">
									There are no shipping methods available. Please double check your address, or contact us if you need any help.
								</p>
								
								<div className="p-t-15">
									<span className="stext-112 cl8">
										Calculate Shipping
									</span>

									<div className="rs1-select2 rs2-select2 bor8 bg0 m-b-12 m-t-9">
										<select className="js-select2" name="time">
											<option>Select a country...</option>
											<option>USA</option>
											<option>UK</option>
										</select>
										<div className="dropDownSelect2"></div>
									</div>

									<div className="bor8 bg0 m-b-12">
										<input className="stext-111 cl8 plh3 size-111 p-lr-15" type="text" name="state" placeholder="State /  country"/>
									</div>

									<div className="bor8 bg0 m-b-22">
										<input className="stext-111 cl8 plh3 size-111 p-lr-15" type="text" name="postcode" placeholder="Postcode / Zip"/>
									</div>
									
									<div className="flex-w">
										<div className="flex-c-m stext-101 cl2 size-115 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer">
											Update Totals
										</div>
									</div>
										
								</div>
							</div>
						</div>

						<div className="flex-w flex-t p-t-27 p-b-33">
							<div className="size-208">
								<span className="mtext-101 cl2">
									Total:
								</span>
							</div>

							<div className="size-209 p-t-1">
								<span className="mtext-110 cl2">
									$79.65
								</span>
							</div>
						</div>

						<button className="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer">
							Proceed to Checkout
						</button>
					</div>
				</div>
			</div>
		</div>
	</form>


    

            </div>
           );
      }
    
}

export default Index; 
