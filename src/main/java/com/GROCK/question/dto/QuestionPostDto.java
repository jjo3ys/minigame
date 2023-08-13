package com.GROCK.question.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.NotNull;

@Getter
@Setter
public class QuestionPostDto {
    @NotNull
    private String type;
    @NotNull
    private String answer;
    private MultipartFile file;
}
