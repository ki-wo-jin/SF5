<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<link rel="stylesheet" href="cssf5/cyj/findIdResult.css">

<div class="findIdResult-wrapper">
	<h2>아이디 찾기 완료</h2>
	<h3>고객님 아이디 찾기가 완료 되었습니다</h3>
	
	<form name="findIdResultFrm" action="joinForm.do" id="findIdResult-form">
		
		<!-- 이메일로 찾는 사람 시작 -->
		<div id="findEmailUser">
			
			<!-- 이름 출력 시작 -->
			<label for="userName">이름 : <span class="userInfo">${emailUser.name}</span></label>
			<!-- 이름 출력 끝 -->
			
			<!-- 이메일 출력 시작 -->
			<label for="userEmail">이메일 : <span class="userInfo">${emailUser.email}</span></label>
			<!-- 이메일 출력 끝 -->
			
			<!-- 아이디 출력 시작 -->
			<label for="userId">아이디 : <span class="userInfo">${emailUser.id}</span></label>
			<!-- 아이디 출력 끝 -->
			
			<!-- 가입날짜 출력 시작 -->
			<label for="joinDate"><span class="userInfo">가입날짜 : ${emailUser.joinDate }</span></label>
			<!-- 가입날짜 출력 끝 -->
			
			<div class="goodShopping">
				<label for="goodShopping">고객님 즐거운 쇼핑 하세요!</label>
			</div>
			
		</div>
		
		
		<!-- 이메일로 찾는 사람 끝 -->


		<!-- 휴대폰으로 찾는 사람 시작 -->
		<div id="findPhoneUser">
			
			<!-- 이름 출력 시작 -->
			<label for="userName">이름 : <span class="userInfo">${phoneUser.name}</span></label>
			<!-- 이름 출력 끝 -->
			
			<!-- 이메일 출력 시작 -->
			<label for="userEmail">이메일 : <span class="userInfo">${phoneUser.email}</span></label>
			<!-- 이메일 출력 끝 -->
			
			<!-- 아이디 출력 시작 -->
			<label for="userEmail">이메일 : <span class="userInfo">${phoneUser.id}</span></label>
			<!-- 아이디 출력 끝 -->
			
			<!-- 가입날짜 출력 시작 -->
			<label for="joinDate"><span class="userInfo">가입날짜 : ${phoneUser.joinDate }</span></label>
			<!-- 가입날짜 출력 끝 -->
			
			<div class="goodShopping">
				<label for="goodShopping">고객님 즐거운 쇼핑 하세요!</label>
			</div>
		
		</div>
		<!-- 휴대폰으로 찾는 사람 끝 -->	
		
		<button type="submit" id="loginBtn">로그인</button>
		<button id="findPw">비밀번호 찾기</button>
		
	</form>

</div>



		<!-- 
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
	 	-->
	
	


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