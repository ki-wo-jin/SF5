package co.sf.cart.service;

import java.util.List;

import co.sf.cart.vo.CartVO;

public interface CartService {
	List<CartVO> cartList(String id);
}
