<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
  <!-- heart.jsp -->
  <style>
    #container {
      width: 1000px;
      margin: auto;
      text-align: center;
    }

    table {
      margin-left: auto;
      margin-right: auto;
    }
  </style>

  <div class="container">

    <div class="row mb-5">
      <form class="col-md-12" method="post">
        <div class="site-blocks-table">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th class="product-thumbnail"><input type="checkbox" id="checkbox"></th>
                <th class="product-name">이미지</th>
                <th class="product-price">상품명</th>
                <th class="product-quantity">판매가</th>
                <th class="product-total">선택</th>
              </tr>
            </thead>
            <tbody id="wishList">
              <c:forEach var="heart" items="${heartList }">
              <!-- <script>console.log(">>>>>>>>${heart.thumImage}")</script> -->
	              <tr data-id="${heart.productCode }" class="pcode">
	                <td class="product-thumbnail">
	                  <input type="checkbox" class="boxs">
	                </td>
	                <td class="product-thumbnail">
	                  <img src="images/${heart.thumImage }" alt="Image" class="img-fluid">
	                </td>
	                <td class="product-name">
	                  <h2 class="h5 text-black">${heart.productName }</h2>
	                </td>
	                <td>${heart.price }</td>
	                <td>	                  
	                  <a href="cart.do?productCode=${heart.productCode }" class="btn btn-primary btn-sm">카트담기</a><br>
	                  <br>
	                  <button type="button" class="deleteRowHeart">하트삭제</button>
	                  <!-- <button type="button" class="btn btn-primary btn-sm">하트삭제</button> -->
	                </td>
	              </tr>
              </c:forEach>
            </tbody>
          </table>
			    <input type="button" value="선택상품삭제" id="checkDelete" class="btn btn-warning btn-sm">
			    <input type="button" value="선택상품카트담기" id="checkCartPage" class="btn btn-warning btn-sm">
			    <input type="button" value="관심상품비우기" id="allHeartReset" class="btn btn-warning btn-sm">
        </div>
      </form>
    </div>
  </div>

<script src="jsf5/ygm/heart.js"></script>