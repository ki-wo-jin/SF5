<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<p>회원 정보 수정</p>

<div class="modifyMemberAll">

	<h3>
	${user.id }회원님의 등급은 ${user.grade } 입니다</br>
	현재 보유중인 마일리지는 ${user.point }원 입니다
	</h3>
	
	<form name="modifyFrm" action="modify.do" method="post">
	
		<table class="modifyTable">
			
			<tr>
				<th>아이디<span class="blueStar">*</span></th>
				<td><input type="text" id="userId" name="userId" value="${user.id }" readonly></td>
			</tr>
			
			<tr>
				<th>비밀번호<span class="blueStar">*</span></th>
				<td>
				<input type="password" id="userPw" name="userPw" value="${user.pw }"> (영문 대소문자/숫자/특수문자 중 3가지 이상 조합, 8자~16자)
				<div class="pwCondition" style="display : none">
					<div class="pwConditionText">
						<strong>※ 비밀번호 입력 조건</strong>
						<ul>
							<li>대소문자/숫자/특수문자 중 3가지 이상 조합, 8자~16자</li>
							<li>입력 가능 특수문자</li>
							<li>~'!@#$%^()*_-={}[]|;,?/</li>
							<li>공백 입력 불가능</li>
							<li>연속된 문자, 숫자 사용 불가능</li>
							<li>동일한 문자, 숫자를 반복해서 사용 불가능</li>
							<li>아이디 포함 불가능</li>
						</ul>
					</div>
				</div>
				</td>
			</tr>
			
			<tr>
				<th>비밀번호 확인<span class="blueStar">*</span></th>
				<td><input type="password" id="checkPw"> <span id="printCheckPw"></span></td>
			</tr>
			
			<tr>
				<th>이름<span class="blueStar">*</span></th>
				<td><input type="text" id="userName" name="userName" value="${user.name }" readonly></td>
			</tr>
		
			<tr>
				<th>주소</th>
				<td>
					<input type="text" name = "postcode" id="sample6_postcode" placeholder="우편번호">
					<input type="button" onclick="sample6_execDaumPostcode()" value="우편번호 찾기"><br>
					<input type="text" name="address" id="sample6_address" placeholder="주소"><br>
					<input type="text" name="detailAddress" id="sample6_detailAddress" placeholder="상세주소">
					<input type="text" name="extraAddress" id="sample6_extraAddress" placeholder="참고항목">
				</td>
			</tr>
			
			<tr>
				<th>휴대전화<span>*</span></th>
				<td><select id="frontPhone" name="frontPhone">
						<option value="010">010</option>
						<option value="011">011</option>
						<option value="016">016</option>
						<option value="017">017</option>
						<option value="018">018</option>
						<option value="019">019</option>
				</select>
				<c:choose>
				<c:when test="${user.phone.length()>9 }">
					- <input type="text" id="middlePhone" name="middlePhone" value="${user.phone.substring(4,8) }"> -
					<input type="text" id="lastPhone" name="lastPhone" value="${user.phone.substring(9) }">
				</c:when>
				<c:otherwise>
					- <input type="text" id="middlePhone" name="middlePhone" value="${user.phone }"> -
					<input type="text" id="lastPhone" name="lastPhone" value="${user.phone }">
				</c:otherwise>
				</c:choose>
				</td>
			</tr>
			
			<tr>
				<th>이메일</th>
				<td><input type="text" id="userEmail" name="userEmail" value="${user.email }"></td>
			</tr>
			
		</table>
	
	
	<button type="submit" id="modBtn">회원정보수정</button>
	<button id="cancle">취소</button>
	</form>
	
</div>


<link rel="stylesheet" href="cssf5/cyj/joinService.css">

<script src="jsf5/cyj/addressService.js"></script>
<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
<script src="jsf5/cyj/joinService.js"></script>
<script src="jsf5/cyj/modifyMemberService.js"></script>

<script>
//alert창 출력
let retCode = '${retCode}';
console.log(retCode);
if(retCode=="OK") {
	alert("수정이 완료되었습니다.");
	location.href = "main.do";

	}
	
</script>


