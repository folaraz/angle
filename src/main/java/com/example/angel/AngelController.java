package com.example.angel;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class AngelController {

    @GetMapping("/")
    public Map<String, String> getInfo() {
        Map<String, String> info = new HashMap<>();
        info.put("author", "jessica pearson");
        info.put("law", "harvey specter");

        return info;
    }


}
