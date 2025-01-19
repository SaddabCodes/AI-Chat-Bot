package com.sadcode.aichatbot.controller;

import com.sadcode.aichatbot.service.QnAService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class AIController {
    
    private final QnAService qnAService;

    public AIController(QnAService qnAService) {
        this.qnAService = qnAService;
    }

    @PostMapping("/ask")
    public ResponseEntity<String> askQuestion(@RequestBody Map<String, String> payload) {
        String question = payload.get("question");
        String answer = qnAService.getAnswer(question);
        return new ResponseEntity<>(answer, HttpStatus.OK);
    }
}
