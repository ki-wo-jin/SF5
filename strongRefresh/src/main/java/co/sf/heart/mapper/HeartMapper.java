package co.sf.heart.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import co.sf.cart.vo.CartVO;
import co.sf.heart.vo.HeartVO;
import co.sf.product.vo.ProductVO;

public interface HeartMapper {
	//찜 목록 쿼리
	List<ProductVO> heartList(@Param("userId") String id);
	
	// 삭제
	int deleteHeart(String pcode);
		
	//찜 화면에서 카드 담기 클릭시 카트 목록에 담기
	int insertCart(CartVO cvo);
	
	//찜 화면에서 카트 리스트 비교
	int selectProduct(HeartVO hvo);
	
	
	//상품 -> 찜 확인 쿼리
	int selPrdHeart(HeartVO hvo);
	
	//상품 -> 찜 삭제 쿼리
	int delPrdHeart(HeartVO hvo);
	
	//상품 -> 찜 추가 쿼리
	int productToHeart(HeartVO hvo);
}
