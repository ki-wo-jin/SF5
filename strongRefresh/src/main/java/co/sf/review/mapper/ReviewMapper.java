package co.sf.review.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import co.sf.review.vo.ReviewVO;

public interface ReviewMapper {
	List<ReviewVO> reviewList();
	int insertReview(ReviewVO rvo);
	int selectReview(String reviewSubject);
	int deleteReview(String reviewCode);
	int updateReview(ReviewVO rvo);	
	
	//상품 상세 리뷰
	List<ReviewVO> prdReviewList(@Param("productCode") String productCode);
	
	List<ReviewVO> selReviewList(@Param("reviewCode") String reviewCode);
	
}
