<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<div class="findIdResultAll">
	<h3>아이디 찾기</h3>
	<h1>고객님 아이디 찾기가 완료 되었습니다</h1>
	
	<form name="findIdResultFrm" action="joinForm.do">
	
		<ul id="findEmailUser">
			<li>이름 : ${emailUser.name}</li>
			<li>이메일 : ${emailUser.email} </li>
			<li>아이디 : ${emailUser.id } (가입날짜:${emailUser.joinDate })</li>
			<li>고객님 즐거운 쇼핑 하세요!</li>
		</ul>
		
		<ul id="findPhoneUser">
			<li>이름 : ${phoneUser.name}</li>
			<li>휴대폰번호 : ${phoneUser.phone} </li>
			<li>아이디 : ${phoneUser.id } (가입날짜:${phoneUser.joinDate })</li>
			<li>고객님 즐거운 쇼핑 하세요!</li>
		</ul>
	
		<button type="submit">로그인</button>
		<button id="findPw">비밀번호 찾기</button>
	</form>

</div>

</body>
</html>

<script>

if(!'${phoneUser}'){
	document.getElementById('findPhoneUser').style.display="none"
} else if (!'${emailUser}'){
	document.getElementById('findEmailUser').style.display="none"
}

let findPwBtn = document.getElementById('findPw');

findPwBtn.addEventListener('click', function(){
	//로그인 버튼일 경우에는 Login.do
	//비밀번호 찾기 버튼일 경우에는 action="findPw.do"
	document.forms.findIdResultFrm.action = "findPw.do"
	//document.forms.findIdResultFrm.submit();
})

</script>