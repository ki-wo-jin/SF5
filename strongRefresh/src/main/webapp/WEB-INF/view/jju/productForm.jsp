<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!-- 상품페이지(product) -->
<div class="bg-light py-3">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-0"><a href="index.html">Home</a> <span class="mx-2 mb-0">/</span> <strong class="text-black">Shop All</strong></div>
        </div>
      </div>
    </div>
    <div class="site-section">
      <div class="container">

        <div class="row mb-5">
          <div class="col-md-3 order-1 mb-5 mb-md-0">
            <div class="border p-4 rounded mb-4">
              <h3 class="mb-3 h6 text-uppercase text-black d-block">Categories</h3>
              <ul class="list-unstyled mb-0">
                <li class="mb-1"><a href="#" class="d-flex"><span>아직</span> <span class="text-black ml-auto">(0)</span></a></li>
                <li class="mb-1"><a href="#" class="d-flex"><span>미정</span> <span class="text-black ml-auto">(0)</span></a></li>
                <li class="mb-1"><a href="#" class="d-flex"><span>카테고리</span> <span class="text-black ml-auto">(0)</span></a></li>
                <li class="mb-1"><a href="#" class="d-flex"><span>넣어주셈</span> <span class="text-black ml-auto">(0)</span></a></li>
                <li class="mb-1"><a href="#" class="d-flex"><span>신발</span> <span class="text-black ml-auto">(0)</span></a></li>
                <li class="mb-1"><a href="#" class="d-flex"><span>모자</span> <span class="text-black ml-auto">(0)</span></a></li>
                <li class="mb-1"><a href="#" class="d-flex"><span>상의</span> <span class="text-black ml-auto">(0)</span></a></li>
                <li class="mb-1"><a href="#" class="d-flex"><span>하의</span> <span class="text-black ml-auto">(0)</span></a></li>
                <li class="mb-1"><a href="#" class="d-flex"><span>Children</span> <span class="text-black ml-auto">(0)</span></a></li>
                <li class="mb-1"><a href="#" class="d-flex"><span>Children</span> <span class="text-black ml-auto">(0)</span></a></li>
                <li class="mb-1"><a href="#" class="d-flex"><span>Children</span> <span class="text-black ml-auto">(0)</span></a></li>
                <li class="mb-1"><a href="#" class="d-flex"><span>Children</span> <span class="text-black ml-auto">(0)</span></a></li>
                <li class="mb-1"><a href="#" class="d-flex"><span>Children</span> <span class="text-black ml-auto">(0)</span></a></li>
                <li class="mb-1"><a href="#" class="d-flex"><span>Children</span> <span class="text-black ml-auto">(0)</span></a></li>
                <li class="mb-1"><a href="#" class="d-flex"><span>Children</span> <span class="text-black ml-auto">(0)</span></a></li>
                <li class="mb-1"><a href="#" class="d-flex"><span>Children</span> <span class="text-black ml-auto">(0)</span></a></li>
                <li class="mb-1"><a href="#" class="d-flex"><span>Children</span> <span class="text-black ml-auto">(0)</span></a></li>
                <li class="mb-1"><a href="#" class="d-flex"><span>Children</span> <span class="text-black ml-auto">(0)</span></a></li>
              </ul>
            </div>

          </div>
          <div class="col-md-9 order-2">
          
            
            <!-- 리스트 예시 -->
            <div class="row mb-5" id = "list" >
              <div class="col-sm-6 col-lg-4 mb-4" data-aos="fade-up" id = "clone" style = "display: none;">
                <div class="block-4 text-center border">
                  <figure class="block-4-image">
                    <a id = "a1"><img src="images/cloth_1.jpg" alt="Image placeholder" class="img-fluid" id = "listImg"></a>
                  </figure>
                  <div class="block-4-text p-4">
                    <h3><a id = "listName">Tank Top</a></h3>
                    <p class="mb-0" id = "listCategorie">t-shirt</p>
                    <p class="text-primary font-weight-bold" id = "listPrice">$50</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- 리스트 예시 끝 -->
            
            <!-- 페이징 시작 -->
            <div class="row" data-aos="fade-up">
              <div class="col-md-12 text-center">
                <div class="site-block-27">
                  <ul class = "pagination">
                    <li><a href="#">&lt;</a></li>
                    <li class="active"><span>1</span></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#">&gt;</a></li>
                  </ul>
                </div>
              </div>
            </div>
			<!-- 페이징 끝 -->
			
          </div>
        </div>
		        
      </div>
    </div>

<script src="jsf5/jju/productAjax.js"></script>

