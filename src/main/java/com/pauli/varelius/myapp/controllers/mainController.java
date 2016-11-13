package com.pauli.varelius.myapp.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class mainController {
	
	@RequestMapping("/")
	public String main(Model model) {
		model.addAttribute("text", "My Java Spring application");
		return "index";
	}

}
