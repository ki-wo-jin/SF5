package co.sf.product.web;

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

public class prdQnAAjax implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO 상품의 QnA 리스트
		
		resp.setContentType("text/json;charset=utf-8");
		String productCode = req.getParameter("code");
		
		QnaService svc = new QnaServiceImpl();
		List<QnaVO> list = svc.prdQnaList(productCode);
		
		
		Gson gson = new GsonBuilder().setPrettyPrinting().create();
		String json = gson.toJson(list);
		
		resp.getWriter().print(json);
	}

}