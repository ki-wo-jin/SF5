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
import co.sf.heart.vo.HeartVO;

public class AddCart implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String pcode = req.getParameter("productCode"); // 찜목록의 선택 상풍코드
		HttpSession session = req.getSession();
		String id = (String)session.getAttribute("id"); // 로그인한 유저
		
		CartVO cvo = new CartVO();
		cvo.setProductCode(pcode);
		cvo.setId(id);
		
		HeartVO hvo = new HeartVO();
		hvo.setId(id);
		hvo.setProductCode(pcode);
		HeartService svc = new HeartServiceImpl();
		if(svc.checkProduct(hvo)) { // 카트에 한번도 안담았음
			if(svc.addCart(cvo)) {
				resp.getWriter().print("{\"retCode\":\"OK\"}");
			}
		}else { // 카트에 있음
			resp.getWriter().print("{\"retCode\":\"NG\"}");	
		}
		

	}

}
