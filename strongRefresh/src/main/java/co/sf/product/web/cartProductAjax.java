package co.sf.product.web;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.sf.cart.service.CartService;
import co.sf.cart.service.CartServiceImpl;
import co.sf.cart.vo.CartVO;
import co.sf.common.Control;

public class cartProductAjax implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/json;charset=utf-8");
		String productCode = req.getParameter("code");
		int num = Integer.parseInt(req.getParameter("num"));
		
		HttpSession session = req.getSession();
		String id = (String) session.getAttribute("id");
		
		CartVO cvo = new CartVO();
		cvo.setProductCode(productCode);
		cvo.setId(id);
		

		CartService svc = new CartServiceImpl();
		int sel = 0;
		try {
			sel = svc.checkPrdCart(cvo);
		} catch (Exception e) {
			
		}
		
		cvo.setProductCnt(num);
		
		Map<String, Object> map = new HashMap<>();
		Gson gson = new GsonBuilder().create();
		
		if(id == null || id == "") {
			map.put("retCode", "ID");
		} else {
			if(sel == 0 ) {
				try {
					if (svc.addPrdCart(cvo)) {
						map.put("retCode", "PLUS");
						map.put("retVal", cvo);
					}
				} catch (Exception e) {
					e.printStackTrace();
					map.put("retCode", "NG");
					map.put("retVal", "처리중 오류가 발생하였습니다");
				}
				
			} else if (sel > 0) {
				try {
					if (svc.upPrdCart(cvo)) {
						map.put("retCode", "MINUS");
						map.put("retVal", cvo);
					}
				} catch (Exception e) {
					e.printStackTrace();
					map.put("retCode", "NG");
					map.put("retVal", "처리중 오류가 발생하였습니다");
				}
			}
			
		}
		
		// js에 보내기
		resp.getWriter().print(gson.toJson(map));
	}

}