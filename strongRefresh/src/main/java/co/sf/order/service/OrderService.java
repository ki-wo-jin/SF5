package co.sf.order.service;

import java.util.List;

import co.sf.cart.vo.CartVO;
import co.sf.order.vo.OrderVO;

public interface OrderService {
	List<OrderVO> OrderList();
	
	boolean removeproduct(OrderVO ovo);
	
	boolean addAddress(OrderVO ovo);
	
}
