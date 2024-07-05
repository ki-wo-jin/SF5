<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<div class="site-wrap">
    <div class="site-section">
        <div class="container">
            <div class="col-md-12">
                <h6 class="h6 mb-3 text-black">주문 내역</h6>
                <div class="p-3 p-lg-5 border">
                    <table class="table site-block-order-table mb-5">
                        <thead>
                            <tr>
                                <th>Order Code</th>
                                <th>Image</th>
                                <th>ProductName</th>
                                <th>Recipient</th>
                                <th>Total Price</th>
                                <th>Order Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <c:forEach var="order" items="${orderDetailList}">
                                <tr>
                                    <td>${order.orderCode}</td>
                                    <td><img src="images/${order.thumImage}" alt="${order.productName}" width="50"></td>
                                    <td>${order.productName}</td>
                                    <td>${order.recipient}</td>
                                    <td>KRW ${order.totalPrice}</td>
                                    <td>${order.orderStatus}</td>
                                </tr>
                            </c:forEach>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
