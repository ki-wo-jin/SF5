package co.sf.product.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import co.sf.product.vo.CategoryVO;
import co.sf.product.vo.ProductVO;

public interface ProductMapper {
	// 목록
	List<ProductVO> selectList(@Param("productCode") String productCode);
	List<ProductVO> selectListPaging(@Param("page") int page, @Param("category") String category);
	int selectTotalCnt();

	// 카테고리 출력.
	List<CategoryVO> categoryList();
	List<ProductVO> selectProductPaging(@Param("page") int page, @Param("category") String category);

}
