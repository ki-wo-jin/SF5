package co.sf.product.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.sf.cart.service.CartService;
import co.sf.cart.service.CartServiceImpl;
import co.sf.common.Control;

public class cartProductAjax implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/json;charset=utf-8");
		String productCode = req.getParameter("code");
		String num = req.getParameter("num");
		
		CartService svc = new CartServiceImpl();
		
		
		
		
	}

}
