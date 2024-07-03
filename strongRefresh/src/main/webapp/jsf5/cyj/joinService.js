/**
joinService.js
*/


//비밀번호 입력 조건 창 띄우기

document.getElementById('userPw').addEventListener('focusin', printPwCondition);
let pwCondition = document.querySelector('.pwCondition');

function printPwCondition() {
	pwCondition.style.display='block';
}

document.getElementById('userPw').addEventListener('focusout', nonePwCondition);

function nonePwCondition() {
	pwCondition.style.display='none';
}


//아이디 중복체크
document.getElementById('userId').addEventListener('change', function(){
	
	let checkId = this.value;
	console.log(checkId);
	
	const checkIdAjx = new XMLHttpRequest();
	
	let url = 'checkIdAjax.do?id='+checkId;
	checkIdAjx.open('get', url);
	checkIdAjx.send();
	checkIdAjx.onload = function(){
		
		console.log(checkIdAjx.responseText);

		let result = JSON.parse(checkIdAjx.responseText);
		
		if(result.retCode=='Exist'){
			document.querySelector('#checkId').innerHTML=checkId+'는 이미 사용중인 아이디입니다';
		} else {
			document.querySelector('#checkId').innerHTML=checkId+'는 사용가능한 아이디입니다';
		}
		
	}
	
});

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


//전체동의
document.getElementById('allAgree').addEventListener('change', allSelect);


function allSelect() {
	console.log(this.checked); //체크되면 true
	let termsOfUseAgree = document.getElementById('termsOfUseAgree');
	let personalInformationAgree = document.getElementById('personalInformationAgree');
	let smsAgree = document.getElementById('smsAgree');
	let emailAgree = document.getElementById('emailAgree');
	
	if(this.checked==true){
		termsOfUseAgree.checked = true;
		personalInformationAgree.checked = true;
		smsAgree.checked = true;
		emailAgree.checked = true;
	} else if (this.checked==false) {
		termsOfUseAgree.checked = false;
		personalInformationAgree.checked = false;
		smsAgree.checked = false;
		emailAgree.checked = false;
	} 
}


//개별체크 - 이용약관
document.getElementById('termsOfUseAgree').addEventListener('change', select1);

function select1() {
	let allAgree = document.getElementById('allAgree');
	if(this.checked==false){
		allAgree.checked = false;
	}
}

//개별체크 - 개인정보수집
document.getElementById('personalInformationAgree').addEventListener('change', select2);

function select2() {
	let allAgree = document.getElementById('allAgree');
		if(this.checked==false){
		allAgree.checked = false;
	}
}

//개별체크 - sms 수신동의

document.getElementById('smsAgree').addEventListener('change', select3);

function select3() {
	let allAgree = document.getElementById('allAgree');
		if(this.checked==false){
		allAgree.checked = false;
	}
}

//개별체크 - 이메일 수신동의

document.getElementById('emailAgree').addEventListener('change', select4);

function select4() {
	let allAgree = document.getElementById('allAgree');
		if(this.checked==false){
		allAgree.checked = false;
	}
}

