package co.sf.order.vo;

import lombok.Data;

@Data
public class OrderDetailVO {
	private String orderDetailCode;
	private String orderCode;
	private String productCode;
	private int productCnt;
	
	private int cartCode;
	private String productName;
	private String thumImage;
	private int price;
	private int point;	
	private String id;

	private String recipient;
	private int totalPrice;
	private String orderStatus;
}
