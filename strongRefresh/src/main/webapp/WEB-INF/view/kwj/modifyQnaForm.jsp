<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<div class="bg-light py-3">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-0"><a href="index.html">Home</a> <span class="mx-2 mb-0">/</span> <strong class="text-black">QnA</strong></div>
        </div>
      </div>
    </div>  

    <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="h3 mb-3 text-black"></h2>
          </div>
          <div class="col-md-12">

            <form action="modifyQna.do">
              
              <div class="p-3 p-lg-5 border">

                <div class="form-group row">
                  <div class="col-md-12">
                  	<input type="text" style="display:none;" id="no" name="no">
                    <label for="c_subject" class="text-black">제목 </label>
                    <input type="text" class="form-control" id="title" name="title">
                  </div>
                 </div>
                   <div class="col-md-12">
                 <div class="form-group row">
                    <label for="c_subject" class="text-black">상품 코드 </label>
                    <input type="text" class="form-control" id="code" name="code" readonly>
                  </div>
                	</div>
                 <div class="form-group row">
                  <div class="col-md-12">
                    <label for="c_subject" class="text-black">QnA사항 </label>
                  </div>
                  <div class="col-md-12">
                    <select class="col-md-3" id = "op" name = "op">
                    	<option value="상품">상품 문의 사항</option>
                    	<option value="배송">배송 문의 사항</option>
                    	<option value="교환">교환/반품 사항</option>
                    	<option value="취소">취소/변경 사항</option>
                    	<option value="기타">기타 문의 사항</option>
                    </select>
                  </div>
                </div>
                 <div class="form-group row">
                  <div class="col-md-6">
                    <label for="c_fname" class="text-black">작성자</label>
                    <input type="text" class="form-control" id="name" name="name" value="" readonly>
                  </div>
                  <div class="col-md-6">
                    <label for="c_fname" class="text-black">글 비밀번호</label>
                    <input type="text" class="form-control" id="pw" name="pw">
                  </div>
                </div>

                <div class="form-group row">
                  <div class="col-md-12">
                    <label for="c_message" class="text-black">내용 </label>
                    <textarea name="content" id="content" cols="30" rows="7" class="form-control"></textarea>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-lg-12">
                    <input type="submit" class="btn btn-primary btn-lg btn-block" value="수정하기" id="modifyBtn">
                    <input type="button" class="btn btn-primary btn-lg btn-block" value="삭제하기" id="delBtn">
                  </div>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
    
 <script defer src="jsf5/kwj/modifyQna.js"></script>