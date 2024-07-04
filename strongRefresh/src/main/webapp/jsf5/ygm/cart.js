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


// ▶ 수량 버튼 클릭 시 DB에 저장
let cnts = document.querySelectorAll('.counter');
cnts.forEach(cnt => {
	cnt.addEventListener('change', function() {
		//console.log("살려줘");
		//console.log(cnt.parentElement.parentElement.dataset.id);
		//console.log(cnt.value);
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


//TODO
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
				if (result.retCode == "OK") {
					location.href = 'order.do?orderCode=' + result.orderCode;
				} else {
					alert(result.retCode);
				}
			})
		}
	})
}