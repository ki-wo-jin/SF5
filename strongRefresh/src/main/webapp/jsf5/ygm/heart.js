
// ▶ 삭제
document.getElementById('deleteRowHeart').addEventListener('click', onClickRowDelete);

/*function onClickRowDelete(e){
	let delTr = e.target.parentElement.parentElement;
	//del(delTr)
	console.log("딜리트티알");
	console.log(delTr);
} // end of onClickRowDelete();

function del(tr){
	//console.log(tr);
	let pcode = tr.dataset.id;
	console.log(pcode);
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
} // end of del();*/

function onClickRowDelete(tr){
	let delTr = tr.target.parentElement.parentElement;
	let pcode = delTr.dataset.id;
	console.log(pcode);
	let url = 'removeHeart.do?productCode=' + pcode;
	fetch(url)
		.then(result => result.json())
		.then(result => {
			if (result.result == "OK") {
				alert(result.message);
				delTr.remove();
			} else {
				alert(result.message);
			}
		})
} // end of onClickRowDelete();
