<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<div class="site-wrap">
	<div class="site-section">
		<div class="container">
			<div class="col-md-12">
				<h6 class="h6 mb-3 text-black">주문 내역</h6>
				<div class="p-3 p-lg-5 border">
					<table class="table site-block-order-table mb-5">
						<thead>
							<tr>
								<th>Product</th>
								<th>Price</th>
								<th>Quantity</th>
								<th>Point</th>
								<th>Total</th>
							</tr>
						</thead>
						<tbody>
							<c:forEach var="order" items="${orderDetailList}">
								<tr>
									<td><img src="images/${order.thumImage}" alt="${order.productName}" width="50">	${order.productName}</td>
									<td>${order.price}</td>
									<td>${order.productCnt}</td>
									<td>${order.point}</td>
									<td>KRW ${order.totalPrice}</td>
								</tr>
							</c:forEach>
						</tbody>
					</table>
				</div>

				<div class="d-flex justify-content-between mb-4">
					<div>
						<strong>합계 : <span style="color: black;" id="totalPrice">KRW
								 <c:set var="totalSum" value="0" />
                                <c:forEach var="order" items="${orderDetailList}">
                                    <c:set var="totalSum" value="${totalSum + order.totalPrice}" />
                                </c:forEach>
                                ${totalSum}</span></strong>
					</div>
				</div>

				<h6 class="h6 mb-3 text-black">배송 정보</h6>
				<div class="p-3 p-lg-5 border">
					<div class="form-group">
						<label for="deliveryOption" class="text-black">배송지 선택</label>
						<div>
							<label><input type="radio" name="deliveryOption"
								value="sameAsUser" checked> 회원 정보와 동일</label> <label><input
								type="radio" name="deliveryOption" value="newAddress">
								새로운 배송지</label>
						</div>
					</div>

					<div class="form-group">
						<label for="recipient" class="text-black">받으시는 분</label> <input
							type="text" class="form-control" id="recipient" name="recipient"
							value="" required>
					</div>

					<div class="form-group">
						<label for="phone" class="text-black">휴대전화</label>
						<div class="row">
							<div class="col-md-3">
								<select id="phone1" class="form-control">
									<option value="010">010</option>
									<option value="011">011</option>
									<option value="016">016</option>
									<option value="017">017</option>
									<option value="018">018</option>
									<option value="019">019</option>
								</select>
							</div>
							<div class="col-md-4">
								<input type="text" class="form-control" id="phone2"
									name="phone2" value="">
							</div>
							<div class="col-md-4">
								<input type="text" class="form-control" id="phone3"
									name="phone3" value="">
							</div>
						</div>
					</div>

					<div class="form-group">
						<label for="address" class="text-black">주소</label> <br>
						<button type="button" class="btn btn-dark btn-sm"
							onclick="sample4_execDaumPostcode()">우편번호 찾기</button>
						<br> <br> <input type="text" class="form-control"
							id="postalCode" name="postalCode" placeholder="우편번호"> <input
							type="text" class="form-control mt-2" id="address" name="address"
							placeholder="기본주소"> <span id="guide"
							style="color: #999; display: none"></span> <input type="text"
							class="form-control mt-2" id="addressDetail" name="addressDetail"
							placeholder="상세주소"> <input type="text"
							class="form-control mt-2" id="reference" name="reference"
							placeholder="참고항목">
					</div>

					<div class="form-group">
						<label for="email" class="text-black">이메일</label>
						<div class="row">
							<div class="col-md-3">
								<input type="text" class="form-control" id="emailUser"
									name="emailUser" value="">
							</div>
							<div class="col-md-3">
								<input type="text" class="form-control" id="domain-txt"
									name="domain-txt" value="">
							</div>
							<div class="col-md-3">
								<select id="emailDomain" class="form-control">
									<option value="type">직접입력</option>
									<option value="naver.com">naver.com</option>
									<option value="daum.net">daum.net</option>
									<option value="nate.com">nate.com</option>
									<option value="hotmail.com">hotmail.com</option>
									<option value="yahoo.com">yahoo.com</option>
									<option value="gmail.com">gmail.com</option>
								</select>
							</div>
						</div>
					</div>

					<div class="form-group">
						<label for="deliveryMessage" class="text-black">배송메시지</label>
						<textarea name="deliveryMessage" id="deliveryMessage" cols="30"
							rows="5" class="form-control" placeholder="배송메시지를 입력해주세요."></textarea>
					</div>
				</div>

				<div class="row mb-5">
					<div class="col-md-12">
						<br>
						<h6 class="h6 mb-4 text-black">결제 예정 금액</h6>
						<div class="p-3 p-lg-5 border">
							<div class="row">
								<div class="col-md-6">
									<span class="text-black">총 주문 금액: </span>
								</div>
								<div class="col-md-6 text-right">
									<strong id="orderTotal">KRW  
									<c:set var="totalSum" value="0" />
                                <c:forEach var="order" items="${orderDetailList}">
                                    <c:set var="totalSum" value="${totalSum + order.totalPrice}" />
                                </c:forEach>
                                ${totalSum}</strong>
								</div>
							</div>
							<div class="row">
								<div class="col-md-6">
									<span class="text-black">총 할인:</span>
								</div>
								<div class="col-md-6 text-right">
									<strong id = "usePoint">- KRW
									 <c:set var="totalSum" value="0" />
                                <c:forEach var="order" items="${orderDetailList}">
                                    <c:set var="totalSum" value="${order.point}" />
                                </c:forEach>
                                ${totalSum} </strong>
								</div>
							</div>
							<div class="row">
								<div class="col-md-6">
									<span class="text-black">총 결제 예정 금액:</span>
								</div>
								<div class="col-md-6 text-right">
									<strong id="finalTotal">KRW
									  <c:set var="totalSum" value="0" />
                                <c:forEach var="order" items="${orderDetailList}">
                                    <c:set var="totalSum" value="${totalSum + order.totalPrice - order.point}" />
                                </c:forEach>
                                ${totalSum}</strong>
								</div>
							</div>
							<br>
							<div class="form-group">
								<button class="btn btn-dark btn-lg py-3 btn-block" id="payment">주문하기</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div id="userJson" style="display: none;">${userJson}</div>

<script src="jsf5/khs/order.js"></script>
<script src="jsf5/khs/userinfo.js"></script>
<script src="jsf5/khs/address.js"></script>
<script	src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
