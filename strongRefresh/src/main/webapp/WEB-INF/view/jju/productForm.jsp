<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
  <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

    <!-- 상품페이지(product) -->
    <div class="bg-light py-3">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-0"><a href="index.html">Home</a> <span class="mx-2 mb-0">/</span> <strong
              class="text-black" >${category }</strong></div>
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
				<c:choose>
					<c:when test="${category == 'BRAS' || category == 'UNDERWEAR' || category == 'LOUNGES'}">
		                <li class="mb-1"><a href="BRAS" class="d-flex"><span>bras</span>
		                <span class="text-black ml-auto" id="BRAS">(0)</span></a></li>
		                <li class="mb-1"><a href="UNDERWEAR" class="d-flex"><span>underwear</span>
		                <span class="text-black ml-auto" id="UNDERWEAR">(0)</span></a></li>
		                <li class="mb-1"><a href="LOUNGES" class="d-flex"><span>lounges</span>
		                <span class="text-black ml-auto" id="LOUNGES">(0)</span></a></li>
					</c:when>
					<c:when test="${category == 'UOUTERS' || category == 'UTEES' || category == 'UTOPS' || category == 'UKNITS' || category == 'UBOTTOMS'}">
		                <li class="mb-1"><a href="UOUTERS" class="d-flex"><span>u-outers</span>
		                <span class="text-black ml-auto" id="UOUTERS">(0)</span></a></li>
		                <li class="mb-1"><a href="UTEES" class="d-flex"><span>u-tees</span>
		                <span class="text-black ml-auto" id="UTEES">(0)</span></a></li>
		                <li class="mb-1"><a href="UTOPS" class="d-flex"><span>u-tops</span>
		                <span class="text-black ml-auto" id="UTOPS">(0)</span></a></li>
		                <li class="mb-1"><a href="UKNITS" class="d-flex"><span>u-knits</span>
		                <span class="text-black ml-auto" id="UKNITS">(0)</span></a></li>
		                <li class="mb-1"><a href="UBOTTOMS" class="d-flex"><span>u-bottoms</span>
		                <span class="text-black ml-auto" id="UBOTTOMS">(0)</span></a></li>
					</c:when>
					<c:otherwise>
		                <li class="mb-1"><a href="OUTERS" class="d-flex"><span>outers</span>
		                <span class="text-black ml-auto" id="OUTERS">(0)</span></a></li>
		                <li class="mb-1"><a href="TEES" class="d-flex"><span>tees</span>
		                <span class="text-black ml-auto" id="TEES">(0)</span></a></li>
		                <li class="mb-1"><a href="TOPS" class="d-flex"><span>tops</span>
		                <span class="text-black ml-auto" id="TOPS">(0)</span></a></li>
		                <li class="mb-1"><a href="BOLEROS" class="d-flex"><span>boleros</span>
		                <span class="text-black ml-auto" id="BOLEROS">(0)</span></a></li>
		                <li class="mb-1"><a href="KNITS" class="d-flex"><span>knits</span>
		                <span class="text-black ml-auto" id="KNITS">(0)</span></a></li>
		                <li class="mb-1"><a href="BOTTOMS" class="d-flex"><span>bottoms</span>
		                <span class="text-black ml-auto" id="BOTTOMS">(0)</span></a></li>
		                <li class="mb-1"><a href="DRESSES" class="d-flex"><span>dresses</span>
		                <span class="text-black ml-auto" id="DRESSES">(0)</span></a></li>
		                <li class="mb-1"><a href="BAGS" class="d-flex"><span>bags</span>
		                <span class="text-black ml-auto" id="BAGS">(0)</span></a></li>
		                <li class="mb-1"><a href="SHOES" class="d-flex"><span>shoes</span>
		                <span class="text-black ml-auto" id="SHOES">(0)</span></a></li>
					</c:otherwise>
				</c:choose>
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
<!--  <p>${paging }</p> -- >
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

 <script defer src="jsf5/kwj/cnt.js"></script>
