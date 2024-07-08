/**
findPwService.js
*/

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