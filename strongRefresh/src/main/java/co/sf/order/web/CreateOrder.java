package co.sf.order.web;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.sf.cart.service.CartService;
import co.sf.cart.service.CartServiceImpl;
import co.sf.cart.vo.CartVO;
import co.sf.common.Control;
import co.sf.order.vo.OrderDetailVO;
import co.sf.order.vo.OrderVO;

public class CreateOrder implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		// 장바구니에서 카트번호를 선택한 값을 code=45&code=49&code=83
		String[] cartAry = req.getParameterValues("code");
		// 상품1, 상품2,....

		CartService svc = new CartServiceImpl();
		// OrderVO 하나 , OrderDetail 여러개.
		// 주문번호 만들기.
		String orderNo = "P202406-003";

		OrderVO ovo = new OrderVO();
		ovo.setOrderCode(orderNo);
		ovo.setId("1");
//		ovo.setAddress(req.getParameter("address"));
//		ovo.setDeliveryMessage(req.getParameter("msg"));
		// 더 작업하기.

		List<OrderDetailVO> detailList = new ArrayList<>();

		for (String cartCode : cartAry) {
			CartVO cart = svc.getCart(cartCode);
			OrderDetailVO detail = new OrderDetailVO();
			detail.setOrderCode(orderNo);
			detail.setProductCnt(cart.getProductCnt());
			detail.setProductCode(cart.getProductCode());

			detailList.add(detail);
		}

		if (svc.createOrder(ovo, detailList)) {
			System.out.println("OK");
		} else {
			System.out.println("NG");

		}

	}

}
