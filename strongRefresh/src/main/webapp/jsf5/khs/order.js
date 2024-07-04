/*
 * order.js
 */

function cartitems() {
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

// 주문하기 
document.getElementById('payment').addEventListener('click', async function() {
    const recipient = document.getElementById('recipient').value;
    const phone1 = document.getElementById('phone1').value;
    const phone2 = document.getElementById('phone2').value;
    const phone3 = document.getElementById('phone3').value;
    const postalCode = document.getElementById('postalCode').value;
    const address = document.getElementById('address').value;
    const addressDetail = document.getElementById('addressDetail').value;
    const reference = document.getElementById('reference').value;
    const emailUser = document.getElementById('emailUser').value;
    const emailDomain = document.getElementById('emailDomain').value === 'type' ? document.getElementById('domain-txt').value : document.getElementById('emailDomain').value;
    const deliveryMessage = document.getElementById('deliveryMessage').value;

    const phone = `${phone1}-${phone2}-${phone3}`;
    const email = `${emailUser}@${emailDomain}`;
    const fullAddress = `${postalCode} ${address} ${addressDetail} ${reference}`;

    const orderData = {
        recipient: recipient,
        phone: phone,
        address: fullAddress,
        email: email,
        deliveryMessage: deliveryMessage,
        totalPrice: document.getElementById('totalPrice').textContent.replace('KRW ', '')
    };

    try {
        const response = await fetch('addOrder.do', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderData)
        });

        const result = await response.text();
        if (result === 'success') {
            alert('주문이 완료되었습니다.');
            window.location.href = 'thankyou.do';
        } else {
            alert('주문 처리에 실패했습니다.');
            window.location.href = 'thankyou.do';
        }
    } catch (error) {
        console.error('Error:', error);
        alert('주문 처리 중 오류가 발생했습니다.');
    }
});

// 이메일 직접 입력 기능
const domainListEl = document.querySelector('#emailDomain')
const domainInputEl = document.querySelector('#domain-txt')
domainListEl.addEventListener('change', (event) => {
  if(event.target.value !== "type") {
    domainInputEl.value = event.target.value
    domainInputEl.disabled = true
  } else { 
    domainInputEl.value = ""
    domainInputEl.disabled = false
  }
})

// 새로운 배송지 선택 시 입력 창 초기화
document.querySelectorAll('input[name="deliveryOption"]').forEach(radio => {
    radio.addEventListener('change', function() {
        if (this.value === 'newAddress') {
            document.getElementById('recipient').value = '';
            document.getElementById('phone1').value = '';
            document.getElementById('phone2').value = '';
            document.getElementById('phone3').value = '';
            document.getElementById('postalCode').value = '';
            document.getElementById('address').value = '';
            document.getElementById('addressDetail').value = '';
            document.getElementById('reference').value = '';
            document.getElementById('emailUser').value = '';
            document.getElementById('domain-txt').value = '';
            document.getElementById('emailDomain').value = 'type';
            document.getElementById('deliveryMessage').value = '';
        }
    });
});



document.addEventListener('DOMContentLoaded', cartitems);