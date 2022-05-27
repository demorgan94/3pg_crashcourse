package com.pg.personsmanagementsystem.controllers;

import com.pg.personsmanagementsystem.models.Person;
import com.pg.personsmanagementsystem.services.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class PersonController {

    @Autowired
    private PersonService personService;

    @GetMapping("/persons")
    public ResponseEntity<List<Person>> findAll() {
        Optional<List<Person>> _persons = Optional.ofNullable(personService.findAll());
        return _persons.map(persons -> ResponseEntity.ok().body(persons)).orElse(ResponseEntity.noContent().build());
    }

    @GetMapping("/person/{id}")
    public ResponseEntity<Person> findById(@PathVariable Long id) {
        Optional<Person> _person = Optional.ofNullable(personService.findById(id));
        return _person.map(person -> ResponseEntity.ok().body(person)).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/person")
    public ResponseEntity<Person> add(@RequestBody Person person) {
        Optional<Person> _person = Optional.ofNullable(personService.add(person));
        return _person.map(createdPerson -> ResponseEntity.ok().body(createdPerson)).orElse(ResponseEntity.internalServerError().build());
    }

    @PutMapping("/person/{id}")
    public ResponseEntity<Person> update(@RequestBody Person person, @PathVariable Long id) {
        Optional<Person> _person = Optional.ofNullable(personService.update(person, id));
        return _person.map(updatedPerson -> ResponseEntity.ok().body(updatedPerson)).orElse(ResponseEntity.internalServerError().build());
    }

    @DeleteMapping("/person/{id}")
    public ResponseEntity<HttpStatus> deleteById(@PathVariable Long id) {
        boolean isDeleted = personService.deleteById(id);

        if (isDeleted) return ResponseEntity.ok().build();

        return ResponseEntity.internalServerError().build();
    }
}
