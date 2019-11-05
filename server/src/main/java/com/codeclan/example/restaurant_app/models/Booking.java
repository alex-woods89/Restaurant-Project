package com.codeclan.example.restaurant_app.models;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="date")
    private String date;

    @Column(name="time")
    private String time;

    @Column(name="party_size")
    private int partySize;

    @Column(name="notes")
    private String notes;

    @JsonIgnoreProperties("booking")
    @ManyToOne
    @JoinColumn(name="customer_id")
    private Customer customer;

    @JsonIgnoreProperties("booking")
    @ManyToOne
    @JoinColumn(name="seating_id")
    private Seating seating;

    public Booking(String date, String time, int partySize, String notes, Customer customer, Seating seating) {
        this.date = date;
        this.time = time;
        this.partySize = partySize;
        this.notes = notes;
        this.customer = customer;
        this.seating = seating;
    }

    public Booking() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public int getPartySize() {
        return partySize;
    }

    public void setPartySize(int partySize) {
        this.partySize = partySize;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Seating getSeating() {
        return seating;
    }

    public void setSeating(Seating seating) {
        this.seating = seating;
    }
}
