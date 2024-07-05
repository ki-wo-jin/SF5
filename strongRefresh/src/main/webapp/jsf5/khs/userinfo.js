document.addEventListener('DOMContentLoaded', function() {
    // JSON 형태의 사용자 정보를 가져와 JavaScript 객체로 변환
    var userInfo = JSON.parse(document.getElementById('userJson').textContent);

    // 사용자 정보가 있는 경우 폼 필드를 채움
    if (userInfo) {
        document.getElementById('recipient').value = userInfo.name;

        // 전화번호를 '-' 기준으로 나누어 각각의 입력 필드에 넣음
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

        // 이메일을 '@' 기준으로 나누어 각각의 입력 필드에 넣음
        var emailParts = userInfo.email.split('@');
        if (emailParts.length === 2) {
            document.getElementById('emailUser').value = emailParts[0];
            document.getElementById('domain-txt').value = emailParts[1];
            document.getElementById('emailDomain').value = 'type';
        }
    }

    // 라디오 버튼 클릭 시 입력 창 초기화 또는 사용자 정보로 채우기
    document.querySelectorAll('input[name="deliveryOption"]').forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === 'newAddress') {
                // 새로운 주소 선택 시 필드 초기화
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
                document.getElementById('deliveryMessage').value = ''; // 새로운 주소 선택 시 배송 메시지 초기화
            } else {
                // 회원 정보와 동일 선택 시 사용자 정보로 채우기
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
});
