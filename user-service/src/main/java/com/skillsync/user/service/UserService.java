package com.skillsync.user.service;

import com.skillsync.user.model.Skill;
import com.skillsync.user.model.UserProfile;
import com.skillsync.user.repository.SkillRepository;
import com.skillsync.user.repository.UserProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired private UserProfileRepository userProfileRepo;
    @Autowired private SkillRepository skillRepo;

    public UserProfile getUserById(Long id) {
        return userProfileRepo.findById(id).orElse(null);
    }

    public Skill addSkill(Long userId, Skill skill) {
        Optional<UserProfile> profileOpt = userProfileRepo.findById(userId);
        if (profileOpt.isPresent()) {
            UserProfile profile = profileOpt.get();
            skill.setUser(profile);
            return skillRepo.save(skill);
        }
        return null;
    }

    public UserProfile createProfile(UserProfile user) {
        return userProfileRepo.save(user);
    }
}
