package co.sf.user.service;

import java.util.List;

import co.sf.user.vo.UserVO;

public interface UserService {
	
	//로그인
	UserVO checkUser(String id,String pw);
	
	//회원가입 (참은 1)
	boolean addMember(UserVO uvo);
	
	//아이디 중복체크
	boolean checkIdAjax(String id);
	
	//유저 정보 가져오기
	UserVO getUser(String id);
	
	//아이디찾기
	UserVO findId(String info);
	
	//비밀번호 찾기
	UserVO findPw(String info, String name);
	
	
}
