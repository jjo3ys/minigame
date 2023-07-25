package com.GROCK.home;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class homeController {
    @GetMapping("/main")
    public String home(){
        return null;
    }
}
