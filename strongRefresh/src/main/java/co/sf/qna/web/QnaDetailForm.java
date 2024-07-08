package co.sf.qna.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import co.sf.common.Control;

public class QnaDetailForm implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/json;charset=utf-8");
		
		HttpSession session = req.getSession();
		String id = (String) session.getAttribute("id");
		
		req.setAttribute("id", id);		
		
		req.getRequestDispatcher("kwj/qnaDetailForm.tiles").forward(req, resp);

	}

}
