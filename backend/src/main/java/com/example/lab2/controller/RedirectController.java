package com.example.lab2.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class RedirectController {

    @RequestMapping(value = {"/", "/{path:[^\\.]*}", "/projects/**"})
    public String redirect() {
        return "forward:/index.html";
    }
}
