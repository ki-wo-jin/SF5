<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!-- 상품상세페이지(productDetail) -->

<div class="bg-light py-3" style="display: none;" id="alist">
	<div class="container">
		<div class="row">
			<div class="col-md-12 mb-0">
				<a href="main.do">Home</a> <span class="mx-2 mb-0">/</span>
				<strong class="text-black" id=inSt>Tank Top T-Shirt</strong>
			</div>
		</div>
	</div>
</div>

<div id="hlist"></div>

<div class="site-section" id="plist" style="display: none;">
	<div class="container">
		<div class="row">
			<div class="col-md-6">
				<img src="images/cloth_1.jpg" alt="Image" class="img-fluid" id="prdImg">
			</div>
			<div class="col-md-6">
				<h2 class="text-black" id="prdName">Tank Top T-Shirt</h2>
				<p id="prdContent">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Pariatur, vitae, explicabo? Incidunt facere, natus soluta dolores
					iusto! Molestiae expedita veritatis nesciunt doloremque sint
					asperiores fuga voluptas, distinctio, aperiam, ratione dolore.

				</p>
				<strong class="text-primary h4" id="price">$50.00</strong>
				<div class="mb-1 d-flex">
					<span class="d-inline-block text-black" id="size"> Extra Large</span>
				</div>
				<div class="mb-5">
					<div class="input-group mb-3" style="max-width: 120px;">
						<div class="input-group-prepend">
							<button class="btn btn-outline-primary js-btn-minus" type="button">&minus;</button>
						</div>
						<input type="text" class="form-control text-center" value="1" placeholder=""
							aria-label="Example text with button addon" aria-describedby="button-addon1" id="quantity">
						<div class="input-group-append">
							<button class="btn btn-outline-primary js-btn-plus" type="button">&plus;</button>
						</div>
					</div>

				</div>
				<p>
					<button class="buy-now btn btn-sm btn-primary">Save Product</button>
					<button class="buy-now btn btn-sm btn-primary">Add To Cart</button>
				</p>
			</div>
		</div>
		<!-- end of div. -->
	</div>
</div>

<div id="clist"></div>

<div class="site-section block-3 site-blocks-2 bg-light" style="display: none;">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-md-7 site-section-heading text-center pt-4">
				<h2>Featured Products</h2>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<div class="nonloop-block-3 owl-carousel">
					<div class="item">
						<div class="block-4 text-center">
							<figure class="block-4-image">
								<img src="images/cloth_1.jpg" alt="Image placeholder" class="img-fluid">
							</figure>
							<div class="block-4-text p-4">
								<h3>
									<a href="#">Tank Top</a>
								</h3>
								<p class="mb-0">Finding perfect t-shirt</p>
								<p class="text-primary font-weight-bold">$50</p>
							</div>
						</div>
					</div>
					<div class="item">
						<div class="block-4 text-center">
							<figure class="block-4-image">
								<img src="images/shoe_1.jpg" alt="Image placeholder" class="img-fluid">
							</figure>
							<div class="block-4-text p-4">
								<h3>
									<a href="#">Corater</a>
								</h3>
								<p class="mb-0">Finding perfect products</p>
								<p class="text-primary font-weight-bold">$50</p>
							</div>
						</div>
					</div>
					<div class="item">
						<div class="block-4 text-center">
							<figure class="block-4-image">
								<img src="images/cloth_2.jpg" alt="Image placeholder" class="img-fluid">
							</figure>
							<div class="block-4-text p-4">
								<h3>
									<a href="#">Polo Shirt</a>
								</h3>
								<p class="mb-0">Finding perfect products</p>
								<p class="text-primary font-weight-bold">$50</p>
							</div>
						</div>
					</div>
					<div class="item">
						<div class="block-4 text-center">
							<figure class="block-4-image">
								<img src="images/cloth_3.jpg" alt="Image placeholder" class="img-fluid">
							</figure>
							<div class="block-4-text p-4">
								<h3>
									<a href="#">T-Shirt Mockup</a>
								</h3>
								<p class="mb-0">Finding perfect products</p>
								<p class="text-primary font-weight-bold">$50</p>
							</div>
						</div>
					</div>
					<div class="item">
						<div class="block-4 text-center">
							<figure class="block-4-image">
								<img src="images/shoe_1.jpg" alt="Image placeholder" class="img-fluid">
							</figure>
							<div class="block-4-text p-4">
								<h3>
									<a href="#">Corater</a>
								</h3>
								<p class="mb-0">Finding perfect products</p>
								<p class="text-primary font-weight-bold">$50</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<script defer src="js/main.js"></script>
<script defer src="jsf5/kwj/productDetail.js"></script>
