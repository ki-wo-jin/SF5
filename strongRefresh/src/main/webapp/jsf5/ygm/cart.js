// ▶ 카트 삭제
let xBtn = document.querySelectorAll('.deleteCartRow');
//console.log(xBtn);
xBtn.forEach(x => {
	x.addEventListener('click', function() {
		let delTr = x.parentElement.parentElement;
		deleteTr(delTr)
	})
})


// ▶ tr 삭제
function deleteTr(tr) {
	let ccode = tr.dataset.id;
	let url = 'removeCart.do?cartCode=' + ccode;
	fetch(url)
		.then(result => result.json())
		.then(result => {
			if (result.result == "OK") {
				alert(result.message);
				tr.remove();
			} else {
				alert(result.message);
			}
		})
}


// ▶ 전체 선택
document.getElementById('checkbox').addEventListener('click', function() {
	document.querySelectorAll('.boxs').forEach(box => box.checked = this.checked);
	/*	{
			if(!box.checked){
				box.checked;
			}
		})*/
})


// ▶ 선택 상품 삭제
document.getElementById('checkDelete').addEventListener('click', function() {
	document.querySelectorAll('.boxs').forEach(box => {
		if (box.checked) {
			let selectTr = box.parentElement.parentElement;
			deleteTr(selectTr);
		}
	})
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
	cnt.addEventListener('change', function() {
		
		let cartList = document.getElementById('cartList');
		let total = 0;
		let price = 0;
		Array.from(cartList.children).forEach(cart => {
			price = cart.children[2].innerHTML;
			let quantity = cart.children[3].children[0].value;
			total += price * quantity;
			
		})
		//console.log(total);
		//console.log(price);
		
		let charge = 0;
		if(total >= 50000) {
			charge = 0;
		} else {
			charge = 3000;
		}
		
		let tbody = document.getElementById('totalContainer');
		let oldTr = document.getElementById('oldTr');
		console.log(tbody);
		let newTr = document.createElement('tr');
		let td = document.createElement('td');
		td.innerHTML = 'KRW ' + total + ' + KRW ' + charge + ' = KRW ' + (charge + total);
		newTr.appendChild(td);
		//tbody.replaceWith(newTr, oldTr);
		tbody.replaceChild(newTr, oldTr);
		
		//parentNode.replaceChild(newNode, oldNode);
		
		
		
		//location.reload(true); //-- 동기 전체 페이지 새로고침

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
	
	document.querySelectorAll('.boxs').forEach((box, idx) => {
		let code = box.parentElement.parentElement.dataset.id;
		console.log(code);
		param += "code=" + code;
		if (totalCnt != (idx + 1)) {
			param += "&";
		}
	})
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
document.getElementById('buySelectBtn').addEventListener('click', buySelect);

function buySelect() {	
	let param = "?";
	let totalCnt = document.querySelectorAll('.boxs').length;
	
	document.querySelectorAll('.boxs').forEach((box, idx) => {
		if (box.checked){
			let code = box.parentElement.parentElement.dataset.id;
			param += "code=" + code;
			if (totalCnt != (idx + 1)) {
				param += "&";
			}
		
		let url = 'createOrder.do' + param;
		fetch(url)
			.then(result => result.json())
			.then(result => {
				console.log(result);
				if (result.retCode == "OK") {
					location.href = 'order.do?orderCode=' + result.orderCode;
				} else {
					alert(result.retCode);
				}
			})
		}
	})
}