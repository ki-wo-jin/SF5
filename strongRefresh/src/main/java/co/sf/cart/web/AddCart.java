package co.sf.cart.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import co.sf.cart.vo.CartVO;
import co.sf.common.Control;
import co.sf.heart.service.HeartService;
import co.sf.heart.service.HeartServiceImpl;

public class AddCart implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		resp.setContentType("text/json;charset=utf-8");
		String pcode = req.getParameter("productCode");
		HttpSession session = req.getSession();
		String id = (String)session.getAttribute("id");
		
		CartVO cvo = new CartVO();
		cvo.setProductCode(pcode);
		cvo.setId(id);
		
		HeartService svc = new HeartServiceImpl();
		if(svc.addCart(cvo)) {
			
			resp.getWriter().print("{\"retCode\":\"OK\"}");
		} else {
			resp.getWriter().print("{\"retCode\":\"NG\"}");			
		}
		

	}

}
