<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

<style>
</style>

</head>
<body>

	<!-- 퍼온 로그인 페이지! -->

	<div class="login-wrapper">
		<h2>Login</h2>
		<form method="post" action="서버의url" id="login-form">
			<input type="text" name="userName" placeholder="Email">
			<input type="password" name="userPassword" placeholder="Password">
			<label for="remember-check"> <input type="checkbox"
				id="remember-check">아이디 저장하기
			</label> <input type="submit" value="Login">
		</form>
	</div>

	<!-- 퍼온 로그인 페이지 끝 -->
	
	
	
	
	<!-- 다시 빌드업 -->
	
	
	<div class="login-wrapper">
		<h2>LOG IN</h2>
		<form name="loginFrm" action="login.do" method="post" id="login-form">
			<input type="text" name="userId" placeholder="ID *" id="userId">
			<input type="password" name="userPw" placeholder="PASSWORD *" id="userPw">
			<ul>
				<li><a href="findId.do">Forgot ID</a> / <a href="findPw.do">PASSWORD</a>
				</li>
				<li><a href="joinForm.do">create an account</a></li>
			</ul>
			<input type="submit" value="Login">
		</form>
	</div>
	
	<!-- 다시 빌드업 끝 -->
	
	
<!-- 
	<div class="login-wrapper">
		<h2>LOG IN</h2>
		<form name="loginFrm" action="login.do" method="post" id="login-form">
			<label for="userId"> ID * <input type="text" id="userId"
				name="userId">
			</label> <label for="userPw"> PASSWORD * <input type="password"
				id="userPw" name="userPw">
			</label>

			<button type="submit">Sign in</button>

			<ul>
				<li><a href="findId.do">Forgot ID</a> / <a href="findPw.do">PASSWORD</a>
				</li>
				<li><a href="joinForm.do">create an account</a></li>
			</ul>

			<div class="kakaoLogin"></div>

		</form>

	</div>
 -->



<link rel="stylesheet" href="cssf5/cyj/loginForm.css">

