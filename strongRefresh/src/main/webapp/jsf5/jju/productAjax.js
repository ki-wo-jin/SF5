// page
let page = 1;
productList(page, productListFnc);

function productList(page = 1, successCall) {
	const xhtp = new XMLHttpRequest();
	xhtp.open('get', 'productListJson.do?page=' + page);
	xhtp.send();
	xhtp.onload = successCall;
}

// productList의 매개값으로 사용될 함수 수정필요!
function productListFnc() {
	// 12개 상품을 지워주고 새롭게 목록출력
	document.querySelectorAll('#clone').forEach((item, idx) => {
		if (idx > 2) {
			item.remove();
		}
	});
	let data = JSON.parse(this.responseText);
	data.forEach(product => {
		let li = cloneRow(product);
		document.querySelector('#list').appendChild(li);
	});

	makePagingFnc();
}

//

// 제품 리스트 출력
function cloneRow(product = {}) {
	let template = document.getElementById('clone').cloneNode(true);
	template.setAttribute('style', 'display: block;');
	let a = template.querySelector('#a1');
	a.href = 'productDetail.do?code=' + product.productCode;
	template.querySelector('#listImg').setAttribute('src', 'images/' + product.thumImage);
	let image = template.querySelector('#listImg');
	image.style.width = '255px';
	image.style.height = 'auto';
	template.querySelector('#listName').innerHTML = product.productName;
	let name = template.querySelector('#listName');
	name.href = 'productDetail.do?code=' + product.productCode;
	template.querySelector('#listPrice').innerHTML = product.price;
	template.querySelector('#listCategorie').innerHTML = product.categorie;
	return template;
}



// 페이징 목록
function makePagingFnc() {
	fetch('productTotalCnt.do')
		.then(result => result.json())
		.then(result => {
			createPagingList(result.totalCount);
		})
}

// 페이징 출력.
let pagination = document.querySelector('div.site-block-27>ul.pagination');
function createPagingList(totalCount) {
	let totalCnt = totalCount;
	let startPage, endPage;
	let prev, next;
	let realEnd = Math.ceil(totalCnt / 9); // 12페이지

	endPage = Math.ceil(page / 10) * 10; // 10page
	startPage = endPage - 9;
	endPage = endPage > realEnd ? realEnd : endPage;

	prev = startPage > 1;
	next = endPage < realEnd;

	// startPage, endPage, prev, next => a태그 생성
	pagination.innerHTML = '';
	if (prev) {
		let li = document.createElement('a');
		let aTag = document.createElement('a');
		aTag.setAttribute('data-page', startPage - 1);
		aTag.setAttribute('href', '#');
		aTag.innerHTML = "&laquo;";
		li.appendChild(aTag);
		pagination.appendChild(li);
	}

	for (let p = startPage; p <= endPage; p++) {
		let li = document.createElement('li');
		let aTag = "";
		if (page == p) {
			aTag = document.createElement('span');
			aTag.innerHTML = p;
			aTag.className = 'active';
		} else {
			aTag = document.createElement('a');
			aTag.setAttribute('data-page', p);
			aTag.setAttribute('href', '#');
			aTag.innerHTML = p;
		}
		li.appendChild(aTag)
		pagination.appendChild(li);

	}

	if (next) {
		let li = document.createElement('a');
		let aTag = document.createElement('a');
		aTag.setAttribute('data-page', endPage + 1);
		aTag.setAttribute('href', '#');
		aTag.innerHTML = "&raquo;";
		li.appendChild(aTag);
		pagination.appendChild(li);
	}

	// 페이징 a 태그를 클릭하면 목록 보여주기
	document.querySelectorAll('div.site-block-27>ul.pagination a').forEach(item => {
		item.addEventListener('click', function(e) {
			e.preventDefault(); // 페이지 이동하는 기본기능 차단
			page = item.dataset.page;
			productList(page, productListFnc);
		});
	});


} // end of createPagingList()