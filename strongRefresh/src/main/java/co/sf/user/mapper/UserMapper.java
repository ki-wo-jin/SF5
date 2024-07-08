package co.sf.user.mapper;


import org.apache.ibatis.annotations.Param;

import co.sf.user.vo.UserVO;

public interface UserMapper {
	UserVO checkUser(@Param("id") String id, @Param("pw") String pw);
	
	int addMember(UserVO uvo);
	
	int checkIdAjax(String id);

	//유저 정보 가져오기
	UserVO getUser(String id);
	
	//아이디찾기 - 휴대폰 또는 비밀번호로
	UserVO findId(String info);
	
	//비밀번호 찾기 - 휴대폰 또는 비밀번호와 이름으로
	UserVO findPw(@Param("info") String info, @Param("name") String name);
	
	//회원정보변경
	int modifyMember(UserVO uvo);
	
	
}
