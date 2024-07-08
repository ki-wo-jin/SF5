<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- qnaForm.jsp -->

<div class="container">
	<h3>QnA</h3>

	<div class="row mb-5">
		<form class="col-md-12">
			<div class="site-blocks-table">
				<table class="table table-bordered">
					<thead id="bpList">
						<tr>
							<th class="qNo">no.</th>
							<th class="qCate">categories</th>
							<th class="qSub">subject</th>
							<th class="qWriter">writer</th>
							<th class="qDate">date</th>
							<th class="qHit">hit</th>
						</tr>
						<tr id="qnaList" style="display: none;">
							<td class="no2"></td>
							<td class="cate2"></td>
							<td class="sub2"><a></a></td>
							<td class="writer2"></td>
							<td class="date2"></td>
							<td class="hit2"></td>
						</tr>
					</thead>
				</table>
			</div>
			<table>
				<tbody>
					<tr></tr>
				</tbody>
			</table>
			<input type="button" class="buy-now btn btn-sm btn-primary" id="qWriteBtn" value="Write" onclick="location.href='qnaDetail.do'"> 
		</form>
	</div>
</div>

<script defer src="jsf5/kwj/qna.js"></script>