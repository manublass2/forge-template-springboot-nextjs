package com.forge.library;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/books")
@CrossOrigin(origins = "*")
public class BookController {

    private static final List<Book> SAMPLE_BOOKS = List.of(
        new Book("1", "Cien anos de soledad", "Gabriel Garcia Marquez", 1967),
        new Book("2", "Don Quijote", "Miguel de Cervantes", 1605),
        new Book("3", "La sombra del viento", "Carlos Ruiz Zafon", 2001)
    );

    @GetMapping
    public List<Book> all() {
        return SAMPLE_BOOKS;
    }
}
