/**
 * body.js
 */

fetch('mainAjax.do')
	.then(result => result.json())
	.then(result => {
		result.forEach(ele => {
			document.querySelector('#alist').appendChild(cloneRow(ele));
		})
	})



 
 function cloneRow(prd = {}) {
	let template = document.querySelector('#blist').cloneNode(true);
	template.setAttribute('style', 'display: block;');
	console.log(prd);
	template.querySelector('#prdImg').setAttribute('src', 'images/' + prd.thumImage);
	let prdImg = document.querySelector('#prdImg');
	prdImg.style.width = '285px';
	prdImg.style.height = '205px';
	template.querySelector('#ahref').innerHTML = prd.productName;
	template.querySelector('#price').innerHTML = prd.price + ' &#8361';
	template.querySelector('#size').innerHTML = prd.productSize;

		return template;
}