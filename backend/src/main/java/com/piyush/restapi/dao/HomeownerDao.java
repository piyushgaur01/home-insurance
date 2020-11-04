package com.piyush.restapi.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.piyush.restapi.entities.Homeowner;

public interface HomeownerDao extends JpaRepository<Homeowner, Long> {

}
