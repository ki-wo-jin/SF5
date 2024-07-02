package co.sf.common;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import co.sf.order.mapper.OrderMapper;

public class AppTest {
	public static void main(String[] args) {
		SqlSessionFactory sqlSessionFactory = DataSource.getInstance();
		SqlSession sqlSession = sqlSessionFactory.openSession(true);

		OrderMapper mapper = sqlSession.getMapper(OrderMapper.class);
		
		mapper.cartList("1").forEach(cart -> System.out.println(cart));
	}
}
