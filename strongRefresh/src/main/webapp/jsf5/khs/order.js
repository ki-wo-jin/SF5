document.addEventListener('DOMContentLoaded', function() {
    const selectedItems = JSON.parse(sessionStorage.getItem('selectedCartItems')) || [];
    
    const tbody = document.getElementById('list');
    tbody.innerHTML = '';

    selectedItems.forEach(item => {
        const totalPrice = item.price * item.productCnt;
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>
                <img src="images/${item.thumImage}" alt="${item.productName}" width="50">
                ${item.productName}
            </td>
            <td class="price">${item.price}</td>
            <td class="quantity">${item.productCnt}</td>
            <td>${item.point}</td>
            <td class="totalPrice">${totalPrice}</td>
        `;
        tbody.appendChild(tr);
    });

    calculateTotal(); // 초기 총합 계산
});

function calculateTotal() {
    const rows = document.querySelectorAll('#list tr');
    let total = 0;
    rows.forEach(row => {
        const totalPrice = parseInt(row.querySelector('.totalPrice').textContent);
        total += totalPrice;
    });
    document.getElementById('totalPrice').textContent = `KRW ${total}`;
    document.getElementById('orderTotal').textContent = `KRW ${total}`;
    document.getElementById('finalTotal').textContent = `KRW ${total}`;
}
