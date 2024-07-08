/**
 * modifyQna.js
 */
let query = window.location.search;
let param = new URLSearchParams(query);
let no = param.get('no');


 fetch('modifyReviewList.do?no=' + no)
	.then(result => result.json())
	.then(result => {
		result.forEach(ele => {
			console.log(ele);
			document.querySelector('#no').value = ele.reviewCode;
			document.querySelector('#title').value = ele.reviewSubject;
			document.querySelector('#code').value = ele.productCode;
			document.querySelector('#order').value = ele.orderDetailCode;
			document.querySelector('#op').value = ele.star;
			document.querySelector('#name').value = ele.id;
			document.querySelector('#img').value = ele.reviewImage;
			document.querySelector('#content').innerHTML = ele.reviewContent;

			})
		})
		
document.querySelector('#delBtn').addEventListener('click', function(){
	let no = document.querySelector('#no').value;
	
	location.href="delReview.do?no=" + no;
})