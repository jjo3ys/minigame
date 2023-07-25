package com.GROCK.question.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class QuestionResponseDto {
    long id;
    String answer;
    String imgName;
}
