package com.piyush.restapi.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.piyush.restapi.entities.Location;

public interface LocationDao extends JpaRepository<Location, Long> {

}
