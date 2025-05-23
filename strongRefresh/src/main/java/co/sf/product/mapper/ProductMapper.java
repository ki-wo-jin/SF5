package co.sf.product.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import co.sf.product.vo.CategoryVO;
import co.sf.product.vo.ProductVO;

public interface ProductMapper {
	// 목록
	List<ProductVO> selectList(@Param("productCode") String productCode);
	List<ProductVO> selectListPaging(@Param("page") int page, @Param("category") String category);
	int selectTotalCnt(String category);
	
	// 네임목록
	List<ProductVO> selectPrdNamePaging(@Param("page") int page, @Param("productName") String productName);

	// 카테고리 출력.
	List<CategoryVO> categoryList();
	List<ProductVO> selectProductPaging(@Param("page") int page, @Param("category") String category);

}
