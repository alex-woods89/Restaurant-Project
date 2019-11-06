package com.codeclan.example.restaurant_app;

import com.codeclan.example.restaurant_app.models.Booking;
import com.codeclan.example.restaurant_app.models.Customer;
import com.codeclan.example.restaurant_app.models.Seating;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class RestaurantAppApplicationTests {

	@Test
	void contextLoads() {
	}

	@Test
	void canAddSeatingToBooking() {
		Customer customer1 = new Customer("James Oliver", "james@example.com", "1234 567 8910");
		Seating seating1 = new Seating(1, 57);
		Booking booking1 = new Booking("2019-11-01", "19:00", 1, "allergic to pulses", customer1, null);
		booking1.setSeating(seating1);
		assertEquals(seating1, booking1.getSeating());
	}

	@Test
	void cannotAddSeatingSmallerThanPartySize() {
		Customer customer1 = new Customer("James Oliver", "james@example.com", "1234 567 8910");
		Seating seating1 = new Seating(1, 57);
		Booking booking2 = new Booking("2019-11-01", "19:00", 4, null, customer1, null);
		booking2.setSeating(seating1);
		assertEquals(0, seating1.getBookings().size());
	}

}
