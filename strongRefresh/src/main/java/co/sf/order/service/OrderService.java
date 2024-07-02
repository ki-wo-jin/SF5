package co.sf.order.service;

import java.util.List;

import co.sf.order.vo.CartVO;
import co.sf.order.vo.OrderVO;

public interface OrderService {
	List<OrderVO> OrderList();

	boolean addAddress(OrderVO ovo);

	List<CartVO> cartList(String id);
}
