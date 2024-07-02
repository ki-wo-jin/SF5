<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
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
  <h3>CART</h3>

    <div class="row mb-5">
      <form class="col-md-12" method="post">
        <div class="site-blocks-table">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th class="product-thumbnail"><input type="checkbox" id="checkbox"></th>
                <th class="product-name">Product</th>
                <th class="product-price">Price</th>
                <th class="product-quantity">Quantity</th>
                <th class="product-charge">Charge</th>
                <th class="product-total">Total</th>
                <th class="product-delete">Delete</th>
              </tr>
            </thead>
            <tbody id="cartList">
<%--               <c:forEach var="heart" items="${heartList }">
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
              </c:forEach> --%>
            </tbody>
          </table>
			    <input type="button" value="선택상품삭제" id="checkDelete" class="btn btn-warning btn-sm">
			    <input type="button" value="장바구니비우기" id="allHeartReset" class="btn btn-warning btn-sm">
        </div>
	    <table>
        <thead>
          <tr>	    		
            <th>총 상품금액</th><th>총 배송비</th><th>결제예정금액</th>	    		
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>KRW 10,000</td> <td>+ KRW 0</td><td>= KRW 10,000</td>
          </tr>
        </tbody>
	    </table>
      <input type="button" id="buyAllBtn" value="Buy All">
      <input type="button" id="buySelectBtn" value="Buy Select">
      </form>
    </div>
  </div>

<script src="jsf5/ygm/cart.js"></script>