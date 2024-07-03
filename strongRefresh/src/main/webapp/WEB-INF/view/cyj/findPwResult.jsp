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
	<div class="findPwResult">
		<h3>비밀번호 찾기</h3>
		<form name="findPwResult" action="loginForm.do">
			<p>비밀번호 찾기</p>
			<p id="findPwPath">
				<c:choose>
					<c:when test="${userEmail != null }">
						<h3>임시 비밀번호가 고객님 메일로 전송되었습니다.</h3>
						<p>${userId } 회원님, 임시 비밀번호를 ${userEmail }으로 보내드렸습니다. 고객님 즐거운
							쇼핑 하세요!</p>
					</c:when>

					<c:when test="${userPhone != null }">
						<h3>임시 비밀번호가 고객님 휴대폰 번호로 전송되었습니다.</h3>
						<p>${userId } 회원님, 임시 비밀번호를 ${userPhone }으로 보내드렸습니다. 고객님 즐거운
							쇼핑 하세요!
					</c:when>
				</c:choose>
			</p>
			<p>고객님의 비밀번호가 성공적으로 발송되었습니다. 항상 고객님의 즐겁고 편리한 쇼핑을 위해 최선의 노력을 다하는
				쇼핑몰이 되도록 하겠습니다.</p>
			<button type="submit">로그인</button>
		</form>
	</div>
</body>
</html>