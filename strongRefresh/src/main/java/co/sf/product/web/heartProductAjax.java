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

import co.sf.common.Control;
import co.sf.heart.service.HeartService;
import co.sf.heart.service.HeartServiceImpl;
import co.sf.heart.vo.HeartVO;

public class heartProductAjax implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/json;charset=utf-8");
		String productCode = req.getParameter("code");
		
		HttpSession session = req.getSession();
		String id = (String) session.getAttribute("id");
		
		HeartVO hvo = new HeartVO();
		hvo.setProductCode(productCode);
		hvo.setId(id);

		HeartService svc = new HeartServiceImpl();
		
		int sel = svc.getPrdHeart(hvo);
		
		
		Map<String, Object> map = new HashMap<>();
		Gson gson = new GsonBuilder().create();
		
		if(id == null || id == "") {
			map.put("retCode", "ID");
		} else {
			if(sel == 0 ) {
				try {
					if (svc.productToHeart(hvo)) {
						map.put("retCode", "PLUS");
						map.put("retVal", hvo);
					}
				} catch (Exception e) {
					e.printStackTrace();
					map.put("retCode", "NG");
					map.put("retVal", "처리중 오류가 발생하였습니다");
				}
				
			} else if (sel > 0) {
				try {
					if (svc.remPrdHeart(hvo)) {
						map.put("retCode", "MINUS");
						map.put("retVal", hvo);
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
