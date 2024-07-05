package co.sf.product.web;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.sf.common.Control;
import co.sf.product.service.ProductService;
import co.sf.product.service.ProductServiceImpl;
import co.sf.product.vo.ProductVO;

public class srcPrd implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO 이름으로 상품 출력
		
		String page = req.getParameter("page");
		String productName = req.getParameter("name");
		
		page = page == null ? "1" : page;
		productName = productName == null ? "" : productName;
		
		productName = '%' + productName +'%';
		
		ProductService svc = new ProductServiceImpl();
		List<ProductVO> list = svc.prdNameListPaging(Integer.parseInt(page), productName);

		req.setAttribute("list", list);
		
		System.out.println(list);

		req.getRequestDispatcher("jju/productForm.tiles").forward(req, resp);
	}

}