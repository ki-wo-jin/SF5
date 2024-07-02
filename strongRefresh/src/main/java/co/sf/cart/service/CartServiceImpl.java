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

}
