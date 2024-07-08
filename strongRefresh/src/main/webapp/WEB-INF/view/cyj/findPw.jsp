<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<link rel="stylesheet" href="cssf5/cyj/findPw.css">


<div class="findPw-text">
	<h2>비밀번호 찾기</h2>
	<ul>
		<li>가입하신 방법에 따라 비밀번호 찾기가 가능합니다.</li>
		<li>법인사업자 회원 또는 외국인 회원의 경우 법인명과 법인번호 또는 이름과 등록번호를 입력해 주세요.</li>
	</ul>
</div>


<div class="findPw-wrapper">
	
	<form name="findPwFrm" action=temporaryPw.do method="post" id="findPw-form">
		<div class="findPath">
			<p><span id="findpathtext">인증방법</span>
			<input type="radio" id="emailPath" name="findPath" value="email" checked>
			<label for="emailPath">이메일</label>
			<input type="radio" id="phonePath" name="findPath" value="phone">
			<label for="phonePath">휴대폰번호</label>
			</p>
		</div>
		
		<input type="text" id="userId" name="userId" placeholder="아이디">
		<input type="text" id="userName" name="userName" placeholder="이름">
		
		<div class="printFindPath">
				<div id="printEmailPath">
					<input type="text" id="userEmail" name="userEmail" placeholder="이메일로 찾기">
				</div>
				
				<div id="printPhonePath" style="display: none">
					<input type="text" id="userPhone" name="userPhone" placeholder="휴대폰 번호로 찾기">
				</div>
			</div>
		<input type="submit" value="확인">
	</form>
</div>

<script src="jsf5/cyj/findPwService.js"></script>

