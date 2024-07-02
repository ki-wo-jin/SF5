package co.sf.order.web;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.sf.common.Control;
import co.sf.order.service.OrderService;
import co.sf.order.service.OrderServiceImpl;
import co.sf.order.vo.CartVO;

public class OrderForm implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String id = req.getParameter("uid");
		id = "";

		OrderService svc = new OrderServiceImpl();
		List<CartVO> list = svc.cartList(id);

		req.setAttribute("cartList", list);

		req.getRequestDispatcher("khs/order.tiles").forward(req, resp);
	}

}
