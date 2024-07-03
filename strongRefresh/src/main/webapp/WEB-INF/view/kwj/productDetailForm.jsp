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
							aria-label="Example text with button addon" aria-describedby="button-addon1">
						<div class="input-group-append">
							<button class="btn btn-outline-primary js-btn-plus" type="button">&plus;</button>
						</div>
					</div>

				</div>
				<p>
					<button class="buy-now btn btn-sm btn-primary" type="button">찜</button>
					<button class="buy-now btn btn-sm btn-primary" type="button">카트에 담기</button>
				</p>
			</div>
		</div>
		<!-- end of div. -->
	</div>
</div>

<div id="clist"></div>


<script defer src="js/main.js"></script>
<script defer src="jsf5/kwj/productDetail.js"></script>
