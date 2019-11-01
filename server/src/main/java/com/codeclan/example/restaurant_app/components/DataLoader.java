package com.codeclan.example.restaurant_app.components;

import com.codeclan.example.restaurant_app.models.Booking;
import com.codeclan.example.restaurant_app.models.Customer;
import com.codeclan.example.restaurant_app.models.Seating;
import com.codeclan.example.restaurant_app.repositories.BookingRepository.BookingRepository;
import com.codeclan.example.restaurant_app.repositories.CustomerRepository.CustomerRepository;
import com.codeclan.example.restaurant_app.repositories.SeatingRepository.SeatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    BookingRepository bookingRepository;

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    SeatingRepository seatingRepository;

    public DataLoader(){

    }

    public void run(ApplicationArguments args) {

        Customer customer1 = new Customer("James Oliver", 1);
        customerRepository.save(customer1);

        Customer customer2 = new Customer("Godfreya Richards", 4);
        customerRepository.save(customer2);

        Seating seating1 = new Seating(1, 57);
        seatingRepository.save(seating1);

        Seating seating2 = new Seating(4, 12);
        seatingRepository.save(seating2);

        Booking booking1 = new Booking("2019-11-01", "19:00", customer1, seating1);
        bookingRepository.save(booking1);

        Booking booking2 = new Booking("2019-11-03", "20:00", customer2, seating2);
        bookingRepository.save(booking2);

    }

}
