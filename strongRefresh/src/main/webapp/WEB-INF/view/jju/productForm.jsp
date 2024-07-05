<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
  <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

    <!-- 상품페이지(product) -->
    <div class="bg-light py-3">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-0"><a href="index.html">Home</a> <span class="mx-2 mb-0">/</span> <strong
              class="text-black">Shop All</strong></div>
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
                <li class="mb-1"><a href="#" class="d-flex"><span>outers</span>
                    <span class="text-black ml-auto">(0)</span></a></li>
                <li class="mb-1"><a href="#" class="d-flex"><span>tees</span>
                    <span class="text-black ml-auto">(0)</span></a></li>
                <li class="mb-1"><a href="#" class="d-flex"><span>tops</span>
                    <span class="text-black ml-auto">(0)</span></a></li>
                <li class="mb-1"><a href="#" class="d-flex"><span>beleros</span>
                    <span class="text-black ml-auto">(0)</span></a></li>
                <li class="mb-1"><a href="#" class="d-flex"><span>knits</span>
                    <span class="text-black ml-auto">(0)</span></a></li>
                <li class="mb-1"><a href="#" class="d-flex"><span>bottoms</span>
                    <span class="text-black ml-auto">(0)</span></a></li>
                <li class="mb-1"><a href="#" class="d-flex"><span>dresses</span>
                    <span class="text-black ml-auto">(0)</span></a></li>
                <li class="mb-1"><a href="#" class="d-flex"><span>bags</span>
                    <span class="text-black ml-auto">(0)</span></a></li>
                <li class="mb-1"><a href="#" class="d-flex"><span>shoes</span>
                    <span class="text-black ml-auto">(0)</span></a></li>
              </ul>
            </div>

          </div>
          <div class="col-md-9 order-2">

            <!-- 리스트 예시 -->
            <div class="row mb-5" id="list">
            <c:forEach var="prd" items="${list }">
              <div class="col-sm-6 col-lg-4 mb-4" data-aos="fade-up">
                <div class="block-4 text-center border">
                  <figure class="block-4-image">
                    <a id="a1" href="productDetail.do?code=${prd.productCode}"><img src="images/${prd.thumImage }" alt="Image placeholder" class="img-fluid" id="listImg"></a>
                  </figure>
                  <div class="block-4-text p-4">
                    <h3><a id="listName">${prd.productName }</a></h3>
                    <p class="mb-0" id="listCategorie">${prd.categorie }</p>
                    <p class="text-primary font-weight-bold" id="listPrice">${prd.price }원</p>
                  </div>
                </div>
              </div>
            </c:forEach>
            </div>
            <!-- 리스트 예시 끝 -->
<p>${paging }</p>
            <!-- 페이징 시작 -->
            <div class="row" data-aos="fade-up">
              <div class="col-md-12 text-center">
                <div class="site-block-27">
                  <ul class="pagination">

                    <c:if test="productForm.do?category=${category }&page=${paging.startPage-1 }">
                    <li><a href="#">&lt;</a></li>
                    </c:if>

                    <c:forEach var="pg" begin="${paging.startPage }" end="${paging.endPage }">
                      <c:choose>
                        <c:when test="${paging.page == pg }">
                          <li class="active"><span>${pg }</span></li>
                        </c:when>
                        <c:otherwise>
                          <li><a href="productForm.do?category=${category }&page=${pg }">${pg }</a></li>
                        </c:otherwise>
                      </c:choose>
                    </c:forEach>

                    <c:if test="${paging.next }">
                    <li><a href="productForm.do?category=${category }&page=${paging.endPage+1 }">&gt;</a></li>
                    </c:if>

                  </ul>
                </div>
              </div>
            </div>
            <!-- 페이징 끝 -->

          </div>
        </div>

      </div>
    </div>

    <!-- <script src="jsf5/jju/productAjax.js"></script> -->