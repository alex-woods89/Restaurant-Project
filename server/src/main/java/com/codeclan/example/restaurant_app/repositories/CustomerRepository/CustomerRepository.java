package com.codeclan.example.restaurant_app.repositories.CustomerRepository;

import com.codeclan.example.restaurant_app.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
