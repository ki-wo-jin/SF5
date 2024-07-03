<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<header class="site-navbar" role="banner">


	<div class="site-navbar-top">
		<div class="container">
			<div class="row align-items-center">

				<div
					class="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">
					<form action="" class="site-block-top-search">
						<span class="icon icon-search2"></span> <input type="text"
							class="form-control border-0" placeholder="Search">
					</form>
				</div>

				<div
					class="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center">
					<a href="main.do"><img src="images/LumoldeMo.png"
						alt="LuMol de mo" class="logo_f5 " width="150px"></a>
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
								class="site-menu-toggle js-menu-toggle"><span
									class="icon-menu"></span></a></li>
						</ul>
					</div>
				</div>

			</div>
		</div>
	</div>




	<!-- 네비 끝 -->

	<nav class="site-navigation text-right text-md-center"
		role="navigation">
		<div class="container">
			<ul class="site-menu js-clone-nav d-none d-md-block">
				<li><a href="shop.html">new</a></li>
				<li class="has-children active"><a href="productForm.do">shop all</a>
					<ul class="dropdown">
						<li class="has-children"><a href="#">best things</a>
							<ul class="dropdown">
								<li><a href="#">Menu One</a></li>
								<li><a href="#">Menu Two</a></li>
								<li><a href="#">Menu Three</a></li>
							</ul>
						<li class="has-children"><a href="#">best things</a>
							<ul class="dropdown">
								<li><a href="#">Menu One</a></li>
								<li><a href="#">Menu Two</a></li>
								<li><a href="#">Menu Three</a></li>
							</ul>
						</li>
						<li class="has-children"><a href="#">best things</a>
							<ul class="dropdown">
								<li><a href="#">Menu One</a></li>
								<li><a href="#">Menu Two</a></li>
								<li><a href="#">Menu Three</a></li>
							</ul>
					</ul></li>
				<li><a href="about.html">album</a></li>
				<li><a href="#">info</a></li>
				<li><a href="contact.html">Contact</a></li>
			</ul>
		</div>
	</nav>
</header>