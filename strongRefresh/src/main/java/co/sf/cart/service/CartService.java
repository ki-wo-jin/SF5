package co.sf.cart.service;

import java.util.List;

import co.sf.cart.vo.CartVO;

public interface CartService {
	//order page에서 필요한 cartList
	List<CartVO> cartList(String id);
	
	// 상품 -> 카트 확인
	int checkPrdCart(CartVO cvo);
	
	// 상품 -> 카트 추가
	boolean addPrdCart(CartVO cvo);
	
	// 상품 -> 카트 변경
	boolean upPrdCart(CartVO cvo);

}
