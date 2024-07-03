package co.sf.heart.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.sf.cart.vo.CartVO;
import co.sf.common.DataSource;
import co.sf.heart.mapper.HeartMapper;
import co.sf.heart.vo.HeartVO;
import co.sf.product.vo.ProductVO;

public class HeartServiceImpl implements HeartService{
	
	SqlSession sqlSession = DataSource.getInstance().openSession(true);
	HeartMapper mapper = sqlSession.getMapper(HeartMapper.class);

	@Override
	public List<ProductVO> heartList(String id) {
		// TODO 찜 목록 출력 서비스
		return mapper.heartList(id);
	}

	@Override
	public boolean removeHeart(String pcode) {
		return mapper.deleteHeart(pcode) == 1;
	}	
	
	@Override
	public boolean addCart(CartVO cvo) {
		return mapper.insertCart(cvo) == 1;
	}
	
	@Override
	public boolean checkProduct(String pcode) {
		return mapper.selectProduct(pcode) == 1;
	}
	
	@Override
	public int getPrdHeart(HeartVO hvo) {
		// TODO 찜 상품코드 가져오기
		return mapper.selPrdHeart(hvo);
	}
	
	@Override
	public boolean productToHeart(HeartVO hvo) {
		// TODO 상품 -> 찜 추가
		return mapper.productToHeart(hvo) == 1;
	}

	@Override
	public boolean remPrdHeart(HeartVO hvo) {
		// TODO 상품 -> 찜 삭제
		return mapper.delPrdHeart(hvo) == 1;
	}
}
