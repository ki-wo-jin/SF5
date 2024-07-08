package co.sf.review.web;

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

public class ModifyReviewList implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/json;charset=utf-8");
		
		String code = req.getParameter("no");
		
		ReviewService svc = new ReviewServiceImpl();
		List<ReviewVO> list = svc.selReviewList(code);
		
		
		Gson gson = new GsonBuilder().setPrettyPrinting().create();
		String json = gson.toJson(list);
		
		resp.getWriter().print(json);		

	}

}
