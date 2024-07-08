package co.sf.review.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.sf.common.Control;
import co.sf.review.service.ReviewService;
import co.sf.review.service.ReviewServiceImpl;
import co.sf.review.vo.ReviewVO;

public class ModifyReview implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		resp.setContentType("text/json;charset=utf-8");
		
		String no = req.getParameter("no");
		String title = req.getParameter("title");
		String code = req.getParameter("code");
		String order = req.getParameter("order");
		String op = req.getParameter("op");
		String name = req.getParameter("name");
		String img = req.getParameter("img");
		String content = req.getParameter("content");
		
		ReviewVO rvo = new ReviewVO();
		
		rvo.setReviewCode(no);
		rvo.setReviewSubject(title);
		rvo.setProductCode(code);
		rvo.setOrderDetailCode(order);
		rvo.setStar(op);
		rvo.setId(name);
		rvo.setReviewImage(img);
		rvo.setReviewContent(content);
		
		ReviewService svc = new ReviewServiceImpl();
		
		if(svc.editReview(rvo)) {
			System.out.println("수정 성공");
			resp.sendRedirect("review.do");
		}else {
			System.out.println("수정 실패");
			resp.sendRedirect("review.do");
		}
	}
}
	