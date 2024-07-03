
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


//1. 장바구니 테이블에 productCode 가져오기
//2. 넣으려는 productCode랑 장바구니 테이블에 productCode 비교해서 중복값 걸러내기

// ▶ 카트 담기
function addCart(e) {
	let myTr = e.target.parentNode.parentNode;
	let pcode = myTr.dataset.id;
	let url = 'addCart.do?productCode=' + pcode;
	console.log(url);
	fetch(url)
		.then(result => result.json())
		.then(result => {
			if (result.retCode == "OK") {
				
				//if(pcode == url.indexOf(productCode)) //
				
				Swal.fire({
					title: "장바구니로 이동하시겠습니까?",
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
				alert("장바구니 담기에 실패하였습니다.");
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


// ▶ 선택 상품 카트 담기
document.getElementById('checkCartPage').addEventListener('click', function(){	
	document.querySelectorAll('.boxs').forEach(box => {
		if(box.checked){
			let selectTr = box.parentElement.parentElement;
			addCart(selectTr);
		}
	})
}) // end of 선택 상품 삭제.*/


/*function insertTr(tr){
	let pcode = tr.dataset.id;
	let url = 'insertCart.do?productCode=' + pcode + '&id=' + id;
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

function insertTr(tr){
	let pcode = tr.dataset.id;
	let url = 'insertCart.do?productCode=' + pcode + '&id=' + id;
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




//방법2
/*document.getElementById('checkCartPage').addEventListener('click', function(){
	//선택된 애들 담을 리스트 필요해요.
	let selectedList = new Array();
	
	document.querySelectorAll('.boxs').forEach(box => {
		if(box.checked){
			let selectTr = box.parentElement.parentElement.dataset.id;
			console.log(selectTr);
			
			selectedList.push(selectTr);
			//TODO : cart page로 넘기기
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