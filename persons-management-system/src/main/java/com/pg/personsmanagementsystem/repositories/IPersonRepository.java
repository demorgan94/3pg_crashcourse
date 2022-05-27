package com.pg.personsmanagementsystem.repositories;

import com.pg.personsmanagementsystem.models.Person;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IPersonRepository extends JpaRepository<Person, Long> {
}
