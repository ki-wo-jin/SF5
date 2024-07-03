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
				
				// 찜하기
				document.querySelector('#saveBtn' + code).addEventListener('click', productToHeart);
				// 카드에 담기
				document.querySelector('#addBtn' + code).addEventListener('click', cart);
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
		template.querySelector('#prdImg').setAttribute('src', 'images/' + prd.thumImage);
		let prdImg = document.querySelector('#prdImg');
		prdImg.style.width = '479px';
		prdImg.style.height = 'auto';
		template.querySelector('#prdName').innerHTML = prd.productName;
		template.querySelector('#prdContent').innerHTML = prd.productContent;
		template.querySelector('#price').innerHTML = prd.price + ' &#8361';
		template.querySelector('#size').innerHTML = prd.productSize;
		template.querySelector('div.mb-5 input').setAttribute('id', 'num' + code);
		template.querySelector('div.row > div.col-md-6 > p > button:nth-of-type(1)').setAttribute('id', 'saveBtn' + code);
		template.querySelector('div.row > div.col-md-6 > p > button:nth-of-type(2)').setAttribute('id', 'addBtn' + code);
		return template;
	}

})



// 찜하기 함수
function productToHeart(){
	
	fetch('heartProductAjax.do?code=' + code)
		.then(result => result.json())
		.then(result => {
	if (result.retCode == 'ID') {
		alert('로그인 해주세요');
	} else if (result.retCode == 'PLUS') {
		alert('상품을 찜했습니다');
	} else if(result.retCode == 'MINUS'){
		alert('찜을 해제하였습니다');
	} else {
		alert('오류가 발생하였습니다');
		}
	})
}

// 카트 함수
function cart(){
	let num = document.querySelector('#num' + code).value;
	
	fetch('cartProductAjax.do?code=' + code + '&num=' + num)
		.then(result => result.json())
		.then(result => {
			console.log(result);
	if (result.retCode == 'ID') {
		alert('로그인 해주세요');
	} else if (result.retCode == 'PLUS') {
		alert('상품을 카트에 추가했습니다');
	} else if(result.retCode == 'MINUS'){
		alert('상품의 갯수를 변경했습니다');
	} else {
		alert('오류가 발생하였습니다');
		}
	})
}