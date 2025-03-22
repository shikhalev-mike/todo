package com.example.lab2;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfiguration {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**") // Разрешить CORS для всех эндпоинтов
                        .allowedOrigins("*") // Разрешить запросы с любого домена
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Разрешенные HTTP-методы
                        .allowedHeaders("*") // Разрешить все заголовки
                        .allowCredentials(false) // Запретить передачу учетных данных (например, cookies)
                        .maxAge(3600); // Время кэширования CORS-запросов (в секундах)
            }
        };
    }

}
