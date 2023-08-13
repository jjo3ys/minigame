package com.GROCK.question.controller;

import com.GROCK.question.dto.QuestionPostDto;
import com.GROCK.question.dto.QuestionResponseDto;
import com.GROCK.question.mapper.QuestionMapper;
import com.GROCK.question.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/question")
public class QuestionController {
    private final QuestionService questionService;
    @Autowired
    private final QuestionMapper mapper;

    public QuestionController(QuestionService questionService, QuestionMapper mapper) {
        this.questionService = questionService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postQuestion(QuestionPostDto questionPostDto) throws IOException {
        questionService.createQuestion(questionPostDto);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity getQeustion(@RequestParam(required = false) String qId, @RequestParam String type){
        List<Long> qIds;
        if (qId==null) qIds = List.of(0L);
        else qIds = Arrays.stream(qId.split(","))
                .map(Long::parseLong)
                .collect(Collectors.toList());
        QuestionResponseDto responseDto = mapper.questionToQuestionResponseDto(questionService.findQuestion(qIds, type));
        return new ResponseEntity<>(responseDto, HttpStatus.OK);
    }
}
