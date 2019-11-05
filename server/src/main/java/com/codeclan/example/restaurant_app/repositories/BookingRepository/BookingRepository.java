package com.codeclan.example.restaurant_app.repositories.BookingRepository;

import com.codeclan.example.restaurant_app.models.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface BookingRepository extends JpaRepository<Booking, Long> {
    List<Booking> findBookingByDate(String date);
}
