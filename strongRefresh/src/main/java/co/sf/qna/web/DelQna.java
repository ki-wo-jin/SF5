package co.sf.qna.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.sf.common.Control;
import co.sf.qna.service.QnaService;
import co.sf.qna.service.QnaServiceImpl;
import co.sf.qna.vo.QnaVO;

public class DelQna implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO 삭제버튼
		resp.setContentType("text/json;charset=utf-8");
		
		String no = req.getParameter("no");
		String pw = req.getParameter("pw");
		
		QnaVO qvo = new QnaVO();
		
		qvo.setQnaCode(no);
		qvo.setQnaPw(pw);
		
		QnaService svc = new QnaServiceImpl();
		
		if(svc.removeQna(qvo)) {
			System.out.println("삭제 성공");
			resp.sendRedirect("qna.do");
		}else {
			System.out.println("삭제 실패");
			resp.sendRedirect("qna.do");
		}
	}
	
}
