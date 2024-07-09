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
		totalPrice: parseInt(document.getElementById('totalPrice').textContent.replace('KRW ', '')),
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
		 if (result.retCode == "OK") {
			 alert('주문이 완료되었습니다.');
			 window.location.href = 'thankyou.do';
		 } else {
			 window.location.href = 'thankyou.do';
		 }
		
	} catch (error) {
		console.error('Error:', error);
		alert('주문 처리 중 오류가 발생했습니다.');
	}

});
