package com.tellhow.cloud.message.dao;

import java.util.List;

import com.tellhow.cloud.message.vo.Topic;

public interface TopicDao {
	public List<Topic> findList(int pageIndex,int pageSize,String topicName);
}
