package com.piyush.restapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.piyush.restapi.entities.Homeowner;
import com.piyush.restapi.entities.Location;
import com.piyush.restapi.entities.Login;
import com.piyush.restapi.entities.Policy;
import com.piyush.restapi.entities.Property;
import com.piyush.restapi.entities.Quotation;
import com.piyush.restapi.entities.User;
import com.piyush.restapi.services.InsuranceServiceImpl;

@RestController
@CrossOrigin(origins = "*")
public class MyController {

//	@Autowired
//	private CourseService courseService;

	@Autowired
	private InsuranceServiceImpl insuranceService;

	@GetMapping("/")
	public String home() {
		return "Home Insurance API!";
	}

	@PostMapping("/login")
	public User getUser(@RequestBody Login login) {
		return this.insuranceService.getUser(login.getUsername(), login.getPassword());
	}

	@GetMapping("/users/{userId}")
	public User getUser(@PathVariable String userId) {
		return this.insuranceService.getUser(Long.parseLong(userId));
	}

	@GetMapping("/users")
	public List<User> getUsers() {
		return this.insuranceService.getUsers();
	}

	@PostMapping("/user")
	public ResponseEntity<HttpStatus> addUser(@RequestBody User user) {
		if (this.insuranceService.addUser(user) != null) {
			return new ResponseEntity<HttpStatus>(HttpStatus.CREATED);
		} else {
			return new ResponseEntity<HttpStatus>(HttpStatus.UNPROCESSABLE_ENTITY);
		}
	}

	@GetMapping("/quotations")
	public List<Quotation> getQuotations() {
		return this.insuranceService.getQuotations();
	}

	@GetMapping("/quotations/{username}")
	public List<Quotation> getQuotations(@PathVariable String username) {
		return this.insuranceService.getQuotations(username);
	}

	@GetMapping("/quotation/{id}")
	public Quotation getQuotation(@PathVariable String id) {
		return this.insuranceService.getQuotation(Long.parseLong(id));
	}

	@PostMapping("/quotation")
	public Quotation addQuotation(@RequestBody Quotation quotation) {
		return this.insuranceService.addQuotation(quotation);
	}

	@PostMapping("/location")
	public ResponseEntity<HttpStatus> addLocation(@RequestBody Location location) {
		if (this.insuranceService.addLocation(location) != null) {
			return new ResponseEntity<HttpStatus>(HttpStatus.CREATED);
		} else {
			return new ResponseEntity<HttpStatus>(HttpStatus.UNPROCESSABLE_ENTITY);
		}
	}

	@PostMapping("/homeowner")
	public ResponseEntity<HttpStatus> addHomeowner(@RequestBody Homeowner homeowner) {
		if (this.insuranceService.addHomeowner(homeowner) != null) {
			return new ResponseEntity<HttpStatus>(HttpStatus.CREATED);
		} else {
			return new ResponseEntity<HttpStatus>(HttpStatus.UNPROCESSABLE_ENTITY);
		}
	}

	@PostMapping("/property")
	public ResponseEntity<HttpStatus> addProperty(@RequestBody Property property) {
		if (this.insuranceService.addProperty(property) != null) {
			return new ResponseEntity<HttpStatus>(HttpStatus.CREATED);
		} else {
			return new ResponseEntity<HttpStatus>(HttpStatus.UNPROCESSABLE_ENTITY);
		}
	}

	@GetMapping("/policies")
	public List<Policy> getPolicies() {
		return this.insuranceService.getPolicies();
	}

	@GetMapping("/policies/{username}")
	public List<Policy> getPolicies(@PathVariable String username) {
		return this.insuranceService.getPolicies(username);
	}

	@GetMapping("/policy/{quotationId}")
	public Policy getPolicy(@PathVariable String quotationId) {
		return this.insuranceService.getPolicy(Long.parseLong(quotationId));
	}

	@PostMapping("/policy")
	public Policy addPolicy(@RequestBody Policy policy) {
		return this.insuranceService.addPolicy(policy);
	}

}
