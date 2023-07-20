package com.GROCK.question.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
public class QuestionPostDto {
    private String type;
    private String answer;
    private MultipartFile file;
}
