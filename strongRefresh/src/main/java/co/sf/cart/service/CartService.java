package co.sf.cart.service;

import java.util.List;

import co.sf.cart.vo.CartVO;
import co.sf.order.vo.OrderDetailVO;
import co.sf.order.vo.OrderVO;

public interface CartService {

	// 장바구니 목록
	List<CartVO> cartList(String id);

	// 카트 삭제
	boolean removeCart(String ccode);

	// 카트 수량 변경
	boolean changeCnt(CartVO cvo);

	// 상품 -> 카트 확인
	int checkPrdCart(CartVO cvo);

	// 상품 -> 카트 추가
	boolean addPrdCart(CartVO cvo);

	// 상품 -> 카트 변경
	boolean upPrdCart(CartVO cvo);

	//
	CartVO getCart(String cartCode);

	// 주문생성.
	boolean createOrder(OrderVO ovo, List<OrderDetailVO> odetail);

	// 신규주문번호.
	String getNewOrderNo();


}
