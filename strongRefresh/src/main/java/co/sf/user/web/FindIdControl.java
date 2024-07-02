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
		String name = req.getParameter("userName");
		String email = req.getParameter("userEmail");
		String frontPhone = req.getParameter("userFrontPhone");
		String middlePhone = req.getParameter("userMiddlePhone");
		String lastPhone = req.getParameter("userLastPhone");
		
		UserVO uvo = new UserVO();
		uvo.setName(name);
		uvo.setEmail(email);
		uvo.setPhone(frontPhone+"-"+middlePhone+"-"+lastPhone);
		
		UserService uvc = new UserServiceImpl();
		
		
		
		
	}

}
