package com.piyush.restapi.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Property {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private Long id;
	String marketValue;
	String yearBuilt;
	String footage;
	String dwellingStyle;
	String roofMaterial;
	String garage;
	String fullBath;
	String halfBath;
	String swimmingPool;
	@OneToOne(mappedBy = "property")
	private Quotation quotation;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getMarketValue() {
		return marketValue;
	}

	public void setMarketValue(String marketValue) {
		this.marketValue = marketValue;
	}

	public String getYearBuilt() {
		return yearBuilt;
	}

	public void setYearBuilt(String yearBuilt) {
		this.yearBuilt = yearBuilt;
	}

	public String getFootage() {
		return footage;
	}

	public void setFootage(String footage) {
		this.footage = footage;
	}

	public String getDwellingStyle() {
		return dwellingStyle;
	}

	public void setDwellingStyle(String dwellingStyle) {
		this.dwellingStyle = dwellingStyle;
	}

	public String getRoofMaterial() {
		return roofMaterial;
	}

	public void setRoofMaterial(String roofMaterial) {
		this.roofMaterial = roofMaterial;
	}

	public String getGarage() {
		return garage;
	}

	public void setGarage(String garage) {
		this.garage = garage;
	}

	public String getFullBath() {
		return fullBath;
	}

	public void setFullBath(String fullBath) {
		this.fullBath = fullBath;
	}

	public String getHalfBath() {
		return halfBath;
	}

	public void setHalfBath(String halfBath) {
		this.halfBath = halfBath;
	}

	public String getSwimmingPool() {
		return swimmingPool;
	}

	public void setSwimmingPool(String swimmingPool) {
		this.swimmingPool = swimmingPool;
	}
}
