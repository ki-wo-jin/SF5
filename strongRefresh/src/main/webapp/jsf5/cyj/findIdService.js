/**
findIdService.js
*/



//선택된 값에 따라 출력
//라디오버튼 선택된 값 가져오기 document.querySelector('input[type=radio][name={라디오버튼의 name}]:checked').value;

let radios = document.querySelectorAll('input[type=radio][name=findPath]');

radios.forEach(radio => radio.addEventListener('change', printPathFunc));

function printPathFunc() {

	let result = document.querySelector('input[type=radio][name=findPath]:checked').value

	if (result == 'phone') {
		document.getElementById('printEmailPath').style.display = 'none';
		document.getElementById('printPhonePath').style.display = 'block';

	} else if (result == 'email') {
		document.getElementById('printPhonePath').style.display = 'none';
		document.getElementById('printEmailPath').style.display = 'block';
	}

}


//아이디 확인
