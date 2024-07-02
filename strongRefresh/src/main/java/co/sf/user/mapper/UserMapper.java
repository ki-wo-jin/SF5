package co.sf.user.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import co.sf.user.vo.UserVO;

public interface UserMapper {
	UserVO checkUser(@Param("id") String id, @Param("pw") String pw);
	
	int addMember(UserVO uvo);
	
	int checkIdAjax(String id);
	
	//아이디찾기
	int findId(UserVO uvo);
	

	
}
