package co.sf.cart.web;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import co.sf.cart.service.CartService;
import co.sf.cart.service.CartServiceImpl;
import co.sf.cart.vo.CartVO;
import co.sf.common.Control;

public class CartForm implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		CartService hsvc = new CartServiceImpl();

		HttpSession session = req.getSession();
		
		String id = (String) session.getAttribute("id");
		
		if (id != null) {
			List<CartVO> clist = hsvc.cartList(id);
			req.setAttribute("cartList", clist);
		}

		req.getRequestDispatcher("ygm/cart.tiles").forward(req, resp);
	}
}