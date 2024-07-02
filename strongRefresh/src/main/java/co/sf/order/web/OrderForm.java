package co.sf.order.web;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import co.sf.cart.service.CartService;
import co.sf.cart.service.CartServiceImpl;
import co.sf.cart.vo.CartVO;
import co.sf.common.Control;

public class OrderForm implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String id = req.getParameter("uid");
		id = "";

		CartService svc = new CartServiceImpl();
		List<CartVO> list = svc.cartList(id);

		Gson gson = new Gson();
        String cartListJson = gson.toJson(list);
        req.setAttribute("cartListJson", cartListJson);

		req.getRequestDispatcher("khs/order.tiles").forward(req, resp);
	}

}
