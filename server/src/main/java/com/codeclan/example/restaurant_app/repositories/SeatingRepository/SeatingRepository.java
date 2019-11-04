package com.codeclan.example.restaurant_app.repositories.SeatingRepository;

import com.codeclan.example.restaurant_app.models.Seating;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface SeatingRepository extends JpaRepository<Seating, Long> {
}
