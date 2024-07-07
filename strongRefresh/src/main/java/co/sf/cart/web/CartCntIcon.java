package co.sf.cart.web;

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
import co.sf.common.Control;

public class CartCntIcon implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		//session에 저장된 id 값 가져오기
		HttpSession session = req.getSession();
		String id = (String)session.getAttribute("id");
		
		//해당 서비스에 id 값 연결
		CartService svc = new CartServiceImpl();		
		
		int cnt = svc.getCartCnt(id);
		//System.out.println(cnt); //test	
		
		Gson gson = new GsonBuilder().create();
		String json = gson.toJson(cnt);		
		resp.getWriter().print(json);
		
		//req.getRequestDispatcher("ygm/header.jsp").forward(req, resp);
	}

}
