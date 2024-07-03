package co.sf.heart.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import co.sf.cart.vo.CartVO;
import co.sf.product.vo.ProductVO;

public interface HeartMapper {
	//찜 목록 쿼리 - 경민
	List<ProductVO> heartList(@Param("userId") String id);
	
	// 삭제 - 경민
	int deleteHeart(String pcode);
		
	//찜 화면에서 카드 담기 클릭시 카트 목록에 담기 - 경민
	int insertCart(CartVO cvo);
	
	//찜 화면에서 카트 리스트 비교 - 경민
	int selectProduct(String pcode);
	//CartVO selectCart(int pcode);

}
