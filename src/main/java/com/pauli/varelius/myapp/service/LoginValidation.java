package com.pauli.varelius.myapp.service;

import org.springframework.stereotype.Service;

@Service
public class LoginValidation {

	public boolean validate(String username, String password) {
		return username.equalsIgnoreCase("admin") && password.equals("admin");
	}
}
