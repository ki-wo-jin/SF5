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
		template.querySelector('div.mb-5 input').setAttribute('id', 'num' + code);
		//color랑 size값 부여
		template.querySelector('div.row > div.col-md-6 > div.mb-1.d-flex:nth-of-type(1) select.col-md-5').setAttribute('id', 'color' + code);
		template.querySelector('div.row > div.col-md-6 > div.mb-1.d-flex:nth-of-type(2) select.col-md-5').setAttribute('id', 'size' + code);
		
		template.querySelector('div.row > div.col-md-6 > p > button:nth-of-type(1)').setAttribute('id', 'saveBtn' + code);
		template.querySelector('div.row > div.col-md-6 > p > button:nth-of-type(2)').setAttribute('id', 'addBtn' + code);
		return template;
	}

})



// 찜하기 함수
function productToHeart(){
	
	let color = document.querySelector('#color' + code).value;
	let size = document.querySelector('#size' + code).value;
	
	fetch('heartProductAjax.do?code=' + code + color + size)
		.then(result => result.json())
		.then(result => {
	if (result.retCode == 'ID') {
		alert('로그인이 필요합니다');
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
	
	let color = document.querySelector('#color' + code).value;
	let size = document.querySelector('#size' + code).value;
	
	let num = document.querySelector('#num' + code).value;
	
	fetch('cartProductAjax.do?code=' + code + color + size + '&num=' + num)
		.then(result => result.json())
		.then(result => {
			console.log(result);
	if (result.retCode == 'ID') {
		alert('로그인이 필요합니다');
	} else if (result.retCode == 'PLUS') {
		alert('상품을 카트에 추가했습니다');
	} else if(result.retCode == 'MINUS'){
		alert('상품의 갯수를 변경했습니다');
	} else {
		alert('오류가 발생하였습니다');
		}
	})
}

// 상품 리뷰 생성

fetch('prdReview.do?code=' + code)
	.then(result => result.json())
	.then(result => {
		result.forEach(ele => {
			document.querySelector('#apList').appendChild(cloneRow2(ele));
			
			})
		})

function cloneRow2(review = {}) {
	let template = document.querySelector('#reviewList').cloneNode(true);
	template.setAttribute('style', "display: '';");
	let reviewImg = template.querySelector('tr td.kImg img')
	reviewImg.setAttribute('src', 'images/' + review.reviewImage);
	reviewImg.style.width = '110px';
	reviewImg.style.height = 'auto';
	template.querySelector('tr td.sub a').innerHTML = review.reviewSubject;
	template.querySelector('tr td.sub a').setAttribute('href', '');
	template.querySelector('tr td.writer').innerHTML = review.id;
	template.querySelector('tr td.date').innerHTML = review.reviewDate;
	template.querySelector('tr td.star').innerHTML = review.star;
	return template;
}

// 상품 QnA 생성

fetch('prdQnA.do?code=' + code)
	.then(result => result.json())
	.then(result => {
		result.forEach(ele => {
			document.querySelector('#bpList').appendChild(cloneRow3(ele));
			
			})
		})
		

function cloneRow3(qna = {}) {
	let template = document.querySelector('#qnaList').cloneNode(true);
	template.setAttribute('style', "display: '';");
	template.querySelector('tr td.cate2').innerHTML = qna.qnaCategory;
	template.querySelector('tr td.sub2 a').innerHTML = qna.qnaSubject;
	template.querySelector('tr td.sub2 a').setAttribute('href', '');
	template.querySelector('tr td.writer2').innerHTML = qna.id;
	template.querySelector('tr td.date2').innerHTML = qna.qnaDate;
	template.querySelector('tr td.hit2').innerHTML = qna.clickCnt;
	return template;
}

// 버튼 클릭시 이동 (파라미터 포함)

document.querySelector('#rListBtn').addEventListener('click', function(){
	location.href='review.do';
})
document.querySelector('#rWriteBtn').addEventListener('click', function(){
	location.href='reviewDetail.do';
})

document.querySelector('#qListBtn').addEventListener('click', function(){
	location.href='qna.do';
})
document.querySelector('#qWriteBtn').addEventListener('click', function(){
	location.href='qnaDetail.do';
})


// 