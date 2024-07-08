package co.sf.order.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import co.sf.common.DataSource;
import co.sf.order.mapper.OrderMapper;
import co.sf.order.vo.OrderDetailVO;

public class OrderDetailServiceImpl implements OrderDetailService{
	SqlSessionFactory sqlSessionFactory = DataSource.getInstance();
	SqlSession sqlSession = sqlSessionFactory.openSession(true);
	
	OrderMapper mapper = sqlSession.getMapper(OrderMapper.class);

	@Override
	public List<OrderDetailVO> orderDetailList(String orderCode) {
		// TODO Auto-generated method stub
		return mapper.orderDetailList(orderCode);
	}

	
}
