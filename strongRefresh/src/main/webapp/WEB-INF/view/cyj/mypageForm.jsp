<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

<p>MY ACCOUNT</p>

<form name="myPageFrm" action="logout.do">

	<ul>
		<li>
		<strong><a href="modifyMember.do">PROFILE</a></strong>
		<p><a href="modifyMember.do">회원이신 고객님의 개인정보를 관리하는 공간입니다.</a></p>
		</li>
		
		<li>
		<strong><a href="#">ORDER</a></strong>
		<p><a href="#">고객님께서 주문하신 상품의 주문내역을 확인하실 수 있습니다.</a></p>
		</li>
		
		<li>
		<strong><a href="#">WISHLIST</a></strong>
		<p><a href="#">관심상품으로 등록하신 상품의 목록을 보여드립니다.</a></p>
		</li>
		
		<li>
		<strong><a href="#">BOARD</a></strong>
		<p><a href="#">고객님께서 작성하신 게시물을 관리하는 공간입니다.</a></p>
		</li>

		
	</ul>

<button type="submit">Logout</button>

</form>


</body>
</html>