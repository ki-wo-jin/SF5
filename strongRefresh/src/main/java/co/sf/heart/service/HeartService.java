package co.sf.heart.service;

import java.util.List;

import co.sf.heart.vo.HeartVO;
import co.sf.product.vo.ProductVO;

public interface HeartService {
	// 찜 목록 출력
	List<ProductVO> heartList(String id);
	
	// 삭제
	boolean removeHeart(String pcode);
	
	// 상품 -> 찜 확인
	int getPrdHeart(HeartVO hvo);
	
	// 상품 -> 찜 삭제
	boolean remPrdHeart(HeartVO hvo);
	
	// 상품 -> 찜 추가
	boolean productToHeart(HeartVO hvo);

}
