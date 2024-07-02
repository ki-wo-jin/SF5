/*
* order.js
*/

// 카트 아이템을 받아서 테이블에 추가하는 함수
function populateCartItems(cartItems) {
    const tbody = document.getElementById('list');
    tbody.innerHTML = ''; // 기존 내용을 초기화

    cartItems.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><input type="checkbox" class="selectItem" name="selectItem" value="${item.productCode}"></td>
            <td>${item.productName}</td>
            <td class="price">${item.price}</td>
            <td class="quantity">${item.quantity}</td>
            <td>${item.quantity * 0.1}</td>
            <td>${item.totalPrice}</td>
        `;
        tbody.appendChild(tr);
    });

    // 개별 선택 시 총합 계산 기능 추가
    document.querySelectorAll('.selectItem').forEach(checkbox => {
        checkbox.addEventListener('change', calculateTotal);
    });
}

// 전체 선택/해제 기능
function toggleSelectAll() {
    const selectAllCheckbox = document.getElementById('selectAll');
    const checkboxes = document.querySelectorAll('.selectItem');
    checkboxes.forEach(checkbox => {
        checkbox.checked = selectAllCheckbox.checked;
    });
    calculateTotal();
}

// 선택한 상품 삭제 기능
function deleteSelected() {
    const checkboxes = document.querySelectorAll('.selectItem:checked');
    checkboxes.forEach(checkbox => {
        checkbox.closest('tr').remove();
    });
    calculateTotal();
}

// 총합 계산 기능
function calculateTotal() {
    const checkboxes = document.querySelectorAll('.selectItem:checked');
    let total = 0;
    checkboxes.forEach(checkbox => {
        const row = checkbox.closest('tr');
        const price = parseInt(row.querySelector('.price').textContent);
        const quantity = parseInt(row.querySelector('.quantity').textContent);
        total += price * quantity;
    });
    document.getElementById('totalPrice').textContent = `KRW ${total}`;
    document.getElementById('orderTotal').textContent = `KRW ${total}`;
    document.getElementById('finalTotal').textContent = `KRW ${total}`;
}

// 페이지 로드 시 카트 아이템 가져오기
document.addEventListener('DOMContentLoaded', () => {
    const cartItems = JSON.parse(document.getElementById('cartData').textContent);
    populateCartItems(cartItems);
});
