package com.GROCK.question.service;

import com.GROCK.exception.BusinessLogicExecption;
import com.GROCK.exception.ExceptionCode;
import com.GROCK.question.dto.QuestionPostDto;
import com.GROCK.question.entity.Question;
import com.GROCK.question.mapper.QuestionMapper;
import com.GROCK.question.repository.QuestionRespository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class QuestionService {

    private final QuestionRespository questionRespository;

    private final QuestionMapper mapper;
    @Value("${static.basePath}")
    private String basePath;

    @Value("${static.imagePath}")
    private String imagePath;

    public QuestionService(QuestionRespository questionRespository, QuestionMapper mapper) {
        this.questionRespository = questionRespository;
        this.mapper = mapper;
    }

    public Question createQuestion(QuestionPostDto questionPostDto) throws IOException {
        MultipartFile multipartFile = questionPostDto.getFile();
        String contentType = multipartFile.getContentType();

        if (ObjectUtils.isEmpty(contentType)) return null;
        String originalFileExtension = getFileExtension(contentType);

        String new_file_name = System.nanoTime() + originalFileExtension;

        multipartFile.transferTo(new File(basePath+imagePath+new_file_name));
        Question question = mapper.questionPostDtoToQuestion(questionPostDto);
        question.setImgName(new_file_name);
        return questionRespository.save(question);
    }

    public Question updateQuestion(Question question){
        // ...
        return questionRespository.save(question);
    }

    public Question findQuestion(List<Long> qIds){
        System.out.println(qIds.size());
        Optional<Question> question = questionRespository.findTop1ByNotInList(qIds);
        return question.orElseThrow(() ->
                new BusinessLogicExecption(ExceptionCode.QUESTION_NOT_FOUND));
    }
    private String getFileExtension(String contentType){
        if(contentType.contains("image/jpeg")) return ".jpg";
        else if(contentType.contains("image/png")) return ".png";
        else if(contentType.contains("image/gif")) return ".gif";
        else return null;
    }
}
