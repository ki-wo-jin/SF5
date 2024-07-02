package co.sf.product.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.sf.common.DataSource;
import co.sf.product.mapper.ProductMapper;
import co.sf.product.vo.ProductVO;

public class ProductServiceImpl implements ProductService {
	SqlSession sqlSession = DataSource.getInstance().openSession(true);
	ProductMapper mapper = sqlSession.getMapper(ProductMapper.class);

	@Override
	public List<ProductVO> productList(String productCode) {
		return mapper.selectList(productCode);
	}

	@Override
	public List<ProductVO> productListPaging(int page) {
		return mapper.selectListPaging(page);
	}

	@Override
	public int productTotalCnt() {
		return mapper.selectTotalCnt();
	}
}
