package co.sf.product.vo;

import lombok.Data;

@Data
public class CategoryVO {
	private String categoryCode;
	private String categoryName;
	private String parentCategory;
	private String orderBy;
	private String categorie;
	private int cnt;
}
