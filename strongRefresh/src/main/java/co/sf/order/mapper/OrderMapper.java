package co.sf.order.mapper;

import java.util.List;

import co.sf.cart.vo.CartVO;
import co.sf.order.vo.OrderDetailVO;
import co.sf.order.vo.OrderVO;

public interface OrderMapper {

	List<OrderVO> OrderList();
	
	int removeproduct(OrderVO ovo);

	int addAddress(OrderVO ovo);


	List<OrderDetailVO> orderDetailList();
}
