package co.sf.user.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.sf.common.DataSource;
import co.sf.user.mapper.UserMapper;
import co.sf.user.vo.UserVO;

public class UserServiceImpl implements UserService {
	SqlSession sqlSession = DataSource.getInstance().openSession(true);
	UserMapper mapper = sqlSession.getMapper(UserMapper.class);
	
	@Override
	public UserVO checkUser(String id, String pw) {
		return mapper.checkUser(id, pw);
	}
	
	@Override
	public boolean addMember(UserVO uvo) {
		return mapper.addMember(uvo)==1;
	}
	
	@Override
	public boolean checkIdAjax(String id) {
		return mapper.checkIdAjax(id)==1;
	}
	
	@Override
	public UserVO getUser(String id) {
		return mapper.getUser(id);
	}
	
	@Override
	public UserVO findId(String info) {
		return mapper.findId(info);
	}
	
	@Override
	public UserVO findPw(String info, String name) {
		return mapper.findPw(info, name);
	}
	
	@Override
	public boolean modifyMember(UserVO uvo) {
		return mapper.modifyMember(uvo)==1;
	}

	
}
