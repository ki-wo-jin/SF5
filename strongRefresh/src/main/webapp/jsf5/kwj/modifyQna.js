/**
 * modifyQna.js
 */
let query = window.location.search;
let param = new URLSearchParams(query);
let no = param.get('no');


 fetch('modifyQnaList.do?no=' + no)
	.then(result => result.json())
	.then(result => {
		result.forEach(ele => {
			console.log(ele);
			document.querySelector('#no').value = ele.qnaCode;
			document.querySelector('#title').value = ele.qnaSubject;
			document.querySelector('#code').value = ele.productCode;
			document.querySelector('#op').value = ele.qnaCategory;
			document.querySelector('#name').value = ele.id;
			document.querySelector('#content').innerHTML = ele.qnaContent;

			})
		})
		
document.querySelector('#delBtn').addEventListener('click', function(){
	let no = document.querySelector('#no').value;
	let pw = document.querySelector('#pw').value;
	
	location.href="delQna.do?no=" + no + '&pw=' + pw;
})