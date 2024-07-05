package co.sf.order.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.sf.common.Control;
import co.sf.order.service.OrderService;
import co.sf.order.service.OrderServiceImpl;
import co.sf.order.vo.OrderVO;

public class AddAddress implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		 req.setCharacterEncoding("UTF-8");

	        String recipient = req.getParameter("recipient");
	        String phone1 = req.getParameter("phone1");
	        String phone2 = req.getParameter("phone2");
	        String phone3 = req.getParameter("phone3");
	        String postalCode = req.getParameter("postalCode");
	        String address = req.getParameter("address");
	        String addressDetail = req.getParameter("addressDetail");
	        String reference = req.getParameter("reference");
	        String emailUser = req.getParameter("emailUser");
	        String emailDomain = req.getParameter("emailDomain");
	        String deliveryMessage = req.getParameter("deliveryMessage");
	        String totalPrice = req.getParameter("totalPrice");
	        String orderStatus = req.getParameter("status");

	        String phone = String.format("%s-%s-%s", phone1, phone2, phone3);
	        String email = String.format("%s@%s", emailUser, emailDomain);
	        String fullAddress = String.format("%s %s %s", postalCode, address, addressDetail, reference);

	        OrderVO order = new OrderVO();
	        order.setRecipient(recipient);
	        order.setPhone(phone);
	        order.setAddress(fullAddress);
	        order.setEmail(email);
	        order.setDeliveryMessage(deliveryMessage);
	        order.setTotalPrice(Integer.parseInt(totalPrice));
	        order.setOrderStatus(orderStatus);

	        OrderService service = new OrderServiceImpl();
	        boolean Success = service.addAddress(order);

	        if (Success) {
	            resp.getWriter().write("success");
	        } else {
	            resp.getWriter().write("fail");
	        }
	    }
	        
	       
	}

