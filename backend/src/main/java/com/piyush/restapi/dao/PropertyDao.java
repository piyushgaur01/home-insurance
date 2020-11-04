package com.piyush.restapi.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.piyush.restapi.entities.Property;

public interface PropertyDao extends JpaRepository<Property, Long> {

}
