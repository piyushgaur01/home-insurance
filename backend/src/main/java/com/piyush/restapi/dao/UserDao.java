package com.piyush.restapi.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.piyush.restapi.entities.User;

public interface UserDao extends JpaRepository<User, Long> {

	User findByUsername(String username);
}
