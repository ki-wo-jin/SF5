<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

	<div class="findPwTemporary">
		<h3>비밀번호 찾기</h3>

		<form name="findPwTempFrm" action="findPwResult.do" method="post">
			<p>임시 비밀번호 전송</p>

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

			<button type="submit">임시 비밀번호 전송</button>
			<button id="cancle">취소</button>
		</form>

	</div>

</body>
</html>

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