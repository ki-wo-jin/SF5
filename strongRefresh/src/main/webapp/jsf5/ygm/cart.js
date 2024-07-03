// ▶ 카트 삭제
let xBtn = document.querySelectorAll('.deleteCartRow');
console.log(xBtn);
xBtn.forEach(x => {
	x.addEventListener('click', function(){
		let delTr = x.parentElement.parentElement;
		console.log(delTr);
		deleteTr(delTr)
	})
})


// ▶ tr 삭제
function deleteTr(tr) {
	let ccode = tr.dataset.id;
	console.log(ccode);
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