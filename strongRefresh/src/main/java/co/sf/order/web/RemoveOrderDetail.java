package co.sf.order.web;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.sf.common.Control;
import co.sf.order.service.OrderDetailService;
import co.sf.order.service.OrderDetailServiceImpl;

public class RemoveOrderDetail implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String orderDetailCode = req.getParameter("orderDetailCode");

		OrderDetailService svc = new OrderDetailServiceImpl();

		
	}

}
