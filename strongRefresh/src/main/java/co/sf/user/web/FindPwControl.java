package co.sf.user.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.sf.common.Control;

public class FindPwControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String email = req.getParameter("userEmail");
		String phone = req.getParameter("userPhone");
		String id = req.getParameter("userId");
		
		email = email == null ? null : email;
		phone = phone == null ? null : phone;
		
		req.setAttribute("userEmail", email);
		req.setAttribute("userPhone", phone);
		req.setAttribute("userId", id);
		
		
		req.getRequestDispatcher("cyj/findPwResult.tiles").forward(req, resp);
	}

}
