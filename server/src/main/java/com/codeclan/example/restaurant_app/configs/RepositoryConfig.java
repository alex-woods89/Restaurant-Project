package com.codeclan.example.restaurant_app.configs;

import com.codeclan.example.restaurant_app.models.Booking;
import com.codeclan.example.restaurant_app.models.Customer;
import com.codeclan.example.restaurant_app.models.Seating;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;

@Configuration
public class RepositoryConfig extends RepositoryRestConfigurerAdapter {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config){
        config.exposeIdsFor(Customer.class, Booking.class, Seating.class);
    }

}
