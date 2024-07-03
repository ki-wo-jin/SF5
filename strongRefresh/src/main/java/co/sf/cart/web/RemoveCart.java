package co.sf.cart.web;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.sf.cart.service.CartService;
import co.sf.cart.service.CartServiceImpl;
import co.sf.common.Control;

public class RemoveCart implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String code = req.getParameter("cartCode");
		
		CartService svc = new CartServiceImpl();
		
		Map<String, Object> map = new HashMap<String, Object>();
		Gson gson = new GsonBuilder().create();
		
		if (svc.removeCart(code)) {
			map.put("result", "OK");
			map.put("message", "삭제되었습니다.");
		} else {
			map.put("result", "NG");
			map.put("message", "삭제되지 않았습니다.");
		}
		
		String json = gson.toJson(map);
		resp.getWriter().print(json);
	}

}
