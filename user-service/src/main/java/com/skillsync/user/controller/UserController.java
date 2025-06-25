package com.skillsync.user.controller;

import com.skillsync.user.model.Skill;
import com.skillsync.user.model.UserProfile;
import com.skillsync.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired private UserService userService;

    @GetMapping("/{id}")
    public UserProfile getUser(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    @PostMapping("/{id}/skills")
    public Skill addSkill(@PathVariable Long id, @RequestBody Skill skill) {
        return userService.addSkill(id, skill);
    }

    @PostMapping("/create")
    public UserProfile createProfile(@RequestBody UserProfile user) {
        return userService.createProfile(user);
    }
}
