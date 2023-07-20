package com.GROCK.question.mapper;

import com.GROCK.question.dto.QuestionPostDto;
import com.GROCK.question.entity.Question;
import org.springframework.stereotype.Component;

@Component
public class QuestionMapper {
    public Question questionPostDtoToQuestion(QuestionPostDto questionPostDto){
        Question question = new Question();
        question.setAnswer(questionPostDto.getAnswer());
        question.setType(questionPostDto.getType());
        return question;
    };
}
