<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>


<link rel="stylesheet" href="cssf5/cyj/mypageForm.css">


<div class="myPage">

<h2>My Account</h2>

<form name="myPageFrm" action="logout.do" id="mypage-form">

	<ul>
		<li>
		<a class="menu" href="modifyMember.do">PROFILE</a>
		<p><a href="modifyMember.do">회원이신 고객님의 개인정보를 관리하는 공간입니다.</a></p>
		</li>
		
		<li>
		<a class="menu" href="orderHistory.do">ORDER</a>
		<p><a href="orderdetail.do">고객님께서 주문하신 상품의 주문내역을 확인하실 수 있습니다.</a></p>
		</li>
		
		<li>
		<a class="menu" href="heart.do">WISHLIST</a>
		<p><a href="heart.do">관심상품으로 등록하신 상품의 목록을 보여드립니다.</a></p>
		</li>
		
		<li>
		<a class="menu" href="review.do">REVIEW</a>
		<p><a href="review.do">작성하신 상품후기 게시물을 관리하실 수 있습니다.</a></p>
		</li>
		
		<li class="qna">
		<a class="menu" href="qna.do">QnA</a>
		<p><a href="qna.do">질문과 답변을 확인하실 수 있습니다.</a></p>
		</li>
		
	</ul>

<button type="submit">Logout</button>

</form>

</div>