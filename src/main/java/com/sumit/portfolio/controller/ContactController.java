package com.sumit.portfolio.controller;

import com.sumit.portfolio.model.ContactMessage;
import com.sumit.portfolio.service.ContactService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "*")
public class ContactController {

    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping
    public ContactMessage addMessage(@RequestBody ContactMessage message) {
        return contactService.addMessage(message);
    }

    @GetMapping
    public List<ContactMessage> getAllMessages() {
        return contactService.getAllMessages();
    }
}