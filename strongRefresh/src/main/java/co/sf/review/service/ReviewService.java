package co.sf.review.service;

import java.util.List;

import co.sf.review.vo.ReviewVO;

public interface ReviewService {
	// 리뷰 리스트
	List<ReviewVO> reviewList();
	
	boolean addReview(ReviewVO rvo);
	boolean getReview(String reviewSubject);
	boolean removeReview(String reviewCode);
	boolean editReview(ReviewVO rvo);
	
	// 상품 상세의 리뷰 리스트
	List<ReviewVO> prdReviewList(String productCode);
	
	List<ReviewVO> selReviewList(String reviewCode);
	
}
