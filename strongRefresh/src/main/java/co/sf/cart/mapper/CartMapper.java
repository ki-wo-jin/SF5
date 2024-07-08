package co.sf.cart.mapper;

import java.util.List;

import co.sf.cart.vo.CartVO;
import co.sf.order.vo.OrderDetailVO;
import co.sf.order.vo.OrderVO;

public interface CartMapper {
	// 카트 삭제
	int deleteCart(String ccode);

	// 카트 수량 변경
	int updateCnt(CartVO cvo);

	// 카트 리스트
	List<CartVO> cartList(String id);
	
	// 카트 수량 표시 : 해당 id의 행 개수
	int selectCartCnt(String id);

	CartVO getCartInfo(String cartCode);

	int insertOrder(OrderVO ovo);

	int insertOrderDetail(OrderDetailVO odo);

	// 상품 -> 카트 확인
	int selPrdCart(CartVO cvo);

	// 상품 -> 카트 추가
	int insPrdCart(CartVO cvo);

	// 상품 -> 카트 변경
	int upPrdCart(CartVO cvo);

	// 신규주문번호 생성.
	int selectNewOrderNo();
}
