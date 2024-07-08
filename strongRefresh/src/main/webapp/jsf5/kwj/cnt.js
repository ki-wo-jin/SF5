/**
 *  cnt.js
 */

 document.querySelectorAll('ul.list-unstyled a').forEach(site => {
	console.log(site.getAttribute('href'));
	let param = site.getAttribute('href');
	if (param == 'albumForm.do') {
		e.preventDefault();
		return;
	}
	site.addEventListener('click', function (e) {
		e.preventDefault();
		location.href = 'productForm.do?category=' + param;
	})
})


fetch('countCategory.do')
	.then(result => result.json())
	.then(result => {
		result.forEach(ele => {
			try{
			console.log(ele);
			document.querySelector('#' + ele.categorie).innerHTML = '(' + ele.cnt + ')';
			}catch{
				
			}
		})
	})