// ▶ 카트 목록
let fields = ['thumImage', 'productName', 'price', 'productCnt'];
let cartList = document.getElementById('cartList');

fetch('cartList.do')
	.then(result => result.json())
	.then(result => {
		result.forEach(ele => {
			cartList.appendChild(makeRow(ele));
		})
	})
	
	
	
	bookList();


	//2. 도서 목록 출력 함수
	function bookList(){
		let addTbody = document.getElementById('bookList');
		fetch('bookListJson.do')
			.then(result => result.json())
			.then(result => {
				result.forEach(book => {
					addTbody.appendChild(makeRow(book));			
				})
		})
	} // end of bookList().


	//행 추가 기능.
	//앞: 체크박스, 뒤: 삭제버튼
	//tr-td-input
	function makeRow(obj = {}) {
		let tr = document.createElement('tr');
		tr.setAttribute('id', obj.bookCode);
		
		let td = document.createElement('td');
		let input = document.createElement('input');
		input.setAttribute('type', 'checkbox');
		
		input.setAttribute('id', 'boxs'); //체크박스 아이디	
		
		td.appendChild(input);
		tr.appendChild(td);
		
		fields.forEach(field => {
			td = document.createElement('td');		
			td.innerHTML = obj[field];
			tr.appendChild(td);
		});
		
		td = document.createElement('td');
		td.setAttribute('style', 'width: 50px');
		td.innerHTML = "<button onclick='delFuc(event)' style='width: 50px;'>삭제</button>";
		tr.appendChild(td);
		
		return tr;
	} // end of makeRow().