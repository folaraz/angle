package com.example.angel;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class AngelApplicationTests {

    @Test
    void contextLoads() {
    }

    @Test
    void testing() {
        String word = "testing";
        assertEquals(word, "testing");
    }

}
