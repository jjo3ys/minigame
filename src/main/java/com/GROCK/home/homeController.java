package com.GROCK.home;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class homeController {
    @GetMapping("/api/hello")
    public String home(){
        return null;
    }
}
