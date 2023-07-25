package com.GROCK.question.mapper;

import com.GROCK.question.dto.QuestionPostDto;
import com.GROCK.question.dto.QuestionResponseDto;
import com.GROCK.question.entity.Question;
import org.springframework.stereotype.Component;

@Component
public class QuestionMapper {
    public Question questionPostDtoToQuestion(QuestionPostDto questionPostDto){
        Question question = new Question();
        question.setAnswer(questionPostDto.getAnswer());
        return question;
    };

    public QuestionResponseDto questionToQuestionResponseDto(Question question){
        QuestionResponseDto dto = new QuestionResponseDto();
        dto.setId(question.getQuestionId());
        dto.setAnswer(question.getAnswer());
        dto.setImgName(question.getImgName());
        return dto;
    }
}
