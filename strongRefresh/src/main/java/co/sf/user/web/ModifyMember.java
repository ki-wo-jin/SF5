package co.sf.user.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import co.sf.common.Control;
import co.sf.user.service.UserService;
import co.sf.user.service.UserServiceImpl;
import co.sf.user.vo.UserVO;

public class ModifyMember implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//세션 객체는 오브젝트 타입을 반환 (형변환을 해줘야한다)
		HttpSession session = req.getSession();
		String id = (String)session.getAttribute("id"); //로그인한 사람의 아이디
		
		UserVO user = new UserVO();
		UserService uvc = new UserServiceImpl();
		
		user = uvc.getUser(id);
		req.setAttribute("user", user);
		req.getRequestDispatcher("cyj/modifyMemberForm.tiles").forward(req, resp);

	}

}
