package co.sf.order.service;

import java.util.List;

import co.sf.cart.vo.CartVO;
import co.sf.order.vo.OrderDetailVO;
import co.sf.order.vo.OrderVO;

public interface OrderService {
	List<OrderDetailVO> getOrderDetails(String id);

	boolean addAddress(OrderVO ovo);

	List<OrderDetailVO> OrderDetailList(String orderCode);
}
