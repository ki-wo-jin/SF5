// ▶ 장바구니 아이콘에 장바구니 상품 개수 출력
function cartCnt(){	
	let url = 'cartCntIcon.do';	
	
	fetch(url)
		.then(result => result.json())
		.then(cnt => {
			document.querySelector('.count').innerHTML = cnt;
		})
}

// ▶ total price 보여주기
viewtotal();
function viewtotal(){
	let delTr = document.getElementById('delTr');
	if(delTr != null){
		document.getElementById('delTr').remove();
	}
	
	let cartList = document.getElementById('cartList');
	let total = 0;
	let price = 0;
	Array.from(cartList.children).forEach(cart => {
		//price = Number(cart.children[2].innerHTML);
		price = cart.children[3].innerHTML.split(" "); //2
		let quantity = cart.children[4].children[0].value; //3
		total += price[1] * quantity;
	})
	
	let charge = 0;
	if(total >= 50000) charge = 0;
	else charge = 3000;
			
	let tbody = document.getElementById('totalContainer');
	let tr = document.createElement('tr');
	let td = document.createElement('td');		
	let tds = ['&emsp; KRW ' + total, '+ KRW ' + charge, ' = KRW ' + (charge + total)];
	for (i = 0; i < tds.length; i++) {		
	    td.innerHTML += tds[i];
	    tr.appendChild(td);
		tr.setAttribute('id', 'delTr');
		tbody.appendChild(tr);
		td = document.createElement('td');
	}
}


// ▶ 카트 삭제
let xBtn = document.querySelectorAll('.deleteCartRow');
//console.log(xBtn);
xBtn.forEach(x => {
	x.addEventListener('click', onClickRowDelete);
})	
	
function onClickRowDelete(x) {
	let delTr = x.target.parentElement.parentElement;
	deleteTr(delTr);
	alert('선택하신 상품이 장바구니에서 삭제되었습니다.');
}


// ▶ tr 삭제
function deleteTr(tr) {
	let ccode = tr.dataset.id;
	let url = 'removeCart.do?cartCode=' + ccode;
	fetch(url)
		.then(result => result.json())
		.then(result => {
			if (result.result == "OK") {
				tr.remove();
				cartCnt();
			} else {
				alert(result.message);
			}
		})
}


// ▶ 전체 선택
document.getElementById('checkbox').addEventListener('click', function() {
	document.querySelectorAll('.boxs').forEach(box => box.checked = this.checked);
})


// ▶ 선택 상품 삭제
document.getElementById('checkDelete').addEventListener('click', function() {
	document.querySelectorAll('.boxs').forEach(box => {
		if (box.checked) {
			let selectTr = box.parentElement.parentElement;
			deleteTr(selectTr);
		}
	})
	alert('선택하신 상품이 장바구니에서 삭제되었습니다.')
}) // end of 선택 상품 삭제.


// ▶ 장바구니 비우기
document.getElementById('resetCart').addEventListener('click', onClickAllHeartReset);
function onClickAllHeartReset() {
	let cartList = document.getElementById('cartList');
	Array.from(cartList.children).forEach(ele => {
		//console.log(cartList);
		let ccode = ele.dataset.id;
		if (ccode != null) {
			let url = 'removeCart.do?cartCode=' + ccode;
			fetch(url)
				.then(result => result.json())
				.then(result => {
					if (result.result == "OK") {
						//alert(result.message);
						cartList.remove();
						cartCnt();
					} else {
						alert(result.message);
					}
				})
		}
	})
} // end


// ▶ 수량 버튼 클릭 시 DB에 저장 & 총 가격 계산
let cnts = document.querySelectorAll('.counter');
cnts.forEach(cnt => {
	cnt.addEventListener('change', function(e) {
		// 수량 change가 일어났을 때, min-max 값으로 제한
		// console.log(e.target.value);
		let cntNumber = e.target.value;
		if(cntNumber <= 0 || cntNumber > 50) {
			return; // function 종료
		}
		
		// 페이지 하단에 토탈 보여주기
		viewtotal();		
		
		let changeCnt = cnt.value;
		let code = cnt.parentElement.parentElement.dataset.id;
		let url = 'changeCnt.do?cartCode=' + code + '&changeCnt=' + changeCnt;
		fetch(url)
			.then(result => result.json())
			.then(result => {
				if (result.result == "OK") {
					console.log(result.message);
				} else {
					console.log(result.message);
				}
			})
	})
}) // end


// ▶ 모든 상품 주문하기
document.getElementById('buyAllBtn').addEventListener('click', buyAll);
function buyAll() {
	let param = "?";
	let totalCnt = document.querySelectorAll('.boxs').length;	
	
	//---totalPrice 넘겨주기
	let cartList = document.getElementById('cartList');
	let total = 0;
	let price = 0;
	Array.from(cartList.children).forEach(cart => {
		price = cart.children[3].innerHTML.split(" ");
		let quantity = cart.children[4].children[0].value;
		total += Number(price[1] * quantity);
	})		
	let charge = 0;
	if(total >= 50000) charge = 0;
	else charge = 3000;
	let totalPrice = total + charge;
	//---
	
	document.querySelectorAll('.boxs').forEach((box, idx) => {
		let code = box.parentElement.parentElement.dataset.id;
		//console.log(code);		
		param += "code=" + code;
		if (totalCnt != (idx + 1)) {
			param += "&";
		}
	})
	
	//---totalPrice 넘겨주기
	param += "&totalPrice=" + totalPrice;
	//---
	
	
	let url = 'createOrder.do' + param;
	fetch(url)
		.then(result => result.json())
		.then(result => {
			if (result.retCode == "OK") {
				location.href = 'order.do?orderCode=' + result.orderCode;
			} else {
				alert(result.retCode);
			}
		})
}


// ▶ 선택 상품 주문하기
document.getElementById('buySelectBtn').addEventListener('click', function() {
	let param = "?";
	let total = 0;
	let price = 0;
	let quantity = 0;
	
	document.querySelectorAll('.boxs').forEach((box, idx) => {
		if (box.checked){
			price = box.parentElement.parentElement.children[3].innerHTML.split(" ");
			quantity = box.parentElement.parentElement.children[4].children[0].value;
			total += Number(price[1] * quantity);
			
			let code = box.parentElement.parentElement.dataset.id;
			param += "code=" + code;
			if (box.length != (idx + 1)) {
				param += "&";
			}
		
		let url = 'createOrder.do' + param;
		fetch(url)
			.then(result => result.json())
			.then(result => {
				//console.log(result);
				if (result.retCode == "OK") {
					location.href = 'order.do?orderCode=' + result.orderCode;
				} else {
					alert(result.retCode);
				}
			})
		}
	})
	
	//console.log('가격' + price);
	//console.log('수량' + quantity);
	
	
	let charge = 0;
	if(total >= 50000) {
		charge = 0;
	} else {
		charge = 3000;
	}
	let totalPrice = total + charge;	
	//console.log('총가격' + totalPrice);
	
	param += "&totalPrice=" + totalPrice;
	
	let url = 'createOrder.do' + param;
	fetch(url)
		.then(result => result.json())
		.then(result => {
			if (result.retCode == "OK") {
				location.href = 'order.do?orderCode=' + result.orderCode;
			} else {
				alert(result.retCode);
			}
		})	
});