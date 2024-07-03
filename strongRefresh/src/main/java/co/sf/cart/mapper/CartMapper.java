package co.sf.cart.mapper;

import java.util.List;

import co.sf.cart.vo.CartVO;

public interface CartMapper {
	//ordet page에서 사용
	List<CartVO> cartList(String id);
	
	// 상품 -> 카트 확인
	int selPrdCart(CartVO cvo);
	
	// 상품 -> 카트 추가
	int insPrdCart(CartVO cvo);
	
	// 상품 -> 카트 변경
	int upPrdCart(CartVO cvo);

}
