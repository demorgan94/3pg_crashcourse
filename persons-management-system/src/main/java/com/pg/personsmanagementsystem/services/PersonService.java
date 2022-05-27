package com.pg.personsmanagementsystem.services;

import com.pg.personsmanagementsystem.models.Person;
import com.pg.personsmanagementsystem.repositories.IPersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonService {

    @Autowired
    private IPersonRepository personRepository;

    public List<Person> findAll() {
        return personRepository.findAll();
    }

    public Person findById(Long id) {
        return personRepository.findById(id).orElse(null);
    }

    public Person add(Person person) {
        return personRepository.save(person);
    }

    public Person update(Person person, Long id) {
        Person _person = findById(id);
        if (_person != null) {
            _person.setFirstName(person.getFirstName());
            _person.setLastName(person.getLastName());
            _person.setEmail(person.getEmail());

            return personRepository.save(_person);
        }

        return null;
    }

    public boolean deleteById(Long id) {
        personRepository.deleteById(id);
        return findById(id) == null;
    }
}
