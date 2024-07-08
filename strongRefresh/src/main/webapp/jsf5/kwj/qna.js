/**
 * qna.js
 */

// 상품 QnA 생성

fetch('qnaList.do')
	.then(result => result.json())
	.then(result => {
		result.forEach(ele => {
			document.querySelector('#bpList').appendChild(cloneRow3(ele));
			
			})
		})
		

function cloneRow3(qna = {}) {
	let template = document.querySelector('#qnaList').cloneNode(true);
	template.setAttribute('style', "display: '';");
	template.querySelector('tr td.no2').innerHTML = qna.qnaCode;
	template.querySelector('tr td.cate2').innerHTML = qna.qnaCategory;
	template.querySelector('tr td.sub2 a').innerHTML = qna.qnaSubject;
	template.querySelector('tr td.sub2 a').setAttribute('href', 'qnaDetail.do?no=' + qna.qnaCode);
	template.querySelector('tr td.writer2').innerHTML = qna.id;
	
	console.log(qna.qnaDate);
	
	template.querySelector('tr td.date2').innerHTML = qna.qnaDate;
	template.querySelector('tr td.hit2').innerHTML = qna.clickCnt;
	return template;
}
