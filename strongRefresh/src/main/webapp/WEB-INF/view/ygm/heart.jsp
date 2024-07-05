<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<script
	src="https://cdn.jsdelivr.net/npm/sweetalert2@11.12.1/dist/sweetalert2.all.min.js"></script>
<link
	href="https://cdn.jsdelivr.net/npm/sweetalert2@11.12.1/dist/sweetalert2.min.css"
	rel="stylesheet">

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
	font-size: 15px;
}

p {
	color: rgb(226, 119, 119);
	margin: 100px 100px;
}

#selectBtn input{
	padding: 5px 10px;
	background: rgb(235, 169, 169);
	color: white;
}

#sideBtn a, button{
	background-color: rgb(193, 224, 214);
	color: rgb(74, 72, 72);
}

</style>

<div class="container">
	<h6>WISH LIST</h6>
	<c:choose>
		<c:when test="${!empty id}"> <!-- 로그인이 되어있을 때 -->
			<div class="row mb-5">
				<form class="col-md-12" method="post">
					<div class="site-blocks-table">
						<table class="table table-bordered">
							<thead>
								<tr>
									<th class="product-thumbnail"><input type="checkbox" id="checkbox"></th>
									<th style="font-size: 16px;" class="product-name">image</th>
									<th style="font-size: 16px;" class="product-price">information</th>
									<th style="font-size: 16px;" class="product-quantity">price</th>
									<th style="font-size: 16px;" class="product-total">select</th>
								</tr>
							</thead>

							<tbody id="wishList">
								<c:forEach var="heart" items="${heartList }">
									<!-- <script>console.log(">>>>>>>>${heart.thumImage}")</script> -->
									<tr data-id="${heart.productCode }" class="pcode">
										<td class="product-thumbnail"><input type="checkbox" class="boxs"></td>
										<td class="product-thumbnail"><img src="images/${heart.thumImage }" alt="Image"	class="img-fluid"></td>
										<td class="product-name"> <h2 class="h5 text-black" style="font-size: 15px">${heart.productName }&emsp;${heart.productSize }&emsp;${heart.color }</h2></td>
										<%-- <td class="product-size"> ${heart.productSize }</td> --%>
										<td>KRW ${heart.price }</td>
										<td id="sideBtn">
											<a onclick="addCart(event)" class="btn btn-sm" style="font-size: 13px;">카트담기</a><br>
											<br>
											<button type="button" class="deleteRowHeart btn btn-sm" style="font-size: 14px;">하트삭제</button>
										</td>
									</tr>
								</c:forEach>
							</tbody>

						</table>
						<div id="selectBtn">
							<input type="button" value="선택상품삭제" id="checkDelete" class="btn btn-sm">
							<input type="button" value="선택상품카트담기" id="checkCartPage" class="btn btn-sm">
							<input type="button" value="관심상품비우기" id="allHeartReset" class="btn btn-sm">
						</div>
					</div>
				</form>
			</div>
		</c:when>
		<c:otherwise>
			<p style="text-align: center;">로그인을 해주세요.</p>
		</c:otherwise>
	</c:choose>
</div>
<script src="jsf5/ygm/heart.js"></script>