package co.sf.qna.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.sf.common.Control;
import co.sf.qna.service.QnaService;
import co.sf.qna.service.QnaServiceImpl;
import co.sf.qna.vo.QnaVO;

public class ModifyQna implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO 수정 버튼
		resp.setContentType("text/json;charset=utf-8");
		
		String no = req.getParameter("no");
		String title = req.getParameter("title");
		String op = req.getParameter("op");
		String code = req.getParameter("code");
		String name = req.getParameter("name");
		String pw = req.getParameter("pw");
		String content = req.getParameter("content");
		
		QnaVO qvo = new QnaVO();
		
		qvo.setQnaCode(no);
		qvo.setQnaSubject(title);
		qvo.setId(name);
		qvo.setQnaCategory(op);
		qvo.setQnaPw(pw);
		qvo.setQnaContent(content);
		qvo.setProductCode(code);
		
		QnaService svc = new QnaServiceImpl();
		if(svc.editQna(qvo)) {
			System.out.println("수정 성공");
			resp.sendRedirect("qna.do");
		}else {
			System.out.println("수정 실패");
			resp.sendRedirect("qna.do");
		}
	}
	
}
