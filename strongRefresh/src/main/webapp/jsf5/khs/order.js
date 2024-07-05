// order.js

function cartitems() {
    // 세션 스토리지에서 선택된 카트 항목 가져오기
    const selectedItems = JSON.parse(sessionStorage.getItem('selectedCartItems')) || [];

    // 선택된 카트 항목의 정보를 가져오기 위해 서버에 요청
    fetch('/createOrder.do?action=getCartItems&code=' + selectedItems.join('&code='))
        .then(response => response.json())
        .then(cartItems => {
            console.log(cartItems);
            const tbody = document.getElementById('list');
            tbody.innerHTML = ''; 

            cartItems.forEach(item => {
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
        })
        .catch(error => console.error('Error:', error));
}

// 총합 계산 기능
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

    const selectedItems = JSON.parse(sessionStorage.getItem('selectedCartItems')) || [];

    const orderData = {
        recipient: recipient,
        phone: phone,
        address: fullAddress,
        email: email,
        deliveryMessage: deliveryMessage,
        totalPrice: document.getElementById('totalPrice').textContent.replace('KRW ', ''),
        cartItems: selectedItems
    };

    try {
        const response = await fetch('createOrder.do', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderData)
        });

        const result = await response.json();
        if (result.retCode === 'OK') {
            alert('주문이 완료되었습니다.');
            const params = new URLSearchParams();
            params.append('orderCode', result.orderCode);
            selectedItems.forEach((item, index) => params.append('cartItem' + index, item));
            window.location.href = 'order.do?' + params.toString();
        } else {
            alert('주문 처리에 실패했습니다.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('주문 처리 중 오류가 발생했습니다.');
    }
});

// 이메일 직접 입력 기능
const domainListEl = document.querySelector('#emailDomain');
const domainInputEl = document.querySelector('#domain-txt');
domainListEl.addEventListener('change', (event) => {
  if(event.target.value !== "type") {
    domainInputEl.value = event.target.value;
    domainInputEl.disabled = true;
  } else { 
    domainInputEl.value = "";
    domainInputEl.disabled = false;
  }
});

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
