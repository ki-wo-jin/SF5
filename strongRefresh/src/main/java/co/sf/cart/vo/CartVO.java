package co.sf.cart.vo;

import lombok.Data;

@Data
public class CartVO {
	private int cartCode;
	private String productCode;
	private String productName;
	private String thumImage;
	private int price;
	private int point;	
	private String id;
	private int productCnt;
}