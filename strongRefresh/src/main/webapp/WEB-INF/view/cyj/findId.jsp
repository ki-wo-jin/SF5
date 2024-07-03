<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<div class="findId">
	<h3>아이디 찾기</h3>
	<ul>
		<li>가입하신 방법에 따라 아이디 찾기가 가능합니다.</li>
		<li>법인사업자 회원 또는 외국인 회원의 경우 법인명과 법인번호 또는 이름과 등록번호를 입력해 주세요.</li>
	</ul>
	
	<form name="findIdFrm" action="findIdResult.do" method="post">
		<table>
			<p>아이디찾기</p>
				<tr>
					<th>인증방법</th>
					<td>
						<input type="radio" name="findPath" value="email" checked>이메일
						<input type="radio" name="findPath" value="phone">휴대폰번호
					</td>
				</tr>
				<tr>
					<th>이름</th>
					<td><input type="text" id="userName" name="userName"></td>
				</tr>
				
				<div class="printFindPath">
					<tr id="printEmailPath" style="display : table-row">
						<th>이메일로 찾기</th>
						<td><input type="text" id="userEmail" name="userEmail"></td>
					</tr>
					<tr id="printPhonePath" style="display : none">
						<th>휴대폰 번호로 찾기</th>
						<td>
						<input type="text" id="userPhone" name="userPhone">
						</td>
					</tr>
				</div>

		</table>
		<button type="submit">확인</button>
	</form>

</div>

</body>
</html>

<script>
let retCode = '${retCode}';
if(retCode == "NO") alert("입력하신 정보로 가입 된 회원 아이디는 존재하지 않습니다.");
</script>

<link rel="stylesheet" href="cssf5/cyj/findIdService.css">

<script src="jsf5/cyj/findIdService.js"></script>