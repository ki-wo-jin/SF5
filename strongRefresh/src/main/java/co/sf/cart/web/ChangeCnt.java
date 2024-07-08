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
import co.sf.cart.vo.CartVO;
import co.sf.common.Control;

public class ChangeCnt implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String ccode = req.getParameter("cartCode");
		String cnt = req.getParameter("changeCnt");

		CartService svc = new CartServiceImpl();
		CartVO cvo = new CartVO();
		cvo.setCartCode(ccode);
		cvo.setProductCnt(Integer.parseInt(cnt));

		Map<String, Object> map = new HashMap<>();
		Gson gson = new GsonBuilder().create();

		if (svc.changeCnt(cvo)) {
			map.put("result", "OK");
			map.put("message", "변경");
		} else {
			map.put("result", "NG");
			map.put("message", "실패");
		}
		
		String json = gson.toJson(map);
		resp.getWriter().print(json);

	}

}
