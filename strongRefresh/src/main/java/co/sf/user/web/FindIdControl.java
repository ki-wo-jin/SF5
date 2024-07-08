package co.sf.user.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.sf.common.Control;
import co.sf.user.service.UserService;
import co.sf.user.service.UserServiceImpl;
import co.sf.user.vo.UserVO;

public class FindIdControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String name = req.getParameter("userName"); // 사용자가 입력한 이름
		String email = req.getParameter("userEmail");
		String phone = req.getParameter("userPhone");
		
		UserService uvc = new UserServiceImpl();
		UserVO uvo = new UserVO();
		
		if(phone.length() > 0 && email.length() < 1) uvo = uvc.findId(phone);
		else uvo = uvc.findId(email);
		
		if(uvo==null) {
			req.setAttribute("retCode", "NO");
			req.getRequestDispatcher("cyj/findId.tiles").forward(req, resp);
		}
		
		
		if(name.equals(uvo.getName())&&email.equals(uvo.getEmail())) {
			UserVO emailUser = uvc.findId(email);
			req.setAttribute("emailUser", emailUser);
			req.getRequestDispatcher("cyj/findIdResult.tiles").forward(req, resp);
		} else if(name.equals(uvo.getName())&&phone.equals(uvo.getPhone())) {
			UserVO phoneUser = uvc.findId(phone);
			req.setAttribute("phoneUser", phoneUser);
			req.getRequestDispatcher("cyj/findIdResult.tiles").forward(req, resp);
		} else {
			req.setAttribute("retCode", "NO");
			req.getRequestDispatcher("cyj/findId.tiles").forward(req, resp);
		}
		
	}

}
