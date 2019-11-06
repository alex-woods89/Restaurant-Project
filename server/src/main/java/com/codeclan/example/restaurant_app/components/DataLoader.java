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

        Customer customer1 = new Customer("James Oliver", "james@example.com", "1234 567 8910");
        customerRepository.save(customer1);

        Customer customer2 = new Customer("Godfreya Richards", "godfreya@example.com", "1098 765 4321");
        customerRepository.save(customer2);

        Customer customer3 = new Customer("Alex Woods", "email@fakeemail.com", "0131 654 234");
        customerRepository.save(customer3);

        Customer customer4 = new Customer("Joe Cooper", "JoesEmail@gmail.com", "077654237");
        customerRepository.save(customer4);

        Customer customer5 = new Customer("Davide Campagna", "superemail@aol.com", "076543123");
        customerRepository.save(customer5);

        Customer customer6 = new Customer(" Cameron Pellett", "Camemail@ask.com", " 8973424354325");
        customerRepository.save(customer6);

        Seating seating1 = new Seating(2, 1);
        seatingRepository.save(seating1);

        Seating seating2 = new Seating(2, 2);
        seatingRepository.save(seating2);

        Seating seating3 = new Seating(4, 3);
        seatingRepository.save(seating3);

        Seating seating4 = new Seating(4, 4);
        seatingRepository.save(seating4);

        Seating seating5 = new Seating(6, 5);
        seatingRepository.save(seating5);

        Seating seating6 = new Seating(8, 6);
        seatingRepository.save(seating6);

        Booking booking1 = new Booking("2019-11-01", "19:00", 1, "allergic to pulses", customer1, seating1);
        bookingRepository.save(booking1);

        Booking booking2 = new Booking("2019-11-03", "20:00", 4, "fourth member of the party is arriving approx half an hour late", customer2, seating2);
        bookingRepository.save(booking2);

    }

}
