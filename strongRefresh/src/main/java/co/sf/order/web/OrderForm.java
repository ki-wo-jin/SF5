package co.sf.order.web;

import java.io.IOException;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import co.sf.common.Control;
import co.sf.order.service.OrderService;
import co.sf.order.service.OrderServiceImpl;
import co.sf.order.vo.OrderDetailVO;
import co.sf.user.service.UserService;
import co.sf.user.service.UserServiceImpl;
import co.sf.user.vo.UserVO;

public class OrderForm implements Control {

    @Override
    public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        HttpSession session = req.getSession();
        String id = (String) session.getAttribute("id");
        String code = req.getParameter("orderCode");

        if (id != null) {
            OrderService orderService = new OrderServiceImpl();
            List<OrderDetailVO> orderDetailList = orderService.OrderDetailList(code); // 주문내역 출력
            req.setAttribute("orderDetailList", orderDetailList);

            UserService userService = new UserServiceImpl();
            UserVO user = userService.getUser(id);

            Gson gson = new GsonBuilder().create();
            String userJson = gson.toJson(user);
            req.setAttribute("userJson", userJson);

            req.getRequestDispatcher("khs/order.tiles").forward(req, resp);
        } else {
            resp.sendRedirect("loginForm.do");
        }
    }
}
