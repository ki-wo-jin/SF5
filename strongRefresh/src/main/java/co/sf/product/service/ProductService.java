package co.sf.product.service;

import java.util.List;

import co.sf.product.vo.CategoryVO;
import co.sf.product.vo.ProductVO;

public interface ProductService {
	//제품 목록
	List<ProductVO> productList(String productCode);
	List<ProductVO> productListPaging(int page, String category);
	int productTotalCnt();
	
	
	// 카테고리 출력.
	List<CategoryVO> categoryList();
	List<ProductVO> productListPagingCategory(int page, String category);
	
}
