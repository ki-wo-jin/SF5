package co.sf.qna.web;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.sf.common.Control;
import co.sf.qna.service.QnaService;
import co.sf.qna.service.QnaServiceImpl;
import co.sf.qna.vo.QnaVO;

public class ModifyQnaList implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/json;charset=utf-8");
		
		String qnaCode = req.getParameter("no");
		
		QnaService svc = new QnaServiceImpl();
		List<QnaVO> list = svc.selModifyQna(qnaCode);
		
		Gson gson = new GsonBuilder().setPrettyPrinting().create();
		String json = gson.toJson(list);
		
		resp.getWriter().print(json);		

	}

}
