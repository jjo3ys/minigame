package com.GROCK.question.controller;

import com.GROCK.question.dto.QuestionPostDto;
import com.GROCK.question.entity.Question;
import com.GROCK.question.service.QuestionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/question")
public class QuestionController {
    private final QuestionService questionService;

    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }

    @PostMapping
    public ResponseEntity postQuestion(QuestionPostDto questionPostDto) throws IOException {
        questionService.createQuestion(questionPostDto);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @GetMapping
    public String getQeustion(Model model,
                               @RequestParam String type, @RequestParam(required = false) String qId){
        List<Long> qIds;
        if (qId==null) qIds = List.of();
        else qIds = Arrays.stream(qId.split(","))
                .map(Long::parseLong)
                .collect(Collectors.toList());

        Question question = questionService.findQuestion(qIds, type);
        model.addAttribute("quesition", question);
        return "question";
    }
}
