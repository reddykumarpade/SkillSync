package com.skillsync.project.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private String requiredSkills; // Comma-separated string e.g. "Java,Spring Boot"
    private String location;
    private Long postedBy; // User ID who posted
}
