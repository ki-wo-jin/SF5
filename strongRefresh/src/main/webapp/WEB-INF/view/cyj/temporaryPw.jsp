<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<link rel="stylesheet" href="cssf5/cyj/findPwResult.css">

	<div class="findPwTemporary-wrapper">
		<h2>임시 비밀번호</h2>
		<h3>임시 비밀번호 전송</h3>

		<form name="findPwTempFrm" action="findPwResult.do" method="post" id="findPwTemp-form">
			
				<c:choose>
				
					<c:when test="${userEmail != '' }">
					<div class="emailPath">
						<input name="userId" type="hidden" value="${userId }">
						<input name="userEmail" type="hidden" value="${userEmail }">
						<label for="tempPw">임시 비밀번호 : </label>
						<label for="checkEmail"> <input type="radio" name="findPath" value="email" checked> 이메일</label>
						
						<label for="userEmail">이메일 : ${userEmail }</label>
					</div>
					</c:when>
					
					<c:when test="${userPhone != ''}">
					<div class="phonePath">
						<input name="userId" type="hidden" value="${userId }">
						<input name="userPhone" type="hidden" value="${userPhone }">
						<label for="tempPw">임시 비밀번호 : </label>
						<label for="checkPhone"> <input type="radio" name="findPath" value="phone" checked> 휴대폰</label>
						
						<label for="userPhone">휴대폰 : ${userPhone }</label>
					</div>
					</c:when>
					
				</c:choose>

			
			<button type="submit" id="submitBtn">임시 비밀번호 전송</button>
			<button id="cancle">취소</button>
			
		</form>

	</div>




<!--
			<ul>
				<c:choose>
					<c:when test="${userEmail != '' }">
						<li class="emailPath">
						<input name="userId" type="hidden" value="${userId }">
						<input name="userEmail" type="hidden" value="${userEmail }">
						<strong>임시 비밀번호 : </strong><input type="radio" name="findPath" value="email" checked>이메일</li>
						<li><strong>이메일 : ${userEmail }</strong></li>
					</c:when>
					<c:when test="${userPhone != ''}">
						<li class="phonePath">
						<input name="userId" type="hidden" value="${userId }">
						<input name="userPhone" type="hidden" value="${userPhone }">
						<strong>임시 비밀번호 : </strong><input type="radio" name="findPath" value="phone" checked>휴대폰</li>
						<li><strong>휴대폰 번호 : ${userPhone }</strong>
						</li>
					</c:when>
				</c:choose>
			</ul>
-->


<script>
	console.log('${userPhone }')
	console.log('${userEmail }')
	let cancleBtn = document.getElementById('cancle');

	cancleBtn.addEventListener('click', function() {
		//임시 비밀번호 전송일 경우에는 findPwResult.do
		//취소버튼일 경우에는 action = "main.do"
		document.forms.findPwTempFrm.action = "main.do"
	})
</script>