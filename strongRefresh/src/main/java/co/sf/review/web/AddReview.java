package co.sf.review.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.sf.common.Control;
import co.sf.review.service.ReviewService;
import co.sf.review.service.ReviewServiceImpl;
import co.sf.review.vo.ReviewVO;

public class AddReview implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		resp.setContentType("text/json;charset=utf-8");

		String title = req.getParameter("title");
		String op = req.getParameter("op");
		String code = req.getParameter("code");
		String order = req.getParameter("order");
		String name = req.getParameter("name");
		String content = req.getParameter("content");
		String img = req.getParameter("img");
		
		img = img == null ? "no img" : img;
		
		
		ReviewVO rvo = new ReviewVO();
		
		rvo.setReviewSubject(title);
		rvo.setStar(op);
		rvo.setProductCode(code);
		rvo.setOrderDetailCode(order);
		rvo.setId(name);
		rvo.setReviewContent(content);
		rvo.setReviewImage(img);
		
		ReviewService svc = new ReviewServiceImpl();
		if(svc.addReview(rvo)) {
			System.out.println("등록 성공");
			resp.sendRedirect("review.do");
		}else {
			System.out.println("등록 실패");
			resp.sendRedirect("reviewDetail.do");
		}
	}

}
