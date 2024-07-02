package co.sf.cart.mapper;

import java.util.List;

import co.sf.cart.vo.CartVO;

public interface CartMapper {
	List<CartVO> cartList(String id);
}
