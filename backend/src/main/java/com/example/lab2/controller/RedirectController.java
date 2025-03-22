package com.example.lab2.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/projects")
public class RedirectController {

    @RequestMapping(value = {"/", "/{path:[^\\.]*}", "/projects/**"})
    public String redirect() {
        return "forward:/index.html";
    }
}
