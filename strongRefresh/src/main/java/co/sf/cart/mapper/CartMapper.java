package co.sf.cart.mapper;

import java.util.List;

import co.sf.cart.vo.CartVO;
import co.sf.order.vo.OrderDetailVO;
import co.sf.order.vo.OrderVO;

public interface CartMapper {
	// ordet page에서 사용
	List<CartVO> cartList(String id);
	
	CartVO getCartInfo(String cartCode);

	int insertOrder(OrderVO ovo);

	int insertOrderDetail(OrderDetailVO odo);

}
