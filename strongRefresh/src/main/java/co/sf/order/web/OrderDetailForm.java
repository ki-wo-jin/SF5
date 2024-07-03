package co.sf.order.web;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.sf.common.Control;
import co.sf.order.service.OrderDetailService;
import co.sf.order.service.OrderDetailServiceImpl;
import co.sf.order.vo.OrderDetailVO;

public class OrderDetailForm implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/json;charset=utf-8");
		String id = req.getParameter("id");

		OrderDetailService svc = new OrderDetailServiceImpl();
		List<OrderDetailVO> list = svc.orderDetailList(id);

		Gson gson = new GsonBuilder().setPrettyPrinting().create(); 
		String json = gson.toJson(list);  
		
		resp.getWriter().print(json); 
	}

}
