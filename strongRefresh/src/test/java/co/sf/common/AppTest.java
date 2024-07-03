package co.sf.common;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import co.sf.cart.mapper.CartMapper;
import co.sf.cart.vo.CartVO;
import co.sf.heart.mapper.HeartMapper;

public class AppTest {
	public static void main(String[] args) {
		SqlSessionFactory sqlSessionFactory = DataSource.getInstance();
		SqlSession sqlSession = sqlSessionFactory.openSession(true);

		CartMapper cmapper = sqlSession.getMapper(CartMapper.class);
		HeartMapper hmapper = sqlSession.getMapper(HeartMapper.class);
		
		//mapper.cartList("1").forEach(cart -> System.out.println(cart));
		
		//경민
		CartVO cart = new CartVO();
		cart.setCartCode(0);
		cart.setProductCode("900");
		cart.setProductCnt(1);
		cart.setId("1");
		
		if(hmapper.insertCart(cart)==1) {
			System.out.println("ok");			
			System.out.println(cart);
		}
		
		
	}
}
