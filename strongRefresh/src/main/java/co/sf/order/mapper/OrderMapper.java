package co.sf.order.mapper;

import java.util.List;
import java.util.Map;

import co.sf.order.vo.OrderDetailVO;
import co.sf.order.vo.OrderVO;

public interface OrderMapper {
    
    // 기존 배송정보
    List<OrderVO> userInfo(String id);
    
    // 새로운 배송지 추가
    int addAddress(OrderVO ovo);

    // 주문내역
    List<OrderDetailVO> orderDetailList(String orderCode);
    
    // 선택된 카트 항목 삭제
    int removeSelectedCartItems(Map<String, Object> params);

    // 주문 상태 업데이트
    int updateOrderStatus(Map<String, Object> params);
}
