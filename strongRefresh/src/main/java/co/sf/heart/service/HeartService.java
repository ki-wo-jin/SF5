package co.sf.heart.service;

import java.util.List;

import co.sf.cart.vo.CartVO;
import co.sf.product.vo.ProductVO;

public interface HeartService {
	// 찜 목록 출력 - 경민
	List<ProductVO> heartList(String id);
	
	// 삭제 - 경민
	boolean removeHeart(String pcode);
	
	//heart page에서 카트담기 - 경민
	boolean addCart(CartVO cvo);
	
	//찜에서 카트 담기 중복 체크 - 경민
	boolean checkProduct(String pcode);
}
