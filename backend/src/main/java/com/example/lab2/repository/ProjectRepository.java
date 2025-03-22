package com.example.lab2.repository;

import com.example.lab2.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProjectRepository extends JpaRepository<Project, Long> {
    @Query("SELECT e FROM Project  e WHERE LOWER(e.name) LIKE LOWER(CONCAT('%', :search, '%')) OR LOWER(e.description) LIKE LOWER(CONCAT('%', :search, '%'))")
    List<Project> findByNameContainsIgnoreCaseAndDescriptionContainsIgnoreCase(String search);
}
