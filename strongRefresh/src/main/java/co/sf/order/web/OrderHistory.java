package co.sf.order.web;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import co.sf.common.Control;
import co.sf.order.service.OrderService;
import co.sf.order.service.OrderServiceImpl;
import co.sf.order.vo.OrderDetailVO;

public class OrderHistory implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		HttpSession session = req.getSession();
		String id = (String) session.getAttribute("id");

		if (id != null) {
			OrderService orderService = new OrderServiceImpl();
			 List<OrderDetailVO> orderDetailList = orderService.getOrderDetails(id);

			req.setAttribute("orderDetailList", orderDetailList);
			req.getRequestDispatcher("khs/orderHistory.tiles").forward(req, resp);
		} else {
			resp.sendRedirect("loginForm.do");
		}
	}

}
