// ▶ 카트 목록
let fields = ['thumImage', 'productName', 'price', 'productCnt'];
let cartList = document.getElementById('cartList');

fetch('cartList.do')
	.then(result => result.json())
	.then(result => {
		result.forEach(ele => {
			cartList.appendChild(makeRow(ele));
		})
	})
	
	