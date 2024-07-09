package co.sf.review.vo;

import java.util.Date;

import lombok.Data;

@Data
public class ReviewVO {
	String reviewCode;
	String id;
	String reviewSubject;
	String productCode;
	String reviewContent;
	String reviewDate;
	int clickCnt;
	String star;
	String reviewImage;
	String orderDetailCode;
	
}
