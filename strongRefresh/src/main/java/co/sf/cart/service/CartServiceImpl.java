package co.sf.cart.service;

import java.text.SimpleDateFormat;
import java.util.Date;
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
	public boolean removeCart(String ccode) {
		return mapper.deleteCart(ccode) == 1;
	}

	@Override
	public boolean changeCnt(CartVO cvo) {
		return mapper.updateCnt(cvo) == 1;
	}
	
	// 해당 id의 카트 행 개수 가져오기
	@Override
	public int getCartCnt(String id) {
		return mapper.selectCartCnt(id);
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

	@Override
	public String getNewOrderNo() {
		// TODO Auto-generated method stub
		// P202407
		int newSeq = mapper.selectNewOrderNo(); // 2
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMM");
		String yyyymm = sdf.format(new Date()); // P202407- 0011
		yyyymm = "P" + yyyymm + "-" + ("00" + newSeq).substring(("00" + newSeq).length() - 3);

		return yyyymm;
	}

}
