/*
 * order.js
 */

function loadCartItems() {
    fetch('/orderdetail.do?id=1') 
        .then(response => response.json())
        .then(cartItems => {
            console.log(cartItems);
            const tbody = document.getElementById('list');
            tbody.innerHTML = ''; 

            cartItems.forEach(item => {
                const totalPrice = item.price * item.productCnt;
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td><input type="checkbox" class="selectItem" name="selectItem" value="${item.productCode}"></td>
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

            // 개별 선택 시 총합 계산 기능 추가
            document.querySelectorAll('.selectItem').forEach(checkbox => {
                checkbox.addEventListener('change', calculateTotal);
            });

            calculateTotal(); // 초기 총합 계산
        })
        .catch(error => console.error('Error:', error));
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
async function deleteSelected() {
    const checkboxes = document.querySelectorAll('.selectItem:checked');

    for (const checkbox of checkboxes) {
        const cartCode = checkbox.value;
        try {
            const response = await fetch('removeCart.do?cartCode=' + cartCode, {
                method: 'DELETE'
            });
            const result = await response.text();
            if (result === "success") {
                checkbox.closest('tr').remove();
            } else {
                console.error('삭제 실패 : ', cartCode);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
    calculateTotal();
}



// 총합 계산 기능
function calculateTotal() {
    const checkboxes = document.querySelectorAll('.selectItem:checked');
    let total = 0;
    checkboxes.forEach(checkbox => {
        const row = checkbox.closest('tr');
        const totalPrice = parseInt(row.querySelector('.totalPrice').textContent);
        total += totalPrice;
    });
    document.getElementById('totalPrice').textContent = `KRW ${total}`;
    document.getElementById('orderTotal').textContent = `KRW ${total}`;
    document.getElementById('finalTotal').textContent = `KRW ${total}`;
}

document.addEventListener('DOMContentLoaded', loadCartItems);
