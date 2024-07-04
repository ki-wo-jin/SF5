package co.sf.qna.service;

import java.util.List;

import co.sf.qna.vo.QnaVO;

public interface QnaService {
	List<QnaVO> qnaList();
	boolean addQna(QnaVO qvo);
	boolean getQna(String qnaSubject);
	boolean removeQna(String qnaSubject);
	boolean editQna(QnaVO qvo);
	
	// 상품에서 QnA리스트 출력
	List<QnaVO> prdQnaList(String productCode);
}
