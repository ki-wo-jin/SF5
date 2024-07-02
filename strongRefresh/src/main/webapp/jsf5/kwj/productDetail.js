/**
 *  productDetail.js
 */
let query = window.location.search;
let param = new URLSearchParams(query);
let code = param.get('code');

document.addEventListener("DOMContentLoaded", function() {

	fetch('productDetailAjax.do?code=' + code)
		.then(result => result.json())
		.then(result => {
			result.forEach(ele => {
				document.querySelector('#hlist').appendChild(makeRow(ele));
				document.querySelector('#clist').appendChild(cloneRow(ele));
			})

			// 화면에 출력된 요소가 출력된 후에 이벤트 등록
			var sitePlusMinus = function() {
				$('.js-btn-minus').on('click', function(e) {
					e.preventDefault();
					if ($(this).closest('.input-group').find('.form-control').val() != 0) {
						$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
					} else {
						$(this).closest('.input-group').find('.form-control').val(parseInt(0));
					}
				});
				$('.js-btn-plus').on('click', function(e) {
					e.preventDefault();
					$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
				});
			};
			sitePlusMinus();

		})

	function makeRow(prd = {}) {
		let template = document.getElementById('alist').cloneNode(true);
		template.setAttribute('style', 'display: block;');
		template.querySelector('#inSt').innerHTML = prd.categorie;
		return template;
	}

	function cloneRow(prd = {}) {
		let template = document.querySelector('#plist').cloneNode(true);
		template.setAttribute('style', 'display: block;');
		console.log(prd);
		template.querySelector('#prdImg').setAttribute('src', 'images/' + prd.thumImage);
		let prdImg = document.querySelector('#prdImg');
		prdImg.style.width = '479px';
		prdImg.style.height = 'auto';
		template.querySelector('#prdName').innerHTML = prd.productName;
		template.querySelector('#prdContent').innerHTML = prd.productContent;
		template.querySelector('#price').innerHTML = prd.price + ' &#8361';
		template.querySelector('#size').innerHTML = prd.productSize;

		return template;
	}

})
