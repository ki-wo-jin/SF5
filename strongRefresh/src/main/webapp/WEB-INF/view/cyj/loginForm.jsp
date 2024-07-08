<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<div class="login-wrapper">
	<h2>LOG IN</h2>
	<form name="loginFrm" action="login.do" method="post" id="login-form">
		<input type="text" name="userId" placeholder="ID *" id="userId">
		<input type="password" name="userPw" placeholder="PASSWORD *"
			id="userPw">
		<ul>
			<li><a href="findId.do">Forgot ID</a> / <a href="findPw.do">PASSWORD</a>
			</li>
			<li><a href="joinForm.do">create an account</a></li>
		</ul>
		<input type="submit" value="Login">
	</form>
</div>



<link rel="stylesheet" href="cssf5/cyj/loginForm.css">