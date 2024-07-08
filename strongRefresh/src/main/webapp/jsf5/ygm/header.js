// ▶ 장바구니 아이콘에 장바구니 상품 개수 출력
window.onload = function(){	
	let url = 'cartCntIcon.do';	
	
	fetch(url)
		.then(result => result.json())
		.then(cnt => {
			document.querySelector('.count').innerHTML = cnt;
		})
}

/*// ▶ New 버튼 클릭 시 상품 보여주기
document.getElementById('newBtn').addEventListener('click', function(){
	console.log('안녕? 난 뉴 버튼이야.');
})*/