package co.sf.heart.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.sf.common.DataSource;
import co.sf.heart.mapper.HeartMapper;
import co.sf.heart.vo.HeartVO;
import co.sf.product.vo.ProductVO;

public class HeartServiceImplements implements HeartService{
	
	SqlSession sqlSession = DataSource.getInstance().openSession(true);
	HeartMapper hmapper = sqlSession.getMapper(HeartMapper.class);

	@Override
	public List<ProductVO> heartList(String id) {
		// TODO 찜 목록 출력 서비스
		return hmapper.heartList(id);
	}

	@Override
	public boolean removeHeart(String pcode) {
		return hmapper.deleteHeart(pcode) == 1;
	}

	@Override
	public int getPrdHeart(HeartVO hvo) {
		// TODO 찜 상품코드 가져오기
		return hmapper.selPrdHeart(hvo);
	}
	
	@Override
	public boolean productToHeart(HeartVO hvo) {
		// TODO 상품 -> 찜 추가
		return hmapper.productToHeart(hvo) == 1;
	}

	@Override
	public boolean remPrdHeart(HeartVO hvo) {
		// TODO 상품 -> 찜 삭제
		return hmapper.delPrdHeart(hvo) == 1;
	}


}
