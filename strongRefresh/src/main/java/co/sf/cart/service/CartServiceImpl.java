package co.sf.cart.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import co.sf.cart.mapper.CartMapper;
import co.sf.cart.vo.CartVO;
import co.sf.common.DataSource;
import co.sf.order.vo.OrderDetailVO;
import co.sf.order.vo.OrderVO;

public class CartServiceImpl implements CartService {

	SqlSessionFactory sqlSessionFactory = DataSource.getInstance();
	SqlSession sqlSession = sqlSessionFactory.openSession(true);

	CartMapper mapper = sqlSession.getMapper(CartMapper.class);

	@Override
	public List<CartVO> cartList(String id) {
		return mapper.cartList(id);
	}

	@Override
	public CartVO getCart(String cartCode) {
		return mapper.getCartInfo(cartCode);
	}

	@Override
	public boolean createOrder(OrderVO ovo, List<OrderDetailVO> odetail) {
		// TODO Auto-generated method stub
		// 주문정보생성.
		mapper.insertOrder(ovo); // order테이블에 넣어주는거.
		for (OrderDetailVO od : odetail) {
			mapper.insertOrderDetail(od); // order detail에 넣어주는거.
		}
		return true;
	}

}
