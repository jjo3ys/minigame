package com.GROCK.question.controller;

import com.GROCK.question.dto.QuestionPostDto;
import com.GROCK.question.entity.Question;
import com.GROCK.question.mapper.QuestionMapper;
import com.GROCK.question.service.QuestionService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Controller
@RequestMapping("/question")
public class QuestionController {
    private final QuestionService questionService;
    private final QuestionMapper mapper;

    public QuestionController(QuestionService questionService, QuestionMapper mapper) {
        this.questionService = questionService;
        this.mapper = mapper;
    }

    @PostMapping("/")
    public String postQuestion(QuestionPostDto questionPostDto){
        questionService.createQuestion(mapper.)
        return null;
    }

    @GetMapping("/")
    public String getQeustion(Model model,
                               @RequestParam String type, @RequestParam String qId){
        List<Long> qIds = Arrays.stream(qId.split(","))
                .map(Long::parseLong)
                .collect(Collectors.toList());

        Question question = questionService.findQuestion(qIds, type);
        model.addAttribute("quesition", question);
        return "question";
    }
}
