package co.sf.order.mapper;

import java.util.List;

import co.sf.cart.vo.CartVO;
import co.sf.order.vo.OrderDetailVO;
import co.sf.order.vo.OrderVO;

public interface OrderMapper {

	List<OrderVO> OrderList(String id);
	
	int addAddress(OrderVO ovo);

	int removeCartItem(OrderDetailVO ovo);

	List<OrderDetailVO> orderDetailList(String id);
	
	
}
