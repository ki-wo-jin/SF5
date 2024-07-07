// ▶ 장바구니 아이콘에 장바구니 상품 개수 출력
window.onload = function(){	
	let url = 'cartCntIcon.do';	
	
	fetch(url)
		.then(result => result.json())
		.then(cnt => {
			document.querySelector('.count').innerHTML = cnt;
		})
}