package co.sf.order.web;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.sf.common.Control;
import co.sf.user.service.UserService;
import co.sf.user.service.UserServiceImpl;
import co.sf.user.vo.UserVO;

public class OrderForm implements Control {

    @Override
    public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        HttpSession session = req.getSession();
        String id = (String) session.getAttribute("id");

        UserService userService = new UserServiceImpl();
        UserVO user = userService.getUser(id);

        // 사용자 정보를 JSON으로 변환하여 request 속성에 추가
        Gson gson = new GsonBuilder().create();
        String userJson = gson.toJson(user);
        req.setAttribute("userJson", userJson);
        

        req.getRequestDispatcher("khs/order.tiles").forward(req, resp);
    }
}
