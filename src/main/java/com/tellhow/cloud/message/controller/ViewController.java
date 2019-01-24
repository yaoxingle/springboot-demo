package com.tellhow.cloud.message.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ViewController {
	
	@RequestMapping("/view")
	public String forward(HttpServletRequest request) {
		return request.getParameter("name");
	}
}
