// ▶ 장바구니 아이콘에 장바구니 상품 개수 출력
function cartCnt(){	
	let url = 'cartCntIcon.do';
	
	fetch(url)
		.then(result => result.json())
		.then(cnt => {
			document.querySelector('.count').innerHTML = cnt;
		})
}

// ▶ 하트 삭제
let heartBtn = document.querySelectorAll('.deleteRowHeart');
heartBtn.forEach(ele => {
	ele.addEventListener('click', onClickRowDelete);
});

function onClickRowDelete(tr) {
	let delTr = tr.target.parentElement.parentElement;
	console.log(delTr);
	deleteTr(delTr);
	alert('선택하신 상품이 wish list에서 삭제되었습니다.');
} // end of onClickRowDelete();


// ▶ 삭제
function deleteTr(tr) {
	let pcode = tr.dataset.id;
	let url = 'removeHeart.do?productCode=' + pcode;
	fetch(url)
		.then(result => result.json())
		.then(result => {
			if (result.result == "OK") {
				//alert(result.message);				
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
				cartCnt();
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
	alert('선택하신 상품이 WISH LIST에서 삭제되었습니다.');
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
						cartCnt();
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


// ▶ 이미지 클릭 시 해당 상품 상세 페이지로 이동 : kwj/productDetail.js랑 heart.jsp 연동해주기
/*function goDetailPage(e){
	//console.log(e.target.parentElement.parentElement.dataset.id);
	let code = e.target.parentElement.parentElement.dataset.id;
	
	location.href = 'productDetailAjax.do?code=' + code;	
	
}*/