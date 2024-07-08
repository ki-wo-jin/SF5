package co.sf.qna.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.sf.common.Control;
import co.sf.qna.service.QnaService;
import co.sf.qna.service.QnaServiceImpl;
import co.sf.qna.vo.QnaVO;

public class AddQna implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Qna 이동
		
		String title = req.getParameter("title");
		String op = req.getParameter("op");
		String name = req.getParameter("name");
		String pw = req.getParameter("pw");
		String content = req.getParameter("content");
		
		QnaVO qvo = new QnaVO();
		
		qvo.setQnaSubject(title);
		qvo.setId(name);
		qvo.setQnaCategory(op);
		qvo.setQnaPw(pw);
		qvo.setQnaContent(content);
		
		
		QnaService svc = new QnaServiceImpl();
		if(svc.addQna(qvo)) {
			
		};
	}
	
}