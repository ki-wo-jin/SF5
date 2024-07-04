package co.sf.heart.web;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import co.sf.common.Control;
import co.sf.heart.service.HeartService;
import co.sf.heart.service.HeartServiceImpl;
import co.sf.product.vo.ProductVO;

public class HeartForm implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		HeartService hsvc = new HeartServiceImpl();

		HttpSession session = req.getSession();
		
		String id = (String) session.getAttribute("id");
		
		if (id != null) {
			List<ProductVO> hlist = hsvc.heartList(id);
			req.setAttribute("heartList", hlist);
		}

		req.getRequestDispatcher("ygm/heart.tiles").forward(req, resp);
	}

}
