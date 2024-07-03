<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<div class="findPw">
		<h3>비밀번호 찾기</h3>
		<form name="findPwFrm" action=temporaryPw.do method="post">
			<table>
				<p>비밀번호찾기</p>
				<tr>
					<th>인증방법</th>
					<td><input type="radio" name="findPath" value="email" checked>이메일
						<input type="radio" name="findPath" value="phone">휴대폰번호</td>
				</tr>
				<tr>
					<th>아이디</th>
					<td><input type="text" id="userId" name="userId"></td>
				</tr>
				<tr>
					<th>이름</th>
					<td><input type="text" id="userName" name="userName"></td>
				</tr>
				<div class="printFindPath">
					<tr id="printEmailPath" style="display: table-row">
						<th>이메일로 찾기</th>
						<td><input type="text" id="userEmail" name="userEmail"></td>
					</tr>
					<tr id="printPhonePath" style="display: none">
						<!-- display:none = 값은 넘어온다. 보이지만 않음 -->
						<th>휴대폰 번호로 찾기</th>
						<td><input type="text" id="userPhone" name="userPhone">
						</td>
					</tr>
				</div>
			</table>
			<button type="submit">확인</button>
		</form>
	</div>
</body>
</html>



<script src="jsf5/cyj/findPwService.js"></script>

