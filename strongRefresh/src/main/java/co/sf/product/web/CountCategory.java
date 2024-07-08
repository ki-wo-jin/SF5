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
import co.sf.product.vo.CategoryVO;

public class CountCategory implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO 왼쪽 카테고리 갯수
		
		ProductService svc = new ProductServiceImpl();
		List<CategoryVO> list = svc.categoryList();
		
		Gson gson = new GsonBuilder().setPrettyPrinting().create();
		String json = gson.toJson(list);
		
		resp.getWriter().print(json);

	}

}

