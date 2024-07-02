package co.sf.common;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import co.sf.cart.mapper.CartMapper;

public class AppTest {
	public static void main(String[] args) {
		SqlSessionFactory sqlSessionFactory = DataSource.getInstance();
		SqlSession sqlSession = sqlSessionFactory.openSession(true);

		CartMapper mapper = sqlSession.getMapper(CartMapper.class);
		
		mapper.cartList("1").forEach(cart -> System.out.println(cart));
	}
}
