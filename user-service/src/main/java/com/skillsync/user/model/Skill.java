package com.skillsync.user.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Skill {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String level;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserProfile user;
}
