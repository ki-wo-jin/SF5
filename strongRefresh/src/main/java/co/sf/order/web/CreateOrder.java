package co.sf.order.web;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.sf.cart.service.CartService;
import co.sf.cart.service.CartServiceImpl;
import co.sf.cart.vo.CartVO;
import co.sf.common.Control;
import co.sf.order.service.OrderService;
import co.sf.order.service.OrderServiceImpl;
import co.sf.order.vo.OrderDetailVO;
import co.sf.order.vo.OrderVO;
import co.sf.user.service.UserService;
import co.sf.user.service.UserServiceImpl;
import co.sf.user.vo.UserVO;

public class CreateOrder implements Control {

    @Override
    public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("application/json;charset=utf-8");

        HttpSession session = req.getSession();
        String id = (String) session.getAttribute("id");
        String[] cartAry = req.getParameterValues("code");

        if (id == null || cartAry == null || cartAry.length == 0) {
            resp.getWriter().write("{\"retCode\":\"NG\", \"message\":\"로그인이 필요합니다.\"}");
            return;
        }

        CartService svc = new CartServiceImpl();
        String orderNo = svc.getNewOrderNo();

        OrderVO ovo = new OrderVO();
        ovo.setOrderCode(orderNo);

        UserService usvc = new UserServiceImpl();
        UserVO user = usvc.getUser(id);

        ovo.setId(user.getId());
        ovo.setRecipient(user.getName());
        ovo.setPhone(user.getPhone());
        ovo.setAddress(user.getAddress());
        ovo.setTotalPrice(0);
        ovo.setEmail(user.getEmail());

        List<OrderDetailVO> detailList = new ArrayList<>();
        for (String cartCode : cartAry) {
            CartVO cart = svc.getCart(cartCode);
            OrderDetailVO detail = new OrderDetailVO();
            detail.setOrderCode(orderNo);
            detail.setProductCnt(cart.getProductCnt());
            detail.setProductCode(cart.getProductCode());
            detailList.add(detail);
        }

        OrderService orderService = new OrderServiceImpl();

        Map<String, Object> map = new HashMap<>();
        if (svc.createOrder(ovo, detailList)) {
            // 주문 상태 업데이트
            Map<String, Object> params = new HashMap<>();
            params.put("orderCode", orderNo);
            params.put("status", "주문완료");
            orderService.updateOrderStatus(params);

            // 주문이 성공적으로 완료되었을 때 선택된 카트 아이템 삭제
            params.put("id", user.getId());
            orderService.removeSelectedCartItems(params);

            map.put("retCode", "OK");
            map.put("orderCode", orderNo);
        } else {
            map.put("retCode", "NG");
        }

        Gson gson = new GsonBuilder().create();
        resp.getWriter().print(gson.toJson(map));
    }
}
