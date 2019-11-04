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
	void canAddBooking() {
		Customer customer1 = new Customer("James Oliver", "james@example.com", "1234 567 8910");
		Seating seating1 = new Seating(1, 57);
		Booking booking1 = new Booking("2019-11-01", "19:00", 1, "allergic to pulses", customer1, null);
		seating1.addBooking(booking1);
		assertEquals(booking1, seating1.getBookings().get(0));
	}

	@Test
	void cannotAddBookingOverCapacity() {
		Customer customer1 = new Customer("James Oliver", "james@example.com", "1234 567 8910");
		Seating seating1 = new Seating(1, 57);
		Booking booking2 = new Booking("2019-11-01", "19:00", 4, null, customer1, null);
		seating1.addBooking(booking2);
		assertEquals(0, seating1.getBookings().size());
	}

}
