// ▶ 카트 목록
let fields = ['thumImage', 'productName', 'price', 'productCnt'];
let wishList = document.querySelector('.wishList');

fetch('heartList.do')
	.then(result => result.json())
	.then(result => {
		result.forEach(ele => {
			wishList.appendChild(makeRow(ele));
		})
	})