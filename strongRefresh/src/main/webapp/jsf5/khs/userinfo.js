document.addEventListener('DOMContentLoaded', function() {
	var userInfo = JSON.parse(document.getElementById('userJson').textContent);

	if (userInfo) {
		document.getElementById('recipient').value = userInfo.name;

		var phoneParts = userInfo.phone.split('-');
		if (phoneParts.length === 3) {
			document.getElementById('phone1').value = phoneParts[0];
			document.getElementById('phone2').value = phoneParts[1];
			document.getElementById('phone3').value = phoneParts[2];
		}

		document.getElementById('postalCode').value = userInfo.postalCode;
		document.getElementById('address').value = userInfo.address;
		document.getElementById('addressDetail').value = userInfo.addressDetail;
		document.getElementById('reference').value = userInfo.reference;

		var emailParts = userInfo.email.split('@');
		if (emailParts.length === 2) {
			document.getElementById('emailUser').value = emailParts[0];
			document.getElementById('domain-txt').value = emailParts[1];
			document.getElementById('emailDomain').value = 'type';
		}
	}

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
			} else {
				if (userInfo) {
					document.getElementById('recipient').value = userInfo.name;

					var phoneParts = userInfo.phone.split('-');
					if (phoneParts.length === 3) {
						document.getElementById('phone1').value = phoneParts[0];
						document.getElementById('phone2').value = phoneParts[1];
						document.getElementById('phone3').value = phoneParts[2];
					}

					document.getElementById('postalCode').value = userInfo.postalCode;
					document.getElementById('address').value = userInfo.address;
					document.getElementById('addressDetail').value = userInfo.addressDetail;
					document.getElementById('reference').value = userInfo.reference;

					var emailParts = userInfo.email.split('@');
					if (emailParts.length === 2) {
						document.getElementById('emailUser').value = emailParts[0];
						document.getElementById('domain-txt').value = emailParts[1];
						document.getElementById('emailDomain').value = 'type';
					}

					document.getElementById('deliveryMessage').value = '빠른 배송 부탁드립니다.';
				}
			}
		});
	});

	// 이메일 직접 입력 기능
	const domainListEl = document.querySelector('#emailDomain')
	const domainInputEl = document.querySelector('#domain-txt')
	domainListEl.addEventListener('change', (event) => {
		if (event.target.value !== "type") {
			domainInputEl.value = event.target.value
			domainInputEl.disabled = true
		} else {
			domainInputEl.value = ""
			domainInputEl.disabled = false
		}
	})
});
