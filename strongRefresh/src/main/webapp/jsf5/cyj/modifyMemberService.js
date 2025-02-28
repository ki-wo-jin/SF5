/**
modifyMemberService.js
*/

//회원수정 유효성검사

function sendit() {
	
	//비밀번호 확인
	const userPw = document.getElementById('userPw');
	const expPwText = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,16}$/;

	if (userPw.value == '') {
		alert('비밀번호를 입력하세요');
		userPw.focus();
		return false
	}

	if (!expPwText.test(userPw.value)) {
		alert('비밀번호 형식을 재확인해주세요');
		userPw.focus();
		return false
	}
}

//취소 버튼일 경우에는 메인으로 이동
let cancleBtn = document.getElementById('cancle');

cancleBtn.addEventListener('click', function() {
	document.forms.modifyFrm.action = "main.do";
})


//비밀번호 일치확인
document.getElementById('checkPw').addEventListener('change', function() {
	
	let checkPw = this.value;
	let userPw = document.getElementById('userPw').value;
	
	if(userPw!=checkPw){
		document.querySelector('#printCheckPw').innerHTML="비밀번호가 일치하지 않습니다.";
	} else {
		document.querySelector('#printCheckPw').innerHTML="";
	}
	
});



