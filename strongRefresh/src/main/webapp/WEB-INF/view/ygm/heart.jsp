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

table {
	margin-left: auto;
	margin-right: auto;
}

p {
	color: rgb(226, 119, 119);
	margin: 100px 100px;
}
</style>

<div class="container">
	<h3>HEART</h3>
	<c:choose>
		<c:when test="${!empty id}"> <!-- 로그인이 되어있을 때 -->
			<div class="row mb-5">
				<form class="col-md-12" method="post">
					<div class="site-blocks-table">
						<table class="table table-bordered">
							<thead>
								<tr>
									<th class="product-thumbnail"><input type="checkbox"
										id="checkbox"></th>
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
										<td class="product-thumbnail"><input type="checkbox"
											class="boxs"></td>
										<td class="product-thumbnail"><img
											src="images/${heart.thumImage }" alt="Image"
											class="img-fluid"></td>
										<td class="product-name">
											<h2 class="h5 text-black" style="font-size: 16px">${heart.productName }</h2>
										</td>
										<td>${heart.price }원</td>
										<td><a onclick="addCart(event)"
											class="btn btn-primary btn-sm" style="color: white">카트담기</a><br>
											<br>
											<button type="button"
												class="deleteRowHeart btn btn-primary btn-sm">하트삭제</button>
										</td>
									</tr>
								</c:forEach>
							</tbody>

						</table>
						<input type="button" value="선택상품삭제" id="checkDelete"
							class="btn btn-warning btn-sm"> <input type="button"
							value="선택상품카트담기" id="checkCartPage"
							class="btn btn-warning btn-sm"> <input type="button"
							value="관심상품비우기" id="allHeartReset" class="btn btn-warning btn-sm">
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