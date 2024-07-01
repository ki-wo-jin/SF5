package co.sf.heart.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.sf.common.DataSource;
import co.sf.heart.mapper.HeartMapper;
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
}
