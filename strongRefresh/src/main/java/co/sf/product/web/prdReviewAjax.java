package co.sf.product.web;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.sf.common.Control;
import co.sf.review.service.ReviewService;
import co.sf.review.service.ReviewServiceImpl;
import co.sf.review.vo.ReviewVO;

public class prdReviewAjax implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO 제품 하단의 리뷰 리스트
		
		resp.setContentType("text/json;charset=utf-8");
		String productCode = req.getParameter("code");
		
		ReviewService svc = new ReviewServiceImpl();
		List<ReviewVO> list = svc.prdReviewList(productCode);
		
		
		Gson gson = new GsonBuilder().setPrettyPrinting().create();
		String json = gson.toJson(list);
		
		resp.getWriter().print(json);
	}

}
