// ▶ 하트 삭제
let heartBtn = document.querySelectorAll('.deleteRowHeart');
heartBtn.forEach(ele => {
	ele.addEventListener('click', onClickRowDelete);
});

function onClickRowDelete(tr){
	let delTr = tr.target.parentElement.parentElement;
	console.log(delTr);
	deleteTr(delTr);
} // end of onClickRowDelete();


// ▶ 삭제
function deleteTr(tr){
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


// ▶ 전체 선택
document.getElementById('checkbox').addEventListener('click', function(){
	document.querySelectorAll('.boxs').forEach(box => box.checked = this.checked);
}) // end of 체크박스.


// ▶ 선택 상품 삭제
document.getElementById('checkDelete').addEventListener('click', function(){
	document.querySelectorAll('.boxs').forEach(box => {
		if(box.checked){
			let selectTr = box.parentElement.parentElement;
			deleteTr(selectTr);
		}
	})
}) // end of 선택 상품 삭제.


// ▶ 선택 상품 카트 담기


// ▶ 관심 상품 비우기
document.getElementById('allHeartReset').addEventListener('click', onClickAllHeartReset);
function onClickAllHeartReset(){
	let wishLsit = document.getElementById('wishList');
	Array.from(wishLsit.children).forEach(ele => {
		console.log(wishLsit);
		let pcode = ele.dataset.id;
		if(pcode != null){
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