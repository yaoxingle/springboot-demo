package com.tellhow.cloud.message.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.tellhow.cloud.message.bean.Page;
import com.tellhow.cloud.message.vo.Topic;

@Controller
public class TopicController {
	
	
	
	@RequestMapping("/action/topic/list")
	@ResponseBody()
	public Page<?> list(HttpServletRequest request){
		Page<Topic> page = new Page<>();
		return page;
	}
}
