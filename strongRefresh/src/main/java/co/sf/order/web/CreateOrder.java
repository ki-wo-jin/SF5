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
import co.sf.order.vo.OrderDetailVO;
import co.sf.order.vo.OrderVO;
import co.sf.user.service.UserService;
import co.sf.user.service.UserServiceImpl;
import co.sf.user.vo.UserVO;

public class CreateOrder implements Control {

    @Override
    public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("text/json;charset=utf-8");

        HttpSession session = req.getSession();
        String id = (String) session.getAttribute("id");
        String[] cartAry = req.getParameterValues("code");

        CartService svc = new CartServiceImpl();
        String orderNo = svc.getNewOrderNo();

        OrderVO ovo = new OrderVO();
        ovo.setOrderCode(orderNo);
        Map<String, Object> map = new HashMap<>();
        Gson gson = new GsonBuilder().create();
        
        UserService usvc = new UserServiceImpl();
        UserVO user = usvc.getUser(id);
        System.out.println(user.getAddress());
        // 주소가 널일 때, 조건
        /*
        if(user.getAddress() == null || user.getAddress() == "") {
        	map.put("retCode", "NO");
        	resp.getWriter().print(gson.toJson(map));
        }*/

        ovo.setId(user.getId());
        ovo.setRecipient(user.getName());
        ovo.setPhone(user.getPhone());
        ovo.setAddress(user.getAddress());
        ovo.setTotalPrice(0);
        ovo.setEmail(user.getEmail());
        ovo.setOrderStatus("주문완료");

        List<OrderDetailVO> detailList = new ArrayList<>();
        List<CartVO> selectedItems = new ArrayList<>();

        for (String cartCode : cartAry) {
            CartVO cart = svc.getCart(cartCode);
            OrderDetailVO detail = new OrderDetailVO();
            detail.setOrderCode(orderNo);
            detail.setProductCnt(cart.getProductCnt());
            detail.setProductCode(cart.getProductCode());
            detail.setThumImage(cart.getThumImage());
            detail.setProductName(cart.getProductName());
            detail.setTotalPrice(cart.getPrice() * cart.getProductCnt());
            detail.setOrderStatus("주문완료");

            detailList.add(detail);
            selectedItems.add(cart);
        }

        if (svc.createOrder(ovo, detailList)) {
            System.out.println("OK");
            map.put("retCode", "OK");
            map.put("orderCode", orderNo);
            map.put("orderDetails", detailList); // 주문 상세 데이터 반환

            // 카트 데이터 삭제
            for (CartVO cart : selectedItems) {
                svc.removeCart(cart.getCartCode());
            }

            // 주문 데이터를 세션에 저장
            session.setAttribute("orderHistory", detailList);

        } else {
            System.out.println("NG");
            map.put("retCode", "NG");
        }

        resp.getWriter().print(gson.toJson(map));
    }
}
