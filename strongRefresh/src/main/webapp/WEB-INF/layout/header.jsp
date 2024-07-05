<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
	<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

		<header class="site-navbar" role="banner">


			<div class="site-navbar-top">
				<div class="container">
					<div class="row align-items-center">

						<div class="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">
							<form action="" class="site-block-top-search">
								<span class="icon icon-search2"></span> <input type="text" class="form-control border-0"
									placeholder="Search">
							</form>
						</div>

						<div class="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center">
							<a href="main.do"><img src="images/LumoldeMo.png" alt="LuMol de mo" class="logo_f5 "
									width="150px"></a>
						</div>

						<div class="col-6 col-md-4 order-3 order-md-3 text-right">
							<div class="site-top-icons">
								<ul>

									<!-- 로그인 값 없으면 로그인페이지로 -->
									<c:choose>
										<c:when test="${empty id }">
											<li><a href="loginForm.do"><span class="icon icon-person"></span></a></li>
										</c:when>
										<c:otherwise>
											<li><a href="mypage.do"><span class="icon icon-person"></span></a></li>
										</c:otherwise>
									</c:choose>


									<li><a href="heart.do"><span class="icon icon-heart-o"></span></a></li>
									<li><a href="cart.do" class="site-cart"> <span
												class="icon icon-shopping_cart"></span> <span class="count">2</span>
										</a></li>
									<li class="d-inline-block d-md-none ml-md-0"><a href="#"
											class="site-menu-toggle js-menu-toggle"><span class="icon-menu"></span></a>
									</li>
								</ul>
							</div>
						</div>

					</div>
				</div>
			</div>

			<!-- 네비 끝 -->

			<nav class="site-navigation text-right text-md-center" role="navigation">
				<div class="container">
					<ul class="site-menu js-clone-nav d-none d-md-block">

						<li><a href="#">NEW</a></li>

						<li class="has-children active"><a href="productForm.do">BEST</a>
							<ul class="dropdown">
								<li><a href="#">All Whites</a>
								<li><a href="#">All Blacks</a>
							</ul>
						</li>

						<li class="has-children active"><a href="about.html">SHOP</a>
							<ul class="dropdown">
								<li class="has-children"><a href="#">ALL</a>
									<ul class="dropdown">
										<li><a href="#">outers</a></li>
										<li><a href="#">tees</a></li>
										<li><a href="#">tops</a></li>
										<li><a href="#">boleros</a></li>
										<li><a href="#">knits</a></li>
										<li><a href="#">bottoms</a></li>
										<li><a href="#">dresses</a></li>
										<li><a href="#">bags</a></li>
										<li><a href="#">shoes</a></li>
									</ul>
								<li class="has-children"><a href="#">UNISEX</a>
									<ul class="dropdown">
										<li><a href="#">outers</a></li>
										<li><a href="#">tees</a></li>
										<li><a href="#">tops</a></li>
										<li><a href="#">knits</a></li>
										<li><a href="#">bottoms</a></li>
									</ul>
								</li>
								<li class="has-children"><a href="#">HOME</a>
									<ul class="dropdown">
										<li><a href="#">bras</a></li>
										<li><a href="#">underwear</a></li>
										<li><a href="#">lounges</a></li>
									</ul>
							</ul>
						</li>

						<li><a href="#">ALBUM</a></li>

						<li class="has-children active"><a href="#">INFO</a>
							<ul class="dropdown">
								<li><a href="#">Q&A</a>
								<li><a href="#">REVIEW</a>
							</ul>
						</li>

					</ul>
				</div>
			</nav>
		</header>