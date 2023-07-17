package com.GROCK.question.mapper;

import com.GROCK.question.dto.QuestionPostDto;
import com.GROCK.question.entity.Question;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    Question questionPostDtoToQuestion(QuestionPostDto questionPostDto);
}
