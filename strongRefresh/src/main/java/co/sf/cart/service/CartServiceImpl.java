package co.sf.cart.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import co.sf.cart.mapper.CartMapper;
import co.sf.cart.vo.CartVO;
import co.sf.common.DataSource;

public class CartServiceImpl implements CartService {
	
	SqlSessionFactory sqlSessionFactory = DataSource.getInstance();
	SqlSession sqlSession = sqlSessionFactory.openSession(true);

	CartMapper mapper = sqlSession.getMapper(CartMapper.class);

	@Override
	public List<CartVO> cartList(String id) {
		return mapper.cartList(id);
	}

	@Override
	public int checkPrdCart(CartVO cvo) {
		// TODO 카트 상품 갯수 가져오기
		return mapper.selPrdCart(cvo);
	}

	@Override
	public boolean addPrdCart(CartVO cvo) {
		// TODO 상품 -> 카트 추가
		return mapper.insPrdCart(cvo) == 1;
	}

	@Override
	public boolean upPrdCart(CartVO cvo) {
		// TODO 상품 -> 카트 변경
		return mapper.upPrdCart(cvo) == 1;
	}


}
