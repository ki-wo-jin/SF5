package co.sf.cart.service;

import java.util.List;

import co.sf.cart.vo.CartVO;

public interface CartService {
	//order page에서 필요한 cartList
	List<CartVO> cartList(String id);
}
