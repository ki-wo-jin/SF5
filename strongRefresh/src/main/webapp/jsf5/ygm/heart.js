// ▶ 하트 삭제
let heartBtn = document.querySelectorAll('.deleteRowHeart');
heartBtn.forEach(ele => {
	ele.addEventListener('click', onClickRowDelete);
});

function onClickRowDelete(tr) {
	let delTr = tr.target.parentElement.parentElement;
	console.log(delTr);
	deleteTr(delTr);
} // end of onClickRowDelete();


// ▶ 삭제
function deleteTr(tr) {
	let pcode = tr.dataset.id;
	let url = 'removeHeart.do?productCode=' + pcode;
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
} // end of delTr();


// ▶ 카트 담기
function addCart(e) {
	let myTr = e.target.parentNode.parentNode;
	//let myTr = e.target.parentElement.parentElement;
	let pcode = myTr.dataset.id;
	let url = 'addCart.do?productCode=' + pcode;
	console.log(url);
	fetch(url)
		.then(result => result.json())
		.then(result => {
			if (result.retCode == "OK") {
				Swal.fire({								//sweetalert2 라이브러리
					title: "상품이 장바구니에 담겼습니다.",
					text: "장바구니로 이동하시겠습니까?",
					icon: "warning",
					showCancelButton: true,
					confirmButtonColor: "#3085d6",
					cancelButtonColor: "#d33",
					confirmButtonText: "Yes"
				}).then((result) => {
					if (result.isConfirmed) {
						location.href = "cart.do";						
					}
				})
			} else {
				alert("이미 있는 상품입니다.");
			}
		})
}


// ▶ 전체 선택
document.getElementById('checkbox').addEventListener('click', function() {
	document.querySelectorAll('.boxs').forEach(box => box.checked = this.checked);
}) // end of 체크박스.


// ▶ 선택 상품 삭제
document.getElementById('checkDelete').addEventListener('click', function() {
	document.querySelectorAll('.boxs').forEach(box => {
		if (box.checked) {
			let selectTr = box.parentElement.parentElement;
			deleteTr(selectTr);
		}
	})
}) // end of 선택 상품 삭제.


//TODO
// ▶ 선택 상품 카트 담기
document.getElementById('checkCartPage').addEventListener('click', function(){
	document.querySelectorAll('.boxs').forEach(box => {
		if (box.checked) {
			let selectTr = box.parentElement.parentElement;
			let pcode = selectTr.dataset.id			
			console.log(pcode);
			let url = 'addCart.do?productCode=' + pcode;
			fetch(url)
				.then(result => result.json())
				.then(result => {
					if (result.retCode == "OK") {
						Swal.fire({								//sweetalert2 라이브러리
							title: "상품이 장바구니에 담겼습니다.",
							text: "장바구니로 이동하시겠습니까?",
							showCancelButton: true,
							confirmButtonColor: "#3085d6",
							cancelButtonColor: "#d33",
							confirmButtonText: "Yes"
						}).then((result) => {
							if (result.isConfirmed) {
								location.href = "cart.do";
							}
						})
					} else {
						alert("이미 있는 상품입니다.");
					}
				})
		} else {
			//TODO
			//alert("상품을 선택해주세요");
			//return false;
		}
	})
}) // end of 선택 상품 삭제.*/


// ▶ 관심 상품 비우기
document.getElementById('allHeartReset').addEventListener('click', onClickAllHeartReset);
function onClickAllHeartReset() {
	let wishList = document.getElementById('wishList');
	Array.from(wishList.children).forEach(ele => {
		console.log(wishList);
		let pcode = ele.dataset.id;
		if (pcode != null) {
			let url = 'removeHeart.do?productCode=' + pcode;
			fetch(url)
				.then(result => result.json())
				.then(result => {
					if (result.result == "OK") {
						//alert(result.message);
						wishList.remove();
					} else {
						alert(result.message);
					}
				})
		}
	})
}