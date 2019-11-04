package com.codeclan.example.restaurant_app.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="seatings")
public class Seating {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "capacity")
    private int capacity;

    @Column(name = "table_number")
    private int tableNumber;

    @JsonIgnore
    @OneToMany(mappedBy = "seating", fetch = FetchType.LAZY)
    private List<Booking> bookings;

    public Seating(int capacity, int tableNumber) {
        this.capacity = capacity;
        this.tableNumber = tableNumber;
        this.bookings = new ArrayList<Booking>();
    }

    public Seating() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public int getTableNumber() {
        return tableNumber;
    }

    public void setTableNumber(int tableNumber) {
        this.tableNumber = tableNumber;
    }

    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }

    public void addBooking(Booking booking) {
        if (booking.getPartySize() <= this.getCapacity()) {
            this.bookings.add(booking);
        }
    }
}
