package co.sf.cart.service;

import java.util.List;

import co.sf.cart.vo.CartVO;
import co.sf.order.vo.OrderDetailVO;
import co.sf.order.vo.OrderVO;

public interface CartService {
	// order page에서 필요한 cartList
	List<CartVO> cartList(String id);

	CartVO getCart(String cartCode);

	// 주문생성.
	boolean createOrder(OrderVO ovo, List<OrderDetailVO> odetail);

}
