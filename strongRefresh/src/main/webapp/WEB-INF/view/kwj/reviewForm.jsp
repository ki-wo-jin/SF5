<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- reviewForm.jsp -->

<div class="container">
	<h3>REVIEW</h3>

	<div class="row mb-5">
		<form class="col-md-12">
			<div class="site-blocks-table">
				<table class="table table-bordered">
					<thead id="apList">
						<tr>
							<th class="rNo">no.</th>
							<th class="rImg">image</th>
							<th class="rSub">subject</th>
							<th class="rWriter">writer</th>
							<th class="rDate">date</th>
							<th class="rHit">star</th>
						</tr>
						<tr id="reviewList" style="display: none;">
							<td class="no"></td>
							<td class="kImg">
								<img src="images/cloth_1.jpg" alt="Image" class="img-fluid">
							</td>
							<td class="sub"><a></a></td>
							<td class="writer"></td>
							<td class="date"></td>
							<td class="star"></td>
						</tr>
					</thead>
				</table>
			</div>
			<table>
				<tbody>
					<tr></tr>
				</tbody>
			</table>
			<input type="button" class="buy-now btn btn-sm btn-primary" id="qWriteBtn" value="Write" onclick="location.href='reviewDetail.do'">
		</form>
	</div>
</div>

<script defer src="jsf5/kwj/review.js"></script>