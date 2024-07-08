<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<link rel="stylesheet" href="cssf5/cyj/findPwResult.css">


<div class="findPwResult-wrapper">
	<h2>비밀번호 찾기</h2>

	<form name="findPwResult" action="loginForm.do" id="findPwResult-form">

		<div id="findPwPath">
			<c:choose>
				<c:when test="${userEmail != null }">
					<p>임시 비밀번호가 고객님 메일로 전송되었습니다.</p>
					<label>${userId } 회원님,</br>임시 비밀번호를 ${userEmail } 으로 보내드렸습니다.</br>
						고객님 즐거운 쇼핑 하세요!
					</label>
				</c:when>

				<c:when test="${userPhone != null }">
					<p>임시 비밀번호가 고객님 휴대폰 번호로 전송되었습니다.</p>
					<label>${userId } 회원님,</br>임시 비밀번호를 ${userPhone } 으로 보내드렸습니다.</br>
						고객님 즐거운 쇼핑 하세요!
					</label>
				</c:when>
			</c:choose>
		</div>

		<div class="goodShopping">
			고객님의 비밀번호가 성공적으로 발송되었습니다.</br> 즐겁고 편리한 쇼핑을 위해 최선의 노력을 다하는 쇼핑몰이 되도록 하겠습니다.
		</div>

		<button type="submit">로그인</button>
	</form>
</div>


