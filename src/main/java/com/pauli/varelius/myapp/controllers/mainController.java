package com.pauli.varelius.myapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.pauli.varelius.myapp.service.LoginValidation;

@Controller
public class mainController {
	
	@Autowired
	LoginValidation validation;
	
	@RequestMapping("/")
	public String main(Model model) {
		model.addAttribute("text", "My Java Spring application");
		return "index";
	}
	
	@RequestMapping("/login")
	public String login(Model model) {
		return "login";
	}
	
	@RequestMapping("/login.do")
	public String do_login(Model model) {
		return "login";
	}
	

}
