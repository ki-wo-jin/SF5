package co.sf.product.web;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.sf.common.Control;
import co.sf.common.PageDTO;
import co.sf.product.service.ProductService;
import co.sf.product.service.ProductServiceImpl;
import co.sf.product.vo.ProductVO;

public class ProductForm implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		String category = req.getParameter("category");
		String page = req.getParameter("page");
		page = page == null ? "1" : page;

		ProductService svc = new ProductServiceImpl();
		List<ProductVO> list = svc.productListPagingCategory(Integer.parseInt(page), category);
		int totalCnt = svc.productTotalCnt(category);

		PageDTO pageDTO = new PageDTO(Integer.parseInt(page), totalCnt);
		
		
		
		req.setAttribute("list", list);
		req.setAttribute("paging", pageDTO);
		req.setAttribute("category", category);

		req.getRequestDispatcher("jju/productForm.tiles").forward(req, resp);
	}

}
