package co.sf.order.mapper;

import java.util.List;

import co.sf.order.vo.OrderDetailVO;
import co.sf.order.vo.OrderVO;

public interface OrderMapper {
	
	// 기존 배송정보
	List<OrderVO> userInfo(String id);
	
	// 새로운 배송지 추가
	int addAddress(OrderVO ovo);

	// 주문 시 카트 아이템 삭제
	int removeCartItem(OrderDetailVO ovo);
	
	// 주문내역
	List<OrderDetailVO> orderDetailList(String orderCode);
	
	// 주문내역 삭제
	List<OrderDetailVO> removeOrderDetail(String id);
	
	
	
}
