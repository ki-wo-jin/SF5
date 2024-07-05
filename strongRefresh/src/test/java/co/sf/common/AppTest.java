package co.sf.common;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import co.sf.cart.mapper.CartMapper;
import co.sf.cart.vo.CartVO;
import co.sf.heart.mapper.HeartMapper;
import co.sf.product.mapper.ProductMapper;
import co.sf.product.service.ProductService;
import co.sf.product.service.ProductServiceImpl;
import co.sf.product.vo.ProductVO;

public class AppTest {
	public static void main(String[] args) {
		SqlSessionFactory sqlSessionFactory = DataSource.getInstance();
		SqlSession sqlSession = sqlSessionFactory.openSession(true);
		String page = "1";
		String category = "OUTERS";

		ProductService svc = new ProductServiceImpl();
		List<ProductVO> list = svc.productListPagingCategory(Integer.parseInt(page), category);
		list.forEach(System.out::println);

	}
}
