package co.sf.product.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.sf.common.Control;
import co.sf.product.service.ProductService;
import co.sf.product.service.ProductServiceImpl;

public class ProductTotal implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		ProductService svc = new ProductServiceImpl();
		int totalCnt = svc.productTotalCnt("test");
		// {"totalCount": 2}
		resp.getWriter().print("{\"totalCount\": " + totalCnt + "}");

	}

}
