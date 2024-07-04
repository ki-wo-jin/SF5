/**
 * review.js
 */
let code = '*';



// 상품 리뷰 생성
fetch('reviewList.do')
	.then(result => result.json())
	.then(result => {
		result.forEach(ele => {
			document.querySelector('#apList').appendChild(cloneRow2(ele));
			
			})
		})

function cloneRow2(review = {}) {
	let template = document.querySelector('#reviewList').cloneNode(true);
	template.setAttribute('style', "display: '';");
	let reviewImg = template.querySelector('tr td.kImg img')
	reviewImg.setAttribute('src', 'images/' + review.reviewImage);
	reviewImg.style.width = '110px';
	reviewImg.style.height = 'auto';
	template.querySelector('tr td.no').innerHTML = review.reviewCode;
	template.querySelector('tr td.sub a').innerHTML = review.reviewSubject;
	template.querySelector('tr td.sub a').setAttribute('href', '');
	template.querySelector('tr td.writer').innerHTML = review.id;
	template.querySelector('tr td.date').innerHTML = review.reviewDate;
	template.querySelector('tr td.star').innerHTML = review.star;
	return template;
}
