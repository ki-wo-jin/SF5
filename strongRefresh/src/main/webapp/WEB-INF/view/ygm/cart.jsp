<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!-- heart.jsp -->
<style>
	body {
		font-family: "바탕", Batang;
	}
	
	#container {
		width: 1000px;
		margin: auto;
		text-align: center;	
	}
	
	h6{
		font-family: "바탕", Batang;
		color: rgb(88, 88, 88);
		font-weight: 600;
		letter-spacing: -0.0001em;
	}
	
	table {
		margin-left: auto;
		margin-right: auto;
	}
	
	#cartList{
		font-size: 15px;
	}
	
	p {
		color: rgb(226, 119, 119);
		margin: 100px 100px;
		text-align: center;
	}
	
	#buyBtn {
		text-align: center;
	}
	
	#checkBtn input{
		padding: 5px 10px;
		background: rgb(235, 169, 169);
		color: white;
	}
	
	th{
		color: gray;
	}
	
	#delTr td{
		color: rgb(219, 133, 133);
	}
</style>

<div class="container">
	<h6>CART</h6>
	<c:choose>
		<c:when test="${!empty id}">
			<div class="row mb-5">
				<form class="col-md-12" method="post">
					<div class="site-blocks-table">
						<table class="table table-bordered">
							<thead>
								<tr>
									<th class="product-thumbnail"><input type="checkbox" id="checkbox"></th>
									<th class="product-name">image</th>
									<th class="product-information">information</th>
									<th class="product-price">price</th>
									<th class="product-quantity">quantity</th>
									<th class="product-charge">charge</th>
									<th class="product-delete">delete</th>
								</tr>
							</thead>
							<tbody id="cartList">
								<c:forEach var="cart" items="${cartList }">
									<tr data-id="${cart.cartCode }" class="cartCode">
										<td class="checkbox"><input type="checkbox" class="boxs"></td>
										<td class="product-thumbnail product-name"><img src="images/${cart.thumImage }" alt="Image" class="img-fluid"><h2 class="h5 text-black" style="font-size: 15px">${cart.productName }</h2></td>
										<td id="price">KRW ${cart.price}</td>
										
										<td><input type="number" min="0" max="10" value="${cart.productCnt }" class="counter"></td>
										
										<td><c:out value="${cart.price >= 50000 ? '무료배송' : 'KRW 3,000'}" /></td>
										<td>
											<button type="button" class="deleteCartRow btn btn-sm">X</button>
										</td>
									</tr>
								</c:forEach>
							</tbody>
						</table>
						<div id="checkBtn">
							<input type="button" value="선택상품삭제" id="checkDelete" class="btn btn-sm">
							<input type="button" value="장바구니비우기" id="resetCart" class="btn btn-sm">
						</div><br>
					</div>
					<table>
						<thead>
							<tr>
								<th>총 상품금액&emsp;&emsp;&emsp;</th>
								<th> 총 배송비&emsp;&emsp;&emsp;</th>
								<th>결제예정금액</th>
							</tr>
						</thead>
						<tbody id="totalContainer">
							<%-- <tr id="oldTr">
								<c:set var="total" value="0" />
								<c:forEach var="cart" items="${cartList}" varStatus="status">
									<c:set var= "total" value="${total + (cart.price * cart.productCnt)}"/>
								</c:forEach>									
								<td>KRW ${total}</td>
								<c:set var="charge" value="${total >= 50000 ? 0 : 3000}" />
								<td>+ KRW ${charge}</td>
								<td>= KRW ${total + charge}</td>
							</tr> --%>
						</tbody>
					</table><br>
					<div id="buyBtn">
						<input type="button" id="buyAllBtn" value="Buy All">
						<input type="button" id="buySelectBtn" value="Buy Select">
					</div>
				</form>
			</div>
		</c:when>
		<c:otherwise>
			<p>로그인을 해주세요.</p>
		</c:otherwise>
	</c:choose>
</div>

<script src="jsf5/ygm/cart.js"></script>