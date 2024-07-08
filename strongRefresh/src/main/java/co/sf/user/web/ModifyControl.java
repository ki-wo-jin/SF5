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

public class ModifyControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		HttpSession session = req.getSession();
		String id = (String)session.getAttribute("id");
		
		
		id = req.getParameter("userId"); //아이디 (변경불가)
		String pw = req.getParameter("userPw"); //비밀번호
		String name = req.getParameter("userName"); //이름
		
		String postcode = req.getParameter("postcode");
		String basicAddress = req.getParameter("address");
		String detailAddress = req.getParameter("detailAddress");
		String extraAddress = req.getParameter("extraAddress");
		
		postcode = postcode == null ? null : postcode;
		basicAddress = basicAddress == null ? null : basicAddress;
		detailAddress = detailAddress == null ? null : detailAddress;
		extraAddress = extraAddress == null ? null : extraAddress;
		
		String address = postcode+ basicAddress+ detailAddress+ extraAddress; //주소
		
		String frontPhone = req.getParameter("frontPhone");
		String middlePhone = req.getParameter("middlePhone");
		String lastPhone = req.getParameter("lastPhone");
		
		frontPhone = frontPhone == null ? null : frontPhone;
		middlePhone = middlePhone == null ? null : middlePhone;
		lastPhone = lastPhone == null ? null : lastPhone;
		
		String phone = frontPhone+"-"+middlePhone+"-"+lastPhone; //휴대폰번호
		
		String email = req.getParameter("userEmail");
		
		UserVO user = new UserVO();
		UserService uvc = new UserServiceImpl();
		
		user = uvc.getUser(id);
		user.setName(name);
		user.setPw(pw);
		user.setAddress(address);
		user.setPhone(phone);
		user.setEmail(email);
		
		if(uvc.modifyMember(user)) {
			req.setAttribute("retCode", "OK");
			req.getRequestDispatcher("cyj/modifyMemberForm.tiles").forward(req, resp);
		} else {
			req.setAttribute("retCode", "NO");
			req.getRequestDispatcher("cyj/modifyMemberForm.tiles").forward(req, resp);
		}
		
	
	}

}
