package co.sf.cart.mapper;

import java.util.List;

import co.sf.cart.vo.CartVO;

public interface CartMapper {
	//ordet page에서 사용
	List<CartVO> cartList(String id);

}
