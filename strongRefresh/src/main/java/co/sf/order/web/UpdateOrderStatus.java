package co.sf.order.web;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.sf.common.Control;
import co.sf.order.service.OrderService;
import co.sf.order.service.OrderServiceImpl;

public class UpdateOrderStatus implements Control {

    @Override
    public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("application/json;charset=utf-8");

        String orderCode = req.getParameter("orderCode");
        String status = req.getParameter("status");

        OrderService orderService = new OrderServiceImpl();
        Map<String, Object> params = new HashMap<>();
        params.put("orderCode", orderCode);
        params.put("status", status);

        boolean result = orderService.updateOrderStatus(params);

        Map<String, Object> map = new HashMap<>();
        map.put("result", result ? "OK" : "NG");

        Gson gson = new GsonBuilder().create();
        resp.getWriter().print(gson.toJson(map));
    }
}
