window.addEventListener('beforeunload', function() {
    sessionStorage.removeItem('selectedCartItems');
});

document.addEventListener('DOMContentLoaded', function() {
    const orderCode = new URLSearchParams(window.location.search).get('orderCode');
    if (orderCode) {
        fetchOrderDetails(orderCode);
    }
});

function fetchOrderDetails(orderCode) {
    fetch('/orderDetails.do?orderCode=' + orderCode)
        .then(response => response.json())
        .then(orderDetails => {
            console.log(orderDetails);
            const tbody = document.getElementById('list');
            tbody.innerHTML = ''; 

            orderDetails.forEach(item => {
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
            window.location.href = 'thankyou.do';
        } else {
            alert('주문 처리에 실패했습니다.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('주문 처리 중 오류가 발생했습니다.');
    }
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
